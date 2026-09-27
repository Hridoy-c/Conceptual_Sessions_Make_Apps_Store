// src/components/shared/AppCardDetails.tsx
import { IAppItem } from "@/types/AppType";
import Image from "next/image";
import Link from "next/link";

interface AppDetailCardProps {
  AppCard: IAppItem; 
}

export default function AppCardDetails({ AppCard }: AppDetailCardProps) {
  const {
    appName,
    developer,
    icon,
    category,
    description,
    rating,
    downloads,
    price,
    sizeInMb,
    version,
    releaseYear,
  } = AppCard;

  return (
    // UPDATED: Changed background from bg-[#131518] to matching seamless bg-[#0B0C0E]
     <div className="bg-[#0B0C0E]">

    <div className="relative w-full overflow-hidden border border-zinc-800/80 bg-[#0B0C0E] py-8 sm:py-12 shadow-2xl transition-all hover:border-zinc-700/80">
      
      {/* Centered w-[90vw] container matching navbar bounds */}
      <div className="mx-auto w-[90vw] px-2 sm:px-4">
        
        {/* Ambient Background Vector Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#CCFF00]/5 blur-[120px]" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

        {/* 1. Header Block: Profile Info Section */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800/60 pb-8">
          <div className="flex items-center space-x-4">
            {/* Glassmorphic Icon Wrapper Layer */}
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-zinc-800 bg-[#131518] p-4 shadow-inner shadow-white/5">
              <Image
                src={icon}
                alt={`${appName} branding icon`}
                width={44}
                height={44}
                unoptimized
                className="invert opacity-90 transition-transform duration-200"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
                {category}
              </span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-4xl mt-0.5">
                {appName}
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                by {developer}
              </p>
            </div>
          </div>

          {/* System Action Control Button */}
          <button className="w-full sm:w-auto rounded-xl bg-[#CCFF00] px-8 py-4 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-[#B3DE00] hover:shadow-lg hover:shadow-[#CCFF00]/20 text-center select-none active:scale-95">
            Get Application
          </button>
        </div>

        {/* 2. Core Grid Info Parameters Matrix */}
        <div className="my-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl bg-[#131518]/60 border border-zinc-900 p-4 text-center">
            <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-600">
              User Score
            </span>
            <span className="mt-1 block text-base font-black text-white">
              ★ {rating}
            </span>
          </div>
          <div className="rounded-2xl bg-[#131518]/60 border border-zinc-900 p-4 text-center">
            <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-600">
              Storage Size
            </span>
            <span className="mt-1 block text-base font-black text-white">
              {sizeInMb} MB
            </span>
          </div>
          <div className="rounded-2xl bg-[#131518]/60 border border-zinc-900 p-4 text-center">
            <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-600">
              Downloads
            </span>
            <span className="mt-1 block text-base font-black text-[#CCFF00]">
              {downloads}
            </span>
          </div>
          <div className="rounded-2xl bg-[#131518]/60 border border-zinc-900 p-4 text-center">
            <span className="block text-[9px] font-black uppercase tracking-widest text-zinc-600">
              Market Price
            </span>
            <span className="mt-1 block text-base font-black text-white">
              {price}
            </span>
          </div>
        </div>

        {/* 3. Narrative Context Section */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
            Overview Description
          </h3>
          <p className="text-sm font-medium leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        {/* 4. Bottom Metadata Information Layout */}
        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-zinc-800/60 pt-6 gap-2 text-xs font-bold text-zinc-600">
          <div className="flex space-x-6">
            <span>
              BUILD VERSION: <span className="text-zinc-400">{version}</span>
            </span>
            <span>
              ESTABLISHED: <span className="text-zinc-400">{releaseYear}</span>
            </span>
          </div>
          <Link
            href="/apps"
            className="text-zinc-400 hover:text-[#CCFF00] transition-colors uppercase text-[10px] tracking-wider font-black"
          >
            Return to Hub →
          </Link>
        </div>

      </div>
    </div>
     </div>
    
  );
}
