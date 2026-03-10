import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

export function PrivacyPolicy() {
    const sections = [
        {
            icon: Shield,
            title: "1. Information We Collect",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App, or otherwise when you contact us.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; usernames; passwords; contact preferences; educational information; and other similar information.</li>
                        <li><strong className="text-white">Automatically Collected Information:</strong> We automatically collect certain information when you visit, use or navigate the App. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our App.</li>
                    </ul>
                </div>
            )
        },
        {
            icon: Database,
            title: "2. How We Use Your Information",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To provide and manage the Services (such as educational feeds, smart groups, and digital library access).</li>
                        <li>To send administrative information to you, such as product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                        <li>To protect our Services (for example, fraud monitoring and prevention).</li>
                    </ul>
                </div>
            )
        },
        {
            icon: Eye,
            title: "3. Information Sharing and Disclosure",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                    <p>We may process or share your data that we hold based on the following legal basis:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Consent:</strong> We may process your data if you have given us specific consent to use your personal information.</li>
                        <li><strong className="text-white">Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                        <li><strong className="text-white">Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, and situations involving potential threats to the safety of any person.</li>
                    </ul>
                </div>
            )
        },
        {
            icon: Lock,
            title: "4. Data Security",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.</p>
                </div>
            )
        },
        {
            icon: UserCheck,
            title: "5. Your Privacy Rights",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>You may review, change, or terminate your account at any time.</p>
                    <p>If you are a resident in the European Economic Area (EEA) or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</p>
                    <p><strong>Account Information:</strong> If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user profile. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.</p>
                </div>
            )
        },
        {
            icon: Mail,
            title: "6. Contact Us",
            content: (
                <div className="space-y-4 text-slate-300">
                    <p>If you have questions or comments about this policy, you may email us at:</p>
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 inline-block mt-2">
                        <p className="text-white font-medium">support@vidhyardhi.app</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl rounded-full mix-blend-screen" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Last updated: March 10, 2026
                        </p>
                        <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Welcome to Vidhyardhi. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.section
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-900/60 transition-colors duration-300 relative overflow-hidden group"
                                >
                                    {/* Hover gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                                <Icon className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                                        </div>
                                        <div className="text-base leading-relaxed">
                                            {section.content}
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
