import HeroCarousel from "@/components/home/HeroCarousel";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CompanyStats from "@/components/home/CompanyStats";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <CompanyStats />
      <FeaturedProjects />
    </>
  );
}
