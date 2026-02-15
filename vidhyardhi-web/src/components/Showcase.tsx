import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, MessageCircle, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export function Showcase() {
    return (
        <section id="community" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Community Stats / Visuals */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-8">
                                    <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-white/5">
                                        <Users className="w-8 h-8 text-indigo-400 mb-4" />
                                        <h3 className="text-3xl font-bold text-white">5,000+</h3>
                                        <p className="text-slate-400">Active Students</p>
                                    </div>
                                    <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-white/5">
                                        <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
                                        <h3 className="text-3xl font-bold text-white">12k+</h3>
                                        <p className="text-slate-400">Daily Messages</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-white/5">
                                        <Star className="w-8 h-8 text-yellow-400 mb-4" />
                                        <h3 className="text-3xl font-bold text-white">4.8</h3>
                                        <p className="text-slate-400">App Store Rating</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Join Now</h3>
                                        <p className="text-indigo-100 text-sm">Be part of the revolution.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: CTA Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold mb-6"
                        >
                            Join the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                Campus Revolution
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0"
                        >
                            Stop juggling multiple apps for notes, events, and chats.
                            Get Vidhyardhi and experience the future of student life today.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-lg rounded-full hover:bg-indigo-700 hover:scale-105 focus:outline-none ring-offset-2 focus:ring-2 ring-indigo-400"
                        >
                            <Download className="w-6 h-6 mr-2" />
                            Download APK Now
                            <div className="absolute -inset-3 rounded-full bg-indigo-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-200" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
