import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {sendEmail} from "../utils/email";
import {contactEmailOptions, EMAIL_REGEX} from "../config/functions";
import {handleCors} from "../utils/cors";

export const sendContactEmail = onRequest(
  contactEmailOptions,
  async (request, response) => {
    // CORS処理
    if (handleCors(request, response)) {
      return;
    }

    logger.info("sendContactEmail", {structuredData: true});
    const {name, company, email, phone, subject, message} = request.body;
    logger.info("sendContactEmail", {
      name,
      company,
      email,
      phone,
      subject,
      message,
    });

    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      const recipientEmails = process.env.RECIPIENT_EMAILS;

      if (!resendApiKey || !recipientEmails) {
        logger.error("Missing environment variables");
        response.status(500).json({
          success: false,
          error: "Server configuration error",
        });
        return;
      }

      // メールアドレスの形式を検証
      const isValidEmail = email && EMAIL_REGEX.test(email);

      if (!isValidEmail) {
        logger.error("Invalid email format", {email});
        response.status(400).json({
          success: false,
          error: "Invalid email format",
        });
        return;
      }

      // カンマ区切りで複数のメールアドレスを配列に変換
      const recipients = recipientEmails.split(",").map((e) => e.trim());

      const adminEmailContent = `
お問い合わせがありました。

【お名前】
${name}

【会社名】
${company}

【メールアドレス】
${email}

【電話番号】
${phone}

【件名】
${subject}

【お問い合わせ内容】
${message}
`;

      // 管理者へメール送信
      const adminResult = await sendEmail(
        resendApiKey,
        "Realable お問い合わせ <noreply@hakoma.tokyo>",
        recipients,
        `【お問い合わせ】${subject}`,
        adminEmailContent,
        email
      );
      logger.info("Admin email sent successfully", {emailId: adminResult.id});
      logger.info("email:", email);
      logger.info("recipients:", recipients);

      response.json({success: true, messageId: adminResult.id});
    } catch (error) {
      logger.error("Error sending email", {error});
      response.status(500).json({
        success: false,
        error: "Failed to send email",
      });
    }
  }
);
