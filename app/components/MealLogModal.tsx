'use client';

import { X, Camera, Upload, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface MealLogModalProps {
  onClose: () => void;
}

export function MealLogModal({ onClose }: MealLogModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-lg max-w-lg w-full p-6 card-shadow">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-fg">Log Your Meal</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-fg" />
          </button>
        </div>

        {/* Upload Area */}
        <div className="bg-bg rounded-lg p-8 mb-6 text-center border-2 border-dashed border-white/10 hover:border-accent/50 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8 text-accent" />
          </div>
          <h4 className="text-lg font-semibold text-fg mb-2">Take or Upload Photo</h4>
          <p className="text-sm text-fg/60 mb-4">
            AI will analyze your meal and calculate your microbiome score
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors">
              <Camera className="w-5 h-5" />
              <span>Take Photo</span>
            </button>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-fg px-4 py-2 rounded-lg transition-colors">
              <Upload className="w-5 h-5" />
              <span>Upload</span>
            </button>
          </div>
        </div>

        {/* Manual Entry */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-fg mb-2">
            Or enter manually
          </label>
          <textarea
            placeholder="Describe your meal (e.g., Grilled salmon with quinoa and steamed broccoli)"
            className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-fg/50 focus:outline-none focus:border-accent transition-colors resize-none"
            rows={3}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white/5 hover:bg-white/10 text-fg px-4 py-3 rounded-lg transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="flex-1 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-lg transition-colors font-medium button-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <span>Analyze Meal</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
