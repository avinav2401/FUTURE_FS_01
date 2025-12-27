import { useEffect, useRef } from 'react';

export const useSoundEffects = () => {
    const audioContextRef = useRef<{
        keyboardSounds: HTMLAudioElement[];
        mouseDown: HTMLAudioElement;
        mouseUp: HTMLAudioElement;
    } | null>(null);

    useEffect(() => {
        // Preload all audio files
        const keyboardSounds = [
            new Audio('/static/keyboard/key_1.mp3'),
            new Audio('/static/keyboard/key_2.mp3'),
            new Audio('/static/keyboard/key_3.mp3'),
            new Audio('/static/keyboard/key_4.mp3'),
            new Audio('/static/keyboard/key_5.mp3'),
            new Audio('/static/keyboard/key_6.mp3'),
        ];

        const mouseDown = new Audio('/static/mouse/mouse_down.mp3');
        const mouseUp = new Audio('/static/mouse/mouse_up.mp3');

        // Set volume for all sounds (adjust as needed)
        [...keyboardSounds, mouseDown, mouseUp].forEach((audio) => {
            audio.volume = 0.3;
        });

        audioContextRef.current = {
            keyboardSounds,
            mouseDown,
            mouseUp,
        };

        // Keyboard event handler
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't play sound for repeated keypresses (when key is held down)
            if (e.repeat) {
                return;
            }

            // Don't play sound for modifier keys alone
            if (['Shift', 'Control', 'Alt', 'Meta', 'CapsLock', 'Tab'].includes(e.key)) {
                return;
            }

            if (audioContextRef.current) {
                const randomIndex = Math.floor(Math.random() * 6);
                const sound = audioContextRef.current.keyboardSounds[randomIndex].cloneNode() as HTMLAudioElement;
                sound.volume = 0.3;
                sound.play().catch((err) => console.error('Error playing keyboard sound:', err));
            }
        };

        // Mouse down event handler
        const handleMouseDown = () => {
            if (audioContextRef.current) {
                const sound = audioContextRef.current.mouseDown.cloneNode() as HTMLAudioElement;
                sound.volume = 0.3;
                sound.play().catch((err) => console.error('Error playing mouse down sound:', err));
            }
        };

        // Mouse up event handler
        const handleMouseUp = () => {
            if (audioContextRef.current) {
                const sound = audioContextRef.current.mouseUp.cloneNode() as HTMLAudioElement;
                sound.volume = 0.3;
                sound.play().catch((err) => console.error('Error playing mouse up sound:', err));
            }
        };

        // Add event listeners
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
};
