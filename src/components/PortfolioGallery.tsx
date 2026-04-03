import { ArrowUpRight } from "lucide-react";

export default function PortfolioGallery() {
  const projects = [
    { title: "Digital Transformation Advisors", category: "Development Coaches" },
    { title: "Dynamic App Development", category: "App Development" },
    { title: "Immersive Web Experience", category: "Web Design" },
    { title: "Strategic Brand Identity", category: "Art Direction" }
  ];

  return (
    <section className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16 text-center">
          A Showcase of <span className="text-brand">My Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative block overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 cursor-pointer">
              {/* Image Container */}
              <div className="w-full h-[400px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/20 to-transparent z-10"></div>
                <div className="w-full h-full bg-zinc-800 transition-transform duration-700 group-hover:scale-110"></div>
                
                {/* Arrow Icon that animated on hover */}
                <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500">
                  <ArrowUpRight strokeWidth={3} />
                </div>
              </div>
              
              {/* Content text */}
              <div className="p-8 absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-2">
                  {proj.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                  {proj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Small tags below portfolio */}
        <div className="mt-20 flex flex-wrap gap-8 justify-center">
          {[
            { label: "Ui/visual Design", done: "21 Done" },
            { label: "Motion Design", done: "20 Done" },
            { label: "Brand Identity", done: "15 Done" },
          ].map((tag, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-black border border-white/10 rounded-xl min-w-[200px] hover:border-brand-dark transition-colors group">
              <h4 className="text-xl font-bold text-white group-hover:text-brand-dark transition-colors">{tag.label}</h4>
              <p className="text-brand font-bold mt-2">{tag.done}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
