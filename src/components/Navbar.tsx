import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blender Studio', href: '#blender-showcase' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-indigo-500">Portfolio.</a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-100 hover:text-indigo-500 transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <div className="w-[1px] h-6 bg-white/10 mx-4"></div>
                    <div className="flex gap-4">
                        <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><Github size={20} /></a>
                        <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col items-center gap-6 animate-fade-up">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-zinc-100 hover:text-indigo-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-6 mt-2">
                        <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><Github size={24} /></a>
                        <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><Linkedin size={24} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
