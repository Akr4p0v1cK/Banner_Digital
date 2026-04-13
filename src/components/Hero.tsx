"use client";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-transparent">
      <div className="sticky top-0 left-0 w-full h-screen flex items-center pt-20 bg-transparent">
        
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between relative z-10 gap-8 lg:gap-0 h-full"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 relative z-20">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-bold tracking-[0.2em] uppercase text-[0.7rem] sm:text-sm mb-0 lg:mb-2 relative hidden lg:block"
            >
              Olá
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-brand-dark"></span>
            </motion.h4>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mt-2 lg:mt-0"
            >
              Transformando<br />
              <span className="text-brand-dark inline-block mt-1 lg:mt-2 relative">
                visões em experiências de elite.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-400 text-sm sm:text-base md:text-xl max-w-lg leading-relaxed mt-2 lg:mt-4 drop-shadow-md"
            >
              Especialista em unir design de alto impacto e tecnologia de ponta para posicionar sua marca no topo do mercado digital.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 lg:mt-6 px-6 lg:px-8 py-3 lg:py-4 bg-brand-dark hover:bg-brand text-white hover:text-black font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(88,15,28,0.4)] text-sm lg:text-base"
            >
              Ver Portfólio <span>→</span>
            </motion.button>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[800px] flex justify-center items-end mt-4 lg:mt-0">
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute top-[20%] lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center z-0"
            >
              <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem] font-black text-white leading-none whitespace-nowrap opacity-90 drop-shadow-2xl">
                FULLSTACK
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] h-full flex items-end justify-center pointer-events-none"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full lg:w-[85%] h-full lg:h-[85%] relative overflow-visible flex items-end justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 lg:from-black lg:via-black/50"></div>
                
                {/* Touch Group Container to enable active states on mobile */}
                <div className="group w-full h-[90%] lg:h-full relative overflow-hidden rounded-t-[60px] lg:rounded-t-[100px] border-b border-brand-dark/30 backdrop-blur-[2px] pointer-events-auto cursor-pointer">
                  <Image 
                    src="/images/hero_perfil.png" 
                    alt="Banner Digital Portrait" 
                    fill 
                    className="object-cover object-top grayscale group-hover:grayscale-0 active:grayscale-0 transition-all duration-700 opacity-95 group-hover:scale-105 active:scale-105" 
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-5 lg:bottom-10 left-1/2 -translate-x-1/2 w-[150%] text-center z-20 pointer-events-none"
            >
              <h2 
                className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] font-black leading-none whitespace-nowrap text-transparent drop-shadow-lg"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.7)' }}
              >
                FULLSTACK
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
