'use client';

import { Menu, Bell, Search } from 'lucide-react';
import { ConnectWallet } from './ConnectWallet';

export function DashboardHeader() {
  return (
    <header className="bg-surface border-b border-white/10 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Menu & Search */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-fg" />
            </button>
            
            <div className="hidden sm:flex items-center gap-2 bg-bg rounded-lg px-4 py-2 min-w-[300px]">
              <Search className="w-5 h-5 text-fg/50" />
              <input
                type="text"
                placeholder="Search meals, challenges..."
                className="bg-transparent border-none outline-none text-fg placeholder:text-fg/50 w-full"
              />
            </div>
          </div>

          {/* Right - Notifications & Wallet */}
          <div className="flex items-center gap-4">
            <button
              className="relative p-2 rounded-md hover:bg-white/5 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-6 h-6 text-fg" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
            </button>
            
            <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  );
}
