'use client';

export default function CompanyDetails() {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Main Content */}
      <div className="px-8 py-12">
        <div className="space-y-0">
          {/* 会社名 */}
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
            <dt className="font-semibold text-gray-800 text-base">会社名</dt>
            <dd className="text-gray-600 text-base col-span-2">リアラブル株式会社</dd>
          </div>

          {/* 役員 */}
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
            <dt className="font-semibold text-gray-800 text-base">役員</dt>
            <dd className="text-gray-600 text-base col-span-2">
              <div>代表取締役 肥川成希</div>
              <div>取締役 斉藤巧</div>
            </dd>
          </div>

          {/* 設立 */}
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
            <dt className="font-semibold text-gray-800 text-base">設立</dt>
            <dd className="text-gray-600 text-base col-span-2">2024年5月30日</dd>
          </div>

          {/* 事業内容 */}
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
            <dt className="font-semibold text-gray-800 text-base">事業内容</dt>
              <dd className="text-gray-600 text-base col-span-2">
                <ul className="space-y-1 list-none">
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>不動産の売買、賃貸借、管理、仲介、保有及び運用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>不動産に関するコンサルティング業務</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>宅地建物取引業</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>不動産業務における、インターネット等の通信ネットワーク及び電子技術を利用した各種情報提供サービス、情報収集サービス及びシステム提供</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>飲食店及び喫茶店の経営</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>住宅宿泊事業法に基づく住宅宿泊事業、住宅宿泊管理業及び住宅宿泊仲介業</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">・</span>
                    <span>前各号に附帯関連する一切の事業</span>
                  </li>
                </ul>
              </dd>
          </div>

          {/* 所在地 */}
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-200">
            <dt className="font-semibold text-gray-800 text-base">所在地</dt>
            <dd className="text-gray-600 text-base col-span-2">東京都台東区池之端三丁目3番9号</dd>
          </div>

          {/* URL */}
          <div className="grid grid-cols-3 gap-4 py-4">
            <dt className="font-semibold text-gray-800 text-base">URL</dt>
            <dd className="text-gray-600 text-base col-span-2">
              <a href="https://www.hakoma.tokyo/company" className="text-orange-500 hover:underline">
                https://www.hakoma.tokyo/company
              </a>
            </dd>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center space-y-4 pb-8">
        <div className="text-2xl font-bold text-gray-800">リアラブル株式会社</div>
        <div className="text-gray-600">
          <span>Contact: </span>
          <a href="mailto:contact@hakoma.tokyo" className="text-orange-500 hover:underline">contact@hakoma.tokyo</a>
        </div>
        <div className="text-sm text-gray-500">
          COPYRIGHT © 2024 リアラブル株式会社. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  );
}