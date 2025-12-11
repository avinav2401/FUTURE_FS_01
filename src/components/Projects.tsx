import { Github, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const Projects = () => {
    const projects = [
        {
            title: 'Project Alpha',
            description: 'Innovative digital solution and web experience focused on user engagement.',
            tags: ['React', 'Design', 'Development'],
            link: '#',
            github: '#'
        },
        {
            title: 'Project Beta',
            description: 'Interactive web experience showcasing 3D capabilities and modern animations.',
            tags: ['WebGL', 'Three.js', 'GSAP'],
            link: '#',
            github: '#'
        },
        {
            title: 'Project Gamma',
            description: 'Next-gen e-commerce prototype with seamless payment integration.',
            tags: ['Next.js', 'Stripe', 'Tailwind'],
            link: '#',
            github: '#'
        },
        {
            title: 'Project Delta',
            description: 'Immersive portfolio concept exploring boundaries of web design.',
            tags: ['UI/UX', 'Motion', 'Framer'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="title text-gradient-silver-blue">Featured Projects</h2>
                <Reveal width="100%">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass project-card animate-fade-up"
                                style={{ borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer', animationDelay: `${index * 0.1}s` }}
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                <div style={{ height: '200px', background: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
                                    Project Preview
                                </div>
                                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>{project.description}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>#{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                            View <ExternalLink size={16} />
                                        </button>
                                        <a href={project.github} className="text-secondary hover:text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }} onClick={(e) => e.stopPropagation()}>
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

export default Projects;

