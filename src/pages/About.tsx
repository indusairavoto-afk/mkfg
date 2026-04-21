import { motion } from 'motion/react';

export default function About() {
  const tools = [
    'VS Code', 'Figma', 'Photoshop', 'After Effects', 'Premiere Pro', 
    'Canva', 'WordPress', 'MS Word', 'MS Excel', 'PowerPoint'
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 lg:mt-24 px-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Content Card */}
        <div className="col-span-1 md:col-span-8 border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-grow flex flex-col"
          >
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tight mb-8">
              About <br/><span className="italic">Me.</span>
            </h1>
            <div className="space-y-6 text-sm leading-relaxed opacity-80 max-w-2xl mb-12 flex-grow text-zinc-300">
              <p>
                I am a 19-year-old creative tech enthusiast based in Thane. My work exists at the intersection of logical problem solving and creative expression.
              </p>
              <p>
                Currently pursuing my BCA (First Year) at NKTT College, Thane, I am deeply passionate about building scalable websites, experimenting with AI tools, and crafting high-quality video content.
              </p>
              <p>
                I take pride in being a fast learner with a problem-solving mindset. Whether resolving a complex bug or designing an appealing interface, I bring an innovative perspective to everything I build.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8 flex justify-between items-center">
              <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Education</div>
              <div className="text-right">
                <div className="font-serif italic text-lg md:text-xl relative inline-block group text-white">
                  BCA (First Year)
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-70 mt-1">NKTT College, Thane</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-4 bg-white text-black rounded-[2rem] p-8 flex flex-col justify-center items-center text-center min-h-[300px]"
        >
          <div className="text-6xl md:text-8xl font-serif mb-2">03</div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-8">Core Strengths</div>
          <ul className="text-xs uppercase tracking-[0.2em] space-y-4 font-mono opacity-80 text-center">
            <li>Creative Thinker</li>
            <li className="opacity-50">Fast Learner</li>
            <li>Problem Solver</li>
          </ul>
        </motion.div>

        {/* Toolkit Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 md:col-span-12 bg-zinc-900 rounded-[2rem] border border-white/10 p-8 md:p-12 mb-8"
        >
          <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-6">Toolkit & Software</div>
          <div className="flex flex-wrap gap-4">
            {tools.map(tool => (
              <span key={tool} className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide hover:bg-white hover:text-black transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
