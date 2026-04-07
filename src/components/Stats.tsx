export default function Stats() {
  const rightStats = [
    { value: "250+", label: "Projetos Entregues" },
    { value: "50+", label: "Marcas Escaladas" },
    { value: "100%", label: "Satisfação" },
    { value: "5+", label: "Prêmios de Design" },
  ];

  return (
    <section className="w-full py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Left Card */}
          <div className="w-full lg:w-5/12 bg-[#111111] rounded-2xl p-10 md:p-14 border border-white/5 flex flex-col justify-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-[6rem] md:text-[8rem] font-black text-brand leading-none">10+</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Anos De <br/> Experiência
              </h3>
            </div>
            
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Mais de uma década transformando visão em realidade digital. Desenvolvemos soluções com precisão milimétrica e estética inconfundível.
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rightStats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-[#111111] rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-white/5 hover:border-brand/30 transition-all group"
              >
                <h4 className="text-5xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {stat.value}
                </h4>
                <span className="text-zinc-500 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
