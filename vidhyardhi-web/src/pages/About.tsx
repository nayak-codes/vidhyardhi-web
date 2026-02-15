import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Sparkles } from 'lucide-react';

export function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section of About Page */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        Mana <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Vidhyardhi</span> Gurinchi
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        "Vidhyardhi" ante kevalam app kaadu, idi oka udyamam (Not just an app, a movement).
                        Student life ni inka easy ga, inka productive ga marchadaniki puttina platform idi.
                    </motion.p>
                </div>
            </div>

            {/* Story Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-white">Why We Built This?</h2>
                        <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                            Manam colleges lo chaduvutunnappudu notes kavali ana, events ekkada jarugutunnayo telusukovali ana,
                            seniors tho matladali ana... chala kastam ga undedi. Ee problems anni solve cheyadanike "Vidhyardhi" create chesam.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Mana vision simple: **"Prathi student ki kavalasina resources okke daggara undali."**
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <BookOpen className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                                    <h3 className="font-bold text-white">Smart Library</h3>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                    <h3 className="font-bold text-white">Community</h3>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                                    <h3 className="font-bold text-white">Hackathons</h3>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                                    <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                                    <h3 className="font-bold text-white">Success</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
