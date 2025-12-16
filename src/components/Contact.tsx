import { Mail, Phone } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Reveal } from './Reveal';

const Contact = () => {
    return (

        <section id="contact" className="section relative flex items-center">
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

                        <div className="pointer-events-auto space-y-10">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-semibold text-zinc-100 uppercase tracking-wide">Let's talk about everything!</h3>
                                <p className="text-zinc-400 text-xl">
                                    Don't like forms? Send me an email. 👋
                                </p>
                            </div>

                            <div className="space-y-8">
                                <a href="mailto:avinavpriyadarshi@gmail.com" className="flex items-center gap-5 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-all">
                                    <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base text-zinc-400 font-medium uppercase tracking-wider">Mail Me</h4>
                                        <p className="text-zinc-100 font-medium text-lg">avinavpriyadarshi@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+919106797847" className="flex items-center gap-5 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-all">
                                    <div className="w-14 h-14 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base text-zinc-400 font-medium uppercase tracking-wider">Contact</h4>
                                        <p className="text-zinc-100 font-medium text-lg">+91 9106797847</p>
                                    </div>
                                </a>
                            </div>
                        </div>



                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
