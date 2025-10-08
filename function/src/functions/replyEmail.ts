import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {sendEmail} from "../utils/email";
import {replyEmailOptions, EMAIL_REGEX} from "../config/functions";
import {handleCors} from "../utils/cors";

export const sendReplyEmail = onRequest(
  replyEmailOptions,
  async (request, response) => {
    // CORS処理
    if (handleCors(request, response)) {
      return;
    }

    logger.info("sendReplyEmail", {structuredData: true});
    const {name, email} = request.body;
    logger.info("sendReplyEmail", {name, email});

    try {
      const resendApiKey = process.env.RESEND_API_KEY;

      if (!resendApiKey) {
        logger.error("Missing RESEND_API_KEY");
        response.status(500).json({
          success: false,
          error: "Server configuration error",
        });
        return;
      }

      if (!email || !name) {
        logger.error("Missing required parameters");
        response.status(400).json({
          success: false,
          error: "Missing required parameters: name, email",
        });
        return;
      }

      // メールアドレスの形式を検証
      if (!EMAIL_REGEX.test(email)) {
        logger.error("Invalid email format", {email});
        response.status(400).json({
          success: false,
          error: "Invalid email format",
        });
        return;
      }

      const clientEmailContent = `
${name} 様

この度は、Realableへお問い合わせいただき、誠にありがとうございます。

お問い合わせ内容を確認いたしました。
2営業日以内に担当者よりご返信させていただきます。

今しばらくお待ちくださいますよう、お願い申し上げます。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Realable（リアラブル）
不動産開発コンサルティング
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※このメールは自動送信されています。
※本メールに心当たりがない場合は、お手数ですが削除をお願いいたします。
`;

      const result = await sendEmail(
        resendApiKey,
        "Realable <noreply@hakoma.tokyo>",
        email,
        "【Realable】お問い合わせを受け付けました",
        clientEmailContent
      );

      logger.info("Reply email sent successfully", {emailId: result.id});
      logger.info("email:", email);
      logger.info("name:", name);
      logger.info("clientEmailContent:", clientEmailContent);
      response.json({success: true, messageId: result.id});
    } catch (error) {
      logger.error("Error sending reply email", {error});
      response.status(500).json({
        success: false,
        error: "Failed to send reply email",
      });
    }
  }
);
