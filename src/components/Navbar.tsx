import { Link, useLocation } from 'react-router-dom';
import { Play, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 md:px-8 mt-4 md:mt-6 transition-all duration-300 pointer-events-none">
        <motion.nav 
          initial={false}
          animate={{
            backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.7)' : 'rgba(10, 10, 10, 0)',
            borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
            boxShadow: isScrolled ? '0 10px 40px -10px rgba(0,0,0,0.5)' : 'none',
            backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
            paddingTop: isScrolled ? '0.75rem' : '0.5rem',
            paddingBottom: isScrolled ? '0.75rem' : '0.5rem',
            paddingLeft: isScrolled ? '1.5rem' : '0px',
            paddingRight: isScrolled ? '1.5rem' : '0px',
            borderRadius: isScrolled ? '9999px' : '0px',
            width: isScrolled ? 'min(100%, 900px)' : '100%',
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`pointer-events-auto border flex justify-between items-center max-w-[1400px] w-full relative z-50`}
        >
          {/* Left: Explore */}
          <div className={`hidden md:flex items-center gap-3 cursor-pointer transition-all duration-300 ${isScrolled ? 'w-[120px] opacity-0 pointer-events-none' : 'w-[200px] opacity-100 text-zinc-400 hover:text-white'}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden text-white z-50 p-2 rounded-full ${isScrolled ? 'bg-white/10' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center Logo */}
          <Link to="/" className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-50 group`}>
             <div className="w-7 h-7 rounded-[0.4rem] bg-white flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform">
               <Play size={12} className="ml-0.5 fill-black" />
             </div>
             <span className="text-base font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:to-white transition-colors">ujwal.guru</span>
          </Link>

          {/* Right */}
          <div className={`hidden md:flex items-center gap-1 justify-end transition-all duration-300 ${isScrolled ? 'w-auto' : 'w-[300px]'}`}>
            <div className="flex bg-white/5 border border-white/5 rounded-full px-2 py-1 mr-4">
               {links.slice(1).map((l) => (
                  <Link 
                     key={l.name} 
                     to={l.path} 
                     className={`relative px-4 py-1.5 text-[11px] uppercase tracking-widest font-medium transition-all duration-300 rounded-full ${location.pathname === l.path ? 'text-black bg-white shadow-md' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
                  >
                     {l.name}
                  </Link>
               ))}
            </div>
            <a href="mailto:ujwal.guru999@gmail.com" className={`px-5 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 ${isScrolled ? 'hidden lg:block' : 'block'}`}>
              Contact
            </a>
          </div>
        </motion.nav>
      </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[80px] left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 z-40"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-white"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:ujwal.guru999@gmail.com"
                onClick={() => setIsOpen(false)}
                className="border border-white/20 rounded-full text-center py-3 text-white text-xs font-bold uppercase tracking-widest mt-4"
              >
                Contact Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      
      {/* Spacer to prevent layout jump under absolute/fixed nav */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
