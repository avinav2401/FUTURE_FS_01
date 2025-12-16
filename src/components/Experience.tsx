
import { Reveal } from './Reveal';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: 'education',
            role: 'B.Tech in Computer Science',
            company: 'SRM University',
            period: '2024 - 2028',
            description: 'Pursuing Bachelor of Technology in Computer Science and Engineering.'
        }
    ];

    return (
        <section id="experience" className="py-8">
            <div className="container">
                <h2 className="title text-gradient-silver-blue">Experience & Education</h2>
                <Reveal width="100%">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index} className="glass" style={{
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'flex-start',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    padding: '1.25rem',
                                    background: 'rgba(96, 165, 250, 0.1)',
                                    borderRadius: '50%',
                                    color: '#60a5fa',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {exp.type === 'work' ? <Briefcase size={28} /> : <GraduationCap size={28} />}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#e2e8f0' }}>{exp.role}</h3>
                                    <h4 style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '0.75rem' }}>{exp.company}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8' }}>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
