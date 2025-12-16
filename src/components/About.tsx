import { Reveal } from './Reveal';

interface AboutProps {
    onOpenModal: () => void;
}

const About = ({ onOpenModal }: AboutProps) => {

    return (
        <section id="about" className="section">
            <div className="container">
                <Reveal width="100%">
                    <div className="glass" style={{ padding: '4rem', borderRadius: '2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        <div>
                            <h2 className="title text-gradient-silver-blue">About Me</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.9' }}>
                                I'm a passionate developer with a keen eye for design and a drive for creating seamless digital experiences.
                                With expertise in modern web technologies, I transform complex problems into elegant, user-centric solutions.
                            </p>
                        </div>


                        {/* More Button */}
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-start' }}>
                            <button
                                className="group"
                                onClick={onOpenModal}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.25rem 2.5rem',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    borderRadius: '50px',
                                    background: 'transparent',
                                    border: '2px solid #22d3ee',
                                    color: '#22d3ee',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                More
                                <span style={{
                                    fontSize: '1.3rem',
                                    transition: 'transform 0.3s ease',
                                }} className="group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
