import { notFound } from "next/navigation";
import { servicesData, getServiceById } from "@/data/services";
import Link from "next/link";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      {/* ヒーローセクション - 低不透明度エメラルド色オーバーレイ＋画像 */}
      <section className="relative h-50">
        <div
          className="absolute inset-0 bg-emerald-500"
          style={{ opacity: 0.3, zIndex: 1 }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/services/header-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: 0,
          }}
        ></div>
      </section>

      {/* 概要セクション */}
      <section className="py-20 lg:py-17 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              {service.overview}
            </p>
          </div>

          {service.overviewImage && (
            <div className="relative max-w-2xl mx-auto">
              <img
                src={service.overviewImage}
                alt={`${service.title} Overview`}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          )}

          {/* 概要画像がないサービス用のデフォルト概要 */}
          {!service.overviewImage && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3`}
                    ></div>
                    <span className="text-slate-600">AIによる自動化</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3`}
                    ></div>
                    <span className="text-slate-600">業務効率の向上</span>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3`}
                    ></div>
                    <span className="text-slate-600">コスト削減</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className={`relative h-96 bg-gradient-to-br rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <div className="text-white text-center">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 opacity-80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 外部リンクボタン */}
          {service.externalLink && (
            <div className="text-center mt-12">
              <a
                href={service.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {/* Chrome icon */}
                <img
                  src="/images/icons/chrome.svg"
                  alt="Chrome"
                  className="w-6 h-6 mr-3"
                />
                {service.externalLink.label}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 運用フローセクション */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {service.operationFlow.title}
              </h2>
            </div>

            <div className="space-y-6">
              {service.operationFlow.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 z-10 bg-emerald-500`}
                    >
                      {index + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                        <p className="text-slate-800 font-medium">{step}</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {service.features.title}
              </h2>
            </div>

            <div className="space-y-16">
              {service.features.points.map((feature, index) => (
                <div
                  key={index}
                  className={
                    feature.image
                      ? "grid lg:grid-cols-2 gap-8 items-start"
                      : "flex justify-center"
                  }
                >
                  <div
                    className={
                      feature.image ? "text-left" : "text-left max-w-xl"
                    }
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {feature.image && (
                    <div className="flex justify-center lg:justify-end">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full max-w-md h-auto rounded-2xl shadow-xl"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 今後の展望セクション - AIマッチングのみ */}
      {service.id === "ai-matching" && (
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/images/services/matching/matching-next.png"
                  alt="今後のサービス展望"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  今後のサービス展望
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  オーダーと物件の一元管理システムとして、より包括的なソリューションを提供予定です。
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3 mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        CRM機能の搭載
                      </h4>
                      <p className="text-slate-600">
                        顧客情報の一元管理と営業活動の可視化
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3 mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        物件管理システム統合
                      </h4>
                      <p className="text-slate-600">
                        物件情報の一元化と効率的な管理体制構築
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3 mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        分析・レポート機能
                      </h4>
                      <p className="text-slate-600">
                        営業成果の分析とマッチング精度の継続的改善
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r rounded-full mr-3 mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        モバイルアプリ対応
                      </h4>
                      <p className="text-slate-600">
                        外出先からでもリアルタイムで情報確認・更新が可能
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* お問い合わせセクション */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            このサービスについてお問い合わせ
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            詳細な資料やデモのご希望、導入に関するご相談はお気軽にお問い合わせください
          </p>
          <Link href="/contact">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                お問い合わせはこちら
              </button>
            </Link>
        </div>
      </section>
    </>
  );
}
