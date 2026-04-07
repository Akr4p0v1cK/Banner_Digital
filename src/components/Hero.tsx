"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
      {/* Background patterned overlay matching Reeni (geometric lines) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM29.58 3l-26.58 26.58v27.42h27.42L57 29.42V2H29.58zm-1.41 2.83l24.58 24.58v23.17H29.58L5 28.58V5.83h23.17zm-3.41 5.66L11.58 24.66v13.68H25.26L38.42 25.5V11.49H24.76zm-1.41 12.83L14.41 33.16v2.34H16.75L25.68 26.58v-2.26H23.35zM38.42 29.5v16.08H22.34L9.16 32.42V48.5H25.26L38.42 35.34v-5.84zm-5.66 12.08H28.09L15.91 49.34v-2.34l7.67-7.66v2.24zm-14.16-5.66L26.26 28.26H35.09L27.42 35.92H18.6z" fill="%23ffffff" fill-rule="evenodd"/></svg>')` }}></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(88, 15, 28, 0.4) 0%, transparent 40%)' }}></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 90% 80%, rgba(88, 15, 28, 0.3) 0%, transparent 40%)' }}></div>

      {/* Floating geometric accent */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border-[1px] border-white/5 rounded-full z-0 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center relative z-10 gap-16 lg:gap-0 h-full">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 relative z-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-2 relative"
          >
            Olá
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-brand-dark"></span>
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Transformando<br />
            <span className="text-brand-dark inline-block mt-2 relative">
              visões em experiências digitais de elite.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mt-4"
          >
            Especialista em unir design de alto impacto e tecnologia de ponta para posicionar sua marca no topo do mercado digital.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-4 bg-brand-dark hover:bg-brand text-white hover:text-black font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(88,15,28,0.4)]"
          >
            Ver Portfólio <span>→</span>
          </motion.button>
        </div>

        {/* Right Content - The massive text and image */}
        <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px] flex justify-center items-end">
          
          {/* Background Solid Text (Behind) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center z-0"
          >
            <h2 className="text-[5rem] md:text-[6rem] lg:text-[10rem] font-black text-white leading-none whitespace-nowrap opacity-90 drop-shadow-2xl">
              FULLSTACK
            </h2>
          </motion.div>

          {/* Portrait Image (Middle) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[500px] h-full flex items-end justify-center pointer-events-none"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[85%] h-[85%] relative overflow-visible flex items-end justify-center"
            >
              {/* Background gradient behind image for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10"></div>

              {/* V-shape background accent inspired by Reeni */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-dark/10 -z-10 blur-3xl opacity-50"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              ></div>
              
              <div className="w-full h-full bg-zinc-900/10 relative overflow-hidden rounded-t-[100px] border-b border-brand-dark/30 backdrop-blur-[2px]">
                <Image 
                  src="/images/hero_perfil.png" 
                  alt="Banner Digital Portrait" 
                  fill 
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 opacity-95 hover:scale-105" 
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Outline Text (Front / Bottom) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[150%] text-center z-20 pointer-events-none"
          >
            <h2 
              className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-black leading-none whitespace-nowrap text-transparent drop-shadow-lg"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
            >
              FULLSTACK
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
