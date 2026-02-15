import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Rss, Briefcase, Award, TrendingUp } from 'lucide-react';

export function StudentFeed() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
                    >
                        <Rss className="w-4 h-4" />
                        <span>Your Professional Campus Network</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Showcase Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            Student Journey
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        More than just homework updates. Connect with peers, share your project achievements,
                        and build a portfolio that stands out. It's like LinkedIn, but built for your campus.
                    </motion.p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all"
                        >
                            <Briefcase className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Project Portfolio</h3>
                            <p className="text-slate-400">Built something cool? Post it. Get feedback from seniors and professors. Build a profile that recruiters will love.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all"
                        >
                            <Award className="w-10 h-10 text-indigo-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Certifications & Wins</h3>
                            <p className="text-slate-400">Won a hackathon? Completed a course? Share your certificates and celebrate your wins with your community.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all md:col-span-2"
                        >
                            <TrendingUp className="w-10 h-10 text-cyan-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-3">Campus Trends</h3>
                            <p className="text-slate-400">Stay updated on what's buzzing in college. From cultural fest teasers to placement news, see it all in one feed.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
