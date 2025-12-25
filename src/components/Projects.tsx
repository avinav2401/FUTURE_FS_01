import { Github, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

interface ProjectsProps {
    onViewStealthBrowser?: () => void;
}

const Projects = ({ onViewStealthBrowser }: ProjectsProps) => {
    const projects = [
        {
            title: 'Stealth Browser',
            description: 'A powerful, specialized browser application designed for specific workflow management, featuring advanced stealth capabilities, process monitoring, and custom hotkey controls. Features stealth mode, always-on-top window management, embedded Chromium browser with camo mode, virtual keyboard, process monitoring, and panic switch for emergencies.',
            tags: ['C#', 'WebView2', 'Windows'],
            link: '#',
            github: 'https://github.com/avinav2401/hidden-browser',
            image: '/p1.jpg'
        },
        {
            title: 'Job Application Website',
            description: 'A full-stack MERN job portal connecting job seekers with employers. Features real-time job tracking, company management, secure authentication, job search with filters, easy application process, and applicant management for recruiters.',
            tags: ['MERN', 'MongoDB', 'React', 'Node.js'],
            link: 'https://job-application-website-avinav2401s-projects.vercel.app/',
            github: 'https://github.com/avinav2401/job-application-website',
            image: '/job.jpg'
        },
        {
            title: 'Trigger Tracker',
            description: 'A fast-paced shooting game where players control a spaceship and survive waves of enemies while earning points and currency. The game combines smooth gameplay mechanics, a dark-themed UI, and database-driven persistence for player stats, skins, and leaderboard.',
            tags: ['Java', 'SQLite', 'Game Dev'],
            link: 'https://avinav-pri.itch.io/trigger-tracker',
            github: 'https://github.com/avinav2401/TDSG',
            video: '/p3.mp4'
        },
        {
            title: 'Fish Rescue',
            description: 'An exciting endless runner game set in the depths of the ocean. Guide a lively red fish through polluted waters while avoiding environmental hazards. The game aims to raise awareness about ocean pollution and the importance of preserving marine life. Through engaging gameplay, players learn about the impact of human activities on aquatic ecosystems and are inspired to take action in real life.',
            tags: ['Game Dev', 'Unity', 'C#', 'WebGL'],
            link: 'https://avinav-pri.itch.io/save-the-fish',
            github: 'https://github.com/avinav2401/Fish-rescue-',
            video: '/p4.mp4'
        },
        {
            title: 'Luxe E-Commerce',
            description: 'A modern Next.js 15 e-commerce platform inspired by Amazon, featuring real-time order tracking, smart search with filters, comprehensive admin panel, secure payment integration, and responsive design. Built with MongoDB and optimized for seamless shopping experience with INR pricing.',
            tags: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel'],
            link: 'https://amazon-website-murex.vercel.app/',
            github: 'https://github.com/avinav2401/FUTURE_FS_02',
            image: '/am.jpg'
        },
        {
            title: 'E-Commerce designe',
            description: 'A full-stack MERN e-commerce application featuring secure JWT authentication, product catalog (cameras, trimmers, speakers), shopping cart with checkout, and Redux Toolkit state management. Rebranded from "Dynamic Coding with Amit" with enhanced features and responsive Tailwind CSS design.',
            tags: ['MERN', 'Redux', 'MongoDB', 'Tailwind'],
            link: 'https://avinav-shop.vercel.app/',
            github: 'https://github.com/avinav2401/avinav-shop',
            image: '/unnamed.jpg'
        }
    ];

    return (
        <section id="projects" className="py-8">
            <div className="container">
                <h2 className="title text-gradient-silver-blue">Featured Projects</h2>
                <Reveal width="100%">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="glass project-card animate-fade-up"
                                style={{ borderRadius: '1.5rem', overflow: 'hidden', animationDelay: `${index * 0.1}s` }}
                            >
                                <div style={{ height: '280px', background: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b', fontSize: '1.1rem', overflow: 'hidden' }}>
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
                                    ) : project.image ? (
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        'Project Preview'
                                    )}
                                </div>
                                <div style={{ padding: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.25rem', lineHeight: '1.7' }}>{project.description}</p>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--accent)' }}>#{tag}</span>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <button
                                            className="btn btn-primary"
                                            style={{ padding: '0.75rem 1.5rem', fontSize: '1.05rem' }}
                                            onClick={() => {
                                                if (project.title === 'Stealth Browser' && onViewStealthBrowser) {
                                                    onViewStealthBrowser();
                                                } else {
                                                    window.open(project.link, '_blank');
                                                }
                                            }}
                                        >
                                            View <ExternalLink size={16} />
                                        </button>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }} onClick={(e) => e.stopPropagation()}>
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

