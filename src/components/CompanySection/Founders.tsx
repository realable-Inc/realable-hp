'use client';

export default function Founders() {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">創業メンバー</h2>
        
        {/* Company Description Box */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center">
            <p className="text-slate-700 text-lg leading-relaxed">
              リアラブルは、<span className="text-emerald-600 font-semibold">東大卒の2名</span>により創立された不動産テックベンチャーです。<br />
              様々な業種・業界を経て得た知見と、<span className="text-blue-600 font-semibold">最先端の技術力</span>を持ち合わせています。
            </p>
          </div>
        </div>
      </div>

      {/* Founders Grid */}
      <div className="max-w-5xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* CEO/CFO */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-emerald-600 text-sm font-medium tracking-wide uppercase mb-3">CEO/CFO</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">肥川 成希</h3>
              <p className="text-slate-500 text-lg font-light">Naruki Hikawa</p>
            </div>
            <div className="text-slate-700 leading-relaxed text-base">
              東京大学経済学部卒業。宅地建物取引士。不動産仲介業での実務経験があり、業界知識が豊富にあります。過去には事業会社向けにデータ活用を目的とした経営コンサルティング・DXプロジェクトも手掛け、データドリブンな経営に関するノウハウを有しています。プログラミング（Python、VBA）とデータベースに関してもスキルを持ち、システム開発において的確な提案を致します。
            </div>
          </div>

          {/* CTO */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-3">CTO</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">齊藤 巧</h3>
              <p className="text-slate-500 text-lg font-light">Takumi Saito</p>
            </div>
            <div className="text-slate-700 leading-relaxed text-base">
              東京大学大学院工学系研究科機械工学専攻修了後、大手メーカーでエンジニアとして経験を積んだ後フリーランスとして独立、独立後AIベンチャーから大手テック企業に至るまで様々なプロジェクトに携わりました。AI、データサイエンス、そしてソフトウェア開発の全領域において豊富な実務経験を有しています。また、AIコンペでの入賞歴を持ち、最新技術に関する知見も豊富なため、先進的な不動産テックとして新たなサービスを生み出す技術力があります。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}