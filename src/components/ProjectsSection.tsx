'use client';

import Link from 'next/link';
import ServiceCard, { Service } from './ServiceCard';

const services: Service[] = [
  {
    id: 'ai-matching',
    title: 'オーダー×物件 AIマッチング',
    description: '営業担当者が手作業で管理している大量の顧客・オーダーリストと物件データをAIが照合し、提案すべき物件を通知することで営業の機会損失を最小化します。'
  },
  {
    id: 'price-prediction',
    title: '不動産価格予測モデル',
    description: '所在地・面積・構造など、不動産の主要な情報と賃料の関係を過去事例から学習し、適正な価格を算出します。さらに、どの要素が価格にどう影響したかを数値化することも可能です。'
  },
  {
    id: 'ocr-system',
    title: 'マイソクOCR',
    description: 'PDFでしか存在しない物件データを、一括でデータ化します。REINSからダウンロードした大量のPDFも、すぐにシステムやエクセルに取り込むことができます。'
  },
  {
    id: 'sales-analysis',
    title: '営業トークの見える化',
    description: '営業トークを自動でテキストデータ化し、AIが分析することで、最適な営業トークを見える化できます。顧客のオーダーを自動で読み取ることで、要望漏れを防ぐこともできます。'
  },
  {
    id: 'reins-csv',
    title: 'REINS CSV化ツール',
    description: 'REINSの物件一覧画面から、一括して最大50件の物件データをCSV出力できます。'
  },
  {
    id: 'ai-chatbot',
    title: '社内版AIチャットボット（RAG）',
    description: 'RAGと呼ばれる生成AI（LLM）の強化技術を使用して、社内の様々なドキュメントや情報をAIに記憶させ、その情報をもとに質問への回答を生成するオリジナルチャットボットが作成できます。'
  }
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8 bg-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
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