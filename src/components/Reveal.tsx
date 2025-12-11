import { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: RevealProps) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: "0px 0px -50px 0px" // Offset slightly
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            // clean up
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`} style={{ width }}>
            {children}
        </div>
    );
};
