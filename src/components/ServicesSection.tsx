'use client';

import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { homeServices } from '@/data/data';

interface ServicesSectionProps {
  showHeader?: boolean;
}

export default function ServicesSection({ showHeader = true }: ServicesSectionProps) {
  return (
    <>
      {showHeader && (
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-20 lg:py-28">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                サービス一覧
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                AI技術と不動産専門知識を活用した革新的なサービスを提供します。<br />
                カードをクリックして、各サービスの詳細をご覧ください
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          {!showHeader && (
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                サービス一覧
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                AI技術と不動産専門知識を活用した革新的なサービスを提供します
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {!showHeader && (
            <div className="text-center mt-12">
              <Link href="/services">
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  全てのサービスを見る
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}