import HeroSection from '@/components/HeroSection';
import VennDiagram from '@/components/CompanySection/VennDiagram';
import Founders from '@/components/CompanySection/Founders';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <VennDiagram />
          <Founders />
        </div>
      </section>
      <ProjectsSection />
    </>
  );
}