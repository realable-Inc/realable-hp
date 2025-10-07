export interface ServiceDetail {
  id: string;
  title: string;
  description: {
    title: string;
    points: string[];
  };
  overview: string;
  overviewImage?: string;
  operationFlow: {
    title: string;
    steps: string[];
  };
  features: {
    title: string;
    points: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "ai-matching",
    title: "オーダー×物件 AIマッチング",
    description: {
      title:
        "AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。",
      points: [
        "顧客オーダーと物件データの自動照合",
        "営業担当者による項目にないメモ書き情報を活用",
        "手作業管理からの脱却で業務効率化",
      ],
    },
    overview:
      "AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。",
    overviewImage: "/images/services/matching/matching.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【データ取込】物件はCSV/REINS/OCR/御社DBから自動同期。住所・面積・賃料・写真・マイソクPDFを正規化し重複を排除",
        "【オーダー登録】営業メモの自由記述・希望条件・NG条件を入力。メール転送や音声メモからも自動抽出",
        "【AIスコアリング】構造化条件＋メモ文脈を統合しマッチ度を0–100で算出。立地/賃料/用途/坪数/キーワードの過不足を加点減点",
        "【検知と配信】新規 or スコア更新が閾値超過で担当者へ通知（朝刊まとめ＋リアルタイム）。理由説明と差分も併記",
        "【アクション生成】ワンクリックでご案内メール下書きを作成。物件概要・マイソクPDF・地図リンクが自動差し込み",
        "【追跡】送付済・反応・失注理由を記録し、次回のマッチング重み付けに反映",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "AIによる柔軟なマッチング",
          description:
            "従来では事前に設定された項目単位でしか絞り込みができなかったのに対し、AIによるマッチングではメモ書きなどの意味を理解して設定項目にない内容も加味したマッチ度を独自に計算します。",
          image: "/images/services/matching/matching-result.png",
        },
        {
          title: "メール通知",
          description:
            "マッチしたオーダー・物件の担当者に、毎朝メールで提案すべき物件・案件を通知します。これにより、抜け漏れを防止できます。",
          image: "/images/services/matching/email.png",
        },
        {
          title: "OCRを活用したスムーズなデータ入力",
          description:
            "システム導入時にハードルとなるデータ入力も、マイソクのPDFをアップロードするだけでAIが内容を読み取り、簡単に入力できます。",
          image: "/images/services/matching/ocr.png",
        },
        {
          title: "お客様へのご案内メール送信",
          description:
            "マッチングした物件から、簡単にお客様へのご案内メールを作成できます。物件データやマイソクのPDFは自動で転記されます。",
          image: "/images/services/matching/email-from-match.png",
        },
      ],
    },
  },
  {
    id: "price-prediction",
    title: "不動産価格予測モデル",
    description: {
      title:
        "AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。",
      points: ["どの要素が価格に影響を与えたかを可視化", "適切な価格を予測"],
    },
    overview:
      "AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。",
    overviewImage: "/images/services/prediction/prediction.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【学習データ整備】過去成約・掲載・反響データを取込。欠損補完・外れ値処理・地理特徴量（駅距離・用途地域）を付与",
        "【継続学習】最新相場を定期学習し精度をモニタリング。ドリフト検知で警告と再学習を自動実行",
        "【査定入力】立地・面積・築年・用途などを入力 or 物件ID指定で自動補完",
        "【予測出力】適正価格レンジと中央値、根拠（影響度上位要因）を可視化。近傍事例と乖離も提示",
        "【エクスポート】査定書PDF/CSVをワンクリック出力し社内承認フローへ連携",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "独自の予測モデルを構築",
          description:
            "REINS等に公開された実績データに加え、御社の過去データを使用し、御社が得意とする領域に特化した独自の予測モデルを構築可能",
        },
        {
          title: "各要素の影響度を可視化",
          description:
            "予測モデルが出した結果に対し、どの要素がどれくらい影響を与えたかを定量的に可視化。これにより、営業担当者による交渉や金額の微調整にも強いデータが入手可能。",
        },
        {
          title: "学習の自動化",
          description:
            "最新のデータを常に学習し、直近の市場動向を反映した予測結果が入手可能。",
        },
      ],
    },
  },
  {
    id: "ocr-system",
    title: "マイソクOCR",
    description: {
      title:
        "どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。",
      points: [
        "AIが任意のフォーマットに対応",
        "画面上ですぐにデータ修正",
        "システムやエクセルに即座に取り込み",
      ],
    },
    overview:
      "どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。",
    overviewImage: "/images/services/maisoku/maisoku-ocr.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【アップロード】マイソクPDFをドラッグ＆ドロップ（複数・一括可）",
        "【自動読取】版面レイアウトをAIが判定し項目を抽出。住所正規化・地図リンク生成も実行",
        "【レビュー】表形式で抽出結果を確認・修正。画像プレビューと差分強調で素早くチェック",
        "【マッピング】御社項目名に自動マップ。未対応項目はその場で追加可能",
        "【出力】CSV/Excel/APIで即出力。エラー行だけ再出力でき、取り込みログを保存",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "AIが任意のフォーマットに対応",
          description:
            "従来のOCRでは、事前にフォーマットを指定する必要があったため、新しいフォーマットへはすぐに対応できなかったのに対し、AIによるOCRではAIがフォーマットを自動で判定するため、フォーマットの変更や、他社のマイソクフォーマットにも柔軟に対応可能です。",
        },
        {
          title: "画面上ですぐにデータ修正",
          description:
            "AIによる読み取り結果はすぐに表形式で表示され、アップロードしたPDFを画面上で確認しながらすぐに修正することができます。",
        },
        {
          title: "CSVによる出力",
          description:
            "読み取ったデータはCSVとして出力され、各システムへの連携が可能です。出力フォーマットは、柔軟に対応可能です。",
        },
      ],
    },
  },
  {
    id: "sales-analysis",
    title: "営業トークの見える化",
    description: {
      title:
        "Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。",
      points: [
        "営業トークの録音データから自動で文字起こし",
        "営業の機会損失を最小化",
      ],
    },
    overview:
      "Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。",
    overviewImage: "/images/services/sales/sales-analysis.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【記録】商談をスマホ/PCで録音。参加者・案件IDを自動ひも付け",
        "【文字起こし】AIが話者分離と要約を実施。検討条件や懸念・決裁者情報を抽出",
        "【学習】成約/失注結果を紐づけ、勝ち筋トーク・NGトークを更新",
        "【分析】商談ごとに良かった点・改善点を提示。次アクションのテンプレも生成",
        "【連携】抽出したオーダー条件をマッチング基盤へ自動送出",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "営業トークの見える化",
          description:
            "AIが営業の録音データから自動で文字起こしし、これまでブラックボックスであった営業内容を可視化できます。",
        },
        {
          title: "成約結果と紐づけて営業トークの定量的な振り返りが可能",
          description:
            "成約率が高かった営業トークから、特徴的な内容や言葉遣いをAIが抽出。営業力の底上げにつながります。",
        },
      ],
    },
  },
  {
    id: "reins-csv",
    title: "REINS CSV化ツール",
    description: {
      title:
        "ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。",
      points: [
        "REINSデータ一括CSV化（最大50件）",
        "整理されたフォーマットで手作業時間を大幅削減",
      ],
    },
    overview:
      "ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。",
    overviewImage: "/images/services/csv/reins-csv.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【検索】REINSで条件検索し印刷表示を開く",
        "【取得】表示結果をそのままコピーしてツールに貼り付け",
        "【解析】AIが物件行を自動判定し整形。重複・欠落・異常値を警告",
        "【プレビュー】列マッピングと単位変換を確認して微調整",
        "【出力】自社フォーマットのCSVをダウンロード or API連携で自動投入",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "CSV化",
          description:
            "REINSの物件データはCSVダウンロードができないため、自社システムへの連携が困難。本システムにより、REINSデータをCSV化することによって、自社システムへの連携が可能です。",
        },
        {
          title: "画面上で簡単操作",
          description:
            "WEB画面上の操作のみで簡単にCSV化が可能。変換スピードも速く、すぐにCSVが手に入ります。",
        },
      ],
    },
  },
  {
    id: "ai-chatbot",
    title: "社内版AIチャットボット（RAG）",
    description: {
      title:
        "RAG技術で社内情報をAIに記憶。「XXへ〇〇の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。",
      points: ["膨大な社内文書の検索をスピード化", "社内AIチャットボット"],
    },
    overview:
      "RAG技術で社内情報をAIに記憶。「XXへ〇〇の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。",
    overviewImage: "/images/services/chat/chat-bot.png",
    operationFlow: {
      title: "運用フロー",
      steps: [
        "【質問】ユーザーが自然文で問い合わせ（例：先月のA社への提案内容は？）",
        "【検索】ベクトル検索で社内ドキュメント・議事録・CRM・未学習の外部FAQを横断探索",
        "【精査】重複・版管理を考慮して根拠候補を再ランク付け",
        "【回答生成】質問意図と根拠を突き合わせ、要約＋根拠リンク付きで回答を作成",
        "【出力】引用元・閲覧権限を明示して回答。1クリックで関連ドキュメントを開ける",
        "【学習】フィードバックや閲覧履歴を反映して次回の検索品質を改善",
      ],
    },
    features: {
      title: "特徴",
      points: [
        {
          title: "膨大な社内文書の検索をスピード化",
          description:
            "社内に大量に存在する文書データから、特定の内容を探し出す作業は煩雑かつ困難。AIが自動で社内文書を検索することにより、煩わしい作業から解放されます。",
        },
        {
          title: "生成AIが内容を理解し欲しい回答を即座に生成",
          description:
            "ただ社内文書を検索するだけではなく、AIが質問の意図と社内文書の内容を理解して、あなたの欲しい回答を即座に生成します。",
        },
      ],
    },
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.id === id);
}

export function getServiceSummaries() {
  return servicesData.map(({ id, title, description, overviewImage }) => ({
    id,
    title,
    description: description.title,
    points: description.points,
    overviewImage,
  }));
}
