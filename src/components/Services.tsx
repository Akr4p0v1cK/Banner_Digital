"use client";

import { PenTool, Layout, Search, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function Services() {
  const services = [
    {
      title: "Interface Estratégica (UI)",
      projects: "Design de Alto Impacto",
      icon: PenTool,
    },
    {
      title: "Experiência do Usuário (UX)",
      projects: "Foco na Jornada do Cliente",
      icon: Layout,
    },
    {
      title: "Desenvolvimento Performance",
      projects: "Next.js & Alta Velocidade",
      icon: Search,
    },
    {
      title: "Arquitetura de Conversão",
      projects: "Geração de Resultados",
      icon: Mail,
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                data-cursor-hover="true"
                className="relative bg-[#111111]/60 backdrop-blur-md border border-white/5 rounded-none p-7 sm:p-10 flex flex-col items-center text-center group overflow-hidden transition-all duration-500 hover:border-brand/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.06)]"
              >
                {/* Subtle glow on hover */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-10 h-10 text-brand group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2 tracking-wide group-hover:text-brand transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-zinc-600 font-medium text-sm relative z-10">
                  {service.projects}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
