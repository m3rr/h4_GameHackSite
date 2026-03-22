import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PatreonIcon } from '../components/PatreonIcon';

export const About = () => {
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const observer = new MutationObserver(() => {
            setIsFlipped(root.hasAttribute('data-kirby-flipped'));
        });

        observer.observe(root, { attributes: true, attributeFilter: ['data-kirby-flipped'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen p-4 md:p-12 flex flex-col items-center relative overflow-x-hidden">
            {/* HUD Elements */}
            <div className="fixed top-8 left-8 z-50 pointer-events-none flex items-center gap-4">
                <Link to="/" className="text-[var(--theme-primary)] font-mono text-xs hover:opacity-100 transition-opacity no-underline flex items-center gap-2 pointer-events-auto">
                    <span>{"<"} BACK_TO_INTERFACE</span>
                </Link>
            </div>

            <div
                className="fixed bottom-6 right-[164px] z-50 pointer-events-auto transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
                style={{
                    transform: isFlipped ? 'translateX(-120%) rotate(-180deg)' : 'none',
                    transformOrigin: 'center'
                }}
            >
                <a
                    href="https://www.patreon.com/cw/h4dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 glass p-4 cyber-border hover:bg-[var(--theme-primary)]/10 transition-colors group no-underline shadow-[0_0_20px_rgba(255,66,77,0.1)] whitespace-nowrap"
                >
                    <PatreonIcon className="w-6 h-6 text-[#FF424D] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono font-bold tracking-widest text-[var(--theme-primary)]">SUPPORT_THE_THING</span>
                </a>
            </div>

            <div className="max-w-5xl w-full z-10 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Author Identity Section */}
                    <motion.div
                        className="lg:col-span-4 relative mb-12 lg:mb-0"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cyber-border glass p-2 relative group bg-[var(--theme-bg)]/80">
                            <div className="absolute -top-4 -left-4 font-mono text-[10px] opacity-40 uppercase tracking-widest bg-[var(--theme-bg)] px-2">
                                IDENT: h4dev
                            </div>
                            <img
                                src={`${baseUrl}/assets/author.png`}
                                alt="h4dev Profile"
                                className="w-full h-auto brightness-90 saturate-[0.8] hover:saturate-100 transition-all duration-700 aspect-square object-cover"
                            />
                            <div className="absolute -bottom-4 -right-4 font-mono text-[10px] opacity-40 uppercase tracking-widest bg-[var(--theme-bg)] px-2">
                                LOC: CANADA_CORES
                            </div>
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="glass p-4 border-l-4 border-[#FF424D]/40">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-50 italic">Personal_Lore</h4>
                                <blockquote className="text-sm font-mono leading-relaxed italic opacity-90">
                                    "You're only at your best, when you've been through the worst."
                                </blockquote>
                                <div className="mt-2 text-[9px] font-mono text-right opacity-30">— h4dev</div>
                            </div>

                            <div className="p-4 border border-[var(--theme-primary)]/5 glass">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-50">Operational_Stats</h4>
                                <ul className="space-y-3 font-mono text-[10px] uppercase tracking-[0.15em] opacity-80">
                                    <li className="flex justify-between border-b border-white/5 pb-1">
                                        <span>Training:</span>
                                        <span>Self-Taught</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-1">
                                        <span>Primary_Goal:</span>
                                        <span>Provider</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-1">
                                        <span>Role:</span>
                                        <span>Father (x5)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Narrative Section */}
                    <motion.div
                        className="lg:col-span-8 space-y-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Hero Header */}
                        <div className="glass p-8 md:p-12 cyber-border relative bg-[var(--theme-bg)]/40 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] opacity-10">
                                RAW_TRANSMISSION_PROTOCOL
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black mb-8 italic tracking-tighter uppercase leading-none whitespace-nowrap">
                                DO THE <span className="glitch-text text-[var(--theme-primary)]">THING</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-mono text-[var(--theme-primary)] leading-tight italic opacity-90">
                                Be your best. I mean that when I say it.
                            </p>
                        </div>

                        {/* Story Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass p-6 cyber-border">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[var(--theme-primary)]">The_Genesis</h3>
                                <p className="text-sm font-mono leading-relaxed opacity-70">
                                    It started in <span className="text-[var(--theme-primary)]">Green Hell</span>. A crash after an hour of unsaved progress left me staring at a blank desktop. That frustration turned into research.
                                </p>
                                <p className="text-sm font-mono leading-relaxed opacity-70 mt-4">
                                    CheatEngine is amazing, but it was too complex—adjusting pointers, hacking hex codes, and guessing. I wanted to "translate" those pointers into English. Match the pattern, trace the origin, and lock it in.
                                </p>
                            </div>

                            <div className="glass p-6 cyber-border">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-[var(--theme-primary)]">The_Vision</h3>
                                <p className="text-sm font-mono leading-relaxed opacity-70">
                                    For me, it's about the <span className="text-[var(--theme-primary)]">puzzle and the vibe</span>. H4 is more than a game hacker; it's a full-blown memory editor designed to fit perfectly.
                                </p>
                                <p className="text-sm font-mono leading-relaxed opacity-70 mt-4 italic">
                                    "I'm here to prove that a career on my own terms is a viable path, regardless of how the bank account fights back or who doesn't believe."
                                </p>
                            </div>
                        </div>

                        {/* The Honest Truth */}
                        <div className="glass p-8 md:p-10 cyber-border relative">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-[var(--theme-primary)] flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#FF424D] rounded-full animate-pulse" />
                                THE_UNFILTER_TRUTH
                            </h3>
                            <div className="space-y-6 text-[15px] font-mono leading-relaxed opacity-85">
                                <p>
                                    I'm a self-taught developer and a father of five. My need for this to succeed is paramount. In an economy that's fighting small creators at every turn, I'm doubling down on my dream because it's the right thing to do.
                                </p>
                                <p>
                                    When you support through Patreon, you aren't just buying "credits." You're keeping the water and lights on in my house. You're helping me fix damaged gear and dedicate the thousands of hours required to build a tool that isn't just functional, but <span className="text-[var(--theme-primary)] font-bold">HAWT</span>.
                                </p>
                                <div className="p-8 border border-[#FF424D]/30 bg-[#FF424D]/5 rounded-sm text-center">
                                    <h4 className="text-xl font-black italic mb-6 uppercase tracking-tighter">Support h4dev Directly</h4>
                                    <a
                                        href="https://www.patreon.com/cw/h4dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-12 py-4 bg-[#FF424D] text-white font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all no-underline shadow-[0_0_30px_rgba(255,66,77,0.3)]"
                                    >
                                        JOIN_THE_MISSION
                                    </a>
                                    <p className="mt-6 text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
                                        Upkeep // Infrastructure // Development time
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Transmission */}
                        <div className="text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.4em] pb-16">
                            END_OF_TRANS_REF_v.1.0_PERSONAL // BE_YOUR_BEST
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
