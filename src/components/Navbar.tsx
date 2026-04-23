import { Link, useLocation } from 'react-router-dom';
import { Play, Menu, X, MessageCircle, Phone, FileText, Send, CheckCircle2, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const location = useLocation();

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form mode after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '' });
        setShowForm(false);
        setIsContactModalOpen(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const openModal = () => setIsContactModalOpen(true);
    window.addEventListener('open-contact-modal', openModal);
    return () => window.removeEventListener('open-contact-modal', openModal);
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
          {/* Left: Dynamic Back Button / Explore */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? 'w-[120px] opacity-0 pointer-events-none' : 'w-[200px] opacity-100'}`}>
            {location.pathname !== '/' ? (
              <Link to="/" className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                <ChevronLeft size={16} />
                <span className="text-xs font-semibold tracking-wide">Back</span>
              </Link>
            ) : (
              <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
              </div>
            )}
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
            <Link to="/showcase" className={`px-5 py-2 rounded-full border border-white/20 text-xs font-semibold hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 ${isScrolled ? 'hidden lg:block' : 'block'}`}>
              Showcase
            </Link>
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
              {location.pathname !== '/' && (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white"
                >
                  <ChevronLeft size={16} /> Back to Home
                </Link>
              )}
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
              <button
                onClick={() => { setIsOpen(false); setIsContactModalOpen(true); }}
                className="border border-white/20 rounded-full text-center py-3 text-white text-xs font-bold uppercase tracking-widest mt-4 hover:bg-white hover:text-black transition-colors"
              >
                Contact Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      
      {/* Spacer to prevent layout jump under absolute/fixed nav */}
      <div className="h-[72px]" aria-hidden="true" />

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl md:rounded-[2rem] p-6 shadow-2xl flex flex-col items-center"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)} 
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
              >
                <X size={20} />
              </button>
              
              {!showForm ? (
                <>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-sans tracking-tight text-white mb-2">Let's Connect</h3>
                  <p className="text-sm text-zinc-400 text-center mb-8 px-2">
                    Reach out via your preferred method. We usually respond instantly.
                  </p>
                  
                  <div className="flex flex-col gap-3 w-full">
                    <a 
                      href="https://wa.me/918657955764" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 bg-white text-black p-4 rounded-xl font-bold hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <MessageCircle size={20} className="text-green-600" />
                      WhatsApp
                    </a>
                    
                    <a 
                      href="tel:+918657955764" 
                      className="flex items-center gap-3 bg-zinc-900 border border-white/10 text-white p-4 rounded-xl font-bold hover:bg-zinc-800 hover:border-white/20 transition-all"
                    >
                      <Phone size={20} className="text-blue-400" />
                      Call (8657955764)
                    </a>
                    
                    <div className="relative flex items-center py-2">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink-0 mx-4 text-zinc-500 text-xs uppercase tracking-widest">Or leaving a message</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>
                    
                    <button 
                      onClick={() => setShowForm(true)}
                      className="flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 text-white p-4 rounded-xl font-bold hover:bg-zinc-800 hover:border-white/20 transition-all"
                    >
                      <FileText size={20} className="text-purple-400" />
                      Send an Email
                    </button>
                  </div>
                </>
              ) : submitSuccess ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-zinc-400">We'll get back to you shortly.</p>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <button 
                      onClick={() => setShowForm(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <h3 className="text-lg font-bold text-white">Send Message</h3>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({...formData, name: e.target.value});
                          if(errors.name) setErrors({...errors, name: ''});
                        }}
                        className={`w-full bg-black/50 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if(errors.email) setErrors({...errors, email: ''});
                        }}
                        className={`w-full bg-black/50 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                    </div>

                    <div>
                      <textarea
                        placeholder="How can we help?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({...formData, message: e.target.value});
                          if(errors.message) setErrors({...errors, message: ''});
                        }}
                        className={`w-full bg-black/50 border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-white text-black p-4 rounded-xl font-bold hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
