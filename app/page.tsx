import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center bg-background px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 py-12 md:py-24">
        
        {/* Left Side: Copy */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            Build your <br />
            <span className="text-brand-red">resume</span> <br />
            by the experts.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Stand out in the job market with a professional, AI-optimized resume. 
            Designed by recruiters, built for speed.
          </p>
          <Link 
            href="/builder" 
            className="inline-block bg-brand-red text-white text-xl font-bold px-12 py-5 rounded-sm hover:bg-red-700 hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,0,0,0.3)]"
          >
            TRY NOW
          </Link>
          
          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-800 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-400" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Joined by <span className="text-white">10,000+</span> professionals
            </p>
          </div>
        </div>

        {/* Right Side: Product Preview */}
        <div className="flex-1 relative w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700 group">
            {/* Red Cursor Mockup */}
            <div className="absolute top-1/4 left-1/3 z-20 pointer-events-none group-hover:top-1/2 group-hover:left-1/2 transition-all duration-1000">
               <div className="w-6 h-6 bg-brand-red flex items-center justify-center animate-pulse">
                  <div className="w-full h-full border-2 border-white"></div>
               </div>
               <div className="bg-brand-red text-white text-[10px] font-bold px-2 py-1 mt-1 whitespace-nowrap">
                 EDITING...
               </div>
            </div>

            {/* Resume Content Skeleton */}
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="h-8 w-48 bg-gray-900"></div>
                  <div className="h-4 w-32 bg-gray-200"></div>
                </div>
                <div className="h-16 w-16 bg-gray-100"></div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-100"></div>
                <div className="h-4 w-[90%] bg-gray-100"></div>
                <div className="h-4 w-[95%] bg-gray-100"></div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="h-6 w-32 bg-gray-900 mb-4"></div>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1 h-12 bg-brand-red/20"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-40 bg-gray-200"></div>
                        <div className="h-3 w-24 bg-gray-100"></div>
                        <div className="h-3 w-full bg-gray-50"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selection Box indicator */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red/20 transition-colors pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full"></div>
          <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 bg-brand-red/10 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </main>
  );
}
