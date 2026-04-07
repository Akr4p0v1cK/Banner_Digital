"use client";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload frames for the scroll-bound canvas sequence
  useEffect(() => {
    const frameCount = 80;
    const loadedImages: HTMLImageElement[] = [];
    
    for (let i = 0; i < frameCount; i++) {
         const img = new window.Image();
         const numStr = i.toString().padStart(3, '0');
         img.src = `/heroslide/Whisk_ywz2czmkzzn4ewy30inxmmytujykrtl5ydoz0yn_${numStr}.jpg`;
         
         img.onload = () => {
           if (i === 0) {
             renderFrame(img);
           }
         };
         loadedImages.push(img);
    }
    
    imagesRef.current = loadedImages;
  }, []);

  const renderFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, drawX, drawY;
    
    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      drawY = 0;
      drawX = (canvas.width - drawWidth) / 2;
    }
    
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const images = imagesRef.current;
    if (images.length === 0) return;
    
    const frameIndex = Math.min(
      images.length - 1,
      Math.floor(latest * images.length)
    );
    
    if (images[frameIndex] && images[frameIndex].complete && images[frameIndex].naturalWidth > 0) {
      requestAnimationFrame(() => renderFrame(images[frameIndex]));
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const images = imagesRef.current;
      if (images.length > 0 && canvasRef.current) {
        const frameIndex = Math.min(
          images.length - 1,
          Math.floor(scrollYProgress.get() * images.length)
        );
        if (images[frameIndex] && images[frameIndex].complete) {
          renderFrame(images[frameIndex]);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center pt-20 bg-black">
        
        {/* Canvas animation background */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 mix-blend-lighten"
        />

        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center relative z-10 gap-16 lg:gap-0 h-full"
        >
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
              className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mt-4 drop-shadow-md"
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

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[800px] flex justify-center items-end">
            
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                
                {/* Touch Group Container to enable active states on mobile */}
                <div className="group w-full h-full relative overflow-hidden rounded-t-[100px] border-b border-brand-dark/30 backdrop-blur-[2px] pointer-events-auto cursor-pointer">
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
        </motion.div>
      </div>
    </section>
  );
}
