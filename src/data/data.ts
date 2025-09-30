import { ServiceDetail as ProjectDetail } from './services';

export interface HomeService {
  id: string;
  title: string;
  description: string;
  overviewImage?: string;
  features?: string[];
  link?: string;
}

// サービスページ用
export const homeServices: HomeService[] = [
  {
    id: 'hakoma',
    title: '居抜きマッチングサービス「Hakoma」',
    description: '物件から退去する人が、フリマ感覚で自分の物件をアップロードし、居抜きで入居したい人や会社を自分で見つけることができるマッチングサービス。契約は不動産のプロがサポートします。',
    overviewImage: '/images/services/hakoma/hakoma-2.png',
    features: [
      '[退去者]原状回復費用削減＋残地物を売却して引っ越し費用を賄う',
      '[入居者]初期コスト抑制でスピード開業',
      '[オーナー・管理会社]空室リスク軽減・集客コストの削減'
    ]
  },
  {
    id: 'ai-matching',
    title: 'Hakoma -PSA-（営業支援AI）',
    description: '不動産仲介業者向けのオーダー×物件自動マッチングシステム。営業の機会損失を最小化する営業支援サービス。',
    overviewImage: '/images/services/matching/matching.png',
    features: [
      '顧客オーダーと物件データの自動照合',
      '最適な提案物件をリアルタイム通知',
      '手作業管理からの脱却で業務効率化'
    ]
  },
  {
    id: 'ai-tools',
    title: '不動産業務効率化AIツール',
    description: '日常業務の「わからない」「めんどくさい」「抜け漏れ」を解消するAIソリューション群。',
    overviewImage: '/images/services/maisoku/maisoku-ocr.png',
    features: [
      'REINSデータ一括CSV化（最大50件）',
      'マイソクOCR（PDF自動データ化）',
      '社内AIチャットボット（RAG活用）'
    ],
    link: '/projects'
  }
];

