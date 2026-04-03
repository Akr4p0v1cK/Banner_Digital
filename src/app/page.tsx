import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import DesignSkills from "@/components/DesignSkills";
import Features from "@/components/Features";
import Resume from "@/components/Resume";
import PortfolioGallery from "@/components/PortfolioGallery";
import BlogAndCTA from "@/components/BlogAndCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-0 bg-[#0a0a0a]">
      {/* 
        This is the main aggregation page that stacks all the modules
        to form the full digital banner/portfolio
      */}
      <Hero />
      <Services />
      <Stats />
      <DesignSkills />
      <Features />
      <Resume />
      <PortfolioGallery />
      <BlogAndCTA />
      <Footer />
    </div>
  );
}
