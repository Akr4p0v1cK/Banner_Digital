
export default function Resume() {
  const education = [
    { title: "Trainer Marketing", date: "2005-2009", desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills." },
    { title: "Assistant Director", date: "2010-2014", desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs." }
  ];

  const experience = [
    { title: "Design Assistant", date: "2008-2012", desc: "I’ve had the privilege of working with various clients, from startups to established companies." },
    { title: "Design Assistant", date: "2008-2012", desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s needs." }
  ];

  return (
    <section className="w-full py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-brand"></span>
            Education
          </h2>
          <div className="relative border-l border-brand-dark/30 ml-3 flex flex-col gap-12">
            {education.map((item, i) => (
              <div key={i} className="pl-10 relative group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-brand group-hover:bg-brand transition-colors shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <div className="inline-block px-4 py-1 rounded-full bg-brand-dark/20 text-brand text-sm font-semibold mb-4 border border-brand-dark/50">
                  {item.date}
                </div>
                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-brand-dark"></span>
            Experiences
          </h2>
          <div className="relative border-l border-brand/30 ml-3 flex flex-col gap-12">
            {experience.map((item, i) => (
              <div key={i} className="pl-10 relative group">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-brand-dark group-hover:bg-brand-dark transition-colors shadow-[0_0_10px_rgba(88,15,28,0.5)]"></div>
                <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                <div className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4 border border-brand/30">
                  {item.date}
                </div>
                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
