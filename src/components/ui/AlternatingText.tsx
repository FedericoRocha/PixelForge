import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlternatingTextProps {
  texts: string[];
  interval?: number;
  color?: 'cyan' | 'pink' | 'purple';
}

const colorSchemes = {
  cyan: {
    color: '#0ff',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #0ff',
      '0 0 20px #0ff',
      '0 0 40px #0ff'
    ].join(',')
  },
  pink: {
    color: '#ff2d75',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #ff2d75',
      '0 0 20px #ff2d75',
      '0 0 40px #ff2d75'
    ].join(',')
  },
  purple: {
    color: '#bc13fe',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #bc13fe',
      '0 0 20px #bc13fe',
      '0 0 40px #bc13fe'
    ].join(',')
  }
} as const;

export const AlternatingText = ({ 
  texts, 
  interval = 3000,
  color = 'cyan'
}: AlternatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const colors = colorSchemes[color];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1,
            y: 0,
            color: colors.color,
            textShadow: colors.shadows,
            filter: 'brightness(1.1)',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)',
            paintOrder: 'stroke fill'
          }}
          exit={{ 
            opacity: 0, 
            y: -10,
            textShadow: 'none',
            WebkitTextStroke: '1px transparent'
          }}
          transition={{ 
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="inline-block whitespace-nowrap relative"
          style={{
            textShadow: colors.shadows,
            WebkitTextFillColor: colors.color,
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.7)',
            paintOrder: 'stroke fill'
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>

    </div>
  );
};
