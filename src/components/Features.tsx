"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function Features() {
  const features = [
    {
      num: "01.",
      title: "Diagnóstico",
      desc: "Identificação de gargalos na conversão e pontos críticos de melhoria na jornada do usuário."
    },
    {
      num: "02.",
      title: "Execução",
      desc: "Desenvolvimento de interface exclusiva, veloz e otimizada para performance máxima."
    },
    {
      num: "03.",
      title: "Resultado",
      desc: "Aumento métrico em engajamento, retenção e vendas com dados mensuráveis."
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Image and Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl group">
            {/* Glow aura behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-dark/30 via-transparent to-brand/10 blur-2xl pointer-events-none opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent z-20 pointer-events-none mix-blend-overlay"></div>
            <Image 
              src="/images/features.png" 
              alt="Estética Digital" 
              fill 
              className="object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-2 text-white text-balance">
            Inovação que gera resultado: <span className="text-brand">O Case Premium</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
            Uma análise profunda de como aplicamos design centrado no usuário para escalar o faturamento e a presença digital deste projeto.
          </p>
        </motion.div>

        {/* Right Side: Features List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 sm:gap-14">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex gap-6 group cursor-default"
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand-dark group-hover:scale-110 transition-transform duration-300 shrink-0">
                {item.num}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
