import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col mb-16">
      <Hero />
      <Services />
      <Stats />
    </div>
  );
}
