import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 py-4 px-6 md:px-12 flex justify-between items-center bg-background sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        <span>EXPERT</span><span className="text-brand-red uppercase ml-1">resume</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/builder" className="hidden md:block text-sm font-medium hover:text-brand-red transition-colors">
          BUILDER
        </Link>
        <Link 
          href="/builder" 
          className="bg-brand-red text-white px-5 py-2 rounded-sm text-sm font-bold hover:bg-red-700 transition-all active:scale-95"
        >
          TRY NOW
        </Link>
      </div>
    </nav>
  );
}
