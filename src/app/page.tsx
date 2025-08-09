'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';

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

// Solution Card Component with interactive toggle
function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution'>('challenge');

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover-lift border border-slate-100 overflow-hidden animate-fade-in-up">
      {/* Header with unified icon design */}
      <div className="p-6 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
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
        {/* Challenge/Solution Toggle */}
        <div className="mb-6">
          <div className="flex bg-slate-100 rounded-lg p-1 mb-4">
            <button 
              type="button"
              onClick={() => setActiveTab('challenge')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'challenge' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              課題
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('solution')}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === 'solution' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              解決
            </button>
          </div>
          
          {/* Content Display */}
          <div className="min-h-[100px]">
            {activeTab === 'challenge' ? (
              <div className="text-sm text-slate-600 leading-relaxed transition-all duration-300 opacity-100">
                <div className="flex items-start space-x-2 mb-3">
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="font-semibold text-red-700 text-sm">課題</span>
                </div>
                <p className="text-slate-700">{solution.challenge}</p>
              </div>
            ) : (
              <div className="text-sm text-slate-600 leading-relaxed transition-all duration-300 opacity-100">
                <div className="flex items-start space-x-2 mb-3">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-emerald-700 text-sm">解決策</span>
                </div>
                <p className="text-slate-700">{solution.solution}</p>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="border-t border-slate-100 pt-4 mb-6">
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="font-semibold text-slate-900 text-sm">主な機能</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {solution.features.map((feature, idx) => (
              <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200 font-medium">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <button 
          type="button"
          className="w-full btn-primary flex items-center justify-center group-hover:shadow-lg"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          詳細を見る
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative hero-gradient text-white overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="dot-pattern w-full h-full"></div>
        </div>
        
        <div className="relative container max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center min-h-[60vh]">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3">
              <div className="animate-fade-in-up">
                <div className="mb-4">
                  <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    会社紹介
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="block text-white mb-2">不動産の可能性を</span>
                  <span className="block text-emerald-100">AIで最大化する</span>
                </h1>
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    リアラブル株式会社
                  </h2>
                  <p className="text-xl sm:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
                    AI技術と不動産専門知識を融合し、業界の透明性向上と効率化を実現。
                    すべてのステークホルダーにとって価値ある不動産市場を創造します。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary text-lg inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    お問い合わせ
                  </button>
                  <button
                    type="button"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary text-lg inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ソリューション実績
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Visual - 40% */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Modern Office Background */}
                <div className="relative w-80 h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 animate-float hover-glow">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Hakoma</h3>
                    <p className="text-emerald-100 text-sm leading-relaxed">
                      AIマッチング<br />
                      プラットフォーム
                    </p>
                  </div>
                </div>
                
                {/* iPhone Mockup */}
                <div className="absolute -bottom-4 -right-4 w-32 h-64 bg-gray-900 rounded-3xl p-2 shadow-2xl transform rotate-12 hover-rotate animate-scale-in">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="bg-emerald-600 h-16 flex items-center justify-center">
                      <div className="text-white font-bold text-sm">Hakoma</div>
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="bg-gray-100 h-4 rounded"></div>
                      <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                      <div className="bg-emerald-100 h-8 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-gray-50 h-3 rounded"></div>
                        <div className="bg-gray-50 h-3 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              サービス
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI技術と不動産専門知識を活用した革新的なサービスを提供します
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AIマッチングサービス「Hakoma」</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                独自AI技術により、不動産物件と投資家を最適にマッチングします。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  AI による投資適性分析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  リアルタイム市場価値評価
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  最適な投資機会の提案
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">不動産テックコンサルティング</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                最新のテクノロジーを活用した不動産業務の効率化を支援します。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  デジタルトランスフォーメーション
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  業務プロセス最適化
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  ITシステム導入支援
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI市場分析・予測</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                ビッグデータとAI技術で、精度の高い市場分析と将来予測を提供します。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  ビッグデータ解析
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  AI による需要予測
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  リスクアセスメント
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hakoma Service Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="dot-pattern w-full h-full"></div>
        </div>
        
        <div className="relative container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              Featured Service
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Hakoma
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              AIマッチングプラットフォームで不動産投資を革命化
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Service Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Hakoma ロゴ</h3>
                    <p className="text-emerald-100">緑色の買い物袋 × AIテクノロジー</p>
                  </div>
                </div>
                <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                  従来の不動産投資プロセスを革新的に変革する
                  AIマッチングプラットフォーム。投資家と物件を
                  最適にマッチングし、効率的な投資機会を提供します。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-emerald-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    AI による投資適性分析
                  </div>
                  <div className="flex items-center text-emerald-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    リアルタイム市場価値評価
                  </div>
                  <div className="flex items-center text-emerald-100">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    最適な投資機会の提案
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-emerald-600 p-4 flex items-center justify-between">
                      <div className="text-white font-bold text-lg">Hakoma Dashboard</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-emerald-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-emerald-600">156</div>
                          <div className="text-xs text-gray-600">Available Properties</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">89%</div>
                          <div className="text-xs text-gray-600">Match Accuracy</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600">24h</div>
                          <div className="text-xs text-gray-600">Avg Response</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-gray-100 h-4 rounded"></div>
                        <div className="bg-gray-100 h-4 rounded w-3/4"></div>
                        <div className="bg-gray-100 h-4 rounded w-1/2"></div>
                      </div>
                      <div className="flex justify-center">
                        <div className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
                          View Recommendations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Before/After Flow */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <h3 className="text-2xl font-bold text-center text-white mb-12">従来フロー vs 改善後フロー</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Before */}
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-slate-300 mb-2">従来の方法</h4>
                    <p className="text-sm text-slate-400">時間がかかる手動プロセス</p>
                  </div>
                  <div className="space-y-4">
                    {['物件情報収集', '市場調査', '投資分析', '意思決定'].map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm font-bold">{idx + 1}</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg flex-1">
                          <div className="text-slate-300 text-sm">{step}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <span className="text-slate-400 text-sm">⏱️ 数週間〜数ヶ月</span>
                  </div>
                </div>
                
                {/* After */}
                <div>
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Hakoma改善後</h4>
                    <p className="text-sm text-emerald-200">AIによる自動化プロセス</p>
                  </div>
                  <div className="space-y-4">
                    {['AIデータ分析', '自動マッチング', 'リスク評価', '推奨提案'].map((step, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <div className="bg-emerald-500/20 p-3 rounded-lg flex-1 border border-emerald-400/30">
                          <div className="text-white text-sm font-medium">{step}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-6">
                    <span className="text-emerald-200 text-sm">⚡ 24時間以内</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center mt-8">
                <svg className="w-12 h-12 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              ソリューション実績
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              AI技術を活用した革新的な不動産ソリューションの実績をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 lg:py-28 bg-white dot-pattern">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company Overview
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              会社概要
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              リアラブル株式会社 - IT×不動産で未来を創る
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Venn Diagram Section */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 mb-20 hover-lift animate-fade-in-up">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">私たちの独自性</h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  ITベンチャーと宅地建物取引業者、両方の強みを併せ持つ唯一無二の存在
                </p>
              </div>
              
              {/* Venn Diagram */}
              <div className="flex justify-center mb-12">
                <div className="venn-diagram">
                  <div className="venn-circle venn-left">
                    <div className="text-center px-4">
                      <div className="mb-3">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
                        </svg>
                      </div>
                      <div className="text-sm font-bold">ITベンチャー</div>
                      <div className="text-xs mt-1">AI・機械学習技術</div>
                    </div>
                  </div>
                  
                  <div className="venn-circle venn-right">
                    <div className="text-center px-4">
                      <div className="mb-3">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <div className="text-sm font-bold">宅地建物取引業者</div>
                      <div className="text-xs mt-1">不動産専門知識</div>
                    </div>
                  </div>
                  
                  <div className="venn-circle venn-overlap">
                    <div className="text-center px-3">
                      <div className="mb-2">
                        <svg className="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                      </div>
                      <div className="text-xs font-bold">リアラブル</div>
                      <div className="text-xs">革新的ソリューション</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900">最新AI技術</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    機械学習、自然言語処理、OCR等の最先端技術を駆使
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900">独自の価値創造</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    技術と業界知識の融合により、従来不可能だった価値を実現
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-slate-900">豊富な実務経験</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    不動産業界での実務経験に基づく深い理解とドメイン知識
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-12 shadow-xl border border-emerald-100 mb-16 hover-lift animate-scale-in">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">ミッション</h3>
                <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  AI技術と不動産専門知識を融合させ、不動産業界のDXを推進。
                  データドリブンなアプローチで市場の透明性を高め、投資家と物件を最適にマッチングすることで、
                  <span className="font-semibold text-emerald-700">より効率的で持続可能な不動産市場の実現</span>を目指します。
                </p>
              </div>
            </div>

            {/* Company Details Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Company Overview Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg border border-emerald-200 animate-fade-in-left hover-scale">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">会社概要</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-emerald-800 mb-3">基本情報</h4>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="font-medium text-slate-700">会社名</dt>
                        <dd className="text-slate-600">リアラブル株式会社</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-slate-700">英文社名</dt>
                        <dd className="text-slate-600">Realable Inc.</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-slate-700">設立年</dt>
                        <dd className="text-slate-600">2024年</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-slate-700">本社所在地</dt>
                        <dd className="text-slate-600">東京都</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-emerald-800 mb-3">事業領域</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        不動産テック事業
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        AIマッチングサービス「Hakoma」
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        不動産業界向けDXコンサルティング
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        AI・機械学習ソリューション開発
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/60 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-emerald-800 mb-2">企業理念</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      「不動産×IT」で業界の透明性向上と効率化を実現し、すべてのステークホルダーにとって価値ある不動産市場を創造する。
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology & Strengths Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 animate-fade-in-right hover-scale">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">技術・競合優位性</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-bold text-slate-800 mb-3">コア技術</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">機械学習</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">自然言語処理</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">OCR技術</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">RAG</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">データ分析</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">予測モデル</span>
                    </div>
                  </div>

                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-bold text-slate-800 mb-3">実績・強み</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></div>
                        <span>東京大学出身の創業メンバーによる高い技術力</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></div>
                        <span>不動産業界での豊富な実務経験とドメイン知識</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></div>
                        <span>AIコンペ入賞実績と最新技術への深い理解</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-slate-500 rounded-full mr-3 mt-2"></div>
                        <span>6つの実証済みAIソリューションの開発実績</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/80 rounded-lg p-4">
                    <h4 className="font-bold text-slate-800 mb-3">差別化要因</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700 text-sm">業界特化型AI</p>
                          <p className="text-xs text-slate-600">不動産業界に特化した独自のAIアルゴリズム</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700 text-sm">実用性重視</p>
                          <p className="text-xs text-slate-600">現場で即座に活用できる実用的なソリューション</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700 text-sm">エンドツーエンド</p>
                          <p className="text-xs text-slate-600">企画から開発・運用まで一貫したサポート</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founders Section */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 hover-lift animate-scale-in">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">創業メンバー</h3>
                <p className="text-lg text-slate-600">東京大学出身の専門性豊かな創業チーム</p>
              </div>
              
              <div className="flex justify-center gap-8">
                {/* CEO/CFO Card */}
                <div className="founder-card bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden interactive-card animate-fade-in-left animate-pulse-glow stagger-1">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-center text-white relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      {/* Profile Image */}
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-emerald-400">
                        <span className="text-emerald-600 font-bold text-4xl">肥</span>
                      </div>
                      {/* Name and Role */}
                      <h4 className="text-xl font-bold mb-2">肥川 成希</h4>
                      <p className="text-emerald-100 text-sm mb-3">Naruki Hikawa</p>
                      {/* Role Badge */}
                      <div className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        CEO / CFO
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">学歴・資格</span>
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>東京大学経済学部卒業</p>
                        <p>宅地建物取引士</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">経歴</span>
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>• 不動産仲介業での実務経験</p>
                        <p>• 経営コンサルティング・DXプロジェクト</p>
                        <p>• データドリブン経営のノウハウ</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">スキル</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">Python</span>
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">VBA</span>
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">データベース</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTO Card */}
                <div className="founder-card bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden interactive-card animate-fade-in-right animate-pulse-glow stagger-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-center text-white relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      {/* Profile Image */}
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-blue-400">
                        <span className="text-blue-600 font-bold text-4xl">齊</span>
                      </div>
                      {/* Name and Role */}
                      <h4 className="text-xl font-bold mb-2">齊藤 巧</h4>
                      <p className="text-blue-100 text-sm mb-3">Takumi Saito</p>
                      {/* Role Badge */}
                      <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        CTO
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">学歴</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        <p>東京大学大学院工学系研究科</p>
                        <p>機械工学専攻修了</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">経歴</span>
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>• 大手メーカーでエンジニア経験</p>
                        <p>• フリーランス独立、多様なプロジェクト</p>
                        <p>• AIベンチャー〜大手テック企業</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">専門領域</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">AI</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">データサイエンス</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">ソフトウェア開発</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="font-semibold text-slate-800 text-sm">実績</span>
                      </div>
                      <div className="text-sm text-slate-600">
                        <p>AIコンペ入賞歴、最新技術への深い知見</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Solution Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Problem → Solution
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              課題解決フロー
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              不動産業界の課題をAI技術で解決する革新的なアプローチ
            </p>
          </div>

          {/* Challenge-Solution Flow */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Problem Side */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">業界の課題</h3>
                  <div className="w-16 h-1 bg-red-400 mx-auto rounded-full"></div>
                </div>
                
                {/* Person 1: Real Estate Agent */}
                <div className="flex items-start space-x-4 animate-fade-in-left stagger-1">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-red-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-red-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-red-700">不動産営業担当</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「手作業での物件マッチングに時間がかかりすぎる...顧客に最適な物件を見つけるのが困難」
                    </p>
                  </div>
                </div>

                {/* Person 2: Property Manager */}
                <div className="flex items-start space-x-4 animate-fade-in-left stagger-2">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-red-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-red-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-red-700">不動産管理者</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「PDFデータの手入力作業が多すぎる...価格設定の根拠が不明確で判断が困難」
                    </p>
                  </div>
                </div>

                {/* Person 3: Investor */}
                <div className="flex items-start space-x-4 animate-fade-in-left stagger-3">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-red-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-red-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-red-700">投資家</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「情報が散在していて投資判断に時間がかかる...リスクと収益性の評価が困難」
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Section */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-400 via-orange-400 to-emerald-500 rounded-2xl p-8 shadow-lg animate-pulse-glow hover-scale">
                  <div className="text-white mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <h4 className="text-xl font-bold">AI SOLUTION</h4>
                    <p className="text-sm text-white/90">リアラブルのAI技術</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-xs font-medium">機械学習</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-xs font-medium">OCR技術</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-white text-xs font-medium">予測モデル</span>
                    </div>
                  </div>
                </div>
                
                {/* Flow Arrows */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#00C896" />
                      </marker>
                    </defs>
                    <path d="M 25 50 Q 50 30 75 50" stroke="#00C896" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  </svg>
                </div>
              </div>

              {/* Solution Side */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-4">解決後の効果</h3>
                  <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Solution 1: Efficient Matching */}
                <div className="flex items-start space-x-4 animate-fade-in-right stagger-1">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-emerald-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-emerald-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-emerald-700">効率的なマッチング</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「AIが自動で最適な物件をマッチング！提案精度89%向上で営業効率が劇的にアップ」
                    </p>
                  </div>
                </div>

                {/* Solution 2: Automated Processing */}
                <div className="flex items-start space-x-4 animate-fade-in-right stagger-2">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-emerald-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-emerald-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-emerald-700">自動データ処理</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「OCR技術で手入力作業を90%削減！AI価格予測で根拠のある価格設定が可能に」
                    </p>
                  </div>
                </div>

                {/* Solution 3: Data-Driven Decisions */}
                <div className="flex items-start space-x-4 animate-fade-in-right stagger-3">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-emerald-200 relative">
                    <div className="absolute -left-2 top-6 w-4 h-4 bg-white border-l-2 border-b-2 border-emerald-200 transform rotate-45"></div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-bold text-emerald-700">データドリブン投資</span>
                    </div>
                    <p className="text-sm text-slate-700">
                      「統合ダッシュボードで全情報を一元管理！AIが24時間以内にリスク評価・収益予測」
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-16 bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-emerald-100 animate-scale-in hover-glow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">導入効果</h3>
                <p className="text-slate-600">AIソリューション導入による実際の改善結果</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg interactive-icon animate-scale-in stagger-1">
                    <span className="text-3xl font-bold text-white">89%</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">マッチング精度向上</h4>
                  <p className="text-sm text-slate-600">AI技術による最適化</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg interactive-icon animate-scale-in stagger-2">
                    <span className="text-3xl font-bold text-white">90%</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">作業時間削減</h4>
                  <p className="text-sm text-slate-600">OCR・自動化による効率化</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg interactive-icon animate-scale-in stagger-3">
                    <span className="text-3xl font-bold text-white">24h</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">分析スピード</h4>
                  <p className="text-sm text-slate-600">リアルタイムデータ処理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              お問い合わせ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              AI・不動産テック導入や業務効率化に関するご相談は<br />お気軽にお問い合わせください
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-xl text-white">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">お問い合わせ情報</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      電話でのお問い合わせ
                    </h4>
                    <p className="text-emerald-100">03-XXXX-XXXX</p>
                    <p className="text-sm text-emerald-200 mt-1">平日 9:00 - 18:00</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      メールでのお問い合わせ
                    </h4>
                    <p className="text-emerald-100 font-medium">info@realable.jp</p>
                    <p className="text-sm text-emerald-200 mt-1">24時間受付 / 1営業日以内に返信</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      オフィス
                    </h4>
                    <p className="text-emerald-100">
                      東京都内<br />
                      <span className="text-sm text-emerald-200">※詳細はお問い合わせ時にご案内</span>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      主なご相談内容
                    </h4>
                    <ul className="space-y-2 text-sm text-emerald-100">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-3"></div>
                        AIマッチングシステム導入
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-3"></div>
                        不動産業務のDX化支援
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-3"></div>
                        データ分析・価格予測モデル
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-3"></div>
                        OCR・文書自動化ツール
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mr-3"></div>
                        AI チャットボット・RAG導入
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">お問い合わせフォーム</h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}