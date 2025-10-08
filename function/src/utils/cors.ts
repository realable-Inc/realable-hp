import {Request} from "firebase-functions/v2/https";

const ALLOWED_ORIGINS = [
  "https://realable-hp.web.app",
  "https://realable.tokyo",
];

/**
 * CORSヘッダーを設定し、OPTIONSリクエストを処理する
 * @param {Request} request HTTPリクエスト
 * @param {object} response HTTPレスポンス
 * @return {boolean} OPTIONSリクエストの場合はtrue、それ以外はfalse
 */
// eslint-disable-next-line require-jsdoc, @typescript-eslint/no-explicit-any
export function handleCors(request: Request, response: any): boolean {
  const origin = request.headers.origin || "";

  // オリジンが許可リストに含まれているかチェック
  if (ALLOWED_ORIGINS.includes(origin)) {
    response.set("Access-Control-Allow-Origin", origin);
  }

  response.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONSリクエスト（preflight）の処理
  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return true;
  }

  return false;
}
