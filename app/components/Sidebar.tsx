'use client';

import { 
  Activity, 
  Users, 
  MapPin, 
  Utensils, 
  FileText, 
  Edit3, 
  Clock, 
  Apple 
} from 'lucide-react';

const menuItems = [
  { icon: Activity, label: 'Microbiome Score', active: true },
  { icon: Users, label: 'Cuelly thanfraqs to Conthtion' },
  { icon: MapPin, label: 'Daily Food Log' },
  { icon: Utensils, label: 'Daily Food Logs' },
  { icon: FileText, label: 'Nutritional blackbrowns' },
  { icon: Edit3, label: 'Real food Logs' },
  { icon: MapPin, label: 'Daily Food Log' },
  { icon: Clock, label: 'Real-time' },
  { icon: Apple, label: 'Nutritions' },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 bg-surface border-r border-white/10">
      <div className="flex-1 flex flex-col min-h-0 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-fg">GutGuardian</span>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-accent/10 text-accent'
                    : 'text-fg/70 hover:bg-white/5 hover:text-fg'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
