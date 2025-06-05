
interface NeonTextProps {
  text: string;
  color?: 'purple' | 'cyan' | 'pink';
  className?: string;
}

const colorSchemes = {
  purple: {
    glow: '#bc13fe',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #bc13fe',
      '0 0 20px #bc13fe',
      '0 0 40px #bc13fe'
    ].join(',')
  },
  cyan: {
    glow: '#0ff',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #0ff',
      '0 0 20px #0ff',
      '0 0 40px #0ff'
    ].join(',')
  },
  pink: {
    glow: '#ff2d75',
    shadows: [
      '0 0 2px #fff',
      '0 0 5px #fff',
      '0 0 10px #ff2d75',
      '0 0 20px #ff2d75',
      '0 0 40px #ff2d75'
    ].join(',')
  }
};

export const NeonText = ({
  text,
  color = 'purple',
  className = ''
}: NeonTextProps) => {
  const colors = colorSchemes[color];
  
  return (
    <span 
      className={`inline-block ${className}`}
      style={{
        color: colors.glow,
        textShadow: colors.shadows,
        transition: 'text-shadow 0.3s ease',
        background: 'transparent',
        WebkitBackgroundClip: 'initial',
        WebkitTextFillColor: 'initial'
      }}
    >
      {text}
    </span>
  );
};
