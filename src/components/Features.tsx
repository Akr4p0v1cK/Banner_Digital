import Image from "next/image";

export default function Features() {
  const features = [
    {
      num: "01.",
      title: "Diagnóstico",
      desc: "Identificação de gargalos na conversão."
    },
    {
      num: "02.",
      title: "Execução",
      desc: "Desenvolvimento de interface exclusiva e veloz."
    },
    {
      num: "03.",
      title: "Resultado",
      desc: "Aumento métrico em engajamento e vendas."
    }
  ];

  return (
    <section className="w-full py-24 bg-transparent">
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
            Inovação que gera resultado: <span className="text-brand">O Case Premium</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Uma análise profunda de como aplicamos design centrado no usuário para escalar o faturamento e a presença digital deste projeto.
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
