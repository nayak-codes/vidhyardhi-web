import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Users, Search, ChevronRight, Play, FileText, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const features = [
    {
        title: "Digital Library",
        description: "Access thousands of lecture notes, PDFs, and previous year/semester question papers instantly.",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50",
        delay: 0.1,
        link: "/features/library"
    },
    {
        title: "Document Saver",
        description: "Your personal secure cloud. Scan notes, upload PDFs, and keep your study materials organized.",
        icon: <FileText className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-indigo-500/20 to-violet-500/20",
        border: "group-hover:border-indigo-500/50",
        delay: 0.2,
        link: "/features/documents"
    },
    {
        title: "Student Feed",
        description: "A professional network for your campus. Share projects, achievements, and stay updated like LinkedIn.",
        icon: <Zap className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-orange-500/20 to-red-500/20",
        border: "group-hover:border-orange-500/50",
        delay: 0.3,
        link: "/features/feed"
    },
    {
        title: "Events Hub",
        description: "Never miss a hackathon, workshop, or campus event. Get notified and register in one click.",
        icon: <Calendar className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "group-hover:border-purple-500/50",
        delay: 0.4,
        link: "/features/events"
    },
    {
        title: "Smart Groups",
        description: "Connect with peers, form study groups, and chat in real-time. Your campus network, digitized.",
        icon: <Users className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-green-500/20 to-emerald-500/20",
        border: "group-hover:border-green-500/50",
        delay: 0.5,
        link: "/features/groups"
    },
    {
        title: "Vidhyardhi Clips",
        description: "Learn concepts in seconds with bite-sized educational videos tailored for students.",
        icon: <Play className="w-6 h-6 text-white" />,
        className: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20",
        border: "group-hover:border-pink-500/50",
        delay: 0.6,
        link: "/features/clips"
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-slate-950 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Everything you need,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Zero distractions.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Vidhyardhi is built to help you focus on what matters most—learning, growing, and connecting.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Link to={feature.link} key={index} className={cn("block", feature.className)}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay }}
                                className={cn(
                                    "group relative h-full overflow-hidden rounded-3xl bg-slate-900/50 border border-white/5 p-8 hover:bg-slate-900 transition-colors duration-300"
                                )}
                            >
                                {/* Hover Gradient Background */}
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                                        feature.gradient
                                    )}
                                />

                                {/* Border Glow */}
                                <div
                                    className={cn(
                                        "absolute inset-0 border-2 border-transparent rounded-3xl transition-colors duration-300 pointer-events-none",
                                        feature.border
                                    )}
                                />

                                <div className="flex flex-col h-full justify-between">
                                    <div className="mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
                                        Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
