import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PatreonIcon } from '../components/PatreonIcon';

interface Screenshot {
    url: string;
    title: string;
    description: string;
}

const SCREENSHOTS: Screenshot[] = [
    {
        url: '/assets/targeted_search.png',
        title: 'HEURISTIC_SCAN',
        description: 'Targeted Smart Search logic for immediate variable discovery via advanced heuristics.'
    },
    {
        url: '/assets/process_list.png',
        title: 'NODE_OVERVIEW',
        description: 'Autonomous process list discovery and system handle attachment for multi-axial targeting.'
    },
    {
        url: '/assets/debug_terminal.png',
        title: 'DEBUG_TERMINAL',
        description: 'Live kernel-mode instruction logging and visual UI bridge diagnostics.'
    },
    {
        url: '/assets/media__1774101363890.png',
        title: 'MEMORY_MATRIX',
        description: 'Real-time memory flux visualization and pointer stability audit for zero-trace sessions.'
    },
    {
        url: '/assets/h4_app_interface.png',
        title: 'INTERFACE_A',
        description: 'Standard operational interface for the H4_GameHack suite, optimized for tactical clarity.'
    },
];

export const Download = () => {
    const [selectedImg, setSelectedImg] = useState<Screenshot | null>(null);
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

    return (
        <div className="min-h-screen p-4 md:p-12 bg-[var(--theme-bg)] text-[var(--theme-primary)] relative overflow-x-hidden">
            {/* HUD Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--theme-primary)] animate-scanline" />
            </div>

            <div className="max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-between items-center mb-12 border-b border-[var(--theme-primary)]/10 pb-6 text-sm">
                    <Link to="/" className="text-[var(--theme-primary)] font-mono text-xs hover:opacity-100 transition-opacity no-underline flex items-center gap-2">
                        <span>{"<"} BACK_TO_INTERFACE</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <h2 className="text-3xl font-black italic tracking-tighter uppercase">TECHNICAL_PREVIEW</h2>
                            <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">Module: H4_ENGINE_DISTRIBUTION</p>
                        </div>
                        <img
                            src={`${baseUrl}/assets/logo.png`}
                            alt="H4 Logo"
                            className="w-12 h-12 object-contain filter drop-shadow-[0_0_10px_var(--theme-primary)]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    {/* Status Messaging */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="glass p-8 cyber-border bg-[var(--theme-bg)]/40">
                            <h3 className="text-sm font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 animate-pulse" />
                                DISTRIBUTION_PAUSED
                            </h3>
                            <p className="font-mono text-[10px] leading-relaxed opacity-60">
                                The H4 binary distribution core is currently in a "Held" state for a final pointer-scan integrity audit. Operational snapshots are available below for visual verification.
                            </p>
                        </div>

                        <div className="glass p-8 cyber-border bg-[var(--theme-bg)]/40">
                            <h3 className="text-sm font-bold mb-4 flex items-center gap-3 text-[#FF424D]">
                                <PatreonIcon className="w-5 h-5" />
                                SUPPORT_ON_PATREON
                            </h3>
                            <p className="font-mono text-[10px] leading-relaxed opacity-60 mb-6">
                                If you find these tools useful, consider supporting the continued development and research at H4_LABS through our Patreon.
                            </p>
                            <a
                                href="https://www.patreon.com/cw/h4dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center px-4 py-2 border border-[#FF424D]/30 text-[9px] font-mono uppercase text-[#FF424D] hover:bg-[#FF424D]/10 no-underline transition-colors"
                            >
                                JOIN_THE_MISSION
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[9px] opacity-40 block mb-1">BINARY_SIZE</span>
                                <span className="text-md font-bold italic">14.2 MB</span>
                            </div>
                            <div className="glass p-4 border-[var(--theme-primary)]/10">
                                <span className="text-[9px] opacity-40 block mb-1">MEM_FOOTPRINT</span>
                                <span className="text-md font-bold italic">0.4% IDLE</span>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Grid */}
                    <div className="lg:col-span-8">
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-6 opacity-40">Operational_Snapshots // 0.5.0 Beta</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {SCREENSHOTS.map((img, i) => (
                                <ThumbnailCard
                                    key={i}
                                    img={img}
                                    baseUrl={baseUrl}
                                    index={i}
                                    onClick={() => setSelectedImg(img)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.4em] pb-32">
                    End of technical preview // h4_integ_dist_v0.5.0
                </div>
            </div>

            {/* Lightbox Rendering */}
            <AnimatePresence mode="wait">
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[var(--theme-bg)]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-5xl w-full cyber-border glass p-2 bg-black/40"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`${baseUrl}${selectedImg.url}`}
                                alt={selectedImg.title}
                                className="w-full h-auto"
                            />
                            <div className="p-4 border-t border-[var(--theme-primary)]/10 flex justify-between items-end">
                                <div className="space-y-1">
                                    <h5 className="text-md font-black italic text-[var(--theme-primary)]">{selectedImg.title}</h5>
                                    <p className="text-[10px] font-mono opacity-50">{selectedImg.description}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedImg(null)}
                                    className="px-4 py-2 border border-[var(--theme-primary)]/30 text-[9px] font-mono uppercase hover:bg-[var(--theme-primary)]/10"
                                >
                                    CLOSE_PREVIEW [X]
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ThumbnailCard = ({ img, baseUrl, index, onClick }: { img: Screenshot, baseUrl: string, index: number, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative glass aspect-video overflow-hidden border-[var(--theme-primary)]/10 cursor-pointer hover:border-[var(--theme-primary)]/40 transition-colors"
            onClick={onClick}
        >
            <img
                src={`${baseUrl}${img.url}`}
                alt={img.title}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-[var(--theme-bg)] to-transparent pointer-events-none">
                <span className="text-[7px] font-mono tracking-[0.2em] opacity-40 group-hover:opacity-100 truncate block">{img.title}</span>
            </div>
        </motion.div>
    );
};

export default Download;
