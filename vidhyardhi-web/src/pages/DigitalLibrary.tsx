import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Library, BookOpen, FileText, Download } from 'lucide-react';

export function DigitalLibrary() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
                    >
                        <Library className="w-4 h-4" />
                        <span>Unlimited Knowledge</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Your Pocket <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Library
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Thousands of lecture notes, textbooks, and previous year question papers.
                        Everything you need to ace your exams, organize in one place.
                    </motion.p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-indigo-500/30 transition-all"
                        >
                            <BookOpen className="w-8 h-8 text-indigo-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Lecture Notes</h3>
                            <p className="text-slate-400 text-sm">Missed a class? Access high-quality notes shared by toppers and faculty.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all"
                        >
                            <FileText className="w-8 h-8 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Question Papers</h3>
                            <p className="text-slate-400 text-sm">Previous year papers organized by semester and subject. Exam prep made easy.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all"
                        >
                            <Download className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Offline Access</h3>
                            <p className="text-slate-400 text-sm">Download materials once and access them anytime, anywhere. No internet needed.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
