'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AI・不動産テック導入や業務効率化に関するご相談は<br />お気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">お問い合わせフォーム</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}