"use client";

import Image from "next/image";
import { ArrowUpRight, MonitorSmartphone, PenTool, LayoutTemplate, Globe, CircleDollarSign, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
};

export default function PortfolioGallery() {
  const integratedItems = [
    {
      title: "Landing Pages",
      description: "Páginas focadas em conversão, projetadas para capturar leads e aumentar vendas com design estratégico.",
      icon: MonitorSmartphone,
      image: "/images/portfolio_3.png"
    },
    {
      title: "Design Exclusivo",
      description: "Sites com design exclusivo, combinando estética e funcionalidade para destacar a singularidade do seu negócio.",
      icon: PenTool,
      image: "/images/features.png"
    },
    {
      title: "Sites Institucionais",
      description: "O cartão de visita digital da sua empresa, apresentando sua marca e serviços de forma profissional.",
      icon: LayoutTemplate,
      image: "/images/portfolio_4.png"
    },
    {
      title: "Aplicações Web",
      description: "Sistemas interativos acessíveis via navegador. Soluções personalizadas focadas em desempenho e usabilidade.",
      icon: Globe,
      image: "/images/portfolio_2.png"
    },
    {
      title: "E-Commerce",
      description: "Lojas virtuais personalizadas para ampliar o alcance e otimizar a venda de seus produtos e conteúdos digitais.",
      icon: CircleDollarSign,
      image: "/images/portfolio_1.png"
    },
    {
      title: "CRM's",
      description: "Painéis interativos que transformam dados em informações visuais para monitoramento e tomada de decisões.",
      icon: LayoutGrid,
      image: "/images/hero.png"
    }
  ];

  return (
    <section className="w-full py-20 sm:py-28 lg:py-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            Serviços <span className="text-brand">Que Oferecemos.</span>
          </h2>
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl mb-12 sm:mb-20 leading-relaxed">
            Soluções digitais completas — de landing pages a aplicações web complexas. Descubra como transformamos visão em realidade.
          </p>
        </motion.div>

        {/* Bento-style asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integratedItems.map((item, idx) => {
            const Icon = item.icon;
            // First card spans 2 columns for Bento effect
            const isLarge = idx === 0;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                data-cursor-hover="true"
                className={`group relative block overflow-hidden rounded-2xl bg-[#111111]/60 backdrop-blur-md border border-white/5 cursor-none flex flex-col h-full transition-all duration-500 hover:border-brand/20 hover:shadow-[0_0_50px_rgba(212,175,55,0.06)] ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`w-full overflow-hidden relative shrink-0 ${isLarge ? 'h-[300px]' : 'h-[220px]'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/40 to-brand-dark/10 z-10 pointer-events-none"></div>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Arrow on hover */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-500">
                    <ArrowUpRight strokeWidth={3} className="w-5 h-5"/>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col grow relative">
                  {/* Glow on hover */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand/8 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="flex items-center gap-4 mb-4 text-zinc-400 group-hover:text-brand transition-colors duration-300">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
