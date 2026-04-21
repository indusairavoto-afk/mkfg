import { motion } from 'motion/react';
import { Play, TrendingUp, Sparkles, Code2, MonitorPlay, Users, Heart, MessageCircle, Send, Figma, Video, Server, Component, Palette, Box, Layers, Cpu, Compass, Aperture, LayoutTemplate, Wand2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LazyImage } from '../components/LazyImage';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Main Hero Card wrapper */}
      <div className="mx-auto max-w-[1400px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] xl:w-full relative h-[750px] md:h-[800px] bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 overflow-hidden flex flex-col items-center justify-start pt-16 md:pt-24 text-white">

        {/* Subtle Math/Grid Background like the image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Glowing orb effect behind person */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center flex flex-col items-center px-4 md:px-0"
        >
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] font-sans font-semibold tracking-tight">
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

        {/* Expertise Tags Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute left-[5%] md:left-[8%] bottom-[15%] md:bottom-20 z-30 origin-bottom-left flex flex-col gap-2 md:gap-3"
        >
          <div className="flex items-center gap-2 ml-1">
            <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase opacity-60">Expertise</span>
            <div className="h-px w-8 bg-white/20"></div>
          </div>
          <div className="flex flex-wrap gap-2 max-w-[180px] md:max-w-[260px]">
            {['Video Editing', 'Web Development', 'UI/UX Design', 'Branding'].map((tag, i) => (
              <div key={i} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-medium text-zinc-300 pointer-events-none">
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating Left Video/Code Mockup Card */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ delay: 0.4 }}
          className="absolute left-[-5%] sm:left-[2%] md:left-[8%] top-[38%] md:top-[40%] z-20 w-[140px] sm:w-[160px] md:w-[280px] bg-[#111] border border-white/10 rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl scale-75 sm:scale-90 md:scale-100 origin-left"
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
           <Wand2 className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
        </motion.div>

        {/* Right Floating Proof Card */}
        <motion.div
           initial={{ opacity: 0, x: 40, rotate: 3 }}
           animate={{ opacity: 1, x: 0, rotate: 2 }}
           whileHover={{ y: -5, rotate: 0, scale: 1.02 }}
           transition={{ delay: 0.5, duration: 0.4 }}
           className="absolute right-[-8%] sm:right-[2%] md:right-[5%] top-[55%] md:top-[42%] z-20 w-[200px] md:w-[320px] bg-white/90 backdrop-blur-xl border border-white/60 text-zinc-900 p-3 md:p-6 rounded-2xl md:rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] cursor-default scale-75 sm:scale-90 md:scale-100 origin-right"
        >
           <div className="flex items-center gap-3 mb-4 md:mb-6">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0 shadow-md">
                <LazyImage 
                  src="https://res.cloudinary.com/domyd01x9/image/upload/f_auto,q_auto/WhatsApp_Image_2026-04-21_at_10.46.33_AM_f1idpo" 
                  alt="Ujwal Guru" 
                  className="w-full h-full object-[center_top] object-cover" 
                  containerClassName="w-full h-full" 
                />
             </div>
             <div>
               <div className="text-sm md:text-base font-bold leading-tight tracking-tight">Ujwal Guru</div>
               <div className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60 font-mono mt-0.5">Proven Results</div>
             </div>
           </div>

           <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-5">
              <div className="flex items-center gap-2.5">
                 <div className="p-1.5 md:p-2 rounded-lg bg-green-100 text-green-700 shadow-inner"><TrendingUp size={16} strokeWidth={2.5}/></div>
                 <div className="text-xs md:text-sm font-medium"><span className="font-bold text-black text-sm md:text-base">+120%</span> Engagement</div>
              </div>
              <div className="flex items-center gap-2.5">
                 <div className="p-1.5 md:p-2 rounded-lg bg-purple-100 text-purple-700 shadow-inner"><Video size={16} strokeWidth={2.5}/></div>
                 <div className="text-xs md:text-sm font-medium"><span className="font-bold text-black text-sm md:text-base">50+</span> Videos Edited</div>
              </div>
              <div className="flex items-center gap-2.5">
                 <div className="p-1.5 md:p-2 rounded-lg bg-blue-100 text-blue-700 shadow-inner"><Globe size={16} strokeWidth={2.5}/></div>
                 <div className="text-xs md:text-sm font-medium"><span className="font-bold text-black text-sm md:text-base">10+</span> Websites Built</div>
              </div>
           </div>

           <p className="text-[10px] md:text-xs leading-relaxed font-medium opacity-80 border-t border-black/10 pt-3 md:pt-4">
             Delivering real results through creative video editing and modern web development.
           </p>
        </motion.div>

        {/* Central Portrait Container */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[350px] md:w-[480px] z-10 flex flex-col items-center justify-end pointer-events-none">
          <LazyImage
            src="https://res.cloudinary.com/domyd01x9/image/upload/f_auto,q_auto/WhatsApp_Image_2026-04-21_at_10.46.33_AM_f1idpo"
            alt="Portrait"
            className="w-full h-auto object-cover grayscale opacity-90 brightness-110 drop-shadow-2xl"
            containerClassName="w-full h-full flex flex-col justify-end"
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

      {/* Featured Showcase Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-24 w-full">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Featured <span className="font-sans not-italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">Showcase</span></h2>
            <p className="text-sm opacity-60 max-w-md leading-relaxed text-zinc-300">
              A curated selection of my finest digital creations, bridging the gap between engaging video production and robust software engineering.
            </p>
          </div>
          <Link to="/work" className="text-xs font-mono uppercase tracking-widest hover:text-white/70 transition-colors border-b border-white/20 pb-1">
            Explore All Work
          </Link>
        </div>

        {/* Bento-style Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Large Video/Reel Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-4 xl:col-span-3 relative h-[550px] md:h-[600px] bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden group hover:border-white/20 transition-colors"
          >
             <div className="absolute top-5 left-5 z-20 flex gap-2">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border border-white/10 shadow-lg relative">
                  <span className="absolute -left-1 -top-1 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute -left-1 -top-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  Video Reel
                </span>
             </div>
             
             {/* Reel Embed Container */}
             <div className="w-full h-full flex justify-center items-center bg-[#050505] overflow-hidden relative">
                {/* The iframe embed for IG Reel */}
                <iframe 
                  src="https://www.instagram.com/p/C4lbtCJswgW/embed/captioned" 
                  className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] border-0 outline-none max-w-none" 
                  scrolling="no" 
                ></iframe>
                {/* Overlay to catch clicks if we want to route instead, but here we let them interact with the reel */}
             </div>
          </motion.div>

          {/* Software / ERP Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 xl:col-span-9 flex flex-col gap-4"
          >
            {/* Top Large Project */}
            <Link to="/airavoto-erp" className="relative h-[334px] md:h-[380px] bg-white text-black rounded-[2rem] border border-transparent overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all flex flex-col justify-end p-6 md:p-10 block cursor-pointer">
               <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-black border border-black/10 shadow-sm">Cloud Architecture</span>
               </div>
               
               <LazyImage 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&fit=crop" 
                  alt="Airavoto ERP" 
                  containerClassName="w-full h-full absolute inset-0 mix-blend-multiply opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                  className="w-full h-full object-cover" 
               />
               
               <div className="relative z-20 max-w-2xl">
                  <h3 className="text-3xl md:text-5xl font-sans font-bold mb-3 md:mb-4 tracking-tight group-hover:underline underline-offset-4 decoration-2">Airavoto ERP System</h3>
                  <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed max-w-xl">
                     A robust cloud-based enterprise resource planning platform engineered specifically for the high-volume environment of gaming cafés, reducing latency and operational friction.
                  </p>
               </div>
            </Link>

            {/* Bottom Split showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-auto md:h-[204px]">
               <div className="relative bg-[#111] rounded-[2rem] border border-white/5 overflow-hidden group p-5 flex flex-col justify-center items-center hover:border-white/20 transition-all cursor-pointer min-h-[180px]">
                  {/* Interactive Chat Mockup */}
                  <div className="w-[120px] md:w-[140px] flex flex-col gap-2.5 relative z-0 group-hover:scale-[1.05] group-hover:rotate-2 transition-transform duration-500 mb-6">
                      <div className="bg-zinc-800/80 backdrop-blur-sm shadow-2xl rounded-2xl rounded-tl-sm p-3 w-[85%] self-start border border-white/10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                          <div className="w-full h-1.5 md:h-2 rounded-full bg-zinc-600 mb-1.5"></div>
                          <div className="w-2/3 h-1.5 md:h-2 rounded-full bg-zinc-600"></div>
                      </div>
                      <div className="bg-zinc-200/90 backdrop-blur-sm shadow-2xl rounded-2xl rounded-tr-sm p-3 w-[85%] self-end border border-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                          <div className="w-full h-1.5 md:h-2 rounded-full bg-zinc-400 mb-1.5"></div>
                          <div className="w-1/2 h-1.5 md:h-2 rounded-full bg-zinc-400"></div>
                      </div>
                      <div className="absolute -bottom-6 right-0 text-white/5 group-hover:text-white/10 transition-colors pointer-events-none z-[-1]">
                          <Code2 size={64} />
                      </div>
                  </div>

                  {/* Bottom fade for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent z-10 pointer-events-none"></div>

                  <div className="absolute bottom-5 left-5 z-20">
                     <h4 className="text-lg md:text-xl font-bold mb-1 drop-shadow-md">AI Chatbots</h4>
                     <p className="text-[9px] md:text-[10px] font-mono opacity-50 uppercase tracking-widest drop-shadow-md">Custom LLM</p>
                  </div>
               </div>
               
               <Link to="/ui-ux" className="block relative bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden group p-5 flex flex-col justify-center items-center hover:border-white/20 transition-all cursor-pointer min-h-[180px]">
                  {/* Interactive Dashboard Mockup */}
                  <div className="w-[120px] h-[130px] md:w-[140px] md:h-[150px] bg-zinc-900 shadow-2xl relative flex flex-col group-hover:scale-[1.05] group-hover:-rotate-3 transition-transform duration-500 border border-white/10 mt-2 md:mt-0 p-2.5 md:p-3 gap-2 md:gap-2.5 rounded-xl mb-4">
                      {/* Dashboard Header */}
                      <div className="flex gap-1.5 items-center pb-2 border-b border-white/5 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                          <div className="w-16 h-1.5 rounded-full bg-white/10 ml-auto"></div>
                      </div>
                      {/* Dashboard Metrics */}
                      <div className="flex gap-2 h-10 md:h-12 shrink-0">
                          <div className="w-1/3 bg-white/5 rounded-lg h-full group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 relative overflow-hidden">
                              <div className="absolute bottom-1.5 left-1.5 w-4 h-1 rounded-full bg-white/20"></div>
                          </div>
                          <div className="w-2/3 bg-white/10 rounded-lg h-full group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 delay-75 flex flex-col gap-1 p-1.5 justify-end">
                              <div className="w-full h-1 rounded-full bg-white/20"></div>
                              <div className="w-full h-1 rounded-full bg-white/20"></div>
                              <div className="w-2/3 h-1 rounded-full bg-white/20"></div>
                          </div>
                      </div>
                      <div className="flex-1 w-full bg-white/5 rounded-lg group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] transition-all duration-500 delay-150 flex items-center justify-center">
                           <Sparkles className="text-white/20 w-4 h-4 md:w-5 md:h-5 group-hover:text-white/40 transition-colors" />
                      </div>
                  </div>

                  {/* Bottom fade for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>

                  <div className="absolute bottom-5 left-5 z-20">
                     <h4 className="text-lg md:text-xl font-bold mb-1 drop-shadow-md">UI/UX Design</h4>
                     <p className="text-[9px] md:text-[10px] font-mono opacity-50 uppercase tracking-widest drop-shadow-md">Web Interfaces</p>
                  </div>
               </Link>

               <Link to="/social-posts" className="block relative bg-[#050505] rounded-[2rem] border border-white/10 overflow-hidden group p-5 flex flex-col justify-center items-center hover:border-white/20 transition-all cursor-pointer min-h-[180px]">
                   {/* Social Media Post Mockup Animation */}
                   <div className="w-[110px] h-[140px] md:w-[130px] md:h-[160px] bg-white rounded-xl shadow-2xl relative flex flex-col group-hover:scale-[1.03] group-hover:-rotate-2 transition-transform duration-500 overflow-hidden border border-zinc-200 mt-2 md:mt-0">
                       <div className="flex items-center gap-1.5 p-1.5 md:p-2 border-b border-zinc-100 shrink-0">
                           <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-300"></div>
                           <div className="w-10 md:w-12 h-1 md:h-1.5 rounded-full bg-zinc-200"></div>
                       </div>
                       <div className="flex-1 w-full bg-zinc-100 relative overflow-hidden">
                           <LazyImage src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&fit=crop" containerClassName="w-full h-full" className="w-full h-full object-cover grayscale opacity-80" />
                       </div>
                       <div className="p-1.5 md:p-2 gap-1 md:gap-1.5 flex flex-col shrink-0">
                           <div className="flex gap-1 md:gap-1.5">
                               <Heart className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-400" />
                               <MessageCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-400" />
                               <Send className="w-2.5 h-2.5 md:w-3 md:h-3 text-zinc-400" />
                           </div>
                           <div className="w-16 h-1 md:h-1.5 rounded-full bg-zinc-200 mt-0.5"></div>
                           <div className="w-10 h-1 md:h-1.5 rounded-full bg-zinc-200"></div>
                       </div>
                   </div>
                   
                   {/* Bottom fade for text readability */}
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none"></div>
                   
                   <div className="absolute bottom-5 left-5 z-20">
                       <h4 className="text-lg md:text-xl font-bold mb-1 drop-shadow-md">Social Posts</h4>
                       <p className="text-[9px] md:text-[10px] font-mono shadow-black opacity-50 uppercase tracking-widest drop-shadow-md">Brand Marketing</p>
                   </div>
               </Link>
            </div>
          </motion.div>
        </div>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5">
           {[
             { name: 'React', category: 'Frontend', icon: Component },
             { name: 'Tailwind CSS', category: 'Styling', icon: Palette },
             { name: 'Next.js', category: 'Framework', icon: Layers },
             { name: 'TypeScript', category: 'Language', icon: Code2 },
             { name: 'Node.js', category: 'Backend', icon: Server },
             { name: 'AWS Cloud', category: 'Infrastructure', icon: Box },
             { name: 'Figma', category: 'UI/UX Design', icon: Figma },
             { name: 'Photoshop', category: 'Photo Editing', icon: Aperture },
             { name: 'Canva', category: 'Graphic Design', icon: LayoutTemplate },
             { name: 'Premiere Pro', category: 'Video Editing', icon: Video },
             { name: 'After Effects', category: 'Motion Graphics', icon: Wand2 },
             { name: 'OpenAI API', category: 'AI Integration', icon: Cpu }
          ].map((tool, i) => (
             <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-[#111] hover:bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-300 flex flex-col items-center justify-center p-6 sm:p-8 aspect-square cursor-default hover:-translate-y-1 hover:shadow-2xl"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <tool.icon className="w-10 h-10 md:w-12 md:h-12 text-zinc-500 group-hover:text-white transition-colors duration-300 mb-4 drop-shadow-md group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-sm md:text-base font-bold text-white mb-1 tracking-tight text-center relative z-10">{tool.name}</h3>
                <div className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase opacity-40 text-white text-center relative z-10">{tool.category}</div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
