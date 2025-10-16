'use client';

import { useEffect, useState } from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { MicrobiomeScoreCard } from './components/MicrobiomeScoreCard';
import { DailyFoodLogCard } from './components/DailyFoodLogCard';
import { VideoFeedCard } from './components/VideoFeedCard';
import { Sidebar } from './components/Sidebar';
import { MealLogModal } from './components/MealLogModal';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [showMealLog, setShowMealLog] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-fg">Loading GutGuardian...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <DashboardHeader />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Score & Food Log */}
              <div className="lg:col-span-2 space-y-6">
                <MicrobiomeScoreCard />
                <DailyFoodLogCard onLogMeal={() => setShowMealLog(true)} />
              </div>

              {/* Right Column - Video Feed */}
              <div className="lg:col-span-1">
                <VideoFeedCard />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Meal Log Modal */}
      {showMealLog && (
        <MealLogModal onClose={() => setShowMealLog(false)} />
      )}
    </div>
  );
}
