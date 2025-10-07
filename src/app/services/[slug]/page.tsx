import { notFound } from 'next/navigation';
import { servicesData, getServiceById } from '@/data/services';

// Map service IDs to gradient and icon data
const serviceStyles = {
  'ai-matching': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  'price-prediction': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  'ocr-system': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  'sales-analysis': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
  },
  'reins-csv': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
  },
  'ai-chatbot': {
    gradient: 'from-emerald-500 to-emerald-600',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  }
};

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

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  const style = serviceStyles[slug as keyof typeof serviceStyles];

  if (!service || !style) {
    notFound();
  }

  return (
    <>
      {/* ヒーローセクション */}
      <section className={`bg-gradient-to-br ${style.gradient} text-white py-20 lg:py-28`}>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={style.icon} />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.description.title}
            </p>
          </div>
        </div>
      </section>

      {/* 概要セクション */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              サービス概要
            </h2>
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
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3`}></div>
                    <span className="text-slate-600">AIによる自動化</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3`}></div>
                    <span className="text-slate-600">業務効率の向上</span>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3`}></div>
                    <span className="text-slate-600">コスト削減</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className={`relative h-96 bg-gradient-to-br ${style.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                  <div className="text-white text-center">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={style.icon} />
                    </svg>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>
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
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br ${style.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 z-10`}>
                      {index + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                        <p className="text-slate-800 font-medium">{step}</p>
                      </div>
                    </div>
                  </div>
                  {index < service.operationFlow.steps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-6 bg-slate-300 transform -translate-x-1/2"></div>
                  )}
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
                <div key={index} className={feature.image ? "grid lg:grid-cols-2 gap-8 items-start" : "flex justify-center"}>
                  <div className={feature.image ? "text-left" : "text-left max-w-xl"}>
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
      {service.id === 'ai-matching' && (
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
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">CRM機能の搭載</h4>
                      <p className="text-slate-600">顧客情報の一元管理と営業活動の可視化</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">物件管理システム統合</h4>
                      <p className="text-slate-600">物件情報の一元化と効率的な管理体制構築</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">分析・レポート機能</h4>
                      <p className="text-slate-600">営業成果の分析とマッチング精度の継続的改善</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className={`w-3 h-3 bg-gradient-to-r ${style.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">モバイルアプリ対応</h4>
                      <p className="text-slate-600">外出先からでもリアルタイムで情報確認・更新が可能</p>
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
          <a
            href="/contact"
            className={`inline-block bg-gradient-to-r ${style.gradient} text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]`}
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </>
  );
}