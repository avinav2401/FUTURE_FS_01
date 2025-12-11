import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Reveal } from './Reveal';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col pt-20">

            {/* Spline 3D Scene */}
            <div
                className="flex-1 relative w-full min-h-[500px] cursor-pointer overflow-hidden"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                title="Click to view projects"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 150px) calc(100% - 50px), calc(100% - 150px) 100%, 0 100%)' }}
            >
                <Spline
                    scene="https://prod.spline.design/nYdZWfeUWy0uUpwR/scene.splinecode"
                    className="w-full h-full block scale-[1.35] sm:scale-[1.5] md:scale-110 origin-center"
                />
            </div>

            {/* Content */}
            <div className="container py-16 text-center relative pointer-events-none md:pointer-events-auto">
                <Reveal width="100%">
                    <div className="max-w-3xl mx-auto relative px-4">

                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[400px] bg-indigo-500/20 blur-[60px] -z-10 rounded-full pointer-events-none"></div>

                        <h2 className="text-indigo-500 font-semibold mb-4 tracking-widest uppercase text-sm md:text-base">
                            Software Developer
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                            Crafting Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Experiences.</span>
                        </h1>
                        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                            I build accessible, pixel-perfect, and performant web applications.
                            Focusing on seamless user interfaces and robust backend systems.
                        </p>

                        <div className="flex gap-4 justify-center pointer-events-auto">
                            <a href="#projects" className="btn btn-primary">
                                View Work <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn glass">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
