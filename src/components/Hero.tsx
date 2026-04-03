export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-4 md:px-12 overflow-hidden bg-black text-white border-b-2 border-zinc-900 border-solid">
      {/* 90/10 asymmetric typography */}
      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col items-start mix-blend-difference pointer-events-none">
        <h2 className="text-brand text-xl md:text-3xl font-mono tracking-tighter mb-4 pointer-events-auto">HELLO, I'M JANE COOPER</h2>
        <h1 className="text-[14vw] leading-[0.8] font-black tracking-tighter uppercase mb-12 w-[120%] -ml-[5%] pointer-events-auto">
          Web <br /> Designer.
        </h1>
        <div className="w-full md:w-1/3 md:ml-auto pointer-events-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth.
          </p>
          <a href="#projects" className="inline-block mt-8 text-brand border-b-2 border-brand pb-1 font-mono uppercase tracking-widest hover:text-white hover:border-white transition-colors duration-300">
            [ View Portfolio ]
          </a>
        </div>
      </div>

      {/* Layered Image background (Z-axis overlap) */}
      <div className="absolute top-[10%] right-0 md:right-[15%] w-[80%] md:w-[40%] aspect-[3/4] z-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out origin-center hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://reeni-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-user-image-one.png&w=1080&q=75" 
          alt="Jane Cooper" 
          className="w-full h-full object-cover mix-blend-luminosity"
        />
      </div>
    </section>
  );
}
