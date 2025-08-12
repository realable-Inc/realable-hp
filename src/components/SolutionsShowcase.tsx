'use client';

const solutions = [
  {
    id: 'ai-matching',
    title: 'オーダー×物件 AIマッチング',
    challenge: '営業担当者が手作業で大量の顧客・オーダーリストと物件データを照合し、提案機会を逃していた。',
    solution: 'AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。',
    category: 'AIマッチング',
    image: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    features: ['ダッシュボード画面', '地図表示', '物件リスト', 'マッチング率表示'],
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'price-prediction',
    title: '不動産価格予測モデル',
    challenge: '所在地・面積・構造など複数要素が価格に与える影響を定量化できず、適正価格の算出が困難だった。',
    solution: 'AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。',
    category: 'AI予測',
    image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    features: ['ヒートマップ表示', '価格分布グラフ', '要素別影響度チャート'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    id: 'ocr-system',
    title: 'マイソクOCR',
    challenge: 'PDFでしか存在しない物件データの手入力作業に膨大な時間がかかっていた。',
    solution: 'どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。',
    category: 'OCR・自動化',
    image: 'bg-gradient-to-br from-purple-500 to-purple-700',
    features: ['ドラッグ&ドロップ', 'レイアウト自動認識', 'テーブル表示'],
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 'sales-analysis',
    title: '営業トークの見える化',
    challenge: '営業トークの内容やオーダー情報が属人化し、最適な提案方法や要望漏れの防止が困難だった。',
    solution: 'Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。',
    category: '営業支援AI',
    image: 'bg-gradient-to-br from-orange-500 to-orange-700',
    features: ['音声認識', 'オーダー自動抽出', '営業ダッシュボード'],
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
  },
  {
    id: 'reins-csv',
    title: 'REINS CSV化ツール',
    challenge: 'REINSの物件一覧から手作業でのデータ入力に多くの時間を要していた。',
    solution: 'ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。',
    category: 'データ変換',
    image: 'bg-gradient-to-br from-teal-500 to-teal-700',
    features: ['ワンクリック変換', 'プレビュー機能', '整理されたCSV出力'],
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
  },
  {
    id: 'ai-chatbot',
    title: '社内版AIチャットボット（RAG）',
    challenge: '社内ドキュメントや情報が分散し、必要な情報の検索に時間がかかり、情報が属人化していた。',
    solution: 'RAG技術で社内情報をAIに記憶。「xxへ○○の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。',
    category: 'RAG・AI検索',
    image: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    features: ['自然言語検索', '情報検索→回答生成', '社内ナレッジ管理'],
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  }
];

// Simple Solution Card Component
function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
  // Map solution IDs to gradient classes
  const gradientMap: { [key: string]: string } = {
    'ai-matching': 'from-emerald-500 to-emerald-600',
    'price-prediction': 'from-blue-500 to-blue-600',
    'ocr-system': 'from-purple-500 to-purple-600',
    'sales-analysis': 'from-orange-500 to-orange-600',
    'reins-csv': 'from-teal-500 to-teal-600',
    'ai-chatbot': 'from-indigo-500 to-indigo-600'
  };

  const gradient = gradientMap[solution.id] || 'from-emerald-500 to-emerald-600';

  return (
    <a href={`/services/${solution.id}`} className="block">
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        {/* Header */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
              </svg>
            </div>
            <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
              {solution.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {solution.solution}
          </p>
          
          {/* Call to Action */}
          <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700 transition-colors">
            詳細を見る
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function SolutionsShowcase() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              ソリューション実績
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              AI技術を活用した革新的な不動産ソリューションの実績をご紹介します。<br />
              カードをクリックして、各サービスの詳細をご覧ください
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            お客様のプロジェクトもお任せください
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            豊富な実績と経験を活かし、お客様の課題解決をサポートします
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            プロジェクトのご相談はこちら
          </a>
        </div>
      </section>
    </>
  );
}