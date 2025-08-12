'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
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
                <Link href="/contact">
                  <button
                    type="button"
                    className="btn-primary text-lg inline-flex items-center justify-center w-full"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    お問い合わせ
                  </button>
                </Link>
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
  );
}