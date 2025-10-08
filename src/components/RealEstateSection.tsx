'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RealEstateSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            商業物件の管理・仲介
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            宅地建物取引業者として、積極的な提案力をもった不動産業務を提供
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="relative animate-fade-in-up">
              <Image
                src="/images/services/hakoma/hakoma-3.png"
                alt="商業物件の管理・仲介"
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                リアラブルは、<span className="font-semibold text-slate-900">宅地建物取引業者</span>として商業物件の管理・仲介も行っています。
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                居抜き物件・オフィス、店舗向け物件を中心に<span className="font-semibold text-emerald-600">積極的な提案力</span>をもった不動産業務を提供します。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                お問い合わせはこちら
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}