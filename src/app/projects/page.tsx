import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 'urban-complex',
    title: '都心複合開発プロジェクト',
    challenge: '限られた敷地で複数の機能を効率的に配置し、地域の活性化を図る必要がありました。',
    solution: 'オフィス・商業・住宅を垂直統合し、公共空間を創出することで、地域のランドマークとなる複合施設を実現しました。',
    category: '複合開発',
    image: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    id: 'suburban-residence',
    title: '郊外住宅地開発',
    challenge: '自然環境を保護しながら、快適な住環境を提供する必要がありました。',
    solution: 'グリーンインフラを活用し、エコフレンドリーな住宅地を開発。持続可能なコミュニティを形成しました。',
    category: '住宅開発',
    image: 'bg-gradient-to-br from-green-500 to-green-700'
  },
  {
    id: 'commercial-renovation',
    title: '商業施設リノベーション',
    challenge: '老朽化した商業施設の集客力低下と、変化する消費者ニーズへの対応が課題でした。',
    solution: 'デジタル技術を活用した体験型施設へと転換し、新たな価値を創出しました。',
    category: 'リノベーション',
    image: 'bg-gradient-to-br from-purple-500 to-purple-700'
  },
  {
    id: 'waterfront-development',
    title: 'ウォーターフロント開発',
    challenge: '水辺の魅力を活かしながら、防災性能も確保する必要がありました。',
    solution: '親水空間と防災機能を両立させた、レジリエントな開発を実現しました。',
    category: '都市開発',
    image: 'bg-gradient-to-br from-cyan-500 to-cyan-700'
  },
  {
    id: 'smart-city',
    title: 'スマートシティプロジェクト',
    challenge: 'IoT技術を活用した都市インフラの構築と、住民のプライバシー保護の両立が課題でした。',
    solution: 'データ活用とセキュリティを両立させた、次世代型都市システムを構築しました。',
    category: 'スマートシティ',
    image: 'bg-gradient-to-br from-orange-500 to-orange-700'
  },
  {
    id: 'station-area',
    title: '駅前再開発プロジェクト',
    challenge: '交通結節点としての機能強化と、地域の賑わい創出の両立が求められました。',
    solution: '交通・商業・業務機能を集約し、地域の新たな拠点を創出しました。',
    category: '都市再開発',
    image: 'bg-gradient-to-br from-red-500 to-red-700'
  }
];

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            プロジェクト実績
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            これまでに手がけた多様なプロジェクトの実績をご紹介します
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-center text-gray-600">
              カード内の「課題」「ソリューション」ボタンをクリックして、プロジェクトの詳細をご覧ください
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            次のプロジェクトもお任せください
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            豊富な実績と経験を活かし、お客様のプロジェクトを成功へ導きます
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            プロジェクトのご相談はこちら
          </a>
        </div>
      </section>
    </>
  );
}