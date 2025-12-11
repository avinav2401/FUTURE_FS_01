import { Reveal } from './Reveal';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiThreedotjs, SiMongodb } from 'react-icons/si';

const About = () => {
    const skills = [
        { name: 'React', icon: <FaReact size={24} color="#61DAFB" /> },
        { name: 'TypeScript', icon: <SiTypescript size={24} color="#3178C6" /> },
        { name: 'Next.js', icon: <SiNextdotjs size={24} color="white" /> },
        { name: 'Node.js', icon: <FaNodeJs size={24} color="#339933" /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={24} color="#06B6D4" /> },
        { name: 'Three.js', icon: <SiThreedotjs size={24} color="white" /> },
        { name: 'MongoDB', icon: <SiMongodb size={24} color="#47A248" /> },
        { name: 'Git', icon: <FaGitAlt size={24} color="#F05032" /> }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <Reveal width="100%">
                    <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h2 className="title text-gradient-silver-blue">About Me</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                                I'm a passionate developer with a keen eye for design and a drive for creating seamless digital experiences.
                                With expertise in modern web technologies, I transform complex problems into elegant, user-centric solutions.
                            </p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Tech Stack & Skills</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {skills.map((skill, index) => (
                                    <div key={index} className="glass" style={{
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '9999px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        cursor: 'default',
                                        transition: 'transform 0.2s'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        {skill.icon}
                                        <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
