'use client';

export default function CompanySection() {
  return (
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
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                リアラブルは、東大卒の2名により創立された不動産テックベンチャーです。様々な業種・業界を経て得た知見と、最先端の技術力を持ち合わせています。
              </p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="font-semibold text-slate-800 text-sm">プロフィール</span>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      <p>東京大学経済学部卒業。宅地建物取引士。不動産仲介業での実務経験があり、業界知識が豊富にあります。過去には事業会社向けにデータ活用を目的とした経営コンサルティング・DXプロジェクトも手掛け、データドリブンな経営に関するノウハウを有しています。プログラミング（Python、VBA）とデータベースに関してもスキルを持ち、システム開発において的確な提案を致します。</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="font-semibold text-slate-800 text-sm">プロフィール</span>
                    </div>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      <p>東京大学大学院工学系研究科機械工学専攻修了後、大手メーカーでエンジニアとして経験を積んだ後フリーランスとして独立、独立後AIベンチャーから大手テック企業に至るまで様々なプロジェクトに携わりました。AI、データサイエンス、そしてソフトウェア開発の全領域において豊富な実務経験を有しています。また、AIコンペでの入賞歴を持ち、最新技術に関する知見も豊富なため、先進的な不動産テックとして新たなサービスを生み出す技術力があります。</p>
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
  );
}