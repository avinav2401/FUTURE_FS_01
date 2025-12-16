import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
    containerRef?: React.RefObject<HTMLDivElement>;
}

const ScrollProgress = ({ containerRef }: ScrollProgressProps) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            if (containerRef?.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                const totalScroll = scrollHeight - clientHeight;
                if (totalScroll > 0) {
                    setScrollProgress((scrollTop / totalScroll) * 100);
                }
            } else {
                const currentScroll = window.scrollY;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

                if (scrollHeight) {
                    setScrollProgress((currentScroll / scrollHeight) * 100);
                }
            }
        };

        const target = containerRef?.current || window;
        target.addEventListener('scroll', updateScrollProgress);

        // Initial calculation
        updateScrollProgress();

        return () => target.removeEventListener('scroll', updateScrollProgress);
    }, [containerRef]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100000]">
            <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out will-change-[width]"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
