import { Mail, MapPin } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Reveal } from './Reveal';

const Contact = () => {
    return (

        <section id="contact" className="section relative min-h-screen flex items-center">
            {/* Interactive Spline Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Spline
                    scene="https://prod.spline.design/oOe84LZZ6gVMfmwb/scene.splinecode"
                    style={{
                        width: '120%',
                        height: '120%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    className="opacity-50 md:opacity-100"
                />

                {/* Seamless Gradient Cover for Spline Watermark */}
                <div className="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-tl from-[#0a0a0b] via-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="container relative z-10 pointer-events-none">
                <Reveal width="100%">
                    <h2 className="title text-gradient-silver-blue pointer-events-auto w-fit mb-12 text-3xl md:text-5xl font-bold">Get In Touch</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        <div className="pointer-events-auto space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-zinc-100 uppercase tracking-wide">Let's talk about everything!</h3>
                                <p className="text-zinc-400 text-lg">
                                    Don't like forms? Send me an email. 👋
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Mail Me</h4>
                                        <p className="text-zinc-100 font-medium">hello@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-zinc-400 font-medium uppercase tracking-wider">Location</h4>
                                        <p className="text-zinc-100 font-medium">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="glass pointer-events-auto p-8 rounded-2xl flex flex-col gap-6 w-full">
                            <div className="flex flex-col md:flex-row gap-6">
                                <input type="text" placeholder="Name" className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-600" />
                                <input type="email" placeholder="Email" className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-600" />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-zinc-600" />
                            <textarea rows={5} placeholder="Message" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-zinc-600"></textarea>
                            <button type="button" className="btn btn-primary w-full md:w-fit justify-center py-4 text-base font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
                                Send Message
                            </button>
                        </form>

                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
