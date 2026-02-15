import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Bell, BookCheck, ClipboardList, Megaphone } from 'lucide-react';

export function InformativePosts() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
                    >
                        <Megaphone className="w-4 h-4" />
                        <span>Stay Updated Instantly</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        No More <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            "What's the Homework?"
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Missed a class? Don't worry. Get instant updates on homework, assignments,
                        cancelled classes, and exam schedules directly from CRs and faculty.
                    </motion.p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-orange-500/30 transition-all flex gap-6"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center shrink-0">
                                <ClipboardList className="w-7 h-7 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Homework & Assignments</h3>
                                <p className="text-slate-400 icon-text">Never miss a deadline. See exactly what needs to be done, with attached reference images or PDFs.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-red-500/30 transition-all flex gap-6"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center shrink-0">
                                <Bell className="w-7 h-7 text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Instant Alerts</h3>
                                <p className="text-slate-400">"Class cancelled?" "Exam postponed?" Get push notifications for crucial updates instantly.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-yellow-500/30 transition-all flex gap-6 md:col-span-2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center shrink-0">
                                <BookCheck className="w-7 h-7 text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Verified Official News</h3>
                                <p className="text-slate-400">No more fake rumors. Updates in the "Informative" tab are verified by Class Representatives or Staff.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
