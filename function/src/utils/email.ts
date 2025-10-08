import * as logger from "firebase-functions/logger";

/**
 * Resend API経由でメールを送信する共通関数
 * @param {string} apiKey - Resend APIキー
 * @param {string} from - 送信元メールアドレス
 * @param {string | string[]} to - 送信先メールアドレス
 * @param {string} subject - メール件名
 * @param {string} text - メール本文
 * @param {string} replyTo - 返信先メールアドレス（オプション）
 * @return {Promise<{id: string}>} メール送信結果
 */
export async function sendEmail(
  apiKey: string,
  from: string,
  to: string | string[],
  subject: string,
  text: string,
  replyTo?: string
): Promise<{id: string}> {
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      ...(replyTo && {reply_to: replyTo}),
    }),
  });

  if (!resendResponse.ok) {
    const errorData = await resendResponse.text();
    logger.error("Resend API error", {
      status: resendResponse.status,
      error: errorData,
    });
    throw new Error(`Resend API error: ${resendResponse.status}`);
  }

  return await resendResponse.json();
}
