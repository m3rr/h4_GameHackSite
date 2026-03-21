import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Screenshot {
    url: string;
    title: string;
    description: string;
}

const SCREENSHOTS: Screenshot[] = [
    {
        url: '/assets/targeted_search.png',
        title: 'HEURISTIC_SCAN',
        description: 'Targeted Smart Search logic for immediate variable discovery.'
    },
    {
        url: '/assets/process_list.png',
        title: 'NODE_OVERVIEW',
        description: 'Autonomous process list discovery and system handle attachment.'
    },
    {
        url: '/assets/media__1774101683839.png',
        title: 'VISUAL_ENGINE',
        description: 'Cinematic Slint-driven UI with chromatic aberration layers.'
    },
    {
        url: '/assets/media__1774101363890.png',
        title: 'MEMORY_MATRIX',
        description: 'Real-time memory flux visualization and pointer stability audit.'
    },
    {
        url: '/assets/media__1774099535694.png',
        title: 'SYSTEM_CORE',
        description: 'Hardware-accelerated engine logic snapshot (Industrial Spec).'
    },
    {
        url: '/assets/h4_app_interface.png',
        title: 'INTERFACE_A',
        description: 'Standard operational interface for the H4_GameHack suite.'
    },
];

export const Download = () => {
    const [selectedImg, setSelectedImg] = useState<Screenshot | null>(null);
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

    return (
        <div className="min-h-screen p-4 md:p-12 bg-[var(--theme-bg)] text-[var(--theme-primary)] relative overflow-x-hidden">
            {/* HUD Scanline */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-[var(--theme-primary)] animate-scanline" />
            </div>

            <div className="max-w-6xl mx-auto z-10 relative">
                <div className="flex justify-between items-center mb-12 border-b border-[var(--theme-primary)]/10 pb-6">
                    <Link to="/" className="text-[var(--theme-primary)] font-mono text-xs hover:opacity-100 transition-opacity no-underline flex items-center gap-2">
                        <span>{"<"} BACK_TO_INTERFACE</span>
                    </Link>
                    <div className="text-right flex items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-black italic tracking-tighter uppercase">TECHNICAL_PREVIEW</h2>
                            <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">Module: H4_ENGINE_DISTRIBUTION</p>
                        </div>
                        <img
                            src={`${baseUrl}/assets/logo.png`}
                            alt="Logo"
                            className="w-12 h-12 object-contain filter drop-shadow-[0_0_10px_var(--theme-primary)]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                    {/* Status Info (Left Col) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="glass p-8 cyber-border bg-[var(--theme-bg)]/40">
                            <h3 className="text-sm font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 animate-pulse" />
                                DISTRIBUTION_PAUSED
                            </h3>
                            <p className="font-mono text-[10px] leading-relaxed opacity-60">
                                Integration audit in progress. The H4 distribution core will re-initialize after memory pointer scan protocol satisfies zero-trace requirements.
                            </p>
                            <div className="mt-8 pt-4 border-t border-[var(--theme-primary)]/10 text-[8px] font-mono opacity-40 uppercase tracking-widest text-right">
                                Status: REFINING_ENGINE
                            </div>
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

                    {/* Image Grid (Right Col) */}
                    <div className="lg:col-span-8">
                        <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] mb-6 opacity-40">System_Captures // Technical_Data</h4>
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
                    End of technical preview // h4_integ_dist_v1.0
                </div>
            </div>

            {/* Lightbox Rendering */}
            <AnimatePresence>
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
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--theme-bg)]/20 pointer-events-none group-hover:bg-transparent transition-colors" />
            <div className="absolute top-2 left-2 p-1 bg-[var(--theme-bg)]/80 border border-[var(--theme-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[7px] font-mono tracking-widest uppercase">Inspect {">"}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-[var(--theme-bg)] to-transparent pointer-events-none">
                <span className="text-[7px] font-mono tracking-[0.2em] opacity-40 group-hover:opacity-100 truncate block">{img.title}</span>
            </div>
        </motion.div>
    );
};

export default Download;
