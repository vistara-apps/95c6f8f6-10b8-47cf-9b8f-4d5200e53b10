'use client';

import { Play, Volume2, MoreHorizontal } from 'lucide-react';

export function VideoFeedCard() {
  return (
    <div className="bg-surface rounded-lg overflow-hidden card-shadow">
      {/* Video Container */}
      <div className="relative aspect-[9/16] bg-bg">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=700&fit=crop"
          alt="Healthy meal"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60">
          {/* Top Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">
            <button className="w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-medium">Cooper</span>
            </div>
            
            <p className="text-white text-sm mb-4">
              Healthy breakfast ideas for better gut health 🥗
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Watch</span>
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
