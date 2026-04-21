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
      <motion.nav 
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0)',
          borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          paddingTop: isScrolled ? '1rem' : '1.5rem',
          paddingBottom: isScrolled ? '1rem' : '1.5rem'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 border-b ${isScrolled ? 'backdrop-blur-md shadow-lg shadow-black/50' : 'border-transparent'}`}
      >
        <div className="flex justify-between items-center max-w-[1400px] mx-auto relative">
          
          {/* Left: Explore */}
          <div className="hidden md:flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition-colors w-[200px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <span className="text-xs font-semibold tracking-wide">Explore Edits</span>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
             <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-black">
               <Play size={10} className="ml-0.5 fill-black" />
             </div>
             <span className="text-sm font-bold tracking-tight">ujwal.guru</span>
          </Link>

          {/* Right */}
          <div className="hidden md:flex items-center gap-6 w-[300px] justify-end">
            {links.slice(1).map((l) => (
               <Link key={l.name} to={l.path} className={`text-xs font-semibold transition-opacity ${location.pathname === l.path ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}>
                  {l.name}
               </Link>
            ))}
            <a href="mailto:ujwal.guru999@gmail.com" className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white hover:text-black transition-colors">
              Contact Now
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 z-40"
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
      </motion.nav>
      {/* Spacer to prevent layout jump under absolute/fixed nav */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}
