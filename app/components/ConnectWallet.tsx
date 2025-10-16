'use client';

import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  return (
    <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors button-shadow">
      <Wallet className="w-5 h-5" />
      <span className="hidden sm:inline font-medium">Connect Wallet</span>
    </button>
  );
}
