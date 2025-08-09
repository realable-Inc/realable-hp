export default function Company() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            会社概要
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            不動産開発の新たな価値を創造する
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ミッション</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                私たちRealableは、不動産開発を通じて社会に新たな価値を提供することを使命としています。
                単なる建物の開発ではなく、そこに暮らす人々、働く人々、訪れる人々すべてにとって
                価値ある空間を創造し、持続可能な社会の実現に貢献します。
              </p>
            </div>

            {/* Company Details Table */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">会社情報</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <dl className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">会社名</dt>
                    <dd className="sm:col-span-2 text-gray-600">株式会社Realable</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">設立</dt>
                    <dd className="sm:col-span-2 text-gray-600">2020年4月</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">代表取締役</dt>
                    <dd className="sm:col-span-2 text-gray-600">山田 太郎</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">資本金</dt>
                    <dd className="sm:col-span-2 text-gray-600">5,000万円</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">所在地</dt>
                    <dd className="sm:col-span-2 text-gray-600">
                      〒105-0001<br />
                      東京都港区虎ノ門1-2-3 虎ノ門ビル10F
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">電話番号</dt>
                    <dd className="sm:col-span-2 text-gray-600">03-XXXX-XXXX</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">Email</dt>
                    <dd className="sm:col-span-2 text-gray-600">info@realable.tokyo</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <dt className="font-semibold text-gray-900">事業内容</dt>
                    <dd className="sm:col-span-2 text-gray-600">
                      不動産開発コンサルティング<br />
                      プロジェクトマネジメント<br />
                      市場調査・分析<br />
                      都市計画・設計支援
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">経営陣</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border rounded-lg p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">山田 太郎</h3>
                  <p className="text-blue-600 font-semibold mb-3">代表取締役</p>
                  <p className="text-gray-600">
                    大手デベロッパーで20年以上の経験を積み、数多くの大規模プロジェクトを成功に導く。
                    2020年にRealableを設立。
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">佐藤 花子</h3>
                  <p className="text-blue-600 font-semibold mb-3">取締役COO</p>
                  <p className="text-gray-600">
                    都市計画コンサルタントとして15年の経験。
                    持続可能な都市開発のエキスパート。
                  </p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちの価値観</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">革新性</h3>
                  <p className="text-gray-600">
                    常に新しい価値を創造し、業界をリードする
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">持続可能性</h3>
                  <p className="text-gray-600">
                    環境と社会に配慮した開発を推進
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">信頼性</h3>
                  <p className="text-gray-600">
                    お客様との信頼関係を第一に考える
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            一緒に新たな価値を創造しませんか
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            不動産開発のご相談はお気軽にお問い合わせください
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}