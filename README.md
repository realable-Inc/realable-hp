# リアラブル株式会社 ホームページ

### 目的

不動産業者が「ここに受託開発を依頼したい」と思える訴求力のある HP を構築する。

### 要件

**情報設計**  

トップページから「自社サービス」と「プロジェクト」に明確に遷移できる。  

グローバルナビ：サービス一覧／プロジェクト一覧／会社概要／お問い合わせ（CTA）。

**プロジェクトセクション UI**  

カード内スワイプで「課題 ↔ ソリューション」概要を切替表示。  

クリック（またはタップ）で詳細ページ遷移 *or* ポップオーバー表示。

**コンテンツ**  

添付 PPTを基に各ページを作成。  

**デザイン・ブランド**  

モバイルファースト + レスポンシブ。  

**技術スタック**  

お任せします

realable.tokyoのドメインをsquarespaceで所有しているのでそれを使ってください。

**お問い合わせフォーム**  

reCAPTCHA v3、送信後サンクスページ＋管理者メール通知。

## 技術仕様

### 採用技術
- **フレームワーク**: Next.js 15.4.5
- **スタイリング**: Tailwind CSS 4
- **言語**: TypeScript
- **ホスティング**: Firebase Hosting
- **ドメイン**: realable.tokyo

### 実装済み機能
- レスポンシブデザイン（モバイルファースト）
- サービス詳細ページ（動的ルーティング）
- プロジェクト事例紹介（カード形式で実装）
- お問い合わせフォーム（reCAPTCHA v3対応）
- メール送信機能（Resend使用）
- 会社概要ページ

### UI/UX 変更点
- **プロジェクトセクション**: 当初の「カード内スワイプ」から、より直感的な「3つのサービスカード形式」に変更。各カードをクリックすると詳細ページに遷移する設計に変更。

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router
│   ├── services/[slug]/   # サービス詳細ページ
│   ├── company/           # 会社概要ページ
│   ├── contact/           # お問い合わせページ
│   └── projects/          # プロジェクト一覧ページ
├── components/            # React コンポーネント
│   ├── ui/               # UI基盤コンポーネント
│   └── ...               # ページ固有コンポーネント
└── lib/                  # ユーティリティ関数

docs/
└── development/          # 開発用資料
    ├── README.md         # 資料管理ガイド
    ├── service_list_final.md # サービス詳細仕様
    └── *.pptx           # 最新のプレゼン資料（画像素材含む）
```

## サービス一覧

実装済みのサービス詳細ページ：

1. **オーダー×物件 AIマッチング** (`/services/ai-matching/`)
   - AIによる柔軟なマッチング機能
   - メール通知システム
   - OCR連携によるデータ入力効率化

2. **不動産価格予測モデル** (`/services/price-prediction/`)
   - 独自予測モデル構築
   - 要素別影響度可視化
   - 自動学習機能

3. **マイソクOCR** (`/services/ocr-system/`)
   - 任意フォーマット対応
   - リアルタイム修正機能
   - 柔軟なCSV出力

4. **営業トークの見える化** (`/services/sales-analysis/`)
   - 自動音声認識・テキスト化
   - 成約結果との分析連携

5. **REINS CSV化ツール** (`/services/reins-csv/`)
   - REINSデータのCSV変換
   - 簡単操作インターフェース

6. **社内版AIチャットボット（RAG）** (`/services/ai-chatbot/`)
   - 社内文書高速検索
   - AI回答生成機能

## 画像・素材について

### 画像取得方針
1. **優先順位**:
   - `docs/development/` 内の最新pptxファイルから画像を抽出して使用
   - pptxに該当画像がない場合は、可能な範囲でAI生成等で対応
   - どうしても適切な画像が用意できない場合は、肥川が後日追加

### 現状
- 各サービスページの特徴セクションに画像プレースホルダーを設置済み
- 実際の画像配置は今後の作業で対応予定

## 開発・運用

### 開発サーバー起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

## デプロイ方法

### 自動デプロイ（GitHub Actions）

GitHub Actions により、以下のトリガーで自動デプロイされます。

```
PR作成 ──→ プレビューデプロイ ──→ レビュー・確認
                │
                ▼
            PRにプレビューURL
            がコメントされる

マージ ──→ 本番デプロイ ──→ https://realable.tokyo
```

| トリガー | デプロイ先 | URL |
|:-------:|:--------:|:---:|
| PR 作成・更新 | プレビュー環境 | `https://realable-hp--pr{N}-xxxxx.web.app` |
| main へマージ | 本番環境 | `https://realable.tokyo` |

### 前提条件
- Firebase CLIのインストール: `npm install -g firebase-tools`
- Firebaseプロジェクト: `realable-hp`
- Firebase認証: `firebase login`

### Firebase Secretsの設定

Firebase Functionsで使用するシークレットを設定：

```bash
# Resend APIキーを設定
firebase functions:secrets:set RESEND_API_KEY --project realable-hp

# 受信者メールアドレスを設定（カンマ区切りで複数指定可能）
firebase functions:secrets:set RECIPIENT_EMAILS --project realable-hp
```

### 手動デプロイ

#### 1. Hosting + Functionsを同時デプロイ
```bash
npm run deploy:all
```

#### 2. Hostingのみデプロイ
```bash
npm run deploy:hosting
```

#### 3. Functionsのみデプロイ
```bash
npm run deploy:functions
```

### デプロイ構成

**Firebase Hosting:**
- ビルドディレクトリ: `out/`
- 公開URL: `https://realable.tokyo`

**Firebase Functions:**
- リージョン: `asia-northeast1`
- エンドポイント:
  - `sendContactEmail`: お問い合わせメール送信
  - `sendReplyEmail`: 自動返信メール送信

### 利用可能なコマンド
- `npm run dev` - 開発サーバー起動（Turbopack使用）
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバー起動
- `npm run lint` - Next.js Linter実行
- `npm run deploy:hosting` - Firebase Hostingへデプロイ
- `npm run deploy:functions` - Firebase Functionsへデプロイ
- `npm run deploy:all` - Hosting + Functionsを一括デプロイ