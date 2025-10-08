import Link from "next/link";

export default function Thanks() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            お問い合わせを受け付けました。
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            ご入力いただいた内容を確認のうえ、2営業日以内に担当者よりご連絡いたします。<br />
          </p>
         

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              新しいお問い合わせ
            </Link>
            <Link
              href="/"
              className="inline-block bg-white text-emerald-500 border-2 border-emerald-500 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
