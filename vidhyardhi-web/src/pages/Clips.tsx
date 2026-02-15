import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Play, Zap, Clock, Share2 } from 'lucide-react';

export function Clips() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Learn faster with shorts</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Knowledge in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Seconds
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Why watch 1-hour lectures when you can understand concepts in 60 seconds?
                        Vidhyardhi Clips brings you bite-sized educational content tailored for your syllabus.
                    </motion.p>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                                title: "Quick Revision",
                                desc: "Perfect for last-minute exam prep. Swipe through key formulas and definitions."
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-cyan-400" />,
                                title: "Save Time",
                                desc: "No fluff. Just the core concepts you need to know, delivered instantly."
                            },
                            {
                                icon: <Share2 className="w-8 h-8 text-green-400" />,
                                title: "Peer Learning",
                                desc: "Watch explanations from toppers and experts who know exactly where students struggle."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-colors"
                            >
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
