"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-12 flex items-center justify-between bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[120px] sm:w-[160px] md:w-[260px] h-[45px] sm:h-[60px] md:h-[95px]">
            <Image 
              src="/images/logo.png" 
              alt="Aethel Logo" 
              fill 
              className="object-contain sm:scale-[1.3] origin-left" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
          <Link href="#" className="hover:text-brand transition-colors">Home</Link>
          <Link href="#" className="hover:text-brand transition-colors">About</Link>
          <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Services <span className="text-xs">▼</span></Link>
          <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Blog <span className="text-xs">▼</span></Link>
          <Link href="#" className="hover:text-brand transition-colors flex items-center gap-1">Project <span className="text-xs">▼</span></Link>
          <Link href="#" className="hover:text-brand transition-colors">Contact</Link>
        </nav>

        {/* Social & Menu Button */}
        <div className="flex items-center gap-3 md:gap-4">
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
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-brand-dark flex items-center justify-center text-white shadow-[0_0_15px_rgba(88,15,28,0.5)] hover:bg-brand hover:text-black transition-all"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-8 text-2xl font-bold text-white tracking-wider">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">Home</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">About</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">Services</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">Blog</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">Project</Link>
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-6 mt-12">
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white/70 hover:bg-brand-dark hover:text-white transition-all">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
