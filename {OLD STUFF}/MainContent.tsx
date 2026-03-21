import React from 'react';
import { motion } from 'framer-motion';

export const MainContent = () => {
  return (
    <div className="min-h-screen p-4 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Assets */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img
          src="/assets/netrunner_dashboard.png"
          alt="Dashboard HUD"
          className="absolute -top-20 -left-20 w-full h-full object-contain filter invert mix-blend-screen"
        />
        <img
          src="/assets/holographic_hud.png"
          alt="Holographic HUD"
          className="absolute -bottom-20 -right-20 w-full h-full object-contain filter invert mix-blend-screen animate-pulse"
        />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl z-10">

        {/* Hero Section */}
        <motion.div
          className="lg:col-span-8 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass p-8 md:p-12 cyber-border relative group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">
              ID: H4_8829_VX
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter italic">
              H4_G<span className="glitch-text text-[var(--theme-primary)]">AME</span>HACK
            </h1>
            <p className="text-lg md:text-xl font-mono text-[var(--theme-primary)] opacity-80 max-w-2xl">
              Elevate your sensory experience. The ultimate toolkit for performance, stability, and digital aesthetics.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[var(--theme-primary)] text-[var(--theme-bg)] font-bold uppercase tracking-widest hover:skew-x-2 transition-transform cursor-pointer">
                Initialize Hack
              </button>
              <button className="px-8 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] font-bold uppercase tracking-widest hover:-skew-x-2 transition-transform cursor-pointer">
                Read Logs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 cyber-border">
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-4 opacity-50">System Stats</h3>
              <div className="space-y-4">
                {[
                  { label: "Memory Latency", value: "0.04ms", width: "95%" },
                  { label: "Stability Index", value: "99.9%", width: "99.9%" },
                  { label: "Corruption Resistance", value: "A+", width: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span>{stat.label}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="h-1 bg-[var(--theme-primary)]/10 w-full">
                      <motion.div
                        className="h-full bg-[var(--theme-primary)]"
                        initial={{ width: 0 }}
                        animate={{ width: stat.width }}
                        transition={{ delay: 1 + i * 0.2, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-6 cyber-border relative group">
              <img
                src="/assets/system_corruption.png"
                alt="System Corruption"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
              />
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-4 opacity-50">Recent Updates</h3>
              <ul className="text-xs font-mono space-y-2 text-[var(--theme-primary)]/80">
                <li>[v2.4.1] Kernel injection optimized.</li>
                <li>[v2.4.0] Anti-cheat bypass update.</li>
                <li>[v2.3.9] New ASCII Kirby expansion pack.</li>
                <li>[v2.3.8] Nomad theme color correction.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sidebar / Info */}
        <motion.div
          className="lg:col-span-4 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="glass p-6 cyber-border">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-4 opacity-50">Live Terminal</h3>
            <div className="bg-black/40 p-4 font-mono text-[10px] space-y-1 h-64 overflow-y-auto custom-scrollbar">
              <p className="text-green-500">{">"} Initializing H4_GameHack...</p>
              <p className="text-green-500">{">"} Scanning memory blocks...</p>
              <p className="text-blue-500">{">"} Found 14 active processes.</p>
              <p className="text-white">{">"} Injecting into main_loop.dll</p>
              <p className="text-white">{">"} Success.</p>
              <p className="text-yellow-500">{">"} Warning: Buffer overflow detected (Handled).</p>
              <p className="text-white">{">"} Loading Nomad interface...</p>
              <p className="text-white animate-pulse">{">"} Monitoring heartbeat...</p>
            </div>
          </div>

          <div className="glass p-6 cyber-border">
            <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-4 opacity-50">Interface Control</h3>
            <div className="space-y-4">
              <p className="text-[10px] font-mono opacity-80 leading-relaxed">
                Click the Kirby entity in the bottom right to cycle through available themes.
                Each theme reconfigures the UI resonance to match your operational environment.
              </p>
              <div className="flex justify-between items-center text-[10px] font-mono border-t border-white/10 pt-4">
                <span>RESONANCE:</span>
                <span className="text-[var(--theme-primary)]">SYNCHRONIZED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* HUD Accents */}
      <div className="fixed top-0 left-0 p-8 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="w-12 h-12 border-t-2 border-l-2 border-[var(--theme-primary)]" />
      </div>
      <div className="fixed top-0 right-0 p-8 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="w-12 h-12 border-t-2 border-r-2 border-[var(--theme-primary)]" />
      </div>
      <div className="fixed bottom-0 left-0 p-8 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="w-12 h-12 border-b-2 border-l-2 border-[var(--theme-primary)]" />
      </div>
      <div className="fixed bottom-0 right-0 p-8 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="w-12 h-12 border-b-2 border-r-2 border-[var(--theme-primary)]" />
      </div>
    </div>
  );
};
