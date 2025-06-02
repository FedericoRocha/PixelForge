import { motion } from 'framer-motion';
import { FaPaperPlane, FaRocket, FaLightbulb, FaCode } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Elementos decorativos */}
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
            {/* Elementos decorativos */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FaRocket className="mr-2 animate-pulse" />
                ¡Impulsa tu presencia digital hoy!
              </motion.span>
              
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400">
                    ¿Listo para hacer despegar
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400">
                    tu próximo proyecto?
                  </span>
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Transformemos tus ideas en una experiencia digital excepcional. Estoy aquí para hacer que tu visión cobre vida con soluciones a medida y un enfoque centrado en resultados.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="mailto:contacto@pixelforge.com"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative z-10 flex items-center">
                    <span>Iniciar Proyecto</span>
                    <FaPaperPlane className="ml-3 group-hover:translate-x-1 transition-transform" />
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
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white hover:text-gray-200 transition-colors"
                >
                  <FaCode className="mr-3 text-blue-400 group-hover:animate-pulse" />
                  Ver mis trabajos
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg">
                    <FaLightbulb className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">Ideas innovadoras</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg">
                    <FaRocket className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">Desarrollo ágil</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-white/5 p-2 rounded-lg">
                    <FaCode className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-gray-400">Código limpio</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      
      {/* Pixel art decoration */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </section>
  );
};

export default CTA;
