
export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a]/60 backdrop-blur-md pt-16 sm:pt-24 pb-8 sm:pb-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-14 sm:mb-20">
          {/* Main Title Col */}
          <div className="lg:col-span-2 shadow-sm lg:pr-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight leading-tight">
              Vamos projetar o futuro da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">empresa de forma extraordinária.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-md">
              Não construímos apenas sites; criamos ativos digitais que trabalham para o seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white mb-2">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="#" className="hover:text-brand transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Metodologia</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white mb-2">Contato</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="mailto:contato@seunome.com" className="hover:text-brand transition-colors text-base sm:text-lg font-medium text-white break-all">contato@seunome.com</a></li>
              <li><a href="tel:+5511999999999" className="hover:text-brand transition-colors text-brand font-bold text-lg sm:text-xl">+55 11 99999-9999</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© <span className="text-white font-semibold">Banner Digital 2026</span> | Todos os Direitos Reservados</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand transition-colors">Fale Conosco</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
