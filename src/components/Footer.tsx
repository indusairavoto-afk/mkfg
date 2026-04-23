import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto pt-12 md:pt-16 pb-6 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-center pb-8 border-t border-white/10 pt-8 md:pt-10 gap-10 md:gap-12">
        
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 w-full xl:w-auto">
          <a 
            href="https://www.linkedin.com/in/ujwal-creator-a79650378/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 active:scale-95" 
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/ujwalguru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 active:scale-95" 
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.instagram.com/ujwal_guru?utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 active:scale-95" 
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Info & Copyright Text */}
        <div className="flex flex-col lg:flex-row items-center text-center xl:text-right text-[10px] sm:text-[11px] leading-relaxed font-mono text-zinc-500 uppercase gap-4 lg:gap-8 xl:gap-12 tracking-widest w-full xl:w-auto">
          <div className="max-w-[250px] lg:max-w-none">
            <span className="block lg:inline">BASED IN KALYAN DOMBIVLI, INDIA</span>
          </div>
          
          <div className="w-8 h-[1px] bg-white/10 lg:hidden my-1"></div>
          
          <div className="max-w-[280px] sm:max-w-[320px] lg:max-w-none opacity-80 xl:opacity-100">
            © 2026 MR UJWAL GURU
          </div>
        </div>

      </div>
    </footer>
  );
}
