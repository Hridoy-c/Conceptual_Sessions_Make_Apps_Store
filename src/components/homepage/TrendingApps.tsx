// src/components/TrendingApps.tsx


export default function TrendingApps() {
  const trendingApps: IAppsType[] = [
    {
      id: '1',
      title: 'DevScope',
      category: 'Analytics & Logging',
      icon: '⚡',
      description: 'Real-time telemetry and state monitoring for cloud server clusters.',
      rating: '4.9',
      downloads: '45k',
      badge: 'Hot',
      isVoltBadge: true,
    },
    {
      id: '2',
      title: 'HyperDrive',
      category: 'Developer Tools',
      icon: '⧓',
      description: 'Zero-config local microservices proxying and routing engine.',
      rating: '4.8',
      downloads: '32k',
      badge: 'New',
    },
    {
      id: '3',
      title: 'NeonDB Client',
      category: 'Databases',
      icon: '◈',
      description: 'Visual interface and schema controller for rapid relational mapping.',
      rating: '4.7',
      downloads: '18k',
    },
    {
      id: '4',
      title: 'SecureTunnel',
      category: 'Utilities / Security',
      icon: '✦',
      description: 'Encrypted peer-to-peer localhost sharing with custom subdomains.',
      rating: '4.9',
      downloads: '89k',
      badge: 'Popular',
    },
    {
      id: '5',
      title: 'AssetPress',
      category: 'Productivity',
      icon: '▲',
      description: 'Lossless graphics compressor optimized for asset build pipelines.',
      rating: '4.6',
      downloads: '14k',
    },
    {
      id: '6',
      title: 'LogSync v3',
      category: 'Analytics & Logging',
      icon: '❖',
      description: 'Aggregates production platform errors directly into custom code tasks.',
      rating: '4.8',
      downloads: '27k',
      badge: 'Updated',
    },
  ];

  return (
    <section className="w-full py-12 pt-20 bg-[#131518]">
      <div className="mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black uppercase tracking-wider text-white sm:text-4xl md:text-5xl">
          Trending Apps 
        </h2>
        <p className="mt-2 text-sm font-medium text-zinc-400 sm:text-base md:text-lg">
          The most popular apps on AppStore.
        </p>
      </div>


     

      
    </section>
  );
}
