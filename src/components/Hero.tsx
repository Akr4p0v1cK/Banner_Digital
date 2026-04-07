import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
      {/* Background patterned overlay could go here */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(88, 15, 28, 0.4) 0%, transparent 20%)' }}></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center relative z-10 gap-16 lg:gap-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 relative z-20">
          <h4 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-2">Hello</h4>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Transformando<br />
            <span className="text-brand-dark inline-block mt-2 relative">
              visões em experiências digitais de elite.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mt-4">
            Especialista em unir design de alto impacto e tecnologia de ponta para posicionar sua marca no topo do mercado digital.
          </p>

          <button className="mt-6 px-8 py-4 bg-brand-dark hover:bg-brand text-white hover:text-black font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(88,15,28,0.4)]">
            Iniciar meu Projeto <span>→</span>
          </button>
        </div>

        {/* Right Content - The massive text and image */}
        <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px] flex justify-center items-end">
          
          {/* Background Solid Text (Behind) */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center z-0">
            <h2 className="text-[6rem] lg:text-[10rem] font-black text-white leading-none whitespace-nowrap opacity-90">
              FULLSTACK
            </h2>
          </div>

          {/* Portrait Image (Middle) */}
          <div className="relative z-10 w-full max-w-[500px] h-full flex items-end justify-center pointer-events-none">
            <div className="w-[80%] h-[80%] bg-zinc-800 rounded-t-full relative overflow-hidden border-b-0 border border-zinc-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
              <Image 
                src="/images/hero.png" 
                alt="Banner Digital Portrait" 
                fill 
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 opacity-90" 
                priority
              />
            </div>
          </div>

          {/* Outline Text (Front / Bottom) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[150%] text-center z-20 pointer-events-none">
            <h2 
              className="text-[4rem] lg:text-[7rem] font-black leading-none whitespace-nowrap text-transparent"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
            >
              FULLSTACK
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
