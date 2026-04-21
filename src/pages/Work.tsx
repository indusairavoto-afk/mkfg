import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const experiences = [
  {
    role: "Founder & Lead Developer",
    company: "Airavoto Gaming",
    description: "Developed a comprehensive cloud ERP solution tailored specifically for gaming cafés. Managed full-stack development and strategic direction.",
    link: "www.airavotogaming.com",
    tags: ["Cloud ERP", "Web Dev"],
    details: {
      technologies: ["React", "Node.js", "PostgreSQL", "Google Cloud", "WebSockets"],
      challenges: "Building a reliable real-time synchronization engine capable of handling high-frequency transaction updates across multiple devices simultaneously without latency spikes.",
      outcomes: "Successfully deployed across 15+ locations, improving operational tempo by 40% and eliminating manual billing discrepancies entirely."
    }
  },
  {
    role: "AI Developer",
    company: "Freelance",
    description: "Built custom mini AI tools and intelligent 'chatballs' designed to automate interactions and enhance workflows.",
    tags: ["AI Tools", "Chatbots"],
    details: {
      technologies: ["Python", "OpenAI API", "LangChain", "Next.js"],
      challenges: "Designing context-aware conversation flows that wouldn't break or hallucinate under edge-case user inputs, while maintaining minimal latency.",
      outcomes: "Reduced client customer support ticket volume by 35% within the first month of integration for early adopters."
    }
  },
  {
    role: "Website Developer",
    company: "Independent",
    description: "Designed and built highly responsive, modern websites tailored to client needs with a strong focus on minimalist UI.",
    tags: ["React", "UI/UX"],
    details: {
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      challenges: "Collaborating with clients to translate vague aesthetic preferences into strict, scalable design systems without losing their brand identity.",
      outcomes: "Delivered 10+ premium sites with perfect Lighthouse performance scores and highly satisfied clients."
    }
  },
  {
    role: "Video Creator & Editor",
    company: "Aadarsh Kathayen",
    description: "Directed content creation and executed high graphic visuals using professional suites like After Effects and Premiere Pro.",
    tags: ["Video Editing", "VFX"],
    details: {
      technologies: ["After Effects", "Premiere Pro", "Photoshop", "DaVinci Resolve"],
      challenges: "Maintaining rendering efficiency and project organization while working with heavy 4K footage and complex VFX layers on tight publication deadlines.",
      outcomes: "Generated over 1.2M cumulative views and significantly raised the visual production value benchmark for the channel."
    }
  },
  {
    role: "Social Media Manager",
    company: "Manjunath College",
    description: "Managed and grew social media presence, overseeing content strategy, design, and continuous community engagement.",
    tags: ["Social Media", "Design"],
    details: {
      technologies: ["Canva", "Meta Business Suite", "Figma", "Analytics Tools"],
      challenges: "Keeping content fresh and engaging for a younger, diverse student demographic while rigorously adhering to formal institutional branding guidelines.",
      outcomes: "Grew overall organic reach by 250% year-over-year and established a cohesive, modern visual identity across all platforms."
    }
  }
];

export default function Work() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (i: number) => {
    setExpandedId(prev => (prev === i ? null : i));
  };

  return (
    <div className="max-w-7xl mx-auto py-8 lg:mt-24 px-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 border-b border-white/10 pb-8"
      >
        <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight mb-4">
          Selected <span className="italic">Work</span>
        </h1>
        <p className="text-sm leading-relaxed opacity-70 max-w-xl text-zinc-300">
          A showcase of my recent work, side projects, and professional experience spanning coding, AI, and creative content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {experiences.map((exp, i) => {
          let spanClass = "col-span-1 md:col-span-6";
          let boxClass = "border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-zinc-900 group relative z-0 hover:z-10";
          
          if (i === 1) {
            spanClass = "col-span-1 md:col-span-6";
            boxClass = "bg-white text-black rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] group relative z-0 hover:z-10";
          } else if (i === 2) {
            spanClass = "col-span-1 md:col-span-4";
            boxClass = "bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-zinc-900 group relative z-0 hover:z-10";
          } else if (i === 3) {
            spanClass = "col-span-1 md:col-span-8";
            boxClass = "bg-[#111] border border-white/5 rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-[#1a1a1a] group relative z-0 hover:z-10";
          } else if (i === 4) {
            spanClass = "col-span-1 md:col-span-12";
            boxClass = "bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] hover:border-white/20 hover:bg-zinc-900 group relative z-0 hover:z-10";
          }

          const isExpanded = expandedId === i;
          const isLight = i === 1;

          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={i} 
              className={`${spanClass} ${boxClass} flex flex-col justify-between min-h-[300px] cursor-pointer`}
              onClick={() => toggleExpand(i)}
            >
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`text-[10px] font-mono uppercase tracking-widest ${isLight?'opacity-50':'opacity-50 group-hover:opacity-70'}`}>
                    Project 00{i+1} — {exp.company}
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`opacity-50 ${isLight ? 'text-black' : 'text-white'}`}
                  >
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif italic mb-4">{exp.role}</h3>
                <p className={`text-sm leading-relaxed max-w-md ${isExpanded ? 'mb-4' : 'mb-8'} ${isLight?'opacity-80':'opacity-70 text-zinc-300'}`}>
                  {exp.description}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className={`pt-6 mt-4 border-t ${isLight ? 'border-black/10' : 'border-white/10'} space-y-6 pb-8`}>
                        <div>
                          <h4 className={`text-[10px] font-mono uppercase tracking-widest mb-3 ${isLight ? 'opacity-50' : 'opacity-40'}`}>Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.details.technologies.map(tech => (
                              <span key={tech} className={`text-xs font-semibold ${isLight ? 'text-black bg-black/5 hover:bg-black/10' : 'text-white bg-white/5 hover:bg-white/10'} px-3 py-1.5 rounded-md transition-colors`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${isLight ? 'opacity-50' : 'opacity-40'}`}>Challenges</h4>
                          <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>{exp.details.challenges}</p>
                        </div>
                        <div>
                          <h4 className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${isLight ? 'opacity-50' : 'opacity-40'}`}>Outcomes</h4>
                          <p className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-400'}`}>{exp.details.outcomes}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap gap-4 items-end justify-between mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isLight?'border border-black/20':'border border-white/20 group-hover:border-white/40'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {exp.link && (
                  <a 
                    href={`https://${exp.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-colors ${isLight?'border border-black hover:bg-black hover:text-white':'border border-white/20 hover:bg-white hover:text-black group-hover:border-white/50'}`}
                  >
                    <ArrowUpRight strokeWidth={1} size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
