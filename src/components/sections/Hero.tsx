import { motion, useAnimation } from 'framer-motion';
import { FaArrowRight, FaCode, FaLaptopCode } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const controls = useAnimation();
  const constraintsRef = useRef<HTMLDivElement>(null);


  const heroTexts = [
    'presencia digital',
    'marca personal',
    'sitio web',
    'aplicación web',
    'portafolio',
    'e-commerce',
  ];


  useEffect(() => {
    // Animación de entrada para los elementos flotantes
    const sequence = async () => {
      await controls.start('visible');
      return await controls.start({
        y: [0, -15, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }
      });
    };
    sequence();
  }, [controls]);

  return (
    <section ref={constraintsRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      <motion.img
        src="/martillo.png"
        alt="Martillo PixelForge decorativo"
        initial={{ y: 0 }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[7%] top-[6%] w-[24vw] max-w-md opacity-40 pointer-events-none select-none z-20 shadow-2xl md:w-[32vw] md:max-w-lg mix-blend-lighten"
        draggable="false"
      />
      <motion.img
        src="/codigo_pixelForge.png"
        alt="Código PixelForge decorativo"
        initial={{ y: 0 }}
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[5%] bottom-[7%] w-[32vw] max-w-lg opacity-30 pointer-events-none select-none z-20 shadow-2xl mix-blend-lighten"
        draggable="false"
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#1e1b4b] opacity-100 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#8b5cf6]/5 z-0"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-0"></div>
        
        <motion.div 
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut' }
            }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl -z-10"
        />
        <motion.div 
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
            }
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl -z-10"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6]/10 to-[#06b6d4]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] text-sm font-medium mb-8 backdrop-blur-sm shadow-lg"
          >
            <FaLaptopCode className="mr-2 text-lg animate-pulse" />
            <span>Transformando ideas en experiencias digitales</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight text-white"
          >
            <span className="relative block">
              <span className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#f97316] rounded-xl blur-2xl opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Transformá tu
              </span>
            </span>
            <span className="relative block mt-2">
              <TypeAnimation
                sequence={heroTexts.flatMap(t => [t, 2200])}
                wrapper="span"
                speed={30}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#f97316] animate-text-shimmer bg-[length:200%_auto]"
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desarrollo web a medida que combina diseño impactante, rendimiento excepcional y tecnología de vanguardia para impulsar tu negocio en el mundo digital.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium text-white rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#7c3aed] hover:to-[#4f46e5] transition-all duration-300 shadow-lg shadow-[#8b5cf6]/30 hover:shadow-xl hover:shadow-[#8b5cf6]/40"
            >
              <span className="relative z-10 flex items-center">
                <span>Iniciar proyecto</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('proyectos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium text-white rounded-xl bg-transparent border-2 border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#8b5cf6]/20"
            >
              <span className="relative z-10">Ver proyectos</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          className="mt-24 lg:mt-32 relative"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-gray-900/80 to-gray-800/30">
              <div className="h-10 bg-gray-900/80 border-b border-gray-800 flex items-center px-4 space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="text-xs bg-gray-800/50 text-gray-400 px-3 py-0.5 rounded-full">
                    pixelforge.dev
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-gray-900/80">
                <div className="font-mono text-sm md:text-base text-gray-400 space-y-4">
                  <div className="flex">
                    <span className="text-purple-400 mr-4">1</span>
                    <span className="text-cyan-400">const</span> <span className="text-yellow-400">proyecto</span> = <span className="text-green-400">nuevo</span> <span className="text-blue-400">Proyecto</span>(&#123;
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 mr-4">2</span>
                    <span className="ml-6">nombre: <span className="text-green-400">'Mi Sitio Web'</span>,</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 mr-4">3</span>
                    <span className="ml-6">tecnologias: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Tailwind'</span>, <span className="text-green-400">'TypeScript'</span>],</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 mr-4">4</span>
                    <span className="ml-6">impacto: <span className="text-blue-400">'Aumentar conversiones'</span></span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 mr-4">5</span>
                    <span>&#125;);</span>
                  </div>
                  <div className="flex">
                    <span className="text-purple-400 mr-4">6</span>
                    <span className="text-gray-600">// Tu visión, nuestro código</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-3xl -z-10"></div>
            <div className="absolute top-1/3 -right-12 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-2xl -z-10"></div>
            
            <motion.div 
              drag
              dragConstraints={constraintsRef}
              className="absolute -top-12 right-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-500/20 shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode className="text-3xl text-purple-400/80" />
            </motion.div>
            
            <motion.div 
              drag
              dragConstraints={constraintsRef}
              className="absolute -bottom-8 left-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/20 shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLaptopCode className="text-2xl text-cyan-400/80" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Desplazarse</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
