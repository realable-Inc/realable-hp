"use client";

import ServiceCard, { Service } from "./ServiceCard";
import { getServiceSummaries } from "@/data/services";

const solutions: Service[] = getServiceSummaries();

export default function SolutionsShowcase() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-20">
        <div
          className="absolute inset-0 bg-emerald-500"
          style={{ opacity: 0.5, zIndex: -1 }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/services/header-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            zIndex: -1,
          }}
        ></div>
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-bold mb-6">
              プロジェクト一覧
            </h1>
            <p className="text-lg lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              AI技術を活用した革新的な不動産ソリューションの実績をご紹介します。
              <br />
              カードをクリックして、各サービスの詳細をご覧ください
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <ServiceCard key={solution.id} service={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            お客様のプロジェクトもお任せください
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            豊富な実績と経験を活かし、お客様の課題解決をサポートします
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            プロジェクトのご相談はこちら
          </a>
        </div>
      </section>
    </>
  );
}
