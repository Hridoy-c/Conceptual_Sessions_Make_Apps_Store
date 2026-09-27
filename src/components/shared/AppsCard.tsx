// src/components/shared/AppsCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IAppItem } from '@/types/AppType';

interface AppsCardProps {
  appCard: IAppItem;
}

export default function AppsCard({ appCard }: AppsCardProps) {
  const {
    appId,
    appName,
    developer,
    icon,
    category,
    description,
    rating,
    downloads,
    price,
    version,
  } = appCard;

  return (
    <Link href={`/apps/${appId}`} className="group">
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#131518] p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-[#16191c] hover:shadow-2xl hover:shadow-black/50">
      
      <div>
        {/* Top Flex Row: App Icon & Identity Block */}
        <div className="flex items-start justify-between gap-x-3">
          <div className="flex items-center space-x-3.5">
            
            {/* SVG Vector Icon Container with Hover Glow Effects */}
            <div className="relative h-12 w-12 shrink-0 p-2.5 rounded-xl bg-[#0B0C0E] border border-zinc-800 group-hover:border-[#CCFF00]/40 transition-all flex items-center justify-center">
              <Image
                src={icon}
                alt={`${appName} asset logo`}
                width={24}
                height={24}
                unoptimized
                className="invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all"
              />
            </div>
            
            <div>
              <h3 className="text-sm font-black uppercase tracking-wide text-white group-hover:text-[#CCFF00] transition-colors line-clamp-1">
                {appName}
              </h3>
              <p className="text-[10px] font-bold text-zinc-500 mt-0.5 uppercase tracking-wider line-clamp-1">
                {developer}
              </p>
            </div>
          </div>

          {/* Pricing Tag Badge */}
          <span className="rounded-full bg-zinc-800/80 border border-zinc-700/60 px-2.5 py-0.5 text-[9px] font-black uppercase text-zinc-400 tracking-wider">
            {price}
          </span>
        </div>

        {/* Middle Row: Overview Context Description Text */}
        <p className="mt-4 text-xs font-medium leading-relaxed text-zinc-400 min-h-[36px] line-clamp-2">
          {description}
        </p>

        {/* Structural Metrics Data Subgrid Box */}
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#0B0C0E]/60 border border-zinc-900/60 p-2.5 text-center text-[10px] font-bold text-zinc-400">
          <div>
            <span className="block text-zinc-600 text-[8px] font-black uppercase tracking-wider mb-0.5">Rating</span>
            <span className="text-white">★ {rating}</span>
          </div>
          <div>
            <span className="block text-zinc-600 text-[8px] font-black uppercase tracking-wider mb-0.5">Category</span>
            <span className="text-white truncate block px-1">{category}</span>
          </div>
          <div>
            <span className="block text-zinc-600 text-[8px] font-black uppercase tracking-wider mb-0.5">Downloads</span>
            <span className="text-[#CCFF00]">{downloads}</span>
          </div>
        </div>
      </div>

      {/* Bottom Row Interactivity Controllers */}
      <div className="mt-5 flex items-center justify-between border-t border-zinc-800/60 pt-4">
        <span className="text-[9px] font-bold text-zinc-600 tracking-wider uppercase">
          V{version}
        </span>
        
        {/* Navigates directly to your dynamic route page */}
        <Link 
          href={`/apps/${appId}`}
          className="rounded-lg bg-zinc-800 px-4 py-1.5 text-[10px] font-black uppercase text-white hover:bg-[#CCFF00] hover:text-black transition-all text-center tracking-wide"
        >
          Get App
        </Link>
      </div>

    </div>
    </Link>
  );
}
