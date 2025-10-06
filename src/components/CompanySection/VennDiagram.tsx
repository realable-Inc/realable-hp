'use client';

import Image from 'next/image';

export default function VennDiagram() {
  return (
    <div className="bg-transparent animate-fade-in-up">
      {/* リアラブルとは Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">リアラブルとは</h2>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
          リアラブルは、AIとデータサイエンスの技術を不動産業務領域まで落とし込んでの非効率性を解消し、不動産が持つ可能性を最大限まで引き出すことを目指します。
        </p>
      </div>

      {/* Venn Diagram */}
      <div className="flex justify-center mb-20">
        <div className="relative w-[360px] h-44 sm:w-[480px] sm:h-64 lg:w-[700px] lg:h-96">
          {/* Left Circle - IT Venture */}
          <div className="absolute left-0 top-0 w-44 h-44 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border-2 sm:border-4 lg:border-6 border-blue-200 opacity-80">
            <div className="text-center px-2 sm:px-3 lg:px-4 sm:ml-4 lg:ml-6">
              <div className="mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-1 sm:mb-2 lg:mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="text-sm sm:text-sm lg:text-xl font-bold text-slate-900 mb-1 sm:mb-2">ITベンチャーとして</div>
              <div className="text-xs sm:text-sm lg:text-xl text-slate-600">AI・データサイエンス<br/>技術</div>
            </div>
          </div>

          {/* Right Circle - Real Estate */}
          <div className="absolute right-0 top-0 w-44 h-44 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center border-2 sm:border-4 lg:border-6 border-emerald-200 opacity-80">
            <div className="text-center px-2 sm:px-3 lg:px-4 sm:mr-0">
              <div className="mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto mb-1 sm:mb-2 lg:mb-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div className="text-sm sm:text-sm lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3 lg:mb-4">宅建業者として</div>
              <div className="text-xs sm:text-sm lg:text-xl text-slate-600">不動産業の<br/>実務能力</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Solutions Section */}
      <div className="mt-20">
        <div className="text-center mb-12 px-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-6">
            AIを活用した不動産業向けソリューション
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            リアラブルでは、AI技術と不動産業務への知見を活用して不動産業務の
            <span className="text-orange-600 font-semibold">「わからない」</span>・
            <span className="text-orange-600 font-semibold">「めんどくさい」</span>・
            <span className="text-orange-600 font-semibold">「抜け漏れ」</span>
            を防ぐ様々なソリューションを提供しています。
          </p>
        </div>

        {/* AI Services Image */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <Image
            src="/images/home/solution.png"
            alt="不動産特化したAI活用サービス"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}