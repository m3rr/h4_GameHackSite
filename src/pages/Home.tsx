import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <div className="min-h-screen p-4 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Assets - Synchronized via Base_URL */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img
          src={`${baseUrl}/assets/netrunner_dashboard.png`}
          alt="Dashboard HUD"
          className="absolute -top-20 -left-20 w-full h-full object-contain filter invert mix-blend-screen opacity-20"
        />
        <img
          src={`${baseUrl}/assets/holographic_hud.png`}
          alt="Holographic HUD"
          className="absolute -bottom-20 -right-20 w-full h-full object-contain filter invert mix-blend-screen animate-pulse opacity-20"
        />
      </div>

      {/* Main Grid Layout: Protocol v1.0.4-Sync */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl z-10">

        {/* Hero Section */}
        <motion.div
          className="lg:col-span-8 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass p-8 md:p-12 cyber-border relative group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">
              BUILD: v1.0.0-BETA (EXPERIMENTAL)
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter italic">
              H4_G<span className="glitch-text text-[var(--theme-primary)]">AME</span>HACK
            </h1>
            <p className="text-lg md:text-xl font-mono text-[var(--theme-primary)] opacity-80 max-w-2xl leading-relaxed">
              Precision memory engineering for the modern operator. Deploy kernel-level hooks, resolve complex pointers, and bypass anti-cheat systems with zero-trace architecture.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/download"
                className="px-8 py-3 bg-[var(--theme-primary)] text-[var(--theme-bg)] font-bold uppercase tracking-widest hover:skew-x-2 transition-transform cursor-pointer active:scale-95 no-underline"
              >
                Download Suite
              </Link>
              <a
                href="https://github.com/m3rr/h4_GameHack"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[var(--theme-primary)] text-[var(--theme-primary)] font-bold uppercase tracking-widest hover:-skew-x-2 transition-transform cursor-pointer active:scale-95 no-underline"
              >
                Documentation
              </a>
            </div>
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 cyber-border">
              <span className="text-[10px] uppercase tracking-widest opacity-40">Match Cap</span>
              <div className="text-2xl font-black italic mt-1">80% <span className="text-xs opacity-50 NOT-ITALIC">V_SYNC</span></div>
            </div>
            <div className="glass p-6 cyber-border">
              <span className="text-[10px] uppercase tracking-widest opacity-40">AOB Heuristics</span>
              <div className="text-2xl font-black italic mt-1">60% <span className="text-xs opacity-50 NOT-ITALIC">PROT_X</span></div>
            </div>
            <Link to="/details" className="glass p-6 cyber-border group hover:bg-[var(--theme-primary)]/5 transition-colors no-underline">
              <span className="text-[10px] uppercase tracking-widest opacity-40 group-hover:text-[var(--theme-primary)]">Stability Interlock</span>
              <div className="text-2xl font-black italic mt-1 group-hover:text-[var(--theme-primary)]">85% <span className="text-xs opacity-50 NOT-ITALIC">LINK {">"}</span></div>
            </Link>
          </div>
        </motion.div>

        {/* Sidebar Snapshot */}
        <motion.div
          className="lg:col-span-4 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass p-6 cyber-border h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xs font-mono uppercase tracking-[0.3em]">Software Status</h4>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <ul className="space-y-4 font-mono text-xs flex-1">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-40 uppercase">Kernel Hooks:</span>
                <span className="text-[var(--theme-primary)]">SYNCHRONIZED</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-40 uppercase">Memory Map:</span>
                <span className="text-[var(--theme-primary)]">RESOVLED</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="opacity-40 uppercase">Pointer Scan:</span>
                <span className="text-[var(--theme-primary)]">ACTIVE</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <Link to="/changelog" className="opacity-40 uppercase hover:opacity-100 transition-opacity no-underline text-inherit">Version Info:</Link>
                <span className="text-[var(--theme-primary)]/30">v1.2.0-STABLE</span>
              </li>
            </ul>

            {/* Engine Snapshot Image Component */}
            <div className="mt-8 relative aspect-video bg-[var(--theme-bg)]/40 rounded-sm overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)]/80 to-transparent z-10" />
              <img
                src={`${baseUrl}/assets/h4_app_interface.png`}
                alt="H4 Engine Snapshot"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20 z-20">SRC: H4_ENGINE_SNAPSHOT</div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-[var(--theme-primary)]"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[7px] font-mono opacity-50 uppercase tracking-widest">
                  <span>AUTONOMOUS DIAGNOSTICS</span>
                  <span>85% CLEAR</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
