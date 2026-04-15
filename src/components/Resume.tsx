"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function Resume() {
  const education = [
    { title: "Direção de Arte Digital", date: "Desde 2018", desc: "Criação de identidades visuais de alta conversão e direção criativa para corporações premium do mercado." },
    { title: "UX/UI Estratégico", date: "Desde 2020", desc: "Desenvolvimento de jornadas de usuário focadas em retenção, usabilidade avançada e performance absoluta." }
  ];

  const experience = [
    { title: "Desenvolvimento Frontend", date: "Next.js & React", desc: "Engenharia de ponta garantindo carregamentos instantâneos, interações ultra fluídas e integrações nativas." },
    { title: "Growth e Marketing", date: "SEO & Escala", desc: "Arquitetura técnica voltada para a captura massiva de leads e o posicionamento agressivo em mecanismos de busca." }
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-40 bg-transparent border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-20">
        
        {/* Education Column */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-10 sm:mb-14 flex items-center gap-3 sm:gap-4"
          >
            <span className="w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_rgba(212,175,55,0.5)]"></span>
            Trajetória
          </motion.h2>
          <div className="relative border-l border-brand-dark/30 ml-3 flex flex-col gap-10 sm:gap-14">
            {education.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="pl-8 sm:pl-10 relative group"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-brand group-hover:bg-brand transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">{item.title}</h4>
                <div className="inline-block px-4 py-1 rounded-full bg-brand-dark/20 text-brand text-sm font-semibold mb-4 border border-brand-dark/50">
                  {item.date}
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-10 sm:mb-14 flex items-center gap-3 sm:gap-4"
          >
            <span className="w-3 h-3 rounded-full bg-brand-dark shadow-[0_0_12px_rgba(88,15,28,0.5)]"></span>
            Especialidades
          </motion.h2>
          <div className="relative border-l border-brand/30 ml-3 flex flex-col gap-10 sm:gap-14">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="pl-8 sm:pl-10 relative group"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-brand-dark group-hover:bg-brand-dark transition-colors duration-300 shadow-[0_0_10px_rgba(88,15,28,0.5)]"></div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-dark transition-colors duration-300">{item.title}</h4>
                <div className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4 border border-brand/30">
                  {item.date}
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
