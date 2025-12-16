import { ExternalLink } from 'lucide-react';

import { Reveal } from './Reveal';

const BlenderShowcase = () => {
    const blenderProjects = [
        {
            title: 'Donut Animations',
            description: 'A realistic 3D animation of a donut with icing and sprinkles, showcasing skills in geometry nodes, procedural texturing, and photorealistic rendering.',
            tags: ['Blender', 'Cycles', '3D Model', 'Animation'],
            link: 'https://www.artstation.com/artwork/x3kbGm',
            video: '/blender1.mp4'
        },
        {
            title: 'School Girl',
            description: 'A stylized 3D character model of a school girl, featuring anime-inspired aesthetics, custom textures, and rigged for animation.',
            tags: ['Blender', 'Isometric', 'Rigged', '3D Model', 'Character'],
            link: 'https://www.artstation.com/artwork/AZ1LRW',
            video: '/blender2.mp4'
        },
        {
            title: 'Spaceships',
            description: 'Futuristic sci-fi spacecraft designs featuring hard-surface modeling, complex texturing, and dynamic lighting.',
            tags: ['Blender', 'Sculpting', '3D Model', 'Spaceship', 'Concept Art'],
            link: 'https://www.artstation.com/artwork/gRavae',
            video: '/blender3.mp4'
        }
    ];

    return (
        <section id="blender-showcase" className="py-8">
            <div className="container">
                <h2 className="title text-gradient-silver-blue text-3xl md:text-5xl font-bold mb-12">3D / Blender Studio</h2>
                <Reveal width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blenderProjects.map((project, index) => (
                            <div
                                key={index}
                                className="glass project-card animate-fade-up rounded-3xl overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="h-80 bg-gradient-to-tr from-neutral-900 to-neutral-800 flex items-center justify-center text-zinc-400 text-lg overflow-hidden">
                                    {project.video ? (
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                    ) : (
                                        '3D Render Preview'
                                    )}
                                </div>
                                <div className="p-8 border-t border-white/10">
                                    <h3 className="text-2xl font-semibold mb-3 text-zinc-100">{project.title}</h3>
                                    <p className="text-zinc-400 text-base mb-5 leading-relaxed">{project.description}</p>
                                    <div className="flex gap-2 flex-wrap mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-indigo-400 font-medium">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary text-base px-6 py-3 flex items-center gap-2"
                                        >
                                            View <ExternalLink size={16} />
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
