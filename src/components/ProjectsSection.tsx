'use client';

import Link from 'next/link';

const services = [
  {
    id: 'ai-matching',
    title: 'オーダー×物件 AIマッチング',
    description: '営業担当者が手作業で管理している大量の顧客・オーダーリストと物件データをAIが照合し、提案すべき物件を通知することで営業の機会損失を最小化します。',
    category: 'AIマッチング',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'price-prediction',
    title: '不動産価格予測モデル',
    description: '所在地・面積・構造など、不動産の主要な情報と賃料の関係を過去事例から学習し、適正な価格を算出します。さらに、どの要素が価格にどう影響したかを数値化することも可能です。',
    category: 'AI予測',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'ocr-system',
    title: 'マイソクOCR',
    description: 'PDFでしか存在しない物件データを、一括でデータ化します。REINSからダウンロードした大量のPDFも、すぐにシステムやエクセルに取り込むことができます。',
    category: 'OCR・自動化',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'sales-analysis',
    title: '営業トークの見える化',
    description: '営業トークを自動でテキストデータ化し、AIが分析することで、最適な営業トークを見える化できます。顧客のオーダーを自動で読み取ることで、要望漏れを防ぐこともできます。',
    category: '営業支援AI',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 'reins-csv',
    title: 'REINS CSV化ツール',
    description: 'REINSの物件一覧画面から、一括して最大50件の物件データをCSV出力できます。',
    category: 'データ変換',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    id: 'ai-chatbot',
    title: '社内版AIチャットボット（RAG）',
    description: 'RAGと呼ばれる生成AI（LLM）の強化技術を使用して、社内の様々なドキュメントや情報をAIに記憶させ、その情報をもとに質問への回答を生成するオリジナルチャットボットが作成できます。',
    category: 'RAG・AI検索',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

// Simple Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Link href={`/services/${service.id}`}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        {/* Header */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <span className="text-xs font-medium bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
              {service.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {service.description}
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
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            サービス事例
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            AI技術を活用した革新的な不動産サービスをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
              すべてのソリューション実績を見る
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}