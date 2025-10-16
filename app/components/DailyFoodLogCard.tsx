'use client';

import { Camera, Plus } from 'lucide-react';

interface DailyFoodLogCardProps {
  onLogMeal: () => void;
}

export function DailyFoodLogCard({ onLogMeal }: DailyFoodLogCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-fg">Daily Food Log</h3>
        <button
          onClick={onLogMeal}
          className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors button-shadow"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Log Meal</span>
        </button>
      </div>

      {/* Empty State */}
      <div className="bg-bg rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Camera className="w-8 h-8 text-accent" />
        </div>
        <h4 className="text-lg font-semibold text-fg mb-2">No meals logged today</h4>
        <p className="text-sm text-fg/60 mb-4">
          Start tracking your meals to get personalized gut health insights
        </p>
        <button
          onClick={onLogMeal}
          className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 text-accent px-6 py-3 rounded-lg transition-colors font-medium"
        >
          <Camera className="w-5 h-5" />
          Take Photo
        </button>
      </div>
    </div>
  );
}
