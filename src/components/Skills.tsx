export default function Skills() {
  const stats = [
    { label: "Projects Complete", value: "120+" },
    { label: "Years Experience", value: "08+" },
    { label: "Global Clients", value: "240+" },
  ];

  const designSkills = [
    { name: "PHOTOSHOP", value: "100%" },
    { name: "FIGMA", value: "95%" },
    { name: "ADOBE XD", value: "60%" },
    { name: "ILLUSTRATOR", value: "70%" },
  ];

  return (
    <section className="py-32 px-4 md:px-12 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        
        {/* Massive Stats Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col-reverse group">
              <h4 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-brand transition-colors duration-300">{stat.label}</h4>
              <h3 className="text-7xl md:text-[8rem] font-black leading-none tracking-tighter text-black/50 group-hover:text-black transition-colors duration-500">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Sharp Bar Skills */}
        <div className="w-full lg:w-1/2 pt-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 px-4 py-2 border-l-8 border-brand tracking-tighter">Design Skill</h2>
          <div className="flex flex-col gap-12">
            {designSkills.map((skill, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex justify-between font-mono font-bold text-sm tracking-widest mb-4">
                  <span className="group-hover:text-brand transition-colors">{skill.name}</span>
                  <span>{skill.value}</span>
                </div>
                {/* 0px radius completely sharp progress bar */}
                <div className="w-full h-[4px] bg-black/30 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-brand !transition-all !duration-1000 ease-out" 
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
