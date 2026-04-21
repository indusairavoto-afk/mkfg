import { motion } from 'motion/react';
import { Play, TrendingUp, Sparkles, Scissors, Code2, MonitorPlay, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Main Hero Card wrapper */}
      <div className="mx-4 md:mx-8 xl:mx-auto max-w-[1400px] relative h-[800px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col items-center justify-start pt-24 text-white w-full">

        {/* Subtle Math/Grid Background like the image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Glowing orb effect behind person */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center flex flex-col items-center px-4"
        >
          <h1 className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] font-sans font-semibold tracking-tight">
            Crafting Digital Solutions <br />
            that <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Drive Growth</span>
          </h1>
        </motion.div>

        {/* Trending Arrow icon top right */}
        <motion.div
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          className="absolute right-[-10%] md:right-[15%] top-[10%] md:top-[15%] text-zinc-500 opacity-30 md:opacity-60 scale-50 md:scale-100"
        >
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </motion.div>

        {/* Abstract floating shapes resembling image's icons */}
        <div className="absolute left-[10%] md:left-[20%] top-[25%] md:top-[20%] text-zinc-700 opacity-50 md:opacity-100"><Sparkles size={24} className="w-4 h-4 md:w-6 md:h-6" /></div>
        <div className="absolute right-[15%] md:right-[25%] bottom-[50%] md:bottom-[40%] text-zinc-700 opacity-50 md:opacity-100"><Sparkles size={16} className="w-3 h-3 md:w-4 md:h-4" /></div>

        {/* People/Client Stack Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute left-[5%] md:left-[10%] bottom-[15%] md:bottom-24 z-30 transform scale-75 md:scale-100 origin-bottom-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">Among My Clients</span>
            <div className="h-px w-12 bg-white/20"></div>
          </div>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-zinc-800">
                <img src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop`} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-zinc-800">
                <img src={`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop`} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] overflow-hidden bg-zinc-800">
                <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop`} className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </motion.div>

        {/* Floating Left Video/Code Mockup Card */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 0.4 }}
          className="absolute left-[-2%] md:left-[8%] top-[35%] md:top-[40%] z-20 w-[160px] md:w-[280px] bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl"
        >
          <div className="relative w-full h-[80px] md:h-[140px] bg-zinc-900 rounded-lg md:rounded-xl overflow-hidden mb-2 md:mb-3 flex items-center justify-center border border-white/5">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
              <Play className="fill-white w-3 h-3 md:w-4 md:h-4 ml-0.5 md:ml-1 opacity-80" />
            </div>
            {/* Simulated UI block */}
            <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-10 h-10 md:w-16 md:h-16 bg-white/5 backdrop-blur-sm rounded-md md:rounded-lg rotate-12 flex flex-col gap-1 md:gap-1 p-1 md:p-2 border border-white/5">
               <div className="w-full h-1 md:h-2 rounded bg-white/20"></div>
               <div className="w-2/3 h-1 md:h-2 rounded bg-white/20"></div>
            </div>
            <div className="absolute top-1 left-1 md:top-2 md:left-2 w-8 h-8 md:w-12 md:h-12 bg-white/5 backdrop-blur-sm rounded-md md:rounded-lg -rotate-6 flex items-center justify-center border border-white/5">
               <Code2 className="text-white/40 w-3 h-3 md:w-5 md:h-5" />
            </div>
          </div>
        </motion.div>

        {/* Overlapping Tool Icon (Like CapCut in image) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute left-[2%] md:left-[6%] top-[30%] md:top-[35%] z-30 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-black"
        >
           <Scissors className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
        </motion.div>

        {/* Right Floating Card (Testimonial equivalent) */}
        <motion.div
           initial={{ opacity: 0, x: 40, rotate: 5 }}
           animate={{ opacity: 1, x: 0, rotate: 2 }}
           transition={{ delay: 0.5 }}
           className="absolute right-[-2%] md:right-[8%] top-[55%] md:top-[50%] z-20 w-[180px] md:w-[280px] bg-white text-black p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl"
        >
           <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
             <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-zinc-200 overflow-hidden border border-black/10 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&fit=crop" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="overflow-hidden">
               <div className="text-[10px] md:text-sm font-bold leading-tight truncate">Airavoto Gaming</div>
               <div className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-60 truncate">Operations Manager</div>
             </div>
             <div className="ml-auto text-black/20 hidden md:block"><Sparkles size={20}/></div>
           </div>
           <p className="text-[10px] md:text-xs leading-relaxed font-medium mb-3 md:mb-4 opacity-80 line-clamp-3 md:line-clamp-none">
             "Ujwal's creativity transformed our ideas into stunning digital solutions that boosted engagement and significantly increased efficiency."
           </p>
           <div className="text-[10px] md:text-sm font-serif italic border-t border-black/10 pt-2 md:pt-3 opacity-90 truncate">
             "One of the Best Deliveries"
           </div>

           {/* Right side tool badges (Ae Pr equivalent) */}
           <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 flex items-center gap-0.5 z-30">
             <div className="w-8 h-8 md:w-12 md:h-12 bg-[#00000e] text-white rounded-full flex items-center justify-center text-[8px] md:text-xs font-bold border border-white/20 shadow-xl relative -mr-1.5 md:-mr-2"><span className="text-[#9999ff]">Ae</span></div>
             <div className="w-8 h-8 md:w-12 md:h-12 bg-[#00000e] text-white rounded-full flex items-center justify-center text-[8px] md:text-xs font-bold border border-white/20 shadow-xl"><span className="text-[#e2a8ff]">Pr</span></div>
           </div>
        </motion.div>

        {/* Central Portrait Container */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[480px] z-10 flex flex-col items-center justify-end pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&fit=crop"
            alt="Portrait"
            className="w-full h-auto object-cover grayscale opacity-90 brightness-110 drop-shadow-2xl"
            style={{ maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 40%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,1) 40%)' }}
          />
        </div>

        {/* Bottom Contact Button (Overlaying portrait) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40"
        >
          <a href="mailto:ujwal.guru999@gmail.com" className="px-8 py-3 rounded-full border border-white/30 bg-black/60 backdrop-blur-xl text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition-all">
            Contact Now
          </a>
        </motion.div>
      </div>

      {/* Secondary Grid Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-24 mb-24 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-sans font-medium mb-4">
            Bringing Stories to Life with <span className="font-serif italic text-zinc-400">Professional Tools</span>
          </h2>
          <p className="text-sm font-medium opacity-60 max-w-3xl mx-auto leading-relaxed">
            From responsive corporate websites to dynamic social media reels, transforming abstract ideas into High-Impact assets that drive engagement and boost growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
             { title: 'Airavoto ERP', desc: 'Cloud Application', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&fit=crop' },
             { title: 'AI Chatballs', desc: 'Automated Assistants', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&fit=crop' },
             { title: 'Web Frameworks', desc: 'React & Tailwind', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&fit=crop' },
             { title: 'Aadarsh Kathayen', desc: 'Video Editing', img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600&fit=crop' }
          ].map((proj, i) => (
             <Link key={i} to="/work" className="group relative w-full aspect-[4/5] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 block">
                <img src={proj.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt={proj.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                   <h3 className="text-lg font-bold text-white mb-1">{proj.title}</h3>
                   <div className="text-[10px] font-mono tracking-widest uppercase opacity-60 text-white">{proj.desc}</div>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
