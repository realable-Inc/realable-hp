#!/bin/bash

# デプロイスクリプト
# 環境変数を読み込んでビルド・デプロイを実行

set -e  # エラー時に停止

echo "Realable HP デプロイ開始..."

# .envファイルの存在確認と作成
if [ ! -f .env ]; then
    echo ".envファイルが見つかりません。環境変数を設定します。"
    touch .env
fi

# 環境変数を読み込み
if [ -f .env ]; then
    echo "環境変数を読み込み中..."
    export $(grep -v '^#' .env | xargs 2>/dev/null || true)
fi

# NEXT_PUBLIC_RECAPTCHA_SITE_KEY の確認・入力
if [ -z "$NEXT_PUBLIC_RECAPTCHA_SITE_KEY" ]; then
    echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY が設定されていません。"
    read -p "reCAPTCHA Site Key を入力してください: " RECAPTCHA_KEY
    if [ -z "$RECAPTCHA_KEY" ]; then
        echo "ERROR: reCAPTCHA Site Key は必須です"
        exit 1
    fi

    # .envファイルに追加または更新
    if grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" .env 2>/dev/null; then
        sed -i.bak "s/^NEXT_PUBLIC_RECAPTCHA_SITE_KEY=.*/NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$RECAPTCHA_KEY/" .env
    else
        echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$RECAPTCHA_KEY" >> .env
    fi

    export NEXT_PUBLIC_RECAPTCHA_SITE_KEY="$RECAPTCHA_KEY"
    echo "reCAPTCHA Site Key を .env に保存しました"
fi

# RESEND_API_KEY の確認・入力
if [ -z "$RESEND_API_KEY" ]; then
    echo "RESEND_API_KEY が設定されていません。"
    read -p "Resend API Key を入力してください (スキップする場合は Enter): " RESEND_KEY

    if [ -n "$RESEND_KEY" ]; then
        # .envファイルに追加または更新
        if grep -q "RESEND_API_KEY" .env 2>/dev/null; then
            sed -i.bak "s/^RESEND_API_KEY=.*/RESEND_API_KEY=$RESEND_KEY/" .env
        else
            echo "RESEND_API_KEY=$RESEND_KEY" >> .env
        fi

        export RESEND_API_KEY="$RESEND_KEY"
        echo "Resend API Key を .env に保存しました"
    else
        echo "Resend API Key をスキップしました"
    fi
fi

# ビルド実行
echo "プロダクションビルド実行中..."
npm run build

# Firebase プロジェクトの確認
echo "Firebaseプロジェクトを確認中..."
firebase use --status

# デプロイ実行
echo "Firebase Hostingにデプロイ中..."
firebase deploy --only hosting

echo "デプロイ完了!"
echo "サイトURL: https://realable-hp.web.app"