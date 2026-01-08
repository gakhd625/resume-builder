'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[100]">
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <div className="w-full h-full bg-brand-red origin-left animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <p className="text-brand-red font-bold tracking-[0.2em] text-xs animate-pulse">
        INITIALIZING BUILDER...
      </p>
      
      <style jsx global>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
