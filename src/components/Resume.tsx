
export default function Resume() {
  const education = [
    { title: "Direção de Arte Digital", date: "Desde 2018", desc: "Criação de identidades visuais de alta conversão e direção criativa para corporações premium do mercado." },
    { title: "UX/UI Estratégico", date: "Desde 2020", desc: "Desenvolvimento de jornadas de usuário focadas em retenção, usabilidade avançada e performance absoluta." }
  ];

  const experience = [
    { title: "Desenvolvimento Frontend", date: "Next.js & React", desc: "Engenharia de ponta garantindo carregamentos instantâneos, interações ultra fluídas e integrações nativas." },
    { title: "Growth e Marketing", date: "SEO & Escala", desc: "Arquitetura técnica voltada para a captura massiva de leads e o posicionamento agressivo em mecanismos de busca." }
  ];

  return (
    <section className="w-full py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-brand"></span>
            Trajetória
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
            Especialidades
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
