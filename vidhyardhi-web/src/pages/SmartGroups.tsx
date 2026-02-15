import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Globe, Award } from 'lucide-react';

export function SmartGroups() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-green-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8"
                    >
                        <Users className="w-4 h-4" />
                        <span>Community & Collaboration</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Collaborate Without <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                            Boundaries
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Vidhyardhi Smart Groups aren't just chat rooms. They are purpose-built spaces for study groups,
                        project teams, and campus clubs to thrive.
                    </motion.p>
                </div>
            </section>

            {/* Grid Showcase */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-white/5 hover:border-green-500/30 transition-all"
                        >
                            <MessageSquare className="w-10 h-10 text-green-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Topic-Based Channels</h3>
                            <p className="text-slate-400">Keep discussions organized. Separate homework help from casual banter with dedicated channels.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-white/5 hover:border-emerald-500/30 transition-all"
                        >
                            <Globe className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Campus-Wide Reach</h3>
                            <p className="text-slate-400">Connect with students from other departments. Find teammates for hackathons outside your usual circle.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-white/5 hover:border-teal-500/30 transition-all md:col-span-2"
                        >
                            <Award className="w-10 h-10 text-teal-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Moderation & Safety</h3>
                            <p className="text-slate-400">AI-driven moderation ensures a safe, bullying-free environment focused on learning and growth.</p>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
