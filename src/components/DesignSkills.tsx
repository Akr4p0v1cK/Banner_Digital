"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function DesignSkills() {
  const designSkills = [
    { label: "Direção de Arte Digital", value: 95 },
    { label: "Prototipação de Alta Fidelidade", value: 90 },
    { label: "Sistemas de Design (Design Systems)", value: 85 }
  ];
  const devSkills = [
    { label: "Desenvolvimento Web (Next.js / React)", value: 95 },
    { label: "Otimização de SEO & Core Web Vitals", value: 90 },
    { label: "Integrações API & Back-end", value: 85 }
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-transparent text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-20">
        
        {/* Left Column: Design Skill */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 sm:gap-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">Design & Branding</h2>
          <div className="flex flex-col gap-7 sm:gap-10">
            {designSkills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold tracking-wider text-zinc-400">{skill.label}</span>
                  <span className="text-xs font-bold text-brand">{skill.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand to-brand/70 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Development Skill */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 sm:gap-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">Tech & Performance</h2>
          <div className="flex flex-col gap-7 sm:gap-10">
            {devSkills.map((skill, index) => (
              <motion.div
                key={`dev-${index}`}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold tracking-wider text-zinc-400">{skill.label}</span>
                  <span className="text-xs font-bold text-brand-dark">{skill.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-dark to-brand-dark/70 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
