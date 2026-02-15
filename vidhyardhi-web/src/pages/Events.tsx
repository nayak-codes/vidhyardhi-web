import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, BellRing } from 'lucide-react';

export function Events() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-8"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Never Miss Out</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Life Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                            Lectures
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Hackathons, Workshops, Cultural Fests. Discover everything happening on and off campus.
                        Register with one tap.
                    </motion.p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-20 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-pink-500/30 transition-all"
                        >
                            <Ticket className="w-8 h-8 text-pink-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">One-Tap Registration</h3>
                            <p className="text-slate-400 text-sm">No more Google Forms. Register for any event instantly with your student profile.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-rose-500/30 transition-all"
                        >
                            <BellRing className="w-8 h-8 text-rose-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Smart Reminders</h3>
                            <p className="text-slate-400 text-sm">We'll nudge you before the event starts. Never forget a workshop you signed up for.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-all"
                        >
                            <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Venue Directions</h3>
                            <p className="text-slate-400 text-sm">"Auditorium 2?" Navigate to event venues easily within the campus map.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
