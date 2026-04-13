import Image from "next/image";
import { ArrowUpRight, MonitorSmartphone, PenTool, LayoutTemplate, Globe, CircleDollarSign, LayoutGrid } from "lucide-react";

export default function PortfolioGallery() {
  const integratedItems = [
    {
      title: "Landing Pages",
      description: "São páginas focadas em conversão, projetadas para capturar leads, aumentar vendas ou direcionar ações. Criamos Landing Pages personalizadas que combinam design e estratégia para gerar resultados.",
      icon: MonitorSmartphone,
      image: "/images/portfolio_3.png"
    },
    {
      title: "Design Exclusivo",
      description: "Oferecemos sites com design exclusivo, combinando estética e funcionalidade para destacar a singularidade do seu negócio, desenvolvida sob medida para suas necessidades.",
      icon: PenTool,
      image: "/images/features.png"
    },
    {
      title: "Sites Institucionais",
      description: "Sites Institucionais são o cartão de visita digital da sua empresa, apresentando sua marca e serviços de forma profissional. Criamos sites que reforçam a credibilidade do seu negócio.",
      icon: LayoutTemplate,
      image: "/images/portfolio_4.png"
    },
    {
      title: "Aplicações Web",
      description: "São sistemas interativos acessíveis via navegador. Desenvolvemos soluções personalizadas, focadas em desempenho e usabilidade para empresas que buscam eficiência e serviços online robustos.",
      icon: Globe,
      image: "/images/portfolio_2.png"
    },
    {
      title: "E-Commerce",
      description: "É ideal para vender produtos virtuais como eBooks e cursos online. Criamos lojas virtuais personalizadas para ampliar o alcance e otimizar a venda de seus conteúdos digitais.",
      icon: CircleDollarSign,
      image: "/images/portfolio_1.png"
    },
    {
      title: "CRM's",
      description: "São painéis interativos que transformam dados em informações visuais. Criamos CRM's personalizados para facilitar o monitoramento e a tomada de decisões.",
      icon: LayoutGrid,
      image: "/images/hero.png"
    }
  ];

  return (
    <section className="w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Serviços <span className="text-brand">Que Oferecemos.</span>
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-16">
          Mostramos nossas soluções digitais, incluindo landing pages, sites institucionais, blogs, e-commerce, aplicações web e crms. Descubra como podemos transformar sua visão em realidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integratedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group relative block overflow-hidden rounded-2xl bg-[#111111]/70 backdrop-blur-md border border-white/5 cursor-pointer flex flex-col h-full hover:border-brand/30 transition-all">
                {/* Image Container */}
                <div className="w-full h-[220px] overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/30 to-brand-dark/10 z-10 pointer-events-none"></div>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Arrow Icon that animated on hover */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand flex items-center justify-center text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-500">
                    <ArrowUpRight strokeWidth={3} className="w-5 h-5"/>
                  </div>
                </div>
                
                {/* Content text */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-4 mb-4 text-white group-hover:text-brand transition-colors">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors duration-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
