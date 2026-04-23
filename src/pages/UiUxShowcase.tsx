import { motion, AnimatePresence } from 'motion/react';
import { LazyImage } from '../components/LazyImage';
import { LayoutTemplate, MonitorSmartphone, PenTool, X, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Skeleton } from '../components/Skeleton';

export default function UiUxShowcase() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate async fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Movie App UI Experience",
      type: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1574267432553-4b462808152a?q=80&w=1200&fit=crop",
      span: "md:col-span-2 md:row-span-2",
      challenge: "Users needed a highly visual, immersive way to discover movies and track their watchlists across devices without feeling overwhelmed by metadata.",
      solution: "Designed a dark-mode cinematic interface with large promotional artwork, interactive trailers, and seamless cross-platform syncing. Focused on visual hierarchy and touch-friendly gestures.",
      technologies: ["Figma", "UI/UX", "Prototyping", "Interaction Design"],
      figmaLink: "https://www.figma.com/design/Dmf6ZzWe9qWUt0dflJ7PFd/Untitled?m=dev&t=3xhOZKtj5vvpHqtn-1",
      iframeSrc: "https://embed.figma.com/design/Dmf6ZzWe9qWUt0dflJ7PFd/Untitled?embed-host=share"
    },
    {
      title: "Mobile Interface Concept",
      type: "Figma Prototype",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      challenge: "Creating a highly interactive and fluid mobile experience that feels native but scales efficiently.",
      solution: "Designed layered interfaces with cohesive design tokens, ensuring perfect harmony between typography, layout, and spacing.",
      technologies: ["Figma", "UI/UX", "Mobile App"],
      figmaLink: "https://www.figma.com/design/WEQhBA3l7qkRoiMsGrH2F4/Untitled?m=dev",
      iframeSrc: "https://embed.figma.com/design/WEQhBA3l7qkRoiMsGrH2F4/Untitled?embed-host=share"
    },
    {
      title: "E-Commerce UI Concept",
      type: "Figma Prototype",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      challenge: "Designing a seamless online shopping experience that reduces cart abandonment and maximizes conversions.",
      solution: "Developed an intuitive layout with clear visual hierarchy, frictionless checkout processes, and highly engaging product displays.",
      technologies: ["Figma", "UI/UX", "Prototyping"],
      figmaLink: "https://www.figma.com/design/BnKHrSdlpVrSp6WT1bBctk/Untitled?m=dev",
      iframeSrc: "https://embed.figma.com/design/BnKHrSdlpVrSp6WT1bBctk/Untitled?embed-host=share"
    },
    {
      title: "Figma Basics Interface",
      type: "Figma Prototype",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&fit=crop",
      span: "md:col-span-1 md:row-span-1",
      challenge: "Providing users with an accessible, interactive guide to understanding Figma layout and components.",
      solution: "Crafted a cleanly structured educational interface, allowing users to rapidly prototype and learn through hands-on discovery.",
      technologies: ["Figma", "UI/UX", "Education Design"],
      figmaLink: "https://www.figma.com/design/rtiemMnjmPZUaBAcpnhwWv/Figma-basics?node-id=1669-162202",
      iframeSrc: "https://embed.figma.com/design/rtiemMnjmPZUaBAcpnhwWv/Figma-basics?node-id=1669-162202&embed-host=share"
    },
    {
      title: "Interactive Web Concept",
      type: "Figma Prototype",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&fit=crop",
      span: "md:col-span-2 md:row-span-1",
      challenge: "Creating a standout digital presence that communicates brand identity while maintaining pristine usability.",
      solution: "Conceptualized a bold, highly interactive web layout featuring distinct geometric structures and immersive motion design.",
      technologies: ["Figma", "Web Design", "Interaction UI"],
      figmaLink: "https://www.figma.com/design/9l6mJ7FRERBCwDg5n78e5B/Untitled?node-id=0-1",
      iframeSrc: "https://embed.figma.com/design/9l6mJ7FRERBCwDg5n78e5B/Untitled?node-id=0-1&embed-host=share"
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
          {isLoading ? (
            projects.map((project, i) => (
               <Skeleton key={`skeleton-${i}`} className={`w-full ${project.span} min-h-[300px] aspect-[4/3] md:aspect-auto`} />
            ))
          ) : (
            projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 ${project.span} aspect-[4/3] md:aspect-auto`}
                style={{ minHeight: '300px' }}
              >
                {project.iframeSrc ? (
                  <iframe 
                    src={project.iframeSrc} 
                    className="w-full h-full absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" 
                    style={{ border: 'none' }} 
                    allowFullScreen 
                  />
                ) : (
                  <LazyImage 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    containerClassName="w-full h-full absolute inset-0"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">{project.type}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-semibold text-white transition-opacity duration-500 delay-100 hover:text-zinc-300"
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row z-10 custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors p-2 bg-black/50 backdrop-blur-sm rounded-full z-20"
              >
                <X size={20} />
              </button>

              {/* Modal Image/Embed */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-zinc-900 border-r border-white/5 flex items-center justify-center overflow-hidden">
                {selectedProject.iframeSrc ? (
                  <iframe 
                    src={selectedProject.iframeSrc} 
                    className="w-full h-full absolute inset-0"
                    style={{ border: 'none' }} 
                    allowFullScreen 
                  />
                ) : (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 md:mb-3">{selectedProject.type}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">{selectedProject.title}</h3>
                
                <div className="space-y-6 md:space-y-8 flex-grow">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">The Challenge</h4>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">The Solution</h4>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {selectedProject.technologies.map((tech: string, i: number) => (
                        <span key={i} className="bg-white/5 border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[11px] md:text-xs font-mono text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedProject.figmaLink && (
                    <div className="pt-6 border-t border-white/10 mt-6 md:mt-8">
                      <a 
                        href={selectedProject.figmaLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-black px-6 py-3.5 md:py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors text-sm md:text-base"
                      >
                        <PenTool size={18} />
                        View in Figma
                        <ExternalLink size={16} className="ml-1 opacity-50" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
