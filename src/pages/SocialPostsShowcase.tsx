import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LazyImage } from '../components/LazyImage';
import { Play, Grid, Image as ImageIcon, Film } from 'lucide-react';

export default function SocialPostsShowcase() {
  const [activeTab, setActiveTab] = useState<'reels' | 'posts' | 'thumbnails'>('reels');

  // Dummy content tailored per category
  const galleries = {
    reels: [
       { img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&fit=crop", title: "Gaming Setup Tour" },
       { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&fit=crop", title: "Esports Highlights" },
       { img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=600&fit=crop", title: "Social Marketing" },
       { img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&fit=crop", title: "Behind the Scenes" },
    ],
    posts: [
       { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&fit=crop", title: "Brand Announcement" },
       { img: "https://images.unsplash.com/photo-1563986768609-322fe1355310?q=80&w=800&fit=crop", title: "Product Feature" },
       { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&fit=crop", title: "Community Event" },
       { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&fit=crop", title: "Hiring Campaign" },
       { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&fit=crop", title: "Tech Update" },
       { img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&fit=crop", title: "Infographic" },
    ],
    thumbnails: [
       { img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&fit=crop", title: "YouTube: Top 10 Plays" },
       { img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&fit=crop", title: "How to Build a PC" },
       { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&fit=crop", title: "React Tutorial 2026" },
       { img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&fit=crop", title: "Video Editing Secrets" },
    ]
  };

  return (
    <div className="w-full flex-grow flex flex-col items-center">
      <div className="max-w-[1400px] w-full px-4 md:px-8 pt-12 md:pt-20 pb-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-[#111] border border-white/10 px-4 py-2 rounded-full mb-6">
            <Film className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">Content Creation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">
            Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-serif italic">Gallery</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
            A curated selection of high-impact visual assets designed to capture attention and drive engagement across digital platforms.
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex items-center bg-[#0a0a0a] border border-white/10 rounded-full p-1.5 md:p-2">
            <button 
              onClick={() => setActiveTab('reels')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'reels' ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              <Play className="w-4 h-4" /> Reels
            </button>
            <button 
              onClick={() => setActiveTab('posts')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'posts' ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              <Grid className="w-4 h-4" /> Posts
            </button>
            <button 
              onClick={() => setActiveTab('thumbnails')}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === 'thumbnails' ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
            >
              <ImageIcon className="w-4 h-4" /> Thumbnails
            </button>
          </div>
        </motion.div>

        {/* Gallery Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-4 md:gap-6 ${
                activeTab === 'reels' ? 'grid-cols-2 md:grid-cols-4' : 
                activeTab === 'posts' ? 'grid-cols-2 md:grid-cols-3' : 
                'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {galleries[activeTab].map((item, i) => (
                <div 
                  key={i} 
                  className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 ${
                    activeTab === 'reels' ? 'aspect-[9/16]' : 
                    activeTab === 'posts' ? 'aspect-square' : 
                    'aspect-video'
                  }`}
                >
                  <LazyImage 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    containerClassName="w-full h-full absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-sm md:text-lg font-bold text-white mb-1 drop-shadow-md">{item.title}</h3>
                    <div className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                       {activeTab.slice(0, -1)}
                    </div>
                  </div>
                  
                  {activeTab === 'reels' && (
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Play className="w-3 h-3 ml-0.5" />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
