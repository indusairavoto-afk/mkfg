import { motion } from 'motion/react';
import { LazyImage } from '../components/LazyImage';
import { LayoutTemplate, MonitorSmartphone, PenTool } from 'lucide-react';

export default function UiUxShowcase() {
  const projects = [
    {
      title: "Fintech Dashboard UI",
      type: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&fit=crop",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Health App Mobile UI",
      type: "Mobile App",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "E-Commerce Experience",
      type: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Crypto Wallet Interface",
      type: "Mobile UI",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Analytics Platform",
      type: "Web Application",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&fit=crop",
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col items-center">
      <div className="max-w-[1400px] w-full px-4 md:px-8 pt-12 md:pt-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-[#111] border border-white/10 px-4 py-2 rounded-full mb-6">
            <LayoutTemplate className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Design Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6 relative">
            UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-serif italic">Showcase</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            Crafting intuitive, engaging, and minimal digital experiences. Discover a collection of web and mobile interface designs focused on modern usability.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 ${project.span} aspect-[4/3] md:aspect-auto`}
              style={{ minHeight: '300px' }}
            >
              <LazyImage 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                containerClassName="w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">{project.type}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
