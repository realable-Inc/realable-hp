'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative hero-gradient text-white overflow-x-hidden min-h-screen">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="dot-pattern w-full h-full"></div>
      </div>
      
      {/* Section Image - Only in Hero, hidden on tablet and below */}
      <div className="hidden lg:block absolute -right-[420px] lg:-right-96 xl:-right-80 2xl:-right-64 top-1/2 -translate-y-1/2 z-0">
        <img
          src="/images/home/devices.png"
          alt="AI Platform Devices"
          className="w-[650px] lg:w-[750px] xl:w-[850px] 2xl:w-[950px] h-auto animate-fade-in-up opacity-95"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))' }}
        />
      </div>

      <div className="relative container max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Content - Take up more space to avoid overlap */}
          <div className="lg:col-span-1">
          <div className="animate-fade-in-up max-w-2xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="block text-white mb-2">不動産の可能性を</span>
                <span className="block text-emerald-100">AIで最大化する</span>
              </h1>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  リアラブル株式会社
                </h2>
                <p className="text-xl sm:text-2xl text-emerald-100 leading-relaxed">
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
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary text-lg inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                 <span className="text-white">サービス一覧</span>
                </button>
              </div>
            </div>
          </div>

          {/* Empty space for image */}
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
}