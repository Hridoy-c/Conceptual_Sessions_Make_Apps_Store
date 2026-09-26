// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0B0C0E] border-b border-zinc-800/80">
      {/* 90vw Container */}
      <div className="mx-auto w-[90vw]">
        
        {/* Main Grid Row: Responsive flex structure */}
        <div className="flex min-h-16 flex-col justify-between py-3 gap-y-4 md:h-16 md:flex-row md:items-center md:py-0 md:gap-y-0">
          
          {/* Top Row for Mobile Layout: Anchors Logo and Auth options */}
          <div className="flex items-center justify-between md:justify-start md:space-x-2">
            {/* 1. App Store Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-[#CCFF00] font-black text-2xl tracking-tighter">▲</span>
              <Link href="/" className="text-xl font-black tracking-wider text-white uppercase">
                APP<span className="text-[#CCFF00]">STORE</span>
              </Link>
            </div>

            {/* Mobile Auth Actions: Displayed layout-right on smaller layouts */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link 
                href="/login" 
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="rounded-full bg-[#CCFF00] px-3 py-1.5 text-[11px] font-bold text-black transition-all hover:bg-[#B3DE00]"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* 2. App Navigation Links (Scrollable row on mobile screens) */}
          <div className="w-full overflow-x-auto no-scrollbar md:w-auto md:overflow-visible">
            <ul className="flex items-center space-x-6 pb-1 min-w-max md:space-x-8 md:pb-0">
              <li>
                <Link 
                  href="/" 
                  className="rounded-full bg-zinc-800/60 px-4 py-1.5 text-xs font-semibold text-[#CCFF00] border border-[#CCFF00]/20 transition-all block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/apps" 
                  className="text-xs font-medium text-zinc-400 hover:text-white transition-colors block"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link 
                  href="/installation" 
                  className="text-xs font-medium text-zinc-400 hover:text-white transition-colors block"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Desktop Auth Actions (Hidden on mobile viewports) */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link 
              href="/login" 
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-bold text-black transition-all hover:bg-[#B3DE00] shadow-lg shadow-[#CCFF00]/10"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
