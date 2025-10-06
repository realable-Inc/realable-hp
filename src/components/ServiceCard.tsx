'use client';

import Link from 'next/link';

export interface Service {
  id: string;
  title: string;
  description: string;
  overviewImage?: string;
  features?: string[];
  link?: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const href = service.link || `/services/${service.id}`;

  return (
    <Link href={href} className="h-full">
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 bg-white overflow-hidden p-4">
          {service.overviewImage ? (
            <img
              src={service.overviewImage}
              alt={service.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white">
              <div className="text-slate-400 text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium">AIサービス</h4>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            {service.description}
          </p>

          {/* Call to Action */}
          <div className="flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700 transition-colors mt-auto">
            詳細を見る
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}