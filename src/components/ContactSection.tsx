'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AI・不動産テック導入や業務効率化に関するご相談は<br />お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">お問い合わせ情報</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    電話でのお問い合わせ
                  </h4>
                  <p className="text-emerald-100">03-XXXX-XXXX</p>
                  <p className="text-sm text-emerald-200 mt-1">平日 9:00 - 18:00</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    メールでのお問い合わせ
                  </h4>
                  <p className="text-emerald-100">info@realable.jp</p>
                  <p className="text-sm text-emerald-200 mt-1">24時間受付</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    所在地
                  </h4>
                  <p className="text-emerald-100">東京都港区芝浦</p>
                  <p className="text-sm text-emerald-200 mt-1">詳細はお問い合わせください</p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    営業時間
                  </h4>
                  <p className="text-emerald-100">平日 9:00 - 18:00</p>
                  <p className="text-sm text-emerald-200 mt-1">土日祝日はお休みです</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
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
      </div>
    </section>
  );
}