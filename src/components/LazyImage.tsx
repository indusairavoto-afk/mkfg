import { useState } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function LazyImage({ src, alt, className, containerClassName, style, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ''}`}>
      {/* Skeleton / Placeholder */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-zinc-800/50 animate-pulse rounded-[inherit]"
      />
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        style={style}
        {...props}
      />
    </div>
  );
}
