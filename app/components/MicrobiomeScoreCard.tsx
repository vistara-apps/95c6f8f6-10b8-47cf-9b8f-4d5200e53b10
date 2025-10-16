'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

export function MicrobiomeScoreCard() {
  return (
    <div className="bg-surface rounded-lg p-6 card-shadow">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-fg mb-1">Microbiome Score</h2>
          <p className="text-sm text-fg/60">Camela pinterani</p>
        </div>
        <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-fg/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Current Score */}
        <div className="bg-danger/10 rounded-lg p-4 border border-danger/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-5 h-5 text-danger" />
            <span className="text-sm font-medium text-fg/70">Current</span>
          </div>
          <div className="text-3xl font-bold text-fg">$165</div>
        </div>

        {/* Daily Food Log */}
        <div className="bg-success/10 rounded-lg p-4 border border-success/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-success" />
            <span className="text-sm font-medium text-fg/70">Daily Food Log</span>
          </div>
          <div className="text-3xl font-bold text-fg">66</div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-bg rounded-lg p-4">
        <p className="text-sm text-fg/80 leading-relaxed">
          This is some of hows ah you're is tha biome stales ir to moredond, 
          and he the foood sara our of forgeet to aloe e onlorbionen, do your 
          and billing andacty ira bring on gut health.
        </p>
      </div>
    </div>
  );
}
