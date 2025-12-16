
import { useState, useRef } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import {
    SiSwift, SiApple, SiMongodb, SiMysql, SiGit, SiGithub, SiXcode,
    SiVercel, SiFigma, SiC, SiCplusplus,
    SiJavascript, SiInstagram, SiLinkedin,
    SiHtml5, SiCss3, SiReact, SiNodedotjs, SiNextdotjs,
    SiTypescript, SiTailwindcss, SiThreedotjs, SiUnity, SiBlender, SiUnrealengine,
    SiItchdotio, SiArtstation
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';
import avinavPhoto from '../assets/avinav.jpg';
import ScrollProgress from './ScrollProgress';

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                zIndex: 9999,
                overflowY: 'auto',
                overflowX: 'hidden',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none' // IE/Edge
            }}
            className="hide-scrollbar"
        >
            <ScrollProgress containerRef={containerRef} />
            <div
                style={{
                    width: '100%'
                }}
            >
                {/* Homepage-Style Navbar - Exact Match */}
                <nav className="fixed w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10 py-6" style={{ position: 'sticky', top: 0 }}>
                    <div className="container flex justify-between items-center">
                        <a href="#home" onClick={onClose} className="text-3xl font-bold text-indigo-500">Portfolio.</a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-10">
                            <a href="#home" onClick={onClose} className="text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Home</a>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-medium text-indigo-500 hover:scale-110 transition-all duration-300 bg-transparent border-none cursor-pointer"
                            >
                                About
                            </button>
                            <a href="#projects" onClick={onClose} className="text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Projects</a>
                            <a href="#blender-showcase" onClick={onClose} className="text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Blender Studio</a>
                            <a href="#contact" onClick={onClose} className="text-base font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Contact</a>
                            <div className="w-[1px] h-7 bg-white/10 mx-5"></div>
                            <div className="flex gap-5">
                                <a href="https://github.com/avinav2401" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/avinav-priyadarshi-45705a2b0/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Linkedin size={24} /></a>
                                <a href="https://avinav-pri.itch.io/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiItchdotio size={24} /></a>
                                <a href="https://www.artstation.com/avianvpri5" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiArtstation size={24} /></a>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden text-zinc-100 hover:text-indigo-500 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col items-center gap-8 animate-fade-up">
                            <a href="#home" onClick={() => { setIsMobileMenuOpen(false); onClose(); }} className="text-xl font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Home</a>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-medium text-indigo-500 hover:scale-110 transition-all duration-300 bg-transparent border-none cursor-pointer"
                            >
                                About
                            </button>
                            <a href="#projects" onClick={() => { setIsMobileMenuOpen(false); onClose(); }} className="text-xl font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Projects</a>
                            <a href="#blender-showcase" onClick={() => { setIsMobileMenuOpen(false); onClose(); }} className="text-xl font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Blender Studio</a>
                            <a href="#contact" onClick={() => { setIsMobileMenuOpen(false); onClose(); }} className="text-xl font-medium text-zinc-100 hover:text-indigo-500 hover:scale-110 transition-all duration-300">Contact</a>
                            <div className="flex gap-8 mt-4">
                                <a href="https://github.com/avinav2401" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Github size={28} /></a>
                                <a href="https://www.linkedin.com/in/avinav-priyadarshi-45705a2b0/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><Linkedin size={28} /></a>
                                <a href="https://avinav-pri.itch.io/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiItchdotio size={28} /></a>
                                <a href="https://www.artstation.com/avianvpri5" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300"><SiArtstation size={28} /></a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* ABOUT Title - Kept as requested */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                    <h1 className="animate-fade-up" style={{
                        textAlign: 'center',
                        padding: '2rem',
                        marginTop: '3rem',
                        marginBottom: '4rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        display: 'block',
                        width: '100%',
                        borderRadius: '2rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <span className="text-gradient-silver-blue" style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: '700',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            ABOUT
                        </span>
                    </h1>
                </div>

                {/* Content - Centered with max-width */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div className="glass grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 animate-fade-up" style={{
                        padding: '4rem',
                        borderRadius: '2rem'
                    }}>
                        {/* Photo */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <img
                                    src={avinavPhoto}
                                    alt="Avinav Priyadarshi"
                                    style={{
                                        width: '280px',
                                        height: '350px',
                                        objectFit: 'cover',
                                        borderRadius: '1rem',
                                        position: 'relative'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <p style={{
                                fontSize: '1.35rem',
                                lineHeight: '1.9',
                                color: 'var(--text-secondary)',
                                marginBottom: '2rem'
                            }}>
                                I'm <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>AVINAV PRIYADARSHI</span>, a product-focused{' '}
                                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>Game Developer</span> and{' '}
                                <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>Software Developer</span>{' '}
                                currently studying Computer Science & Engineering.
                            </p>

                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--text-secondary)',
                                marginBottom: '2rem'
                            }}>
                                I specialize in building immersive 3D experiences and modern web applications.
                                My expertise spans from game development with Unity and Three.js to full-stack
                                web development with React, Next.js, and Node.js.
                            </p>

                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--text-secondary)',
                                marginBottom: '2.5rem'
                            }}>
                                I focus on building <span style={{ color: '#22d3ee' }}>simple, clear and thoughtful</span>{' '}
                                digital experiences – from interface design to full product flows.
                            </p>

                            {/* Resume Button */}
                            {/* Resume Button */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1.125rem 2.25rem',
                                    fontSize: '1.15rem',
                                    background: 'transparent',
                                    border: '2px solid #6366f1',
                                    color: '#6366f1',
                                    borderRadius: '9999px',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#6366f1';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#6366f1';
                                }}
                            >
                                📄 My Resume
                            </a>
                        </div>
                    </div>

                    {/* Icon Boxes */}
                    <div className="flex flex-col md:flex-row justify-between w-full mt-12 md:mt-20 mb-12 md:mb-20 gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        {/* Tech Stack Box - Marquee */}
                        <div className="glass flex-1 rounded-3xl md:rounded-[2rem] flex items-center overflow-hidden relative mask-tech-stack" style={{
                            padding: '2rem 0',
                            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                        }}>
                            <div className="animate-marquee">
                                {/* First Set */}
                                <SiHtml5 size={32} color="#E34F26" />
                                <SiCss3 size={32} color="#1572B6" />
                                <SiJavascript size={32} color="#F7DF1E" />
                                <SiTypescript size={32} color="#3178C6" />
                                <SiReact size={32} color="#61DAFB" />
                                <SiNextdotjs size={32} color="#FFFFFF" />
                                <SiNodedotjs size={32} color="#339933" />
                                <SiTailwindcss size={32} color="#06B6D4" />
                                <SiThreedotjs size={32} color="#FFFFFF" />
                                <SiSwift size={32} color="#F05138" />
                                <SiApple size={32} color="#FFFFFF" />
                                <SiMongodb size={32} color="#47A248" />
                                <SiMysql size={36} color="#4479A1" />
                                <SiGit size={32} color="#F05032" />
                                <SiGithub size={32} color="#FFFFFF" />
                                <SiXcode size={32} color="#1575F9" />
                                <SiVercel size={32} color="#FFFFFF" />
                                <VscVscode size={32} color="#007ACC" />
                                <SiFigma size={32} color="#F24E1E" />
                                <SiC size={32} color="#A8B9CC" />
                                <SiCplusplus size={32} color="#00599C" />
                                <FaJava size={32} color="#007396" />
                                <SiUnity size={32} color="#FFFFFF" />
                                <SiUnrealengine size={32} color="#FFFFFF" />
                                <SiBlender size={32} color="#F5792A" />

                                {/* Duplicate Set for Seamless Loop */}
                                <SiHtml5 size={32} color="#E34F26" />
                                <SiCss3 size={32} color="#1572B6" />
                                <SiJavascript size={32} color="#F7DF1E" />
                                <SiTypescript size={32} color="#3178C6" />
                                <SiReact size={32} color="#61DAFB" />
                                <SiNextdotjs size={32} color="#FFFFFF" />
                                <SiNodedotjs size={32} color="#339933" />
                                <SiTailwindcss size={32} color="#06B6D4" />
                                <SiThreedotjs size={32} color="#FFFFFF" />
                                <SiSwift size={32} color="#F05138" />
                                <SiApple size={32} color="#FFFFFF" />
                                <SiMongodb size={32} color="#47A248" />
                                <SiMysql size={36} color="#4479A1" />
                                <SiGit size={32} color="#F05032" />
                                <SiGithub size={32} color="#FFFFFF" />
                                <SiXcode size={32} color="#1575F9" />
                                <SiVercel size={32} color="#FFFFFF" />
                                <VscVscode size={32} color="#007ACC" />
                                <SiFigma size={32} color="#F24E1E" />
                                <SiC size={32} color="#A8B9CC" />
                                <SiCplusplus size={32} color="#00599C" />
                                <FaJava size={32} color="#007396" />
                                <SiUnity size={32} color="#FFFFFF" />
                                <SiUnrealengine size={32} color="#FFFFFF" />
                                <SiBlender size={32} color="#F5792A" />
                            </div>
                        </div>

                        {/* Social Box - Buttons */}
                        <div className="glass p-8 md:p-10 rounded-3xl md:rounded-[2rem] flex gap-8 md:gap-10 items-center justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                            <a
                                href="https://github.com/avinav2401"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <SiGithub size={28} color="#FFFFFF" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/avinav-priyadarshi-45705a2b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <SiLinkedin size={28} color="#0077B5" />
                            </a>
                            <a
                                href="https://avinav-pri.itch.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <SiItchdotio size={28} color="#FA5C5C" />
                            </a>
                            <a
                                href="https://www.artstation.com/avianvpri5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <SiArtstation size={28} color="#13AFF0" />
                            </a>
                        </div>
                    </div>

                    {/* Tagline at Bottom */}
                    <div style={{
                        marginTop: '4rem',
                        marginBottom: '4rem'
                    }}>
                        <div className="glass" style={{
                            padding: '4rem',
                            borderRadius: '2rem',
                            textAlign: 'right'
                        }}>
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                lineHeight: '1.2',
                                marginBottom: '1.5rem'
                            }}>
                                <span style={{ color: '#666' }}>Everything is </span>
                                <span style={{ color: '#22d3ee' }}>designed</span>
                            </h2>
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                lineHeight: '1.2'
                            }}>
                                <span style={{ color: '#666' }}>few things are </span>
                                <span style={{ color: '#22d3ee' }}>designed well.</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;
