import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SCREENSHOTS = [
    {
        url: '/assets/targeted_search.png',
        title: 'TARGETED_SMART_SEARCH',
        description: 'Heuristic-based pattern matching for rapid variable identification.'
    },
    {
        url: '/assets/process_list.png',
        title: 'PROCESS_NODE_DISCOVERY',
        description: 'Deep-process scanning and logic attachment for Win32 targets.'
    },
    {
        url: '/assets/media__1774101683839.png',
        title: 'VISUAL_SNAPSHOT_V1',
        description: 'High-fidelity cinematic UI with multi-axial tearing effects.'
    },
    {
        url: '/assets/media__1774101363890.png',
        title: 'MEMORY_MATRIX_AUDIT',
        description: 'Real-time memory flux visualization and pointer stability audit.'
    },
];

export const Download = () => {
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
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest">Engine Value Propositions</h4>
                            <ul className="space-y-4 font-mono text-xs opacity-80">
                                <li className="flex gap-4">
                                    <span className="text-[var(--theme-primary)]">[01]</span>
                                    <span>Direct Memory Access: Bypasses conventional APIs for stealth.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[var(--theme-primary)]">[02]</span>
                                    <span>Industrial Aesthetics: Cinematic Slint-driven tactical UI.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Gallery Section with Tooltips */}
                    <div className="grid grid-cols-1 gap-6">
                        {SCREENSHOTS.map((img, i) => (
                            <ScreenshotCard key={i} img={img} baseUrl={baseUrl} index={i} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.4em] pb-32">
                    End of technical preview // h4_integ_dist_v1.0
                </div>
            </div>
        </div>
    );
};

const ScreenshotCard = ({ img, baseUrl, index }: { img: any, baseUrl: string, index: number }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative glass overflow-hidden border-[var(--theme-primary)]/10 cursor-help"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={`${baseUrl}${img.url}`}
                alt={img.title}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-110 group-hover:scale-100"
            />

            {/* Standard Label */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--theme-bg)] to-transparent pointer-events-none">
                <span className="text-[9px] font-mono tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">{img.title}</span>
            </div>

            {/* Tactical Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute top-4 left-4 right-4 z-30"
                    >
                        <div className="bg-[var(--theme-bg)]/90 backdrop-blur-xl border border-[var(--theme-primary)]/30 p-4 shadow-2xl">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1.5 h-1.5 bg-[var(--theme-primary)] animate-pulse" />
                                <span className="text-[8px] font-mono uppercase tracking-widest text-[var(--theme-primary)]">Module_Insight</span>
                            </div>
                            <p className="text-[10px] font-mono leading-relaxed text-[var(--theme-primary)]">
                                {img.description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scanning Line Effect on Hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-[var(--theme-primary)]/5 to-transparent h-1/2 w-full pointer-events-none z-20"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
            )}
        </motion.div>
    );
};

export default Download;
