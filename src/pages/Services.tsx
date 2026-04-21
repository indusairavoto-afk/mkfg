import { motion } from 'motion/react';
import { Code, Bot, Video, Palette } from 'lucide-react';

const services = [
  {
    icon: <Code size={24} strokeWidth={1.5} />,
    title: "Web Development",
    description: "I build responsive, high-performance websites with clean code and modern aesthetics. From marketing landing pages to full web applications, I ensure a flawless user experience across all devices.",
    tools: ["React", "Custom Web", "WordPress"]
  },
  {
    icon: <Bot size={24} strokeWidth={1.5} />,
    title: "AI Development",
    description: "Integrating smart solutions into your workflow. I specialize in building custom mini AI tools, automation scripts, and conversational chatballs to modernize interactions.",
    tools: ["AI Integrations", "Chatbots", "Automation"]
  },
  {
    icon: <Video size={24} strokeWidth={1.5} />,
    title: "Video Editing",
    description: "Crafting compelling narratives through high-quality video editing. I create captivating visuals with advanced effects, smooth transitions, and professional color grading.",
    tools: ["Premiere Pro", "After", "YouTube"]
  },
  {
    icon: <Palette size={24} strokeWidth={1.5} />,
    title: "Design",
    description: "Delivering strong visual identities through graphic design and presentation creation. I create branded assets that effectively communicate your core message.",
    tools: ["Photoshop", "Figma", "Canva"]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto py-8 lg:mt-24 px-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 border-b border-white/10 pb-8"
      >
        <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight mb-4">
          Services & <span className="italic">Capabilities</span>
        </h1>
        <p className="max-w-xl text-sm leading-relaxed opacity-70 text-zinc-300">
          A multi-disciplinary approach to digital creation. I offer a range of services from writing code to rendering high-end video content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {services.map((service, i) => {
          let spanClass = "col-span-1 md:col-span-6";
          let boxClass = "border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 flex flex-col justify-between min-h-[350px] group";
          
          if (i === 1) {
            boxClass = "bg-white text-black rounded-[2rem] p-8 flex flex-col justify-between min-h-[350px] group";
          } else if (i === 2) {
            spanClass = "col-span-1 md:col-span-4";
            boxClass = "bg-[#111] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[350px] group";
          } else if (i === 3) {
            spanClass = "col-span-1 md:col-span-8";
            boxClass = "border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors min-h-[350px] group";
          }

          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={service.title} 
              className={`${spanClass} ${boxClass}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`p-4 rounded-full ${i===1?'bg-zinc-100':'bg-zinc-800'}`}>
                  {service.icon}
                </div>
                <div className="text-[10px] font-mono opacity-50 tracking-widest uppercase">
                  Service [0{i+1}]
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-serif italic mb-4">{service.title}</h3>
                <p className={`text-sm opacity-70 leading-relaxed mb-8 max-w-sm ${i===1?'':'text-zinc-300'}`}>
                  {service.description}
                </p>

                <div className={`flex flex-wrap gap-2 pt-4 border-t opacity-60 ${i===1?'border-black/20':'border-white/20'}`}>
                  {service.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-widest">
                      {tool} {tool !== service.tools[service.tools.length - 1] ? '/' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}
