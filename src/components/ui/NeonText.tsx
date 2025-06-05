import { useEffect, useState } from 'react';

interface NeonTextProps {
  text: string;
  color?: 'purple' | 'cyan' | 'pink';
  flickerIntensity?: 'low' | 'medium' | 'high';
  wordFlicker?: boolean;
  className?: string;
}

const colorSchemes = {
  purple: {
    glow: '#bc13fe',
    shadows: [
      '0 0 5px #fff',
      '0 0 10px #fff',
      '0 0 20px #fff',
      '0 0 40px #bc13fe',
      '0 0 80px #bc13fe',
      '0 0 90px #bc13fe',
      '0 0 100px #bc13fe',
      '0 0 150px #bc13fe',
    ].join(',')
  },
  cyan: {
    glow: '#0ff',
    shadows: [
      '0 0 5px #fff',
      '0 0 10px #fff',
      '0 0 20px #fff',
      '0 0 40px #0ff',
      '0 0 80px #0ff',
      '0 0 90px #0ff',
      '0 0 100px #0ff',
      '0 0 150px #0ff',
    ].join(',')
  },
  pink: {
    glow: '#ff2d75',
    shadows: [
      '0 0 5px #fff',
      '0 0 10px #fff',
      '0 0 20px #fff',
      '0 0 40px #ff2d75',
      '0 0 80px #ff2d75',
      '0 0 90px #ff2d75',
      '0 0 100px #ff2d75',
      '0 0 150px #ff2d75',
    ].join(',')
  }
};

export const NeonText = ({
  text,
  color = 'purple',
  flickerIntensity = 'medium',
  wordFlicker = false,
  className = ''
}: NeonTextProps) => {
  const [flickerState, setFlickerState] = useState<{[key: number]: boolean}>({});
  const [globalFlicker, setGlobalFlicker] = useState(false);
  const words = text.split(' ');
  
  // Configuración de intensidad
  const intensity = {
    low: { chance: 0.02, duration: 800, maxWords: 1 },     // Aumentado de 100ms a 800ms
    medium: { chance: 0.05, duration: 1200, maxWords: 2 }, // Aumentado de 150ms a 1200ms
    high: { chance: 0.1, duration: 2000, maxWords: 3 }     // Aumentado de 200ms a 2000ms
  }[flickerIntensity];

  useEffect(() => {
    if (!wordFlicker) return;
    
    // Efecto de parpadeo global
    const globalTimer = setInterval(() => {
      if (Math.random() < 0.2) {
        setGlobalFlicker(true);
        setTimeout(() => setGlobalFlicker(false), 100 + Math.random() * 300);
      }
    }, 3000);

    // Efecto de palabras individuales
    const updateFlicker = () => {
      const newState: {[key: number]: boolean} = {};
      const wordsToFlicker = Math.max(1, Math.floor(Math.random() * intensity.maxWords));
      
      // Seleccionar palabras aleatorias para parpadear
      const availableWords = words.map((_, i) => i).filter(i => !flickerState[i]);
      for (let i = 0; i < Math.min(wordsToFlicker, availableWords.length); i++) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const wordIndex = availableWords[randomIndex];
        if (Math.random() < intensity.chance) {
          newState[wordIndex] = true;
          
          // Apagar después de un tiempo (aumentado el tiempo de apagado)
          const flickerDuration = intensity.duration * (0.8 + Math.random() * 0.8); // Variación del 80% al 160%
          setTimeout(() => {
            setFlickerState(prev => ({
              ...prev,
              [wordIndex]: false
            }));
          }, flickerDuration);
        }
      }
      
      setFlickerState(prev => ({
        ...prev,
        ...newState
      }));
      
      // Próxima actualización (aumentado el tiempo entre parpadeos)
      const nextUpdate = 1000 + Math.random() * 2000;
      const timer = setTimeout(updateFlicker, nextUpdate);
      return () => clearTimeout(timer);
    };
    
    const timer = setTimeout(updateFlicker, 1000);
    
    return () => {
      clearInterval(globalTimer);
      clearTimeout(timer);
    };
  }, [wordFlicker, flickerState, words, intensity]);

  const colors = colorSchemes[color];
  
  return (
    <span className={`neon-text ${className}`}>
      {words.map((word, index) => {
        const isFlickering = flickerState[index] || globalFlicker;
        const opacity = isFlickering ? 0.3 + Math.random() * 0.4 : 1;
        
        return (
          <span 
            key={index}
            className="inline-block relative"
            style={{
              opacity,
              transition: `opacity ${200 + Math.random() * 500}ms cubic-bezier(0.4, 0, 0.6, 1)`,
              textShadow: colors.shadows,
              color: '#fff',
              marginRight: '0.5em',
              marginBottom: '0.5em'
            }}
          >
            {word}
            <span 
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                transform: 'perspective(1em) rotateX(40deg) scale(1, 0.3)',
                filter: 'blur(0.5em)',
                opacity: 0.7,
                zIndex: -1
              }}
            />
          </span>
        );
      })}
    </span>
  );
};
