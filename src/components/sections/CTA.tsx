import { motion } from 'framer-motion';
import { FaPaperPlane, FaRocket, FaLightbulb, FaCode } from 'react-icons/fa';
import { NeonText } from '../ui/NeonText';
import { AlternatingText } from '../ui/AlternatingText';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="absolute -top-1/2 left-1/2 w-full max-w-4xl h-[800px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 text-center px-2 sm:px-0">
              <motion.span 
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FaRocket className="mr-1.5 sm:mr-2 text-xs sm:text-base animate-pulse" />
                <span className="whitespace-nowrap">¡Impulsa tu presencia digital!</span>
              </motion.span>
              
              <motion.div 
                className="mb-6 sm:mb-12 text-center px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <div className="mb-0 sm:mb-2 md:mb-4">
                    <NeonText 
                      text="¿Listo para hacer despegar" 
                      color="purple"
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
                    />
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <div className="inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      <AlternatingText 
                        texts={["tu proyecto?", "tu emprendimiento?", "tu visión digital?"]}
                        color="cyan"
                      />
                    </div>
                  </div>
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Transformemos tus ideas en una experiencia digital excepcional. Estoy aquí para hacer que tu visión cobre vida con soluciones a medida.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="mailto:contacto@pixelforge.com"
                  className="group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative z-10 flex items-center">
                    <span>Iniciar Proyecto</span>
                    <FaPaperPlane className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a
                  href="#proyectos"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('proyectos');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white hover:text-gray-200 transition-colors w-full sm:w-auto"
                >
                  <FaCode className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:animate-pulse flex-shrink-0" />
                  <span>Ver mis trabajos</span>
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: <FaLightbulb className="w-5 h-5" />, text: 'Ideas innovadoras', gradient: 'from-yellow-500 to-amber-600' },
                  { icon: <FaRocket className="w-5 h-5" />, text: 'Desarrollo ágil', gradient: 'from-purple-500 to-pink-600' },
                  { icon: <FaCode className="w-5 h-5" />, text: 'Código limpio', gradient: 'from-blue-500 to-cyan-600' }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                  >
                    <motion.div 
                      className={`relative p-1.5 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.4 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 text-white">
                        {item.icon}
                      </span>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent"></div>
                    </motion.div>
                    <div className="ml-3">
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {item.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </section>
  );
};

export default CTA;
