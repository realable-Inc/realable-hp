'use client';

import CompanyDetails from './CompanySection/CompanyDetails';

export default function CompanySection() {
  return (
    <section id="company" className="py-20 lg:py-28 bg-white dot-pattern">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            会社概要
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company Details Cards */}
          <CompanyDetails />
        </div>
      </div>
    </section>
  );
}