"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function Stats() {
  const rightStats = [
    { value: "+150", label: "Projetos entregues com foco em performance" },
    { value: "100%", label: "De satisfação e suporte ativo aos parceiros" },
    { value: "Global", label: "Atendimento para marcas em todo o mundo" },
  ];

  return (
    <section className="w-full py-28 lg:py-36 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Bento Grid: asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Main Hero Card: spans 7 columns, 2 rows */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 lg:row-span-2 relative bg-[#111111]/60 backdrop-blur-md rounded-2xl p-10 md:p-14 border border-white/5 flex flex-col justify-center gap-6 overflow-hidden group"
          >
            {/* Glow */}
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand/10 rounded-full blur-[100px] pointer-events-none opacity-60"></div>
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-brand-dark/15 rounded-full blur-[80px] pointer-events-none opacity-40"></div>

            <div className="flex items-center gap-6 relative z-10">
              <span className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black text-brand leading-none tracking-tighter">+5</span>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Anos De <br/> Experiência
              </h3>
            </div>
            
            <p className="text-zinc-500 leading-relaxed text-sm md:text-base max-w-md relative z-10">
              Criando soluções disruptivas no mercado. Unimos talento e visão para moldar ativos digitais projetados para escalar de forma contínua.
            </p>
          </motion.div>

          {/* Right side smaller cards: Bento asymmetry */}
          {rightStats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i + 1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              data-cursor-hover="true"
              className={`relative bg-[#111111]/60 backdrop-blur-md rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center border border-white/5 overflow-hidden group transition-all duration-500 hover:border-brand/20 hover:shadow-[0_0_40px_rgba(212,175,55,0.06)] ${
                i === 0 ? 'lg:col-span-5' : 'lg:col-span-5'
              }`}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h4 className="text-5xl md:text-6xl font-black text-white mb-3 group-hover:text-brand transition-colors duration-300 relative z-10 tracking-tight">
                {stat.value}
              </h4>
              <span className="text-zinc-600 font-medium tracking-wide text-sm relative z-10">
                {stat.label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
