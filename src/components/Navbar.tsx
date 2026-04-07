import Link from 'next/link';
import Image from 'next/image';
import { Menu, Hexagon } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between bg-black/90 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-[140px] h-[50px]">
          <Image 
            src="/images/logo_aethel.jpg" 
            alt="Aethel Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
        <Link href="#" className="hover:text-brand transition-colors">Home</Link>
        <Link href="#" className="hover:text-brand transition-colors">About</Link>
        <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Services <span className="text-xs">▼</span></Link>
        <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Blog <span className="text-xs">▼</span></Link>
        <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Project <span className="text-xs">▼</span></Link>
        <Link href="#" className="hover:text-brand transition-colors">Contact</Link>
      </nav>

      {/* Social & Menu Button */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
            <FaTwitter className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
            <FaFacebook className="w-4 h-4" />
          </a>
        </div>
        
        <button className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white shadow-[0_0_15px_rgba(88,15,28,0.5)] hover:bg-brand hover:text-black transition-all">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
