import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Services from './pages/Services';
import UiUxShowcase from './pages/UiUxShowcase';
import SocialPostsShowcase from './pages/SocialPostsShowcase';
import AiravotoERP from './pages/AiravotoERP';
import Showcase from './pages/Showcase';
import BackToTop from './components/BackToTop';

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex-grow flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore: React Router's Routes component doesn't explicitly type the key prop in this version, but it is valid and required for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/ui-ux" element={<PageWrapper><UiUxShowcase /></PageWrapper>} />
        <Route path="/social-posts" element={<PageWrapper><SocialPostsShowcase /></PageWrapper>} />
        <Route path="/airavoto-erp" element={<PageWrapper><AiravotoERP /></PageWrapper>} />
        <Route path="/showcase" element={<PageWrapper><Showcase /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
        <Navbar />
        <main className="flex-grow flex flex-col pt-4 pb-12 w-full">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
