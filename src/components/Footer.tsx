import Link from 'next/link';
import Image from 'next/image';
import { LICENSE_NUMBER } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">宅建免許番号</h4>
            <ul className="space-y-2"><li>{LICENSE_NUMBER}</li></ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">サービス</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.hakoma.tokyo/inuki-taikyo" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  居抜きマッチングサービス「Hakoma」
                </a>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  Hakoma -PSA-（営業支援AI）
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  不動産業務効率化AIツール
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  実績紹介
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-900">お問い合わせ</h4>
            <p className="text-slate-600 mb-2">
            東京都台東区池之端三丁目３番９号 花園アレイ403号室
            </p>
            <p className="text-slate-600">
              Email: contact@hakoma.tokyo
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-2 border-t border-slate-200 text-center">
          <div className="flex justify-center">
          <Image
              src="/images/services/logo.svg"
              alt="Realable Inc."
              width={150}
              height={10}
            />
          </div>
          <p className="text-slate-500">
            © 2024 Realable Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}