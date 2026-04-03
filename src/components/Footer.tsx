
export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-10 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Main Title Col */}
          <div className="lg:col-span-2 shadow-sm pr-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Get Ready To <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">Create Great</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed max-w-md">
              A personal portfolio website is your digital resume—a place to showcase your work, skills, and achievements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white mb-2">Quick Link</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="#" className="hover:text-brand transition-colors">About Me</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog Post</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Contact Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><a href="mailto:example@info.com" className="hover:text-brand transition-colors text-lg font-medium text-white">example@info.com</a></li>
              <li>3891 Ranchview Dr. Richardson</li>
              <li><a href="tel:01245789321" className="hover:text-brand transition-colors text-brand font-bold text-xl">01245789321</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© <span className="text-white font-semibold">Inversweb 2025</span> | All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
