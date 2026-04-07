import { PenTool, Layout, Search, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web Design",
      projects: "Layouts Exclusivos",
      icon: PenTool,
    },
    {
      title: "Engenharia UI/UX",
      projects: "Foco em Conversão",
      icon: Layout,
    },
    {
      title: "Análise de Marca",
      projects: "Estratégia Posicionamento",
      icon: Search,
    },
    {
      title: "Growth Marketing",
      projects: "Escala e Resultados",
      icon: Mail,
    }
  ];

  return (
    <section className="w-full py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-[#111111] border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center hover:border-brand/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-brand group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2 tracking-wide group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 font-medium text-sm">
                  {service.projects}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
