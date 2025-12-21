import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [count, setCount] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    // Array of "Hello" in different languages
    const greetings = [
        { text: 'Hello', lang: 'English' },
        { text: 'नमस्ते', lang: 'Hindi' },
        { text: 'Hola', lang: 'Spanish' },
        { text: 'Bonjour', lang: 'French' },
        { text: 'こんにちは', lang: 'Japanese' },
        { text: '你好', lang: 'Chinese' },
        { text: 'Ciao', lang: 'Italian' },
        { text: 'Olá', lang: 'Portuguese' },
        { text: 'Привет', lang: 'Russian' },
        { text: 'مرحبا', lang: 'Arabic' },
        { text: 'Hallo', lang: 'German' },
        { text: '안녕하세요', lang: 'Korean' },
        { text: 'Merhaba', lang: 'Turkish' },
        { text: 'Hej', lang: 'Swedish' },
        { text: 'Γεια σου', lang: 'Greek' },
        { text: 'Shalom', lang: 'Hebrew' },
        { text: 'Sawubona', lang: 'Zulu' },
        { text: 'Namaste', lang: 'Nepali' },
        { text: 'สวัสดี', lang: 'Thai' },
        { text: 'Xin chào', lang: 'Vietnamese' }
    ];

    useEffect(() => {
        if (!hasStarted) return;

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
    }, [onComplete, hasStarted]);

    // Change greeting - slow before start, fast after start
    useEffect(() => {
        const speed = hasStarted ? 100 : 500; // 100ms when loading, 500ms on welcome screen

        const greetingTimer = setInterval(() => {
            setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }, speed);

        return () => clearInterval(greetingTimer);
    }, [greetings.length, hasStarted]);

    const handleStart = () => {
        setHasStarted(true);
    };

    return (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-900 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'
                } ${!hasStarted ? 'cursor-pointer' : ''}`}
            onClick={!hasStarted ? handleStart : undefined}
        >
            <div className="relative overflow-hidden flex flex-col items-center gap-6">
                {!hasStarted ? (
                    // Start Screen
                    <div className="text-center flex flex-col items-center gap-8">
                        <h1 className="text-6xl md:text-8xl font-bold text-white font-['Oswald','Impact','sans-serif'] tracking-tight animate-pulse">
                            {greetings[greetingIndex].text}
                        </h1>
                        <p className="text-lg md:text-2xl text-white/60 font-light tracking-widest">
                            {greetings[greetingIndex].lang}
                        </p>
                        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide animate-pulse">
                            click anywhere to start
                        </p>
                    </div>
                ) : (
                    // Loading Screen
                    <>
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
                                className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                                style={{ width: `${count}%` }}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Preloader;

