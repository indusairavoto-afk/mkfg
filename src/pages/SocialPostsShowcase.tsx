import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LazyImage } from '../components/LazyImage';
import { Play, Grid, Image as ImageIcon, Film, VolumeX, Volume2, ArrowRight, X } from 'lucide-react';
import { Skeleton, SkeletonGrid } from '../components/Skeleton';

const ReelCard = ({ item, onSelect }: { item: any, onSelect: () => void }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 aspect-[9/16]">
      {item.video ? (
        <>
          <video 
            ref={videoRef}
            src={item.video} 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <button 
            onClick={toggleMute}
            className="absolute center inset-0 m-auto w-12 h-12 flex flex-col items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-[0_0_30px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white/20 z-20"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/70 pointer-events-none md:hidden z-20">
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </div>
        </>
      ) : (
        <LazyImage 
          src={item.img} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          containerClassName="w-full h-full absolute inset-0"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full z-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1 border border-white/10 bg-white/5 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm pointer-events-none">
           REEL
        </div>
        <h3 className="text-sm md:text-lg font-bold text-white mb-2 drop-shadow-md pointer-events-none">{item.title}</h3>
        
        {/* View Details Button to match UiUx Showcase */}
        <button 
          onClick={onSelect}
          className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white transition-opacity duration-500 delay-100 hover:text-zinc-300"
        >
          View Details <ArrowRight size={14} />
        </button>
      </div>
      
      {!item.video && (
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300 pointer-events-none z-20">
          <Play className="w-3 h-3 ml-0.5" />
        </div>
      )}
    </div>
  );
};

export default function SocialPostsShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'reels' | 'posts' | 'thumbnails'>('reels');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate async fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [activeTab]); // Re-trigger loading skeleton upon tab change for effect

  // Dummy content tailored per category
  const galleries = {
    reels: [
       { video: "https://res.cloudinary.com/domyd01x9/video/upload/q_auto/f_auto/v1776775264/Video-116_tdpvnp.mp4", title: "Podcast Edit Reel" },
       { video: "https://res.cloudinary.com/domyd01x9/video/upload/q_auto/f_auto/v1776916977/3_Best_Zombie_Games_For_Android_gaming_zombiegamesandroid_games_deadtrigger2tipsandtricks_empisv.mp4", title: "Zombie Games Tips" },
       { video: "https://res.cloudinary.com/domyd01x9/video/upload/q_auto/f_auto/v1776917912/valorant_gameplay_india_valorantgameplay_valorantclip_gaming_valorant_valorantmontage_g3tkql.mp4", title: "Valorant Gameplay" },
       { img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&fit=crop", title: "Behind the Scenes" },
    ],
    posts: [
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776925965/Screenshot_2026-04-23_120141_pw8qfv.png", title: "Snack Ads" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776925550/gaming_laptop_text_202604211543_mw1pof.jpg", title: "Gaming Laptop Feature" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776927871/Community_Event_post_202604231209_rvym7f.jpg", title: "Community Event" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776928625/Hiring_Campaign_post_202604231214_vrbucd.jpg", title: "Hiring Campaign" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776928644/Tech_Update_post_202604231216_kawlhm.jpg", title: "Tech Update" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776928653/redesign_it_galaxy_202604231233_p5z0m4.jpg", title: "Galaxy Redesign" },
    ],
    thumbnails: [
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776916278/A_high-energy_YouTube_202604230823_efkrnn.jpg", title: "Challenge Thumbnail" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776924173/A_cinematic_YouTube_202604231131_poppem.jpg", title: "Digital Tutorial" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776924886/43a8bf7a-ff05-44df-96c5-08dadf69d7b6_zqfsg5.jpg", title: "Creative Thumbnail" },
       { img: "https://res.cloudinary.com/domyd01x9/image/upload/q_auto/f_auto/v1776924035/make_some_youtude_202604231128_xcjkg1.jpg", title: "Craft Tutorial" },
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
          <div className="flex flex-col items-center gap-4">
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
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-8 py-2.5 rounded-full border text-xs md:text-sm font-medium transition-all ${
                activeTab === 'all' 
                  ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'bg-transparent border-white/20 text-zinc-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              View All Content
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
              className="flex flex-col gap-12 md:gap-16"
            >
              {(activeTab === 'all' ? ['reels', 'posts', 'thumbnails'] : [activeTab]).map(tabKey => (
                <div key={tabKey} className="flex flex-col gap-6">
                  {activeTab === 'all' && (
                    <h3 className="text-xl md:text-2xl font-bold font-serif italic text-white/90 border-b border-white/10 pb-3 capitalize">
                      {tabKey === 'thumbnails' ? 'YouTube Thumbnails' : tabKey === 'posts' ? 'Social Posts' : tabKey}
                    </h3>
                  )}
                  <div className={`grid gap-4 md:gap-6 ${
                    tabKey === 'reels' ? 'grid-cols-2 md:grid-cols-4' : 
                    tabKey === 'posts' ? 'grid-cols-2 md:grid-cols-3' : 
                    'grid-cols-1 md:grid-cols-2'
                  }`}>
                    {isLoading ? (
                      <SkeletonGrid 
                        count={tabKey === 'reels' ? 4 : tabKey === 'posts' ? 6 : 4} 
                        aspect={tabKey === 'reels' ? 'aspect-[9/16]' : tabKey === 'posts' ? 'aspect-square' : 'aspect-video'} 
                      />
                    ) : (
                      galleries[tabKey as keyof typeof galleries].map((item, i) => (
                        tabKey === 'reels' ? (
                          <ReelCard key={i} item={item} onSelect={() => setSelectedMedia({...item, mediaType: tabKey})} />
                        ) : (
                          <div 
                            key={i} 
                            className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 ${
                              tabKey === 'posts' ? 'aspect-square' : 'aspect-video'
                            }`}
                          >
                            <LazyImage 
                              src={item.img} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                              containerClassName="w-full h-full absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full z-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1 border border-white/10 bg-white/5 px-2 py-0.5 rounded-full inline-block backdrop-blur-sm pointer-events-none">
                                 {tabKey === 'thumbnails' ? 'THUMBNAIL' : tabKey.slice(0, -1)}
                              </div>
                              <h3 className="text-sm md:text-lg font-bold text-white mb-2 drop-shadow-md pointer-events-none">{item.title}</h3>
                              
                              <button 
                                onClick={() => setSelectedMedia({...item, mediaType: tabKey})}
                                className="flex items-center gap-2 text-xs md:text-sm font-semibold text-white transition-opacity duration-500 delay-100 hover:text-zinc-300"
                              >
                                View Details <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>
                        )
                      ))
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Details Modal for Reels */}
        <AnimatePresence>
          {selectedMedia && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMedia(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row z-10 custom-scrollbar"
              >
                <button 
                  onClick={() => setSelectedMedia(null)} 
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors p-2 bg-black/50 backdrop-blur-sm rounded-full z-20"
                >
                  <X size={20} />
                </button>

                {/* Modal Video/Image */}
                <div className="w-full md:w-1/2 h-[450px] md:h-auto min-h-[400px] relative bg-zinc-900 border-r border-white/5 flex items-center justify-center overflow-hidden">
                  {selectedMedia.video ? (
                    <video 
                      src={selectedMedia.video} 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      controls
                      playsInline
                    />
                  ) : (
                    <img 
                      src={selectedMedia.img} 
                      alt={selectedMedia.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Modal Content */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 md:mb-3">Content Creation • {selectedMedia.mediaType === 'reels' ? 'Reel' : selectedMedia.mediaType === 'posts' ? 'Post' : 'Thumbnail'}</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">{selectedMedia.title}</h3>
                  
                  <div className="space-y-6 md:space-y-8 flex-grow">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">The Objective</h4>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        {selectedMedia.mediaType === 'reels' 
                          ? 'To craft a highly engaging, fast-paced short-form video that maximizes viewer retention and drives viral algorithmic reach on platforms like Instagram Reels and YouTube Shorts.'
                          : selectedMedia.mediaType === 'posts'
                          ? 'To design a visually striking and on-brand static social media post that conveys the core message instantly, driving likes, saves, and shares across feeds.'
                          : 'To conceptualize and design a high-converting YouTube thumbnail that cuts through the noise, maximizing Click-Through Rate (CTR) and initial video momentum.'}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">The Execution</h4>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        {selectedMedia.mediaType === 'reels'
                          ? 'Employed dynamic masking, aggressive jump cuts, trending audio synchronization, and high-contrast motion graphics to hook the viewer within the first critical 3 seconds.'
                          : selectedMedia.mediaType === 'posts'
                          ? 'Utilized precise typography, bold color theory, and balanced negative space to create a thumb-stopping visual tailored specifically for Instagram and LinkedIn aspect ratios.'
                          : 'Combined expressive subjects, high-saturation color grading, and hyper-legible bold typography to create irresistible visual curiosity optimized for mobile screens.'}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Tools Used</h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {(selectedMedia.mediaType === 'reels' 
                          ? ['Premiere Pro', 'After Effects', 'CapCut', 'Color Grading'] 
                          : selectedMedia.mediaType === 'posts'
                          ? ['Photoshop', 'Illustrator', 'Figma', 'Brand Guidelines']
                          : ['Photoshop', 'Lightroom', 'Midjourney', 'Typography Design']).map((tech: string, i: number) => (
                          <span key={i} className="bg-white/5 border border-white/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[11px] md:text-xs font-mono text-zinc-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
