import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">REALABLE</h3>
            <p className="text-gray-400">
              不動産開発コンサルティング
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">
                  開発コンサルティング
                </Link>
              </li>
              <li>
                <Link href="/services#project-management" className="text-gray-400 hover:text-white transition-colors">
                  プロジェクトマネジメント
                </Link>
              </li>
              <li>
                <Link href="/services#market-research" className="text-gray-400 hover:text-white transition-colors">
                  市場調査・分析
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  実績紹介
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 mb-2">
              東京都港区虎ノ門
            </p>
            <p className="text-gray-400 mb-2">
              TEL: 03-XXXX-XXXX
            </p>
            <p className="text-gray-400">
              Email: info@realable.tokyo
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Realable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}