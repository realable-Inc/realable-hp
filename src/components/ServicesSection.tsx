'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            サービス一覧
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* 従来のフロー */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">従来のフロー</h4>
                
                {/* 従来フロー画像プレースホルダー */}
                <div className="bg-slate-100 rounded-2xl p-8 aspect-video flex items-center justify-center mb-4">
                  <div className="text-center text-slate-500">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium">従来フローの図解</p>
                    <p className="text-sm mt-1">（複雑な仲介プロセス）</p>
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
                <h4 className="text-xl font-bold text-emerald-800 mb-4 text-center">ハコマのフロー</h4>
                
                {/* ハコマフロー画像プレースホルダー */}
                <div className="bg-emerald-50 rounded-2xl p-8 aspect-video flex items-center justify-center mb-4 border border-emerald-200">
                  <div className="text-center text-emerald-600">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p className="font-medium">ハコマフローの図解</p>
                    <p className="text-sm mt-1">（直接マッチング）</p>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 左側：画像 */}
              <div className="bg-slate-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm6 2l5 5-5 5V9l-3 3-2-2 5-5z" />
                  </svg>
                  <p className="text-lg font-medium">サービス画面の写真</p>
                  <p className="text-sm mt-2">（ここに実際のサービス画面を表示）</p>
                </div>
              </div>
              
              {/* 右側：テキストコンテンツ */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-800 mb-6">
                  フリマ感覚で退去する物件を自分で掲載 / 入居希望者と直接交渉
                </h4>
                
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-semibold text-orange-500">退去者</span>はオフィスの写真や詳細情報をフリーマーケット感覚で簡単に掲載でき、<span className="font-semibold text-orange-500">入居希望者</span>はこれらのリスティングから<span className="underline">直接退去者とチャット上で造作物や設備の売却交渉を進めることが可能です</span>。<span className="font-semibold text-orange-500">退去者</span>は原状回復費用を削減するだけでなく売却により次の移転の原資を確保でき、<span className="font-semibold text-orange-500">入居希望者</span>は入居後すぐにビジネスをスタートできます。
                  </p>
                  
                  <p>
                    <span className="font-semibold text-orange-500">オーナー</span>にとっても、退去者が自ら次の入居者を見つけてきてくれることによって、<span className="underline">費用や空室期間のリスクを軽減することができ、居抜きでの解約を承諾しやすくなります</span>。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-slate-700">
                LPはこちら → 
                <a 
                  href="https://www.hakoma.tokyo/inuki-taikyo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 hover:underline ml-1"
                >
                  https://www.hakoma.tokyo/inuki-taikyo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}