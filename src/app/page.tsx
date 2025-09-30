import HeroSection from '@/components/HeroSection';
import VennDiagram from '@/components/CompanySection/VennDiagram';
import Founders from '@/components/CompanySection/Founders';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import RealEstateSection from '@/components/RealEstateSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <VennDiagram />
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <Founders />
        </div>
      </section>
      <ServicesSection showHeader={false} />
      <ProjectsSection />
      <RealEstateSection />
    </>
  );
}