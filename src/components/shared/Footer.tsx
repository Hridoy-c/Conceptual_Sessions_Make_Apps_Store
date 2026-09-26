// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    discover: [
      { name: 'Featured Apps', href: '/apps?filter=featured' },
      { name: 'Latest Releases', href: '/apps?filter=latest' },
      { name: 'Developer Tools', href: '/apps?category=dev' },
      { name: 'Productivity', href: '/apps?category=prod' },
    ],
    resources: [
      { name: 'CLI Documentation', href: '/installation' },
      { name: 'API Reference', href: '/docs/api' },
      { name: 'System Status', href: '/status' },
      { name: 'Community Forum', href: '/community' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Brand Kit', href: '/brand' },
      { name: 'Contact Support', href: '/contact' },
    ],
  };

  return (
    <footer className="w-full bg-[#0B0C0E] border-t border-zinc-800/80 mt-20">
      {/* 90vw Centered Container */}
      <div className="mx-auto w-[90vw] py-12 md:py-16">
        
        {/* Top Grid Matrix: Dynamic column handling across screen variants */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-6 lg:gap-12">
          
          {/* Brand Info (Full-width on mobile, spans 2 columns on desktop setups) */}
          <div className="space-y-4 sm:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-[#CCFF00] font-black text-2xl tracking-tighter">▲</span>
              <span className="text-xl font-black tracking-wider text-white uppercase">
                APP<span className="text-[#CCFF00]">STORE</span>
              </span>
            </div>
            <p className="text-xs font-medium leading-relaxed text-zinc-500 max-w-sm">
              The premier marketplace for high-performance developer setups, sandboxed environments, and native system applications. Built for the modern ecosystem.
            </p>
          </div>

          {/* Group 1: Discover */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
              Discover
            </h4>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Company */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box / Mini Call-to-action */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Updates
            </h4>
            <div className="rounded-xl bg-[#131518] border border-zinc-800 p-4 text-center space-y-2 sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 sm:gap-x-4 md:block md:space-y-2 md:p-3 md:text-center">
              <p className="text-[10px] font-bold text-zinc-400 sm:whitespace-nowrap md:whitespace-normal">Get release alerts</p>
              <Link 
                href="/signup" 
                className="block text-center rounded-lg bg-[#CCFF00] py-1.5 px-4 text-[10px] font-black uppercase text-black transition-all hover:bg-[#B3DE00] sm:w-auto md:w-full"
              >
                Subscribe
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col items-center justify-between gap-y-4 sm:flex-row sm:gap-y-0">
          <p className="text-[11px] font-medium text-zinc-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} AppStore Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-[11px] font-medium text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] font-medium text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
