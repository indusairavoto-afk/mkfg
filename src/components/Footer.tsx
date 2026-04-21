import { Linkedin, Github } from 'lucide-react';

const BehanceIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6.2 16.5h3.9c2 0 3.3-1.1 3.3-2.6 0-1.2-.8-2.1-2-2.3v-.1c1-.3 1.8-1.2 1.8-2.3 0-1.4-1.2-2.5-3.1-2.5H6.2v9.8zm2.4-5.6v-2.3h1.3c.7 0 1.2.4 1.2 1.1s-.5 1.2-1.2 1.2H8.6zm0 3.9v-2.5h1.5c.8 0 1.3.4 1.3 1.2s-.5 1.3-1.4 1.3h-1.4z"/>
    <path d="M15 13.5c0 2 1.5 3.3 3.5 3.3 1.5 0 2.6-.6 3.1-1.7h-1.8c-.2.4-.6.6-1.2.6-.9 0-1.6-.7-1.6-1.7h4.8v-.4c0-2-1.3-3.3-3.4-3.3-2 0-3.4 1.4-3.4 3.2zm3.4-1.6h-3c.2-1 .8-1.5 1.6-1.5.8 0 1.3.5 1.4 1.5z"/>
    <path d="M16 8h4v1.5h-4z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="mt-auto pt-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pb-8 border-t border-white/10 pt-8 gap-8">
        
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/ujwalguru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-all duration-300 hover:-translate-y-1" 
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/ujwalguru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-all duration-300 hover:-translate-y-1" 
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://behance.net/ujwalguru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 hover:text-white transition-all duration-300 hover:-translate-y-1" 
            aria-label="Behance"
          >
            <BehanceIcon size={20} />
          </a>
        </div>

        {/* Info & Copyright Text */}
        <div className="flex flex-col md:flex-row text-center md:text-right text-[10px] font-mono text-zinc-500 uppercase gap-4 md:gap-12 tracking-widest">
          <div>BASED IN THANE, INDIA — GLOBAL REACH</div>
          <div>© {new Date().getFullYear()} MR. BLACK & WHITE DESIGN STUDIO. ALL RIGHTS RESERVED.</div>
        </div>

      </div>
    </footer>
  );
}
