// src/app/apps/[id]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { appsApi } from '@/lib/AppsDataApi';
import { IAppItem } from '@/types/AppType';
import AppCardDetails from '@/components/shared/AppCardDetails';

export default function AppDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // Extract and normalize the dynamic ID parameter route securely
  const appId = params?.id ? Number(params.id) : null;

  const [appData, setAppData] = useState<IAppItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!appId || isNaN(appId)) {
      setError("Invalid application request link.");
      setLoading(false);
      return;
    }

    async function loadAppCardRecord() {
      try {
        setLoading(true);
        setError(null);
        // Call your established lib API module helper layer
        const data = await appsApi(appId);
        setAppData(data);
      } catch (err) {
        setError("Failed to fetch application data from the API endpoint.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAppCardRecord();
  }, [appId]);

  // Loading Framework Layout
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-[#CCFF00]" />
      </div>
    );
  }

  // Error Boundary Layout
  if (error || !appData) {
    return (
      <div className="mx-auto max-w-md text-center py-16 border border-dashed border-red-500/20 rounded-2xl bg-red-950/5 px-6 space-y-4">
        <p className="text-xs font-black text-red-400 uppercase tracking-widest">
          {error || "Application Profile Not Found."}
        </p>
        <button 
          onClick={() => router.push('/apps')}
          className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#CCFF00] hover:border-zinc-700 transition-colors"
        >
          ← Return to Directory Hub
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[65vh] items-center justify-center py-6 sm:py-10">
      {/* Renders your beautiful single object prop card flawlessly centered */}
      <AppCardDetails AppCard={appData} />
    </div>
  );
}
