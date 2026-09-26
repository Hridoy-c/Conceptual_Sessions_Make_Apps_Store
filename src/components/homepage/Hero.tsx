// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative w-full overflow-hidden border-zinc-800/80 bg-[#131518] px-4 py-12 border-x-0 sm:border-x  sm:px-12 md:py-20 lg:px-16">
      
      {/* Background Neon Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#CCFF00]/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[80px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      {/* Main Structural Grid Container */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        
        {/* Left Column: High-Impact Copy & CTAs */}
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/10 px-3 py-1">
            <span className="flex h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00] sm:text-[10px]">
              NEXT-GEN APPLICATIONS AVAILABLE NOW
            </span>
          </div>

          <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl leading-[0.95]">
            BUILD FAST.<br />
            DEPLoY ONCE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-lime-400 to-emerald-400">
              SCALE FOREVER.
            </span>
          </h1>

          <p className="max-w-xl text-xs font-medium leading-relaxed text-zinc-400 sm:text-sm md:text-base">
            Skip configuration nightmares. Discover a premium, curated digital store packed with production-ready dev environments, cross-platform modules, and instant desktop installations.
          </p>

          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/apps"
              className="group inline-flex items-center justify-center rounded-xl bg-[#CCFF00] px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#B3DE00] hover:shadow-lg hover:shadow-[#CCFF00]/20"
            >
              Explore Store
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/installation"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/40 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-zinc-800"
            >
              CLI Setup Guide
            </Link>
          </div>

          {/* Quick Metrics Stats Bar */}
          <div className="grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-8">
            <div>
              <p className="text-lg font-black text-white sm:text-2xl">450+</p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 sm:text-[10px]">Verified Apps</p>
            </div>
            <div>
              <p className="text-lg font-black text-white sm:text-2xl">1.2M</p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 sm:text-[10px]">Downloads</p>
            </div>
            <div>
              <p className="text-lg font-black text-[#CCFF00] sm:text-2xl">99.9%</p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 sm:text-[10px]">Uptime Rate</p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic App Preview Grid */}
        <div className="relative lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            
            {/* Card 1: Featured Flagship App */}
            <div className="col-span-2 rounded-2xl border border-zinc-800 bg-[#0B0C0E] p-4 sm:p-5 shadow-2xl transition-all hover:border-[#CCFF00]/30">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 text-lg font-black text-[#CCFF00] sm:h-12 sm:w-12 sm:text-xl">
                    ◈
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase text-white tracking-wide">TerminalX</h3>
                    <p className="text-[10px] text-zinc-500">Utilities / CLI Tools</p>
                  </div>
                </div>
                <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-[9px] font-extrabold text-[#CCFF00] uppercase tracking-wider">
                  Update
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-400">GPU-accelerated terminal client with integrated cloud pipelines.</p>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-900 pt-3">
                <span className="text-[10px] font-bold text-zinc-400 sm:text-[11px]">★ 4.9 (12k ratings)</span>
                <button className="rounded-lg bg-zinc-800 px-3 py-1 text-[10px] font-black uppercase text-white hover:bg-zinc-700">Get</button>
              </div>
            </div>

            {/* Card 2: Mini App */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0B0C0E] p-4 transition-all hover:border-[#CCFF00]/30">
              <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-md text-[#CCFF00]">
                ✦
              </div>
              <h4 className="mt-3 text-xs font-black uppercase text-white">NovaDB</h4>
              <p className="text-[10px] text-zinc-500 mt-0.5">Databases</p>
              <button className="mt-4 w-full rounded-lg bg-zinc-800 py-1.5 text-[10px] font-black uppercase text-white hover:bg-zinc-700">Get</button>
            </div>

            {/* Card 3: Mini App */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0B0C0E] p-4 transition-all hover:border-[#CCFF00]/30">
              <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-md text-blue-400">
                ⧓
              </div>
              <h4 className="mt-3 text-xs font-black uppercase text-white">SyncFlow</h4>
              <p className="text-[10px] text-zinc-500 mt-0.5">Productivity</p>
              <button className="mt-4 w-full rounded-lg bg-zinc-800 py-1.5 text-[10px] font-black uppercase text-white hover:bg-zinc-700">Get</button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
