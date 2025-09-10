import { notFound } from 'next/navigation';

// Service data with detailed information
const serviceDetails = {
  'ai-matching': {
    title: 'サービス事例①：オーダー×物件 AIマッチング',
    description: '営業担当者が手作業で管理している大量の顧客・オーダーリストと物件データをAIが照合し、提案すべき物件を通知することで営業の機会損失を最小化します。',
    systemFlow: {
      title: 'システム構成図',
      steps: [
        '社内データ（顧客・オーダーデータ、物件データ）',
        'マッチングAI',
        '営業担当者への通知「物件Aをxxさんに提案してください」「物件BとCを○○さんに提案してください」'
      ]
    },
    features: [
      'オーダーデータも一元管理',
      '各種システムと連携',
      '担当者の手打ちメモもAIが理解して最適にマッチング'
    ]
  },
  'price-prediction': {
    title: 'サービス事例②：不動産価格予測モデル',
    description: '所在地・面積・構造など、不動産の主要な情報と賃料の関係を過去事例から学習し、適正な価格を算出します。さらに、どの要素が価格にどう影響したかを数値化することも可能です。',
    systemFlow: {
      title: 'システム構成',
      steps: [
        '価格データベース',
        'AIがデータを自動学習',
        '予測結果'
      ]
    },
    features: [
      '※中古車価格モデルでのテスト事例',
      '（どの要素がどれくらい価格に影響しているかを可視化）',
      '地図表示、価格分布グラフ、要素別影響度チャート'
    ]
  },
  'ocr-system': {
    title: 'サービス事例③：マイソクOCR',
    description: 'PDFでしか存在しない物件データを、一括でデータ化します。REINSからダウンロードした大量のPDFも、すぐにシステムやエクセルに取り込むことができます。',
    systemFlow: {
      title: '処理フロー',
      steps: [
        'マイソクPDFをアップロード',
        'AIが物件情報を自動で読取 ※どんなレイアウトでも対応可能',
        '内容を確認し、即座にデータ化'
      ]
    },
    features: [
      'ドラッグ&ドロップでのPDFアップロード',
      'レイアウト自動認識技術',
      'データ変換結果のプレビュー機能',
      '実際のサービス画面: PDFアップロード画面とデータ変換結果画面'
    ]
  },
  'sales-analysis': {
    title: 'サービス事例④：営業トークの見える化',
    description: '営業トークを自動でテキストデータ化し、AIが分析することで、最適な営業トークを見える化できます。顧客のオーダーを自動で読み取ることで、要望漏れを防ぐこともできます。',
    systemFlow: {
      title: 'システム構成図',
      steps: [
        '営業担当者 ↔ クライアント',
        'Speech2text AI',
        'オーダー情報抽出 → 顧客・オーダーデータ',
        '営業状況見える化 → 管理者・経営層'
      ]
    },
    features: [
      '音声認識による自動テキスト化',
      'オーダー情報の自動抽出',
      '営業ダッシュボードでの状況可視化',
      '会話例: 営業担当者: 「ご希望のエリアは？」クライアント: 「飲食店を開業したくて...」'
    ]
  },
  'reins-csv': {
    title: 'サービス事例⑤：REINS CSV化ツール',
    description: 'REINSの物件一覧画面から、一括して最大50件の物件データをCSV出力できます。',
    systemFlow: {
      title: 'サービス画面',
      steps: [
        '左側: 「変換楽々くん（賃貸）」変換ツール画面',
        '右側: CSV出力結果（物件データ一覧表）',
        '「Convert and Download」ボタン'
      ]
    },
    features: [
      '一括で最大50件の物件データを処理',
      'ワンクリックでCSV出力',
      '整理されたフォーマットで出力',
      '手作業時間を大幅削減'
    ]
  },
  'ai-chatbot': {
    title: 'サービス事例⑥：社内版AIチャットボット（RAG）',
    description: 'RAGと呼ばれる生成AI（LLM）の強化技術を使用して、社内の様々なドキュメントや情報をAIに記憶させ、その情報をもとに質問への回答を生成するオリジナルチャットボットが作成できます。',
    systemFlow: {
      title: 'システム構成図',
      steps: [
        'ユーザー → ①質問を入力',
        '専用チャットボット → ②情報を検索',
        '社内ドキュメント（LLMが学習していない外部情報） → ③検索結果を取得',
        '④質問内容+取得情報を入力 → LLM',
        '⑤情報をもとに回答を生成',
        '⑥回答を出力'
      ]
    },
    features: [
      '自然言語での質問に対応',
      '社内ドキュメントからの情報検索',
      'AIによる回答生成',
      '会話例: 質問: 「xxへ○○の提案を行ったのはいつ？」回答: 「20xx年x月と20xx年x月に2度行っています。」'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug: slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* System Flow Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {service.systemFlow.title}
              </h2>
            </div>

            <div className="space-y-6">
              {service.systemFlow.steps.map((step, index) => (
                <div key={index}>
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="ml-4 text-slate-800 font-medium leading-relaxed">{step}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                特徴
              </h2>
            </div>

            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            このサービスについてお問い合わせ
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            詳細な資料やデモのご希望、導入に関するご相談はお気軽にお問い合わせください
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}