'use client';

import Link from 'next/link';

export interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.id}`} className="h-full">
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full flex flex-col">
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
          
          <p className="text-slate-600 leading-relaxed mb-6 flex-1">
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