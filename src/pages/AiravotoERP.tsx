import { motion } from 'motion/react';
import { ExternalLink, LayoutDashboard, Database, ShieldCheck, Zap } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';

export default function AiravotoERP() {
  return (
    <div className="w-full flex-grow flex flex-col items-center bg-white text-black mt-[-16px] md:mt-[-32px] pt-24 md:pt-32 pb-24 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(255,255,255,0.05)]">
      <div className="max-w-[1200px] w-full px-6 md:px-12">
        
        {/* Header Setup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-full mb-6">
            <Database className="w-4 h-4 text-zinc-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">System Architecture</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight mb-8">
            Airavoto <span className="font-serif italic font-normal text-zinc-400">ERP System</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
            A comprehensive, cloud-native Enterprise Resource Planning pipeline tailored specifically for modern gaming cafes to handle dynamic load, user analytics, and hardware optimization seamlessly.
          </p>
        </motion.div>

        {/* Live Preview Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="w-full max-w-5xl mx-auto mb-20"
        >
           <a 
              href="https://www.airavotogaming.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative w-full bg-zinc-100 rounded-[2rem] border-2 border-zinc-200 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-zinc-300 transition-all duration-500"
           >
              {/* Browser Header Bar */}
              <div className="w-full h-12 bg-white flex items-center px-4 border-b border-zinc-200 gap-3">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex-1 max-w-md mx-auto bg-zinc-100 h-7 rounded-md flex items-center justify-center px-3 text-[10px] md:text-xs font-mono text-zinc-400 border border-zinc-200">
                    https://www.airavotogaming.com
                 </div>
                 <div className="w-12"></div> {/* Spacer to center URL */}
              </div>

              {/* Browser Content (Mockup Image) */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-200">
                 <LazyImage 
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&fit=crop" 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    alt="Airavoto Gaming ERP Preview"
                    containerClassName="w-full h-full"
                 />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all">
                       Visit Live Site <ExternalLink size={18} strokeWidth={2.5} />
                    </span>
                 </div>
              </div>
           </a>
           
           <p className="text-center text-sm font-mono text-zinc-500 mt-6 mt-4">
              If you want to know more about it, click the preview card above to visit the live platform.
           </p>
        </motion.div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-4"
           >
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-black border border-zinc-200 shadow-sm">
                 <LayoutDashboard size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Central Dashboard</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                 Monitor real-time active gaming rigs, session durations, and instantaneous network load securely from anywhere.
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="flex flex-col gap-4"
           >
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-black border border-zinc-200 shadow-sm">
                 <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Secure Integrations</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                 Data encrypted at rest. Features role-based access to safeguard crucial operational and player-based analytics securely.
              </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col gap-4"
           >
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-black border border-zinc-200 shadow-sm">
                 <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Optimized Performance</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                 Built using React & Next.js ensuring buttery smooth 60fps interface interactions even with thousands of synchronized data rows.
              </p>
           </motion.div>
        </div>

      </div>
    </div>
  );
}
