// src/components/shared/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Navigation config array to reduce duplicate markup code block lines
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Apps', href: '/apps' },
    { name: 'Installation', href: '/installation' },
  ];

  return (
    <nav className="w-full bg-[#0B0C0E] border-b border-zinc-800/80 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      {/* 90vw Container */}
      <div className="mx-auto w-[90vw]">
        
        {/* Main Grid Row: Responsive flex structure */}
        <div className="flex min-h-16 flex-col justify-between py-3 gap-y-4 md:h-16 md:flex-row md:items-center md:py-0 md:gap-y-0">
          
          {/* Top Row for Mobile Layout: Anchors Logo and Auth options */}
          <div className="flex items-center justify-between md:justify-start md:space-x-2">
            
            {/* 1. App Store Logo */}
            <div className="flex items-center space-x-2 group">
              <span className="text-[#CCFF00] font-black text-2xl tracking-tighter transition-transform group-hover:rotate-12 duration-300">
                ▲
              </span>
              <Link href="/" className="text-xl font-black tracking-wider text-white uppercase select-none">
                APP<span className="text-[#CCFF00]">STORE</span>
              </Link>
            </div>

            {/* Mobile Auth Actions: Displayed layout-right on smaller layouts */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link 
                href="/login" 
                className="text-xs font-bold text-zinc-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="rounded-full bg-[#CCFF00] px-3 py-1.5 text-[11px] font-black text-black transition-all hover:bg-[#B3DE00] shadow-md shadow-[#CCFF00]/10"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* 2. App Navigation Links (Scrollable row on mobile screens) */}
          <div className="w-full overflow-x-auto no-scrollbar md:w-auto md:overflow-visible">
            <ul className="flex items-center space-x-3 pb-1 min-w-max md:space-x-4 md:pb-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 block border ${
                        isActive
                          ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-sm shadow-[#CCFF00]/20'
                          : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/80 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 3. Desktop Auth Actions (Hidden on mobile viewports) */}
          <div className="hidden items-center space-x-5 md:flex">
            <Link 
              href="/login" 
              className="text-xs font-bold text-zinc-400 hover:text-white transition-colors tracking-wide uppercase"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="rounded-full bg-[#CCFF00] px-5 py-2 text-xs font-black uppercase text-black tracking-wider transition-all hover:bg-[#B3DE00] shadow-lg shadow-[#CCFF00]/10 hover:shadow-[#CCFF00]/20 active:scale-95"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
