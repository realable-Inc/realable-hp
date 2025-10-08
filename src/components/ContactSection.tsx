'use client';

import { useState } from 'react';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { getSubjectLabel } from '@/constants/contactOptions';

interface SubmittedData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  const handleSubmissionSuccess = (data: SubmittedData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

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
            {!isSubmitted ? (
              <>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">お問い合わせフォーム</h3>
                </div>
                <ContactForm onSubmissionSuccess={handleSubmissionSuccess} />
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  お問い合わせを送信しました
                </h3>

                {submittedData && (
                  <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left">
                    <h4 className="font-semibold text-slate-900 mb-4">送信内容</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-slate-700">お名前:</span>
                        <span className="ml-2 text-slate-600">{submittedData.name}</span>
                      </div>
                      {submittedData.company && (
                        <div>
                          <span className="font-medium text-slate-700">会社名:</span>
                          <span className="ml-2 text-slate-600">{submittedData.company}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-slate-700">メールアドレス:</span>
                        <span className="ml-2 text-slate-600">{submittedData.email}</span>
                      </div>
                      {submittedData.phone && (
                        <div>
                          <span className="font-medium text-slate-700">電話番号:</span>
                          <span className="ml-2 text-slate-600">{submittedData.phone}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-slate-700">お問い合わせ種別:</span>
                        <span className="ml-2 text-slate-600">{getSubjectLabel(submittedData.subject)}</span>
                      </div>
                      <div>
                        <span className="font-medium text-slate-700">お問い合わせ内容:</span>
                        <div className="mt-1 text-slate-600 whitespace-pre-wrap">{submittedData.message}</div>
                      </div>
                    </div>
                  </div>
                )}
                <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  トップへ戻る
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}