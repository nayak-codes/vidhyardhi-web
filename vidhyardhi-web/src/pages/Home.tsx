import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Showcase } from '../components/Showcase';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Showcase />
            </main>
            <Footer />
        </div>
    );
}
