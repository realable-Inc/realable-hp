import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: '居抜きマッチングサービス「Hakoma」| リアラブル株式会社',
  description: '退去者と入居者を直接マッチングさせることで、居抜きをスムーズに実現するWebサービス「ハコマ」。フリマ感覚で物件を掲載し、直接交渉が可能です。',
};

export default function HakomaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30"></div>
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="relative container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                居抜きマッチングサービス
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Hakoma
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              退去者と入居者を直接マッチング
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 shadow-xl">
                <p className="text-lg text-slate-700 leading-relaxed">
                  リアラブルは、居抜きオフィスのマッチングを目的としたWebサービス
                  <span className="text-emerald-600 font-bold text-xl mx-2">「ハコマ」</span>
                  を運営しています。
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-4">
                  居抜きをスムーズに実現し、コスト削減と迅速な開業をサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Comparison Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              従来のフローとハコマの違い
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              居抜きにかかる手数料や時間を最小限に抑え、スムーズな取引を実現します
            </p>
          </div>
          <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-200 animate-fade-in-up">
            <Image
              src="/images/services/hakoma/hakoma-1.png"
              alt="従来のフローとハコマのフローの比較"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ハコマの特徴
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              フリマ感覚で物件を掲載し、直接交渉が可能なマッチングサービス
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Service Screenshot */}
            <div className="relative order-2 md:order-1 animate-fade-in-left">
              <div className="relative bg-gradient-to-br from-emerald-50 to-white p-4 rounded-2xl">
                <Image
                  src="/images/services/hakoma/hakoma-2.png"
                  alt="ハコマのサービス画面"
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-xl shadow-2xl border border-slate-200"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600 mb-4">（実際のサービス画面）</p>
                <Link
                  href="https://www.hakoma.tokyo/inuki-taikyo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all">
                    サービスサイトを見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Service Features */}
            <div className="space-y-8 order-1 md:order-2 animate-fade-in-right">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      フリマ感覚で物件を掲載
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="text-emerald-600 font-semibold">退去者</span>
                      はオフィスの写真や詳細情報をフリーマーケット感覚で簡単に掲載できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      入居希望者と直接交渉
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      <span className="text-emerald-600 font-semibold">入居希望者</span>
                      は直接退去者とチャット上で造作物や設備の売却交渉を進めることが可能です。
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-200 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      オーナーにもメリット
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      退去者が自ら次の入居者を見つけてくれることで、
                      <span className="font-semibold text-emerald-700">賃料や空室期間のリスクを軽減</span>
                      できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Management Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              商業物件の管理・仲介
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              宅地建物取引業者として、積極的な提案力をもった不動産業務を提供
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-12 shadow-xl">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    リアラブルは、<span className="font-semibold text-slate-900">宅地建物取引業者</span>として商業物件の管理・仲介も行っています。
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mt-3">
                    居抜き物件・オフィス、店舗向け物件を中心に<span className="font-semibold text-emerald-600">積極的な提案力</span>をもった不動産業務を提供します。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
              <Image
                src="/images/services/hakoma/hakoma-3.png"
                alt="商業物件の管理・仲介"
                width={900}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600"></div>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white)]"></div>

        <div className="relative container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ハコマについてもっと知りたい方へ
            </h3>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
              居抜きマッチングサービス「ハコマ」の詳細は公式サイトをご覧ください
            </p>
            <Link
              href="https://www.hakoma.tokyo/inuki-taikyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-emerald-600 hover:bg-slate-50 text-lg px-10 py-7 shadow-2xl hover:shadow-xl transition-all hover:scale-105">
                サービスサイトを見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}