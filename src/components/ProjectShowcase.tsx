const projects = [
  { id: "01", title: "Digital Transformation Advisors", tag: "Development Coaches", img: "https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flatest-portfolio%2Fportfoli-img-1.jpg&w=3840&q=75" },
  { id: "02", title: "My work is driven by the belief", tag: "Development App", img: "https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flatest-portfolio%2Fportfoli-img-2.jpg&w=3840&q=75" },
  { id: "03", title: "A curated selection", tag: "Web Design", img: "https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flatest-portfolio%2Fportfoli-img-3.jpg&w=3840&q=75" },
  { id: "04", title: "Privilege of working with various", tag: "App Development", img: "https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flatest-portfolio%2Fportfoli-img-4.jpg&w=3840&q=75" },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-32 px-4 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter w-full md:w-2/3 leading-none">
            Transforming<br/>Ideas Into<br/><span className="text-brand">Exceptional</span>
          </h2>
          <p className="w-full md:w-1/3 mt-8 md:mt-0 text-zinc-400">
            Business consulting consultants provide expert advice and guida businesses to help them improve their performance.
          </p>
        </div>

        {/* Asymmetric 90/10 Layout with Hover Images */}
        <div className="flex flex-col gap-0 border-t border-zinc-800 border-solid relative">
          {projects.map((proj) => (
            <a key={proj.id} href="#" className="group flex flex-col items-start md:flex-row md:items-baseline justify-between py-12 border-b border-zinc-800 border-solid hover:bg-zinc-950 transition-colors px-4 relative overflow-hidden md:overflow-visible">
              <div className="flex flex-col md:flex-row items-start md:items-baseline gap-4 md:gap-16 z-10 w-full md:w-2/3">
                <span className="text-sm font-mono text-brand border border-brand px-2 py-1 rounded-none group-hover:bg-brand group-hover:text-black transition-colors">{proj.id}</span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:pl-4 transition-all duration-300">
                  {proj.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 z-10 font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest w-full md:w-1/3 md:text-right">
                {proj.tag}
              </div>
              
              {/* Image Reveal (CSS Hover based) */}
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] xl:w-[450px] xl:h-[300px] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 pointer-events-none z-0 hidden lg:block overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
