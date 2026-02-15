import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Terms() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms and Conditions</h1>
                <p className="text-slate-400 mb-8">Last updated: February 14, 2026</p>

                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our app, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on Vidhyardhi's app for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on Vidhyardhi's app are provided "as is". Vidhyardhi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
