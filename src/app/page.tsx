import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import VennDiagram from '@/components/CompanySection/VennDiagram';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <VennDiagram />
        </div>
      </section>
      <ServicesSection showHeader={false} />
      <ProjectsSection />
    </>
  );
}
