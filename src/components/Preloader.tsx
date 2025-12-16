import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [count, setCount] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const duration = 2000; // 2 seconds for full count
        const intervalTime = duration / 100;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(onComplete, 800); // Wait for exit animation
                    }, 200);
                    return 100;
                }
                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-900 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="relative overflow-hidden">
                <h1 className="text-9xl md:text-[12rem] font-bold text-black font-['Oswald','Impact','sans-serif'] tracking-tighter">
                    {count}%
                </h1>
            </div>
        </div>
    );
};

export default Preloader;
