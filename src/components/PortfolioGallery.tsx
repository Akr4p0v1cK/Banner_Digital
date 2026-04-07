import Image from "next/image";
import { ArrowUpRight, MonitorSmartphone, PenTool, LayoutTemplate, Globe, CircleDollarSign, LayoutGrid } from "lucide-react";

export default function PortfolioGallery() {
  const projects = [
    { title: "Ecossistema E-commerce Premium", category: "E-commerce", image: "/images/portfolio_1.png" },
    { title: "Plataforma SaaS de Alta Performance", category: "SaaS", image: "/images/portfolio_2.png" },
    { title: "Landing Page de Lançamento Viral", category: "Landing Page", image: "/images/portfolio_3.png" },
    { title: "Portal Institucional Corporativo", category: "Institucional", image: "/images/portfolio_4.png" }
  ];

  const servicesList = [
    {
      title: "Landing Pages",
      description: "São páginas focadas em conversão, projetadas para capturar leads, aumentar vendas ou direcionar ações. Criamos Landing Pages personalizadas que combinam design e estratégia para gerar resultados.",
      icon: MonitorSmartphone,
    },
    {
      title: "Design Exclusivo",
      description: "Oferecemos sites com design exclusivo, combinando estética e funcionalidade para destacar a singularidade do seu negócio, desenvolvida sob medida para suas necessidades.",
      icon: PenTool,
    },
    {
      title: "Sites Institucionais",
      description: "Sites Institucionais são o cartão de visita digital da sua empresa, apresentando sua marca e serviços de forma profissional. Criamos sites que reforçam a credibilidade do seu negócio.",
      icon: LayoutTemplate,
    },
    {
      title: "Aplicações Web",
      description: "São sistemas interativos acessíveis via navegador. Desenvolvemos soluções personalizadas, focadas em desempenho e usabilidade para empresas que buscam eficiência e serviços online robustos.",
      icon: Globe,
    },
    {
      title: "E-Commerce",
      description: "É ideal para vender produtos virtuais como eBooks e cursos online. Criamos lojas virtuais personalizadas para ampliar o alcance e otimizar a venda de seus conteúdos digitais.",
      icon: CircleDollarSign,
    },
    {
      title: "CRM's",
      description: "São painéis interativos que transformam dados em informações visuais. Criamos CRM's personalizados para facilitar o monitoramento e a tomada de decisões.",
      icon: LayoutGrid,
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16 text-center">
          Nossos <span className="text-brand">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative block overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 cursor-pointer">
              {/* Image Container */}
              <div className="w-full h-[400px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/50 via-transparent to-brand-dark/20 z-10 pointer-events-none"></div>
                <Image 
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Arrow Icon that animated on hover */}
                <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500">
                  <ArrowUpRight strokeWidth={3} />
                </div>
              </div>
              
              {/* Content text */}
              <div className="p-8 absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-brand font-semibold text-sm tracking-widest uppercase mb-2">
                  {proj.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand transition-colors duration-300">
                  {proj.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid below portfolio */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Serviços <span className="text-brand">Que Oferecemos.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-12">
            Mostramos nossas soluções digitais, incluindo landing pages, sites institucionais, blogs, e-commerce, aplicações web e crms. Descubra como podemos transformar sua visão em realidade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div key={i} className="bg-[#111111] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-brand/30 transition-all group flex flex-col items-start gap-4 text-left">
                  <Icon className="w-10 h-10 mb-2 text-white group-hover:text-brand transition-colors" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
