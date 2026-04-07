import Image from "next/image";

export default function Features() {
  const features = [
    {
      num: "01.",
      title: "Estética Inconfundível",
      desc: "Unimos a força do brutalismo à elegância do luxo para criar interfaces que quebram o padrão e geram impacto visual imediato."
    },
    {
      num: "02.",
      title: "Experiências Imersivas",
      desc: "Foco absoluto na jornada do usuário. Aliamos layouts dinâmicos e microinterações para prender a atenção desde o primeiro segundo."
    },
    {
      num: "03.",
      title: "Alta Engenharia",
      desc: "Desenvolvimento hiper-otimizado com as stacks mais avançadas, garantindo velocidade extrema, SEO aprimorado e segurança máxima."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Image and Heading */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="w-full h-[400px] bg-zinc-900 rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent z-20 pointer-events-none mix-blend-overlay"></div>
            <Image 
              src="/images/features.png" 
              alt="Estética Digital" 
              fill 
              className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-6 text-white text-balance">
            Redefinindo o <span className="text-brand">Padrão Digital</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Abandonamos templates genéricos. Cada projeto é uma peça de arte funcional construída sob medida para transmitir exclusividade, autoridade e converter visitantes em clientes fiéis.
          </p>
        </div>

        {/* Right Side: Features List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex gap-6 group cursor-default">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand-dark group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
