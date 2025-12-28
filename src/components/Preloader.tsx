import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [count, setCount] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);

    // Array of "Hello" in different languages
    const greetings = [
        { text: 'Hello', lang: 'English' },
        { text: 'नमस्ते', lang: 'Hindi' },
        { text: 'Hola', lang: 'Spanish' },
        { text: 'Bonjour', lang: 'French' },
        { text: 'こんにちは', lang: 'Japanese' },
        { text: '你好', lang: 'Chinese' },
        { text: 'مرحبا', lang: 'Arabic' },
        { text: '안녕하세요', lang: 'Korean' },
        { text: 'Привет', lang: 'Russian' },
        { text: 'Hallo', lang: 'German' }
    ];

    // Start loading immediately
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

    // Change greeting - fast cycling
    useEffect(() => {
        const greetingTimer = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }, 150); // 150ms per greeting

        return () => clearInterval(greetingTimer);
    }, [greetings.length]);

    return (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-900 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="relative overflow-hidden flex flex-col items-center gap-6">
                {/* Greeting Text */}
                <div className="text-center">
                    <p className="text-6xl md:text-8xl font-bold text-white/90 font-['Oswald','Impact','sans-serif'] tracking-wide animate-pulse">
                        {greetings[greetingIndex].text}
                    </p>
                    <p className="text-lg md:text-2xl text-white/60 mt-4 font-light tracking-widest">
                        {greetings[greetingIndex].lang}
                    </p>
                </div>

                {/* Loading Bar */}
                <div className="w-64 md:w-96 h-2 bg-white/20 rounded-full overflow-hidden mt-8">
                    <div
                        className="h-full bg-white rounded-full"
                        style={{
                            width: `${count}%`,
                            transition: 'width 0.05s linear'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;

