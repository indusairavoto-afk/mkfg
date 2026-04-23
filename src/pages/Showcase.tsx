import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LazyImage } from '../components/LazyImage';
import { Sparkles, Heart, MessageCircle, Send } from 'lucide-react';

export default function Showcase() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-24 md:pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            Digital<br /><span className="text-zinc-500">Showcase.</span>
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-xl leading-relaxed font-medium">
            Explore a selection of specialized projects spanning robust cloud ERP systems, intuitive UI/UX web designs, and high-conversion social media marketing assets.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Top Large Project */}
          <Link to="/airavoto-erp" className="relative h-[334px] md:h-[480px] bg-white text-black rounded-[2rem] border border-transparent overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all flex flex-col justify-end p-6 md:p-10 block cursor-pointer">
             <div className="absolute top-6 left-6 z-20">
                <span className="bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-black border border-black/10 shadow-sm">Cloud Architecture</span>
             </div>
             
             <LazyImage 
                src="https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776775531/Screenshot_1126_jck4zg.png" 
                alt="Airavoto ERP" 
                containerClassName="w-full h-full absolute inset-0 mix-blend-multiply opacity-[0.4] group-hover:opacity-[0.6] group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                className="w-full h-full object-cover object-top" 
             />
             
             <div className="relative z-20 max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-sans font-bold mb-3 md:mb-4 tracking-tight group-hover:underline underline-offset-4 decoration-2">Airavoto ERP System</h3>
                <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed max-w-xl">
                   A robust cloud-based enterprise resource planning platform engineered specifically for the high-volume environment of gaming cafés, reducing latency and operational friction.
                </p>
             </div>
          </Link>

          {/* Bottom Split showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[300px]">
             
             <Link to="/ui-ux" className="block relative bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden group p-5 md:p-10 flex flex-col justify-center items-center hover:border-white/20 transition-all cursor-pointer min-h-[250px]">
                {/* Interactive Dashboard Mockup */}
                <div className="w-[160px] h-[180px] md:w-[220px] md:h-[240px] bg-zinc-900 shadow-2xl relative flex flex-col group-hover:scale-[1.05] group-hover:-rotate-3 transition-transform duration-500 border border-white/10 mt-2 md:mt-0 p-3 md:p-4 gap-3 md:gap-4 rounded-xl mb-4">
                    {/* Dashboard Header */}
                    <div className="flex gap-2 items-center pb-3 border-b border-white/5 shrink-0">
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#333]"></div>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#333]"></div>
                        <div className="w-20 md:w-28 h-2 rounded-full bg-white/10 ml-auto"></div>
                    </div>
                    {/* Dashboard Metrics */}
                    <div className="flex gap-3 h-16 md:h-20 shrink-0">
                        <div className="w-1/3 bg-white/5 rounded-lg h-full group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden">
                            <div className="absolute bottom-2 left-2 w-6 h-1.5 md:h-2 rounded-full bg-white/20"></div>
                        </div>
                        <div className="w-2/3 bg-white/10 rounded-lg h-full group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 delay-75 flex flex-col gap-1.5 p-2 justify-end">
                            <div className="w-full h-1.5 md:h-2 rounded-full bg-white/20"></div>
                            <div className="w-full h-1.5 md:h-2 rounded-full bg-white/20"></div>
                            <div className="w-2/3 h-1.5 md:h-2 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-white/5 rounded-lg group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 delay-150 flex items-center justify-center">
                         <Sparkles className="text-white/20 w-6 h-6 md:w-8 md:h-8 group-hover:text-white/40 transition-colors" />
                    </div>
                </div>

                {/* Bottom fade for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>

                <div className="absolute bottom-8 left-8 z-20">
                   <h4 className="text-xl md:text-3xl font-bold mb-1.5 drop-shadow-md">UI/UX Design</h4>
                   <p className="text-[10px] md:text-xs font-mono opacity-50 uppercase tracking-widest drop-shadow-md">Web Interfaces</p>
                </div>
             </Link>

             <Link to="/social-posts" className="block relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden group p-5 md:p-10 flex flex-col justify-center items-center hover:border-white/20 transition-all cursor-pointer min-h-[250px]">
                 {/* Social Media Post Mockup Animation */}
                 <div className="w-[150px] h-[190px] md:w-[190px] md:h-[240px] bg-white rounded-xl shadow-2xl relative flex flex-col group-hover:scale-[1.03] group-hover:-rotate-2 transition-transform duration-500 overflow-hidden border border-zinc-200 mt-2 md:mt-0">
                     <div className="flex items-center gap-2 p-2 md:p-3 border-b border-zinc-100 shrink-0">
                         <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-zinc-300"></div>
                         <div className="w-16 md:w-20 h-1.5 md:h-2 rounded-full bg-zinc-200"></div>
                     </div>
                     <div className="flex-1 w-full bg-zinc-100 relative overflow-hidden">
                         <LazyImage src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&fit=crop" containerClassName="w-full h-full" className="w-full h-full object-cover grayscale opacity-80" />
                     </div>
                     <div className="p-2 md:p-3 gap-1.5 md:gap-2 flex flex-col shrink-0">
                         <div className="flex gap-1.5 md:gap-2">
                             <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                             <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                             <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-zinc-400" />
                         </div>
                         <div className="w-24 h-1.5 md:h-2 rounded-full bg-zinc-200 mt-1"></div>
                         <div className="w-16 h-1.5 md:h-2 rounded-full bg-zinc-200"></div>
                     </div>
                 </div>
                 
                 {/* Bottom fade for text readability */}
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
                 
                 <div className="absolute bottom-8 left-8 z-20">
                     <h4 className="text-xl md:text-3xl font-bold mb-1.5 drop-shadow-md">Social Posts</h4>
                     <p className="text-[10px] md:text-xs font-mono shadow-black opacity-50 uppercase tracking-widest drop-shadow-md">Brand Marketing</p>
                 </div>
             </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
