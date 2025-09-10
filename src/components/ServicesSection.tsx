'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          コンシューマー向け不動産サービス
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
  );
}