"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function BlogAndCTA() {
  const posts = [
    {
      author: "Banner Digital",
      date: "04 Abr",
      title: "O poder do Brutalismo: Como o design ousado aumenta a percepção de valor e conversões."
    },
    {
      author: "Banner Digital",
      date: "12 Mar",
      title: "Web Core Vitals 2026: Por que seu site premium não pode demorar mais de 1 segundo para carregar."
    },
    {
      author: "Banner Digital",
      date: "25 Fev",
      title: "Psicologia das Cores: A força do preto, vinho e dourado na construção de marcas fortes."
    }
  ];

  return (
    <section className="w-full pb-28 pt-16 lg:pb-40 bg-transparent flex flex-col gap-40">
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-gradient-to-br from-[#0f0f0f]/80 to-[#141414]/80 backdrop-blur-md p-12 md:p-20 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl"
        >
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/15 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-dark/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 max-w-4xl tracking-tight leading-[1.05]">
            Sua marca está pronta para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">o próximo nível?</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl relative z-10 leading-relaxed">
            Não construímos apenas sites; criamos ativos digitais que trabalham para o seu negócio 24 horas por dia.
          </p>
          <motion.a
            href="#"
            data-cursor-hover="true"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 inline-block px-10 py-5 bg-brand text-black font-bold text-lg uppercase tracking-wider rounded-full hover:bg-brand-dark hover:text-white transition-colors duration-300 mt-4 shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-none"
          >
            Solicitar Diagnóstico Gratuito
          </motion.a>
        </motion.div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black text-white mb-20 text-center max-w-3xl mx-auto"
        >
          Insights sobre <span className="text-brand">Design e Tecnologia</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              data-cursor-hover="true"
              className="relative bg-[#111111]/60 backdrop-blur-md rounded-2xl p-8 border border-white/5 transition-all duration-500 group flex flex-col justify-between h-full overflow-hidden hover:border-brand-dark/30 hover:shadow-[0_0_40px_rgba(88,15,28,0.06)] cursor-none"
            >
              {/* Hover glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-dark/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand mb-8">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span className="text-zinc-600">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug mb-8 group-hover:text-brand transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
              <a href="#" className="text-zinc-500 font-semibold hover:text-white uppercase tracking-wider text-sm flex items-center gap-2 transition-colors duration-300">
                Ler Artigo &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
