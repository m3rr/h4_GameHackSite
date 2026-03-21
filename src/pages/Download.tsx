import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SCREENSHOTS = [
    { url: '/assets/media__1774102523684.png', title: 'LOGIC_CORE_INTERFACE' },
    { url: '/assets/media__1774101683839.png', title: 'VISUAL_SNAPSHOT_V1' },
    { url: '/assets/media__1774101363890.png', title: 'MEMORY_MATRIX_AUDIT' },
    { url: '/assets/media__1774099535694.png', title: 'ENGINE_SNAPSHOT' },
];

export const Download = () => {
    // Ensuring assets use the repository basename
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

    return (
        <div className="min-h-screen p-4 md:p-12 bg-[var(--theme-bg)] text-[var(--theme-primary)] relative overflow-x-hidden">
            {/* HUD Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--theme-primary)] animate-scanline" />
            </div>

            <div className="max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-between items-center mb-12 border-b border-[var(--theme-primary)]/10 pb-6">
                    <Link to="/" className="text-[var(--theme-primary)] font-mono text-xs hover:opacity-100 transition-opacity no-underline flex items-center gap-2">
                        <span>{"<"} BACK_TO_INTERFACE</span>
                    </Link>
                    <div className="text-right">
                        <h2 className="text-3xl font-black italic tracking-tighter uppercase">TECHNICAL_PREVIEW</h2>
                        <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">Module: H4_ENGINE_DISTRIBUTION</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Messaging Section */}
                    <div className="space-y-8">
                        <div className="glass p-8 cyber-border bg-[var(--theme-bg)]/40">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-2 h-2 bg-yellow-500 animate-pulse" />
                                HANDSHAKE_PENDING: DISTRIBUTION_PAUSED
                            </h3>
                            <p className="font-mono text-sm leading-relaxed opacity-80">
                                The binary executable for the H4_GameHack suite is currently undergoing a final integrity audit. We do not distribute unstable snapshots.
                                <br /><br />
                                The distribution core will re-initialize once the memory pointer scan protocol satisfies our zero-trace requirements.
                            </p>
                            <div className="mt-8 pt-6 border-t border-[var(--theme-primary)]/10 text-[10px] font-mono opacity-40 uppercase tracking-widest">
                                Status: REFINING_ENGINE (Estimated T-Minus: UNKNOWN)
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[10px] opacity-40 block mb-1">BINARY_SIZE</span>
                                <span className="text-lg font-black italic">14.2 MB</span>
                            </div>
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[10px] opacity-40 block mb-1">MEM_FOOTPRINT</span>
                                <span className="text-lg font-black italic">0.4% IDLE</span>
                            </div>
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[10px] opacity-40 block mb-1">IO_STAMP</span>
                                <span className="text-lg font-black italic">ZERO_LATENCY</span>
                            </div>
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[10px] opacity-40 block mb-1">ARCH</span>
                                <span className="text-lg font-black italic">WIN32_KERNEL</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest">Engine Value Propositions</h4>
                            <ul className="space-y-4 font-mono text-xs opacity-80">
                                <li className="flex gap-4">
                                    <span className="text-[var(--theme-primary)]">[01]</span>
                                    <span>Direct Memory Access: Bypasses conventional APIs for stealth and raw efficiency.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--theme-primary)]">[02]</span>
                                    <span>Industrial Aesthetics: A cinematic Slint-driven UI that doesn't compromise on tactical clarity.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--theme-primary)]">[03]</span>
                                    <span>Dynamic Theming: Fully aware environment with 37 industrial protocols to suit your operational mood.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="grid grid-cols-1 gap-6">
                        {SCREENSHOTS.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="group relative glass overflow-hidden border-[var(--theme-primary)]/10"
                            >
                                <img
                                    src={`${baseUrl}${img.url}`}
                                    alt={img.title}
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--theme-bg)] to-transparent pointer-events-none">
                                    <span className="text-[9px] font-mono tracking-[0.3em] opacity-50">{img.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer status */}
                <div className="mt-12 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.4em] pb-32">
                    End of technical preview // h4_integ_dist_v1.0
                </div>
            </div>
        </div>
    );
};

export default Download;
