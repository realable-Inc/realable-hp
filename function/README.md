# Firebase Functions - Contact Email

お問い合わせフォームからのメール送信を行うCloud Functionです。

## セットアップ

### 1. 依存関係のインストール

```bash
cd function
npm install
```

### 2. 環境変数（Secret）の設定

Firebase Functions v2ではSecretとして環境変数を管理します。

#### 初回設定

```bash
# Resend APIキーの設定
firebase functions:secrets:set RESEND_API_KEY
# プロンプトが表示されたらAPIキーを入力

# 送信先メールアドレスの設定（複数指定可能、カンマ区切り）
firebase functions:secrets:set RECIPIENT_EMAILS
# プロンプトが表示されたらメールアドレスを入力（例: admin@example.com,sales@example.com）
```

#### ローカル開発用

ローカルで開発する場合は、`.env`ファイルを作成します：

```bash
cd function
cp .env.example .env
# .envファイルを編集して実際のAPIキーとメールアドレスを設定
```

### 3. デプロイ

環境変数を設定してからデプロイします：

```bash
# ルートディレクトリから
npm run deploy:functions

# または直接
firebase deploy --only functions
```

初回デプロイ時、Secretへのアクセス権限を付与するか聞かれたら `y` を入力してください。

## 環境変数

| 変数名 | 説明 | 例 |
|--------|------|-----|
| `RESEND_API_KEY` | Resend APIのAPIキー | `re_xxxxxxxxxx` |
| `RECIPIENT_EMAILS` | メール送信先（カンマ区切りで複数指定可能） | `admin@example.com,sales@example.com` |

## Resend APIキーの取得方法

1. [Resend](https://resend.com/) にアクセスしてアカウントを作成
2. ダッシュボードから API Keys を選択
3. 新しいAPIキーを作成
4. 作成されたAPIキーをコピーして環境変数に設定

## ドメイン設定

Resendでメールを送信するには、ドメインの認証が必要です：

1. Resendダッシュボードで Domains を選択
2. `realable.tokyo` ドメインを追加
3. 表示されるDNSレコードをドメインのDNS設定に追加
4. 認証が完了するまで待つ

## 関数の仕様

### エンドポイント

- **URL**: `https://asia-northeast1-realable-hp.cloudfunctions.net/sendContactEmail`
- **メソッド**: POST
- **リージョン**: asia-northeast1 (東京)

### 機能

1. **管理者へのメール送信**: お問い合わせ内容を指定された管理者メールアドレスに送信
2. **自動返信メール**: お問い合わせ者へ確認メールを自動送信（「お問い合わせありがとうございます。2営業日以内にご返信いたします」）

### CORS設定

以下のオリジンからのアクセスを許可：
- `http://localhost:3000` (開発環境)
- `https://realable-hp.web.app` (本番環境)

### リクエストボディ

```json
{
  "name": "山田太郎",
  "company": "株式会社サンプル",
  "email": "yamada@example.com",
  "phone": "03-1234-5678",
  "subject": "お問い合わせ",
  "message": "お問い合わせ内容"
}
```

### レスポンス

成功時：
```json
{
  "success": true,
  "messageId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

エラー時：
```json
{
  "success": false,
  "error": "エラーメッセージ"
}
```

## メール送信の流れ

1. お問い合わせフォームから送信
2. Cloud Functionが受信
3. **管理者メール送信**: `RECIPIENT_EMAILS`に設定された管理者へお問い合わせ内容を送信
4. **自動返信メール送信**: お問い合わせ者のメールアドレスへ確認メールを送信
5. レスポンス返却

※自動返信メールの送信に失敗しても、管理者メールが送信されていればエラーにはなりません

## ローカルでのテスト

```bash
# エミュレータの起動
npm run serve

# 別のターミナルでテスト
curl -X POST http://localhost:5001/realable-hp/asia-northeast1/sendContactEmail \
  -H "Content-Type: application/json" \
  -d '{
    "name": "テスト太郎",
    "company": "テスト株式会社",
    "email": "test@example.com",
    "phone": "03-1234-5678",
    "subject": "テスト",
    "message": "テストメッセージ"
  }'
```

## トラブルシューティング

### 環境変数（Secret）が読み込まれない

```bash
# 現在のSecretを確認
firebase functions:secrets:access RESEND_API_KEY
firebase functions:secrets:access RECIPIENT_EMAILS

# Secretを削除して再設定
firebase functions:secrets:destroy RESEND_API_KEY
firebase functions:secrets:destroy RECIPIENT_EMAILS
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set RECIPIENT_EMAILS

# 再デプロイ
npm run deploy:functions
```

### メールが送信されない

1. Resendのダッシュボードでログを確認
2. Firebase Functionsのログを確認: `firebase functions:log`
3. APIキーとドメイン認証を確認

### 自動返信メールのみ失敗する

自動返信メールの送信に失敗しても管理者メールは送信されます。以下を確認：
1. お問い合わせ者のメールアドレスが正しいか
2. Resendのログでエラー内容を確認
3. 送信元ドメイン（`noreply@realable.tokyo`）が認証済みか