// プロジェクトページ用
export const projectData: ProjectDetail[] = [
  {
    id: 'ai-matching',
    title: 'オーダー×物件 AIマッチング',
    description: 'AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。',
    overview: 'AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。',
    overviewImage: '/images/services/matching/matching.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        '物件データを登録（※御社システムからの自動連携も可能）',
        '顧客からのオーダーを入力',
        'AIが全データに対し自動でマッチ度を判定',
        '新たにマッチングが発生した物件について、担当者にメール通知',
        'ご案内メール作成'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: 'AIによる柔軟なマッチング',
          description: '従来では事前に設定された項目単位でしか絞り込みができなかったのに対し、AIによるマッチングではメモ書きなどの意味を理解して設定項目にない内容も加味したマッチ度を独自に計算します。',
          image: '/images/services/matching/matching-result.png'
        },
        {
          title: 'メール通知',
          description: 'マッチしたオーダー・物件の担当者に、毎朝メールで提案すべき物件・案件を通知します。これにより、抜け漏れを防止できます。',
          image: '/images/services/matching/email.png'
        },
        {
          title: 'OCRを活用したスムーズなデータ入力',
          description: 'システム導入時にハードルとなるデータ入力も、マイソクのPDFをアップロードするだけでAIが内容を読み取り、簡単に入力できます。',
          image: '/images/services/matching/ocr.png'
        },
        {
          title: 'お客様へのご案内メール送信',
          description: 'マッチングした物件から、簡単にお客様へのご案内メールを作成できます。物件データやマイソクのPDFは自動で転記されます。',
          image: '/images/services/matching/email-from-match.png'
        }
      ]
    }
  },
  {
    id: 'price-prediction',
    title: '不動産価格予測モデル',
    description: 'AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。',
    overview: 'AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。',
    overviewImage: '/images/services/prediction/prediction.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        '過去の成約データを登録',
        'AIが学習',
        '条件を入力し、適切な価格を予測'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: '独自の予測モデルを構築',
          description: 'REINS等に公開された実績データに加え、御社の過去データを使用し、御社が得意とする領域に特化した独自の予測モデルを構築可能'
        },
        {
          title: '各要素の影響度を可視化',
          description: '予測モデルが出した結果に対し、どの要素がどれくらい影響を与えたかを定量的に可視化。これにより、営業担当者による交渉や金額の微調整にも強いデータが入手可能。'
        },
        {
          title: '学習の自動化',
          description: '最新のデータを常に学習し、直近の市場動向を反映した予測結果が入手可能。'
        }
      ]
    }
  },
  {
    id: 'ocr-system',
    title: 'マイソクOCR',
    description: 'どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。',
    overview: 'どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。',
    overviewImage: '/images/services/maisoku/maisoku-ocr.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        'マイソクPDFをアップロード',
        'AIが内容を読み取り表形式で表示',
        'ユーザーが内容を確認して、修正',
        'csv等のデータとして出力'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: 'AIが任意のフォーマットに対応',
          description: '従来のOCRでは、事前にフォーマットを指定する必要があったため、新しいフォーマットへはすぐに対応できなかったのに対し、AIによるOCRではAIがフォーマットを自動で判定するため、フォーマットの変更や、他社のマイソクフォーマットにも柔軟に対応可能です。'
        },
        {
          title: '画面上ですぐにデータ修正',
          description: 'AIによる読み取り結果はすぐに表形式で表示され、アップロードしたPDFを画面上で確認しながらすぐに修正することができます。'
        },
        {
          title: 'CSVによる出力',
          description: '読み取ったデータはCSVとして出力され、各システムへの連携が可能です。出力フォーマットは、柔軟に対応可能です。'
        }
      ]
    }
  },
  {
    id: 'sales-analysis',
    title: '営業トークの見える化',
    description: 'Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。',
    overview: 'Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。',
    overviewImage: '/images/services/sales/sales-analysis.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        '営業中の会話を録音',
        'AIが内容を聞き取り文字起こし',
        '内容と営業の成果を学習',
        '分析'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: '営業トークの見える化',
          description: 'AIが営業の録音データから自動で文字起こしし、これまでブラックボックスであった営業内容を可視化できます。'
        },
        {
          title: '成約結果と紐づけて営業トークの定量的な振り返りが可能',
          description: '成約率が高かった営業トークから、特徴的な内容や言葉遣いをAIが抽出。営業力の底上げにつながります。'
        }
      ]
    }
  },
  {
    id: 'reins-csv',
    title: 'REINS CSV化ツール',
    description: 'ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。',
    overview: 'ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。',
    overviewImage: '/images/services/csv/reins-csv.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        'REINSで条件検索',
        '検索結果を印刷表示',
        '表示結果をコピー',
        'CSVに変換してダウンロード'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: 'CSV化',
          description: 'REINSの物件データはCSVダウンロードができないため、自社システムへの連携が困難。本システムにより、REINSデータをCSV化することによって、自社システムへの連携が可能です。'
        },
        {
          title: '画面上で簡単操作',
          description: 'WEB画面上の操作のみで簡単にCSV化が可能。変換スピードも速く、すぐにCSVが手に入ります。'
        }
      ]
    }
  },
  {
    id: 'ai-chatbot',
    title: '社内版AIチャットボット（RAG）',
    description: 'RAG技術で社内情報をAIに記憶。「XXへ〇〇の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。',
    overview: 'RAG技術で社内情報をAIに記憶。「XXへ〇〇の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。',
    overviewImage: '/images/services/chat/chat-bot.png',
    operationFlow: {
      title: '運用フロー',
      steps: [
        'ユーザーが質問を入力',
        '専用チャットボットが社内ドキュメントやLLM未学習の外部情報を検索',
        '検索結果を取得',
        '質問内容と取得情報をLLMに入力',
        'LLMが情報をもとに回答を生成',
        'チャットボットが回答を出力'
      ]
    },
    features: {
      title: '特徴',
      points: [
        {
          title: '膨大な社内文書の検索をスピード化',
          description: '社内に大量に存在する文書データから、特定の内容を探し出す作業は煩雑かつ困難。AIが自動で社内文書を検索することにより、煩わしい作業から解放されます。'
        },
        {
          title: '生成AIが内容を理解し欲しい回答を即座に生成',
          description: 'ただ社内文書を検索するだけではなく、AIが質問の意図と社内文書の内容を理解して、あなたの欲しい回答を即座に生成します。'
        }
      ]
    }
  }
];