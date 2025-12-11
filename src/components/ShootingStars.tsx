
import { useEffect, useState } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    // Initial batch of stars
    const createStars = (count: number) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        const moveX = (Math.random() - 0.5) * 200; // Random X movement (-100px to 100px)
        const moveY = (Math.random() - 0.5) * 200; // Random Y movement (-100px to 100px)
        const shouldTwinkle = Math.random() > 0.7; // 30% chance to twinkle

        newStars.push({
          id: Math.random(),
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            '--move-x': `${moveX}px`,
            '--move-y': `${moveY}px`,
            animationName: shouldTwinkle ? 'float-random, twinkle' : 'float-random',
            animationDuration: `${10 + Math.random() * 20}s, ${2 + Math.random() * 3}s`, // Float duration, Twinkle duration
            animationDelay: `-${Math.random() * 20}s, -${Math.random() * 5}s`,
          } as React.CSSProperties,
        });
      }
      setStars(newStars);
    };

    createStars(50); // Create 50 floating particles
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.map(star => (
        <div key={star.id} className="shooting-star" style={star.style} />
      ))}
    </div>
  );
};

export default ShootingStars;
