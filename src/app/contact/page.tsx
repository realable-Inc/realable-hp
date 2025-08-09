import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            不動産開発に関するご相談・ご質問はお気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ情報</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">電話でのお問い合わせ</h3>
                    <p className="text-gray-600">03-XXXX-XXXX</p>
                    <p className="text-sm text-gray-500 mt-1">平日 9:00 - 18:00</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">メールでのお問い合わせ</h3>
                    <p className="text-gray-600">info@realable.tokyo</p>
                    <p className="text-sm text-gray-500 mt-1">24時間受付</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">オフィス</h3>
                    <p className="text-gray-600">
                      〒105-0001<br />
                      東京都港区虎ノ門1-2-3<br />
                      虎ノ門ビル10F
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">アクセス</h3>
                    <p className="text-gray-600">
                      東京メトロ銀座線「虎ノ門」駅<br />
                      1番出口より徒歩3分
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">よくあるご相談内容</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>土地活用のご相談</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>開発プロジェクトの企画</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>既存物件のリノベーション</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>市場調査・事業性評価</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">アクセスマップ</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">地図エリア</p>
          </div>
        </div>
      </section>
    </>
  );
}