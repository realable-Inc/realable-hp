'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            居抜きマッチングサービス
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            リアラブルは、居抜きオフィスのマッチングを目的としたWebサービス「ハコマ」を運営しています。<br />
            退去者と入居者を直接マッチングさせることで、居抜きをスムーズに実現することができます。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* フロー比較図 */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                従来のフロー vs ハコマのフロー
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 従来のフロー */}
              <div className="space-y-6">
                <div className="bg-slate-100 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-6 text-center">従来のフロー</h4>
                  
                  {/* 人物アイコン */}
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium">退去者</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium">入居者</div>
                    </div>
                  </div>

                  {/* プロセスボックス */}
                  <div className="space-y-4">
                    <div className="bg-slate-200 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-slate-700">退去予告 居抜の買取交渉</div>
                    </div>
                    <div className="bg-slate-200 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-slate-700">物件案内 仲介</div>
                    </div>
                  </div>

                  {/* オーナー・業者 */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-2 py-1 rounded-full text-xs font-medium">オーナー & 居抜き業者</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600 text-center">
                    居抜きにできるかどうかは、不動産屋・オーナーに依存。<br />
                    物件情報も伝わりづらく、手数料も取られる。
                  </p>
                </div>
              </div>

              {/* ハコマのフロー */}
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <h4 className="text-lg font-bold text-emerald-800 mb-6 text-center">ハコマのフロー</h4>
                  
                  {/* 人物アイコン */}
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium">退去者</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-8 h-8 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full text-sm font-medium">入居者</div>
                    </div>
                  </div>

                  {/* プロセスボックス */}
                  <div className="space-y-4">
                    <div className="bg-emerald-200 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-emerald-800">直接交渉 案内</div>
                    </div>
                    <div className="bg-emerald-200 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-emerald-800">契約のみ サポート依頼</div>
                    </div>
                  </div>

                  {/* パートナー・オーナー */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-emerald-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-2 py-1 rounded-full text-xs font-medium">パートナー 不動産業者</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mb-2">
                        <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <div className="bg-white px-2 py-1 rounded-full text-xs font-medium">オーナー & 管理会社</div>
                    </div>
                  </div>

                  {/* 交渉ボックス */}
                  <div className="flex justify-center mt-4">
                    <div className="bg-slate-200 rounded-lg px-4 py-2">
                      <div className="text-sm font-medium text-slate-700">交渉</div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <p className="text-sm text-emerald-700 text-center">
                    退去者と入居者が直接交渉・情報交換し、スムーズに居抜きが実現。<br />
                    手数料も最小限に抑えられる。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ハコマサービス詳細 */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 mb-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                「ハコマ」
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                居抜きのマッチングサービス「ハコマ」
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* 特徴 */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    フリマ感覚で退去する物件を自分で掲載
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    退去者はオフィスの写真や詳細情報をフリーマーケット感覚で簡単に掲載できます。
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    入居希望者と直接交渉
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    入居希望者はこれらのリスティングから直接退去者とチャット上で造作物や設備の売却交渉を進めることが可能です。
                  </p>
                </div>
              </div>

              {/* メリット */}
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                  <h4 className="text-lg font-bold text-emerald-800 mb-4">退去者のメリット</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      原状回復費用を削減
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      売却により次の移転の原資を確保
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">入居希望者のメリット</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      入居後すぐにビジネスをスタート
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      必要な設備が既に整っている
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <h4 className="text-lg font-bold text-purple-800 mb-4">オーナーのメリット</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      費用や空室期間のリスクを軽減
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      居抜きでの解約を承諾しやすくなる
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">実際のサービス画面をご覧ください</h4>
                <p className="text-emerald-100 mb-6">LPはこちら</p>
                <a 
                  href="https://www.hakoma.tokyo/inuki-taikyo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition-colors"
                >
                  https://www.hakoma.tokyo/inuki-taikyo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}