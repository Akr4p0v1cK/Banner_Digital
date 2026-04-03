import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <header className="fixed top-0 w-full p-4 md:p-8 flex items-center justify-between z-50 mix-blend-difference text-white pointer-events-none">
        <h1 className="font-bold tracking-widest uppercase text-xl md:text-2xl pointer-events-auto">Reeni.</h1>
        <button className="font-mono text-sm uppercase tracking-widest hover:text-brand transition-colors pointer-events-auto bg-black border border-white hover:border-brand px-4 py-2">Menu [=]</button>
      </header>
      
      <Hero />
      <ProjectShowcase />
      <Skills />
      
      <footer className="py-16 bg-black text-center text-zinc-600 font-mono text-xs md:text-sm border-t-8 border-brand border-solid flex flex-col items-center gap-8">
        <div className="flex gap-8 justify-center mb-4">
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
        </div>
        <p className="uppercase tracking-widest text-zinc-500 max-w-md mx-auto leading-relaxed">
          &copy; 2025 JANE COOPER.<br/>
          BRUTALIST PORTFOLIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
