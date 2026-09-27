// src/app/apps/page.tsx
import AppsCard from '@/components/shared/AppsCard';
import { appsApi } from '@/lib/AppsDataApi';

const AppsPage = async () => {
  // Fetching live data streams directly from your JSON server instance helper
  const appsData = await appsApi();

  return (
    <div className="w-full bg-[#131518] rounded-3xl border border-zinc-800/80 p-6 sm:p-10 space-y-12 shadow-2xl">
      
      {/* Centered Premium Title Section Block */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/10 px-3 py-1">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <h1 className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">
            Ecosystem Directory
          </h1>
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl leading-none">
          Explore All Apps
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed">
          Discover high-performance cloud developer modules, streaming platforms, and cross-platform native utility instances compiled instantly.
        </p>
      </div>

      {/* Grid mapping list loops using your component's 'appCard' parameter profile */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6 border-t border-zinc-800/60"> 
        {appsData.map((app) => (
          <AppsCard key={app.appId} appCard={app} />
        ))}
      </div>

    </div>
  );
};

export default AppsPage;
