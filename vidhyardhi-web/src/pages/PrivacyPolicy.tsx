import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
                <p className="text-slate-400 mb-8">Last updated: February 14, 2026</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Vidhyardhi. We respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our
                            application and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Data We Collect</h2>
                        <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our app, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>To register you as a new user.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To enable you to participate in interactive features of our service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
                        <p>Example Contact: support@vidhyardhi.app</p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
