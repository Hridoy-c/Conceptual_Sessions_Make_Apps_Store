import AppCardDetails from '@/components/shared/AppCardDetails';
import { appsApi } from '@/lib/AppsDataApi';

const AppsPage = async () => {
  const appsData = await appsApi();

  return (
    // 1. Core structural page wrapper with premium dark background color panel
    <div className="w-full bg-[#131518]  border border-zinc-800/80 p-6 sm:p-10 space-y-12 shadow-2xl">
      
      {/* 2. Top Header Container: Isolate text-center so it does not distort grid cards */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/10 px-3 py-1">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <h1 className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
            Ecosystem Directory
          </h1>
        </div>
        
        {/* Large fluid header typography matching your specification */}
        <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl leading-none">
          Explore All Apps
        </h2>
        
        <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, saepe! Discover high-performance developer tools, responsive environments, and secure cross-platform modules built for modern systems.
        </p>
      </div>

      {/* 3. Server-Rendered Grid System Grid Matrix */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6 border-t border-zinc-800/60"> 
        {appsData.map((app) => (
          <AppCardDetails key={app.appId} AppCard={app} />
        ))}
      </div>

    </div>
  );
};

export default AppsPage;
