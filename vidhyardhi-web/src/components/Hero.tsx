import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, PlayCircle } from 'lucide-react';
import Screen1 from '../assets/app-screens/screen1.jpg';
import Screen2 from '../assets/app-screens/screen2.jpg';
import Screen3 from '../assets/app-screens/screen3.jpg';
import Screen4 from '../assets/app-screens/screen4.jpg';
import Screen5 from '../assets/app-screens/screen5.jpg';

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const screens = [Screen1, Screen2, Screen3, Screen4, Screen5];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screens.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
                                v1.0 is Live
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                                Your Complete <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    Student Ecosystem
                                </span>
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Vidhyardhi connects you with resources, events, and a thriving community of peers.
                                Everything you need to ace your student life, in one app.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                                    <Download size={20} />
                                    Download for Android
                                </button>
                                <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                                    <PlayCircle size={20} />
                                    Watch Demo
                                </button>
                            </div>

                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950" />
                                    ))}
                                </div>
                                <p>Joined by 1,000+ students</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Phone Mockups */}
                    <div
                        className="flex-1 relative w-full max-w-full lg:max-w-none overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            ref={(el) => {
                                if (el) {
                                    const phoneWidth = 245; // phone width (225) + gap (20)
                                    el.scrollTo({
                                        left: currentIndex * phoneWidth,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className="flex gap-5 items-center overflow-x-auto pb-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        >
                            {/* Phone 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative snap-center flex-shrink-0"
                            >
                                <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[450px] w-[225px] shadow-xl overflow-hidden ring-1 ring-white/10">
                                    <div className="w-full h-full bg-indigo-950 relative">
                                        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                                            <img src={Screen1} alt="App Screen 1" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative snap-center flex-shrink-0"
                            >
                                <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[450px] w-[225px] shadow-xl overflow-hidden ring-1 ring-white/10">
                                    <div className="w-full h-full bg-indigo-950 relative">
                                        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                                            <img src={Screen2} alt="App Screen 2" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative snap-center flex-shrink-0"
                            >
                                <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[450px] w-[225px] shadow-xl overflow-hidden ring-1 ring-white/10">
                                    <div className="w-full h-full bg-indigo-950 relative">
                                        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                                            <img src={Screen3} alt="App Screen 3" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone 4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative snap-center flex-shrink-0"
                            >
                                <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[450px] w-[225px] shadow-xl overflow-hidden ring-1 ring-white/10">
                                    <div className="w-full h-full bg-indigo-950 relative">
                                        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                                            <img src={Screen4} alt="App Screen 4" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone 5 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="relative snap-center flex-shrink-0"
                            >
                                <div className="relative border-slate-900 bg-slate-900 border-[10px] rounded-[2rem] h-[450px] w-[225px] shadow-xl overflow-hidden ring-1 ring-white/10">
                                    <div className="w-full h-full bg-indigo-950 relative">
                                        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
                                            <img src={Screen5} alt="App Screen 5" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
