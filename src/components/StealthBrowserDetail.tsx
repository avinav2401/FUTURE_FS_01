import { ArrowLeft, Github, Download, Shield, Eye, Monitor, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

interface StealthBrowserDetailProps {
    onBack: () => void;
}

const StealthBrowserDetail = ({ onBack }: StealthBrowserDetailProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        onBack();
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-20 animate-fade-up">
            <div className="container">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-zinc-400 hover:text-indigo-500 transition-colors mb-8 text-lg"
                >
                    <ArrowLeft size={24} />
                    Back to Projects
                </button>

                {/* Header */}
                <div className="glass p-8 md:p-12 rounded-3xl mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gradient-silver-blue mb-4">Stealth Browser</h1>
                    <p className="text-xl text-zinc-400 mb-6">
                        A powerful, specialized browser application designed for specific workflow management
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">#C#</span>
                        <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">#WebView2</span>
                        <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">#Windows</span>
                    </div>
                </div>


                {/* Demo Video */}
                <div className="glass p-8 md:p-12 rounded-3xl mb-8">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-6">📹 Screen Recording Demo</h2>
                    <p className="text-zinc-400 mb-6">See how screen recorders detect the Stealth Browser in action:</p>
                    <div className="rounded-2xl overflow-hidden bg-zinc-900/50">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto"
                            style={{ maxHeight: '600px' }}
                        >
                            <source src="/stealth-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>


                {/* User View Demo */}
                <div className="glass p-8 md:p-12 rounded-3xl mb-8">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-6">👤 User View Demo</h2>
                    <p className="text-zinc-400 mb-6">See how users interact with the Stealth Browser:</p>
                    <div className="rounded-2xl overflow-hidden bg-zinc-900/50">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto"
                            style={{ maxHeight: '600px' }}
                        >
                            <source src="/user-view.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Description */}
                <div className="glass p-8 md:p-12 rounded-3xl mb-8">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-6">About This Project</h2>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                        A powerful, specialized browser application designed for specific workflow management, featuring advanced stealth capabilities, process monitoring, and custom hotkey controls.
                    </p>
                    <p className="text-lg text-zinc-400 leading-relaxed italic">
                        Or.. just a way to cheat on exams. This is a joke. Or is it? 😏
                    </p>
                </div>

                {/* Key Features */}
                <div className="glass p-8 md:p-12 rounded-3xl mb-8">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-8">🚀 Key Features</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Stealth Mode */}
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="text-indigo-500" size={28} />
                                <h3 className="text-xl font-semibold text-zinc-100">Stealth Mode</h3>
                            </div>
                            <p className="text-zinc-400 leading-relaxed">
                                Disguises itself as a critical system process to blend in with standard Windows operations.
                            </p>
                        </div>

                        {/* Window Management */}
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Monitor className="text-indigo-500" size={28} />
                                <h3 className="text-xl font-semibold text-zinc-100">Window Management</h3>
                            </div>
                            <ul className="text-zinc-400 leading-relaxed space-y-2">
                                <li>• Always On Top: Aggressively maintains window focus</li>
                                <li>• Capture Protection: Prevents screen recording detection</li>
                                <li>• Smart Auto-Hide: Hides on mouse corner movement</li>
                            </ul>
                        </div>

                        {/* Embedded Browser */}
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="text-indigo-500" size={28} />
                                <h3 className="text-xl font-semibold text-zinc-100">Embedded Browser</h3>
                            </div>
                            <ul className="text-zinc-400 leading-relaxed space-y-2">
                                <li>• Built on Microsoft WebView2 (Chromium-based)</li>
                                <li>• Camo Mode: Transforms pages into text editor look</li>
                                <li>• Virtual Keyboard: On-screen input capability</li>
                            </ul>
                        </div>

                        {/* Security & Monitoring */}
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-indigo-500" size={28} />
                                <h3 className="text-xl font-semibold text-zinc-100">Security & Monitoring</h3>
                            </div>
                            <ul className="text-zinc-400 leading-relaxed space-y-2">
                                <li>• Process Radar: Monitors potential threats</li>
                                <li>• Panic Switch: Instant termination capability</li>
                                <li>• Custom Hotkey Controls</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="glass p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-6">Project Links</h2>
                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="https://github.com/avinav2401/hidden-browser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex items-center gap-2 px-6 py-3 text-lg"
                        >
                            <Github size={20} />
                            View on GitHub
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1GMRaBWtj_I89eVXYH8pmfPzCTVNdMuSo/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary flex items-center gap-2 px-6 py-3 text-lg"
                        >
                            <Download size={20} />
                            Download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StealthBrowserDetail;
