'use client';

export default function ServicesSection() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Service 1 - Hakoma事業 */}
          <a href="https://www.hakoma.tokyo/inuki-taikyo" target="_blank" rel="noopener noreferrer">
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">居抜きマッチングサービス「Hakoma」</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                物件から退去する人が、フリマ感覚で自分の物件をアップロードし、居抜きで入居したい人や会社を自分で見つけることができるマッチングサービス。契約は不動産のプロがサポートします。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  [退去者]原状回復費用削減＋残地物を売却して引っ越し費用を賄う
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  [入居者]初期コスト抑制でスピード開業
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                  [オーナー・管理会社]空室リスク軽減・集客コストの削減
                </li>
              </ul>
            </div>
          </a>

          {/* Service 2 - Hakoma-PSA- */}
          <a href="/services/ai-matching/">
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hakoma -PSA-（営業支援AI）</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                不動産仲介業者向けのオーダー×物件自動マッチングシステム。営業の機会損失を最小化する営業支援サービス。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  顧客オーダーと物件データの自動照合
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  最適な提案物件をリアルタイム通知
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  手作業管理からの脱却で業務効率化
                </li>
              </ul>
            </div>
          </a>

          {/* Service 3 - 業務効率化AIツール */}
          <a href="/projects/">
            <div className="interactive-card bg-white rounded-2xl p-8 shadow-lg border border-slate-100 animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 interactive-icon">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">不動産業務効率化AIツール</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                日常業務の「わからない」「めんどくさい」「抜け漏れ」を解消するAIソリューション群。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  REINSデータ一括CSV化（最大50件）
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  マイソクOCR（PDF自動データ化）
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  社内AIチャットボット（RAG活用）
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}