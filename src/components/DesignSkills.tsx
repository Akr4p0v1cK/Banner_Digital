export default function DesignSkills() {
  const designSkills = [
    { label: "FIGMA & UI/UX", value: 95 },
    { label: "MOTION DESIGN", value: 85 },
    { label: "ADOBE CREATIVE SUITE", value: 90 },
    { label: "BRANDING", value: 80 },
  ];
  const devSkills = [
    { label: "NEXT.JS & REACT", value: 95 },
    { label: "TAILWIND CSS", value: 95 },
    { label: "TYPESCRIPT", value: 88 },
    { label: "BACKEND & APIS", value: 80 },
  ];

  return (
    <section className="w-full py-20 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Design Skill */}
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Design</h2>
          <div className="flex flex-col gap-8">
            {designSkills.map((skill, index) => (
              <div key={index} className="flex flex-col gap-3 group">
                <span className="text-sm font-semibold tracking-wider text-zinc-300">{skill.label}</span>
                <div className="w-full h-2 bg-zinc-900 rounded-full relative overflow-visible">
                  <div 
                    className="absolute top-0 left-0 h-full bg-brand rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    style={{ width: `${skill.value}%` }}
                  >
                    <div className="absolute -right-3 -top-2 w-6 h-6 bg-brand-dark border-2 border-brand rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Development Skill */}
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Engenharia</h2>
          <div className="flex flex-col gap-8">
            {devSkills.map((skill, index) => (
              <div key={`dev-${index}`} className="flex flex-col gap-3 group">
                <span className="text-sm font-semibold tracking-wider text-zinc-300">{skill.label}</span>
                <div className="w-full h-2 bg-zinc-900 rounded-full relative overflow-visible">
                  <div 
                    className="absolute top-0 left-0 h-full bg-brand-dark rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(88,15,28,0.4)]"
                    style={{ width: `${skill.value}%` }}
                  >
                    <div className="absolute -right-3 -top-2 w-6 h-6 bg-brand border-2 border-brand-dark rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
