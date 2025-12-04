'use client';

export default function Founders() {
  return (
    <>
      {/* 創業メンバー Section */}
      <div className="mt-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">創業メンバー</h2>
          <div className="border border-gray-300 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              リアラブルは、東大卒の2名により創立された不動産テックベンチャーです。<br />
              様々な業種・業界を経て得た知見と、最先端の技術力を持ち合わせています。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* CEO/CFO */}
          <div className="text-center">
            <div className="mb-6">
              <h4 className="text-2xl font-medium text-gray-600 mb-3">CEO/CFO</h4>
              <h3 className="text-6xl font-light text-emerald-500 mb-3 leading-tight">肥川成希</h3>
              <p className="text-2xl text-emerald-500 font-medium">Naruki hikawa</p>
            </div>
            <div className="text-left text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              <p>
                東京大学経済学部卒業。宅地建物取引士。不動産仲介業での実務経験があり、業界知識が豊富にあります。過去には事業会社向けにデータ活用を目的とした経営コンサルティング・DXプロジェクトも手掛け、データドリブンな経営に関するノウハウを有しています。プログラミング（Python、VBA）とデータベースに関してもスキルを持ち、システム開発において的確な提案を致します。
              </p>
            </div>
          </div>

          {/* CTO */}
          <div className="text-center">
            <div className="mb-6">
              <h4 className="text-2xl font-medium text-gray-600 mb-3">CTO</h4>
              <h3 className="text-6xl font-light text-emerald-500 mb-3 leading-tight">斉藤巧</h3>
              <p className="text-2xl text-emerald-500 font-medium">Takumi saito</p>
            </div>
            <div className="text-left text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
              <p>
                東京大学東大工学系研究科機械工学専攻修了後、大手メーカーでエンジニアとして経験を積んだ後フリーランスとして独立、独立後AIベンチャーから大手テック企業に至るまで様々なプロジェクトに携わりました。AI、データサイエンス、そしてソフトウェア開発の全領域において豊富な実務経験を有しています。また、AIコンペでの入賞歴を持ち、最新技術に関する知見も豊富なため、先進的な不動産テックとして新たなサービスを生み出す技術力があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}