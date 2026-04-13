
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
    <section className="w-full pb-24 pt-12 bg-transparent flex flex-col gap-32">
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full bg-gradient-to-r from-[#0f0f0f]/80 to-[#1a1a1a]/80 backdrop-blur-md p-12 md:p-20 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 max-w-4xl tracking-tight leading-tight">
            Sua marca está pronta para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">o próximo nível?</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl relative z-10">
            Não construímos apenas sites; criamos ativos digitais que trabalham para o seu negócio 24 horas por dia.
          </p>
          <a href="#" className="relative z-10 inline-block px-10 py-5 bg-brand text-black font-bold text-lg uppercase tracking-wider rounded-full hover:bg-brand-dark transition-colors mt-4">
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center max-w-3xl mx-auto">
          Insights sobre <span className="text-brand">Design e Tecnologia</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-[#0a0a0a]/70 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-brand-dark/50 transition-colors group flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand mb-6">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug mb-8 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
              </div>
              <a href="#" className="text-zinc-400 font-semibold hover:text-white uppercase tracking-wider text-sm flex items-center gap-2">
                Ler Artigo &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
