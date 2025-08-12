import { notFound } from 'next/navigation';

// Service data with detailed information
const serviceDetails = {
  'ai-matching': {
    title: 'サービス事例①：オーダー×物件 AIマッチング',
    description: '営業担当者が手作業で管理している大量の顧客・オーダーリストと物件データをAIが照合し、提案すべき物件を通知することで営業の機会損失を最小化します。',
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
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
    gradient: 'from-blue-500 to-blue-600',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
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
    gradient: 'from-purple-500 to-purple-600',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
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
    gradient: 'from-orange-500 to-orange-600',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
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
    gradient: 'from-teal-500 to-teal-600',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
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
    gradient: 'from-indigo-500 to-indigo-600',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
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
  params: {
    slug: string;
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${service.gradient} text-white py-20 lg:py-28`}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
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

            <div className="space-y-8">
              {service.systemFlow.steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <p className="text-slate-800 font-medium">{step}</p>
                    </div>
                  </div>
                  {index < service.systemFlow.steps.length - 1 && (
                    <div className="w-full flex justify-center my-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m0 0l7-7" />
                      </svg>
                    </div>
                  )}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-slate-200">
                  <div className="flex items-start">
                    <div className={`w-8 h-8 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-4 text-slate-700 leading-relaxed">{feature}</p>
                  </div>
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
            className={`inline-block bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]`}
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}