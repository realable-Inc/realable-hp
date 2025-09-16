'use client';

import ServiceCard, { Service } from './ServiceCard';

const solutions: Service[] = [
  {
    id: 'ai-matching',
    title: 'オーダー×物件 AIマッチング',
    description: 'AIが担当者の手打ちメモも理解して最適にマッチング。提案すべき物件を通知し、営業の機会損失を最小化。'
  },
  {
    id: 'price-prediction',
    title: '不動産価格予測モデル',
    description: 'AIが過去事例から学習し適正価格を算出。価格影響要素を数値化・可視化することで根拠のある価格設定が可能。'
  },
  {
    id: 'ocr-system',
    title: 'マイソクOCR',
    description: 'どんなレイアウトでも対応可能なOCR技術で、REINSからの大量PDFを一括データ化。システムやエクセルに即座に取り込み。'
  },
  {
    id: 'sales-analysis',
    title: '営業トークの見える化',
    description: 'Speech2text AIで営業トークを自動テキスト化・分析。最適な営業トークを見える化し、オーダー情報を自動抽出。'
  },
  {
    id: 'reins-csv',
    title: 'REINS CSV化ツール',
    description: 'ワンクリックで最大50件の物件データをCSV出力。整理されたフォーマットで手作業時間を大幅削減。'
  },
  {
    id: 'ai-chatbot',
    title: '社内版AIチャットボット（RAG）',
    description: 'RAG技術で社内情報をAIに記憶。「xxへ○○の提案を行ったのはいつ？」などの質問に即座に回答し情報の属人化を防止。'
  }
];


export default function SolutionsShowcase() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20 lg:py-28">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              プロジェクト一覧
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
              <ServiceCard key={solution.id} service={solution} />
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