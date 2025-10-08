/**
 * Firebase Functions共通設定
 */

// リージョン設定
export const FUNCTION_REGION = "asia-northeast1";

// CORS設定
export const ALLOWED_ORIGINS = [
  "https://realable-hp.web.app",
  "https://realable.tokyo",
];

// シークレット設定
export const COMMON_SECRETS = ["RESEND_API_KEY"];
export const CONTACT_EMAIL_SECRETS = [...COMMON_SECRETS, "RECIPIENT_EMAILS"];

// メールアドレスバリデーション用正規表現
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 共通の関数設定オプション
export const commonFunctionOptions = {
  region: FUNCTION_REGION,
  cors: ALLOWED_ORIGINS,
};

// お問い合わせメール用の設定オプション
export const contactEmailOptions = {
  ...commonFunctionOptions,
  secrets: CONTACT_EMAIL_SECRETS,
};

// 返信メール用の設定オプション
export const replyEmailOptions = {
  ...commonFunctionOptions,
  secrets: COMMON_SECRETS,
};
