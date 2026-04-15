"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const titleVariant = {
    hidden: { y: "120%", rotate: 2, opacity: 0 },
    visible: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-transparent">
      <div className="sticky top-0 left-0 w-full h-[100dvh] flex items-center pt-16 sm:pt-20 bg-transparent overflow-hidden">
        
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between relative z-10 gap-4 sm:gap-8 lg:gap-0 h-full"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 lg:gap-6 relative z-20">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[0.7rem] sm:text-sm mb-0 lg:mb-2 relative hidden lg:block"
            >
              Olá
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-brand-dark"></span>
            </motion.h4>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start w-full"
            >
              <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mt-2 lg:mt-0 text-center lg:text-left">
                <div className="overflow-hidden">
                  <motion.div variants={titleVariant} className="origin-bottom-left">
                    Transformando
                  </motion.div>
                </div>
                <div className="overflow-hidden mt-1 lg:mt-2">
                  <motion.div variants={titleVariant} className="origin-bottom-left">
                    <span className="text-brand-dark inline-block relative">
                      visões em experiências
                    </span>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div variants={titleVariant} className="origin-bottom-left">
                    <span className="text-brand-dark inline-block relative">
                      de elite.
                    </span>
                  </motion.div>
                </div>
              </h1>
              
              <motion.p 
                variants={titleVariant}
                className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed drop-shadow-md text-center lg:text-left"
              >
                Especialista em unir design de alto impacto e tecnologia de ponta para posicionar sua marca no topo do mercado digital.
              </motion.p>

              <motion.button 
                variants={titleVariant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover="true"
                className="mt-2 lg:mt-4 px-5 sm:px-6 lg:px-8 py-3 lg:py-4 bg-brand-dark hover:bg-brand text-white hover:text-black font-semibold rounded-full flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(88,15,28,0.4)] text-xs sm:text-sm lg:text-base cursor-none"
              >
                Ver Portfólio <span>→</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative h-[260px] sm:h-[380px] md:h-[450px] lg:h-[800px] flex justify-center items-end mt-2 lg:mt-0">
            
            {/* Background "FULLSTACK" text with blur */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute top-[20%] lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] text-center z-0"
            >
              <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] font-black text-white leading-none whitespace-nowrap opacity-80 drop-shadow-2xl backdrop-blur-[1px]">
                FULLSTACK
              </h2>
            </motion.div>

            {/* Profile Image */}
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
                {/* Glow effect behind portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent blur-3xl scale-110 z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 lg:from-[#0a0a0a] lg:via-[#0a0a0a]/50"></div>
                
                {/* Touch Group Container */}
                <div 
                  data-cursor-hover="true"
                  className="group w-full h-[90%] lg:h-full relative overflow-hidden rounded-t-[60px] lg:rounded-t-[100px] border-b border-brand-dark/30 backdrop-blur-[2px] pointer-events-auto cursor-none"
                >
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

            {/* Foreground "FULLSTACK" outline text with blur */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-5 lg:bottom-10 left-1/2 -translate-x-1/2 w-[150%] text-center z-20 pointer-events-none"
            >
              <h2 
                className="text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-black leading-none whitespace-nowrap text-transparent drop-shadow-lg backdrop-blur-[0.5px]"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
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
