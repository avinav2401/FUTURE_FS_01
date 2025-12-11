import { Github, ExternalLink } from 'lucide-react';

import { Reveal } from './Reveal';

const BlenderShowcase = () => {
    const blenderProjects = [
        {
            title: 'Abstract Geometric Scapes',
            description: 'A series of modern, abstract 3D environments exploring lighting, texture, and composition.',
            tags: ['Blender', 'Cycles', 'Abstract'],
            link: '#',
            github: '#'
        },
        {
            title: 'Isometric Room Designs',
            description: 'Detailed low-poly isometric rooms showcasing cozy lighting and intricate modeling details.',
            tags: ['Blender', 'Low Poly', 'Isometric'],
            link: '#',
            github: '#'
        },
        {
            title: 'Character Modeling',
            description: 'Stylized 3D character concepts ready for animation and game engine integration.',
            tags: ['Blender', 'Sculpting', 'Character'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="blender-showcase" className="section">
            <div className="container">
                <h2 className="title text-gradient-silver-blue text-3xl md:text-5xl font-bold mb-12">3D / Blender Studio</h2>
                <Reveal width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blenderProjects.map((project, index) => (
                            <div
                                key={index}
                                className="glass project-card animate-fade-up rounded-2xl overflow-hidden cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                <div className="h-48 bg-gradient-to-tr from-neutral-900 to-neutral-800 flex items-center justify-center text-zinc-400">
                                    3D Render Preview
                                </div>
                                <div className="p-6 border-t border-white/10">
                                    <h3 className="text-xl font-semibold mb-2 text-zinc-100">{project.title}</h3>
                                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-indigo-400 font-medium">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <button className="btn btn-primary text-sm px-4 py-2">
                                            View Render <ExternalLink size={16} />
                                        </button>
                                        <a href={project.github} className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors" onClick={(e) => e.stopPropagation()}>
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default BlenderShowcase;
