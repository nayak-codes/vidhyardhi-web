import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">V</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Vidhyardhi
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
                    <a href="#community" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Community</a>
                    <a href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2">
                        <Download size={16} />
                        Download APK
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4">
                    <a href="#features" className="text-slate-300 hover:text-white py-2">Features</a>
                    <a href="#community" className="text-slate-300 hover:text-white py-2">Community</a>
                    <a href="#about" className="text-slate-300 hover:text-white py-2">About</a>
                    <button className="bg-indigo-600 text-white w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                        <Download size={18} />
                        Download APK
                    </button>
                </div>
            )}
        </nav>
    );
}
