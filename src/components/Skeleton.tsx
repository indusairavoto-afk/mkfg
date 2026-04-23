export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl ${className}`} />
  );
}

export function SkeletonGrid({ count = 6, aspect = "aspect-square", className = "" }: { count?: number, aspect?: string, className?: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className={`w-full ${aspect} ${className}`} />
      ))}
    </>
  );
}
