import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlternatingTextProps {
  texts: string[];
  interval?: number;
}

export const AlternatingText = ({ 
  texts, 
  interval = 3000
}: AlternatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="inline-block overflow-hidden h-[1.2em] leading-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1,
            y: 0,
            textShadow: [
              '0 0 2px #0ff, 0 0 5px #0ff, 0 0 10px #0ff',
              '0 0 2px #0ff, 0 0 5px #0ff, 0 0 15px #0ff, 0 0 25px #0ff',
              '0 0 2px #0ff, 0 0 5px #0ff, 0 0 10px #0ff'
            ],
            color: '#0ff',
            filter: 'brightness(1.2)'
          }}
          exit={{ 
            opacity: 0, 
            y: -20,
            textShadow: '0 0 5px rgba(0, 255, 255, 0.2)'
          }}
          transition={{ 
            duration: 0.5,
            ease: 'easeInOut'
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
