import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">リアラブル株式会社</h3>
            <p className="text-gray-400 mb-2">
              東京都台東区池之端三丁目３番９号
            </p>
            <p className="text-gray-400">
              contact@hakoma.tokyo
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  プロジェクト一覧
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  コンシューマー向け不動産サービス
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  ハコマとは
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 リアラブル株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}