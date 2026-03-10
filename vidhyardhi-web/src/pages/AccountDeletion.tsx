import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { AlertTriangle, Trash2, Mail, Clock, Database, CheckCircle2 } from 'lucide-react';

export function AccountDeletion() {
    const steps = [
        {
            icon: Mail,
            title: "1. Request Deletion",
            content: "Send an email to support@vidhyardhi.app from the email address associated with your Vidhyardhi account. Use the subject line 'Account Deletion Request'."
        },
        {
            icon: CheckCircle2,
            title: "2. Verification",
            content: "We may ask you to verify your identity to ensure the request is legitimate and to protect your account from unauthorized deletion."
        },
        {
            icon: Clock,
            title: "3. Processing Period",
            content: "Please allow up to 14 business days for us to process your request. During this time, your account access will be restricted."
        },
        {
            icon: Trash2,
            title: "4. Permanent Deletion",
            content: "Once processed, your account and associated personal data will be permanently deleted from our active databases."
        }
    ];

    const dataInfo = [
        {
            icon: Database,
            title: "Data We Delete",
            items: [
                "Your profile information (name, username, avatar)",
                "Contact details (email address, phone number)",
                "Saved documents and clips",
                "Your posts and comments in the Student Feed",
                "Your group memberships and direct messages"
            ]
        },
        {
            icon: AlertTriangle,
            title: "Data We May Retain",
            items: [
                "Anonymized aggregate data for statistical purposes",
                "Transaction records (if any) required for tax and accounting purposes",
                "Information required to comply with legal obligations",
                "Data necessary to resolve disputes or enforce our agreements"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent blur-3xl rounded-full mix-blend-screen" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center p-4 bg-red-500/10 rounded-2xl border border-red-500/20 mb-6">
                            <Trash2 className="w-8 h-8 text-red-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Account Deletion Policy
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Last updated: March 10, 2026
                        </p>
                        <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            We respect your right to privacy and data control. If you wish to delete your Vidhyardhi account and associated personal data, please follow the process outlined below.
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Steps Section */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">How to Delete Your Account</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {steps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors duration-300 relative overflow-hidden group"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 opacity-50" />
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-slate-800 rounded-xl mt-1 shrink-0">
                                                    <Icon className="w-5 h-5 text-indigo-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                                                    <p className="text-slate-400 leading-relaxed text-sm">{step.content}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Data Info Section */}
                        <section className="grid md:grid-cols-2 gap-8 pt-8">
                            {dataInfo.map((info, index) => {
                                const Icon = info.icon;
                                const isWarning = index === 1;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className={`bg-slate-900/40 border rounded-2xl p-8 relative overflow-hidden ${isWarning ? 'border-amber-500/20' : 'border-white/5'}`}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <Icon className={`w-6 h-6 ${isWarning ? 'text-amber-400' : 'text-slate-300'}`} />
                                            <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {info.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isWarning ? 'bg-amber-400' : 'bg-indigo-400'}`} />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </section>

                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 text-center">
                            <p className="text-indigo-200">
                                Need help? Contact our support team directly at <a href="mailto:support@vidhyardhi.app" className="text-indigo-400 font-medium hover:underline">support@vidhyardhi.app</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
