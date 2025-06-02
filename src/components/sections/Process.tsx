import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaPencilAlt, FaRocket } from 'react-icons/fa';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  delay: number;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    icon: <FaSearch className="w-6 h-6" />,
    title: 'Paso 1: Escuchamos tu idea',
    description: 'Analizamos juntos tus necesidades y objetivos para entender cómo podemos ayudarte a alcanzarlos.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    delay: 0.1,
    details: [
      'Análisis de requisitos',
      'Definición de objetivos',
      'Planificación inicial'
    ]
  },
  {
    icon: <FaPencilAlt className="w-6 h-6" />,
    title: 'Paso 2: Diseñamos y desarrollamos',
    description: 'Creamos un diseño personalizado y desarrollamos tu proyecto con las mejores prácticas y tecnologías del mercado.',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
    delay: 0.3,
    details: [
      'Diseño UI/UX',
      'Desarrollo frontend y backend',
      'Pruebas de calidad'
    ]
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: 'Paso 3: Lanzamos y acompañamos',
    description: 'Te ayudamos con el lanzamiento y ofrecemos soporte continuo para garantizar el éxito de tu proyecto a largo plazo.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    delay: 0.5,
    details: [
      'Despliegue',
      'Capacitación',
      'Mantenimiento continuo'
    ]
  }
];

const Process = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const controls = useRef<HTMLDivElement>(null);

  const cardVariants = {
    initial: { y: 0, scale: 1, opacity: 1 },
    hover: { 
      y: -8, 
      scale: 1.02, 
      transition: { 
        type: 'spring', 
        stiffness: 400,
        damping: 15
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="process" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
            Proceso de Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient">
              Transformamos ideas
            </span>
            <br />
            <span className="text-white">en realidades digitales</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un enfoque metódico y creativo para garantizar el éxito de tu proyecto en cada etapa del desarrollo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
          
          <div className="grid gap-12 lg:gap-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                ref={controls}
                initial="initial"
                whileHover="hover"
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative cursor-pointer transition-all duration-300 rounded-2xl p-8 border ${step.borderColor} ${step.bgColor} hover:shadow-xl hover:shadow-purple-500/10`}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Número del paso */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold bg-white/10 text-white group-hover:bg-white group-hover:text-gray-900 transition-colors">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${step.color} bg-gradient-to-r shadow-lg`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-100 mb-6 text-lg leading-relaxed">{step.description}</p>
                    
                    <AnimatePresence>
                      <motion.div 
                        initial="hidden"
                        animate={hoveredCard === index ? 'visible' : 'hidden'}
                        exit="exit"
                        variants={detailVariants}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 mt-6 pt-6 border-t border-white/10">
                          {step.details.map((detail, i) => (
                            <div 
                              key={i}
                              className="flex items-center gap-3 text-gray-200"
                            >
                              <div className={`w-2 h-2 rounded-full ${step.color.replace('from-', 'bg-').replace(' to-', '-')}`}></div>
                              <span className="text-gray-100">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Efecto de resplandor */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 ${
                  hoveredCard === index ? 'opacity-20' : ''
                } blur-xl transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </div>
          
          {/* Controles de navegación removidos */}
        </div>
      </div>
      
      {/* Efectos de fondo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Process;
