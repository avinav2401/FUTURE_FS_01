import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

            {/* Background Moving Text - Layer 1 (Top Left) */}
            <div className="absolute top-[5%] -left-10 opacity-10 select-none pointer-events-none whitespace-nowrap">
                <div className="animate-marquee hover:pause flex">
                    <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-['Rajdhani'] font-bold tracking-[15px] sm:tracking-[20px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Game Developer   Game Developer   Game Developer
                    </span>
                    <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-['Rajdhani'] font-bold tracking-[15px] sm:tracking-[20px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Game Developer   Game Developer   Game Developer
                    </span>
                </div>
            </div>

            {/* Background Moving Text - Layer 2 (Bottom Right) */}
            <div className="absolute bottom-[5%] -left-10 opacity-10 select-none pointer-events-none whitespace-nowrap">
                <div className="animate-marqueeReverse hover:pause flex">
                    <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-['Rajdhani'] font-bold tracking-[15px] sm:tracking-[20px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Software Developer   Software Developer   Software Developer
                    </span>
                    <span className="text-[80px] sm:text-[120px] md:text-[150px] lg:text-[200px] font-['Rajdhani'] font-bold tracking-[15px] sm:tracking-[20px] md:tracking-[30px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 stroke-text mx-4">
                        Software Developer   Software Developer   Software Developer
                    </span>
                </div>
            </div>


            {/* Content */}
            <div className="container relative z-10 text-center px-4">
                <Reveal width="100%">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">

                        <p className="text-zinc-400 font-medium mb-4 tracking-[0.2em] uppercase">
                            Hey There I'm
                        </p>

                        <h1 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-['Orbitron'] font-bold leading-[0.8] mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 animate-gradient bg-[length:200%_auto]">
                            AVINAV
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            Currently Studying Computer Science and Engineering
                        </p>

                        <div className="flex gap-6 justify-center items-center">
                            <a href="#projects" className="btn btn-primary group">
                                View Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn glass">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg className="w-8 h-8 text-cyan-400 opacity-60 -mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 3px rgba(34, 211, 238, 1);
                    filter: drop-shadow(0 0 12px rgba(34, 211, 238, 0.8)) drop-shadow(0 0 6px rgba(34, 211, 238, 1));
                }
            `}</style>
        </section>
    );
};

export default Hero;
