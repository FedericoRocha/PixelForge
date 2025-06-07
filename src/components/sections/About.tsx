import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiFigma } from 'react-icons/si';

const skills = [
  { 
    name: 'Frontend', 
    icon: <FaCode className="w-6 h-6" />, 
    level: '90%',
    colorFrom: '#8B5CF6', 
    colorTo: '#6366F1'  
  },
  { 
    name: 'UI/UX', 
    icon: <FaPalette className="w-6 h-6" />, 
    level: '85%',
    colorFrom: '#EC4899', 
    colorTo: '#F43F5E'  
  },
  { 
    name: 'Responsive', 
    icon: <FaMobileAlt className="w-6 h-6" />, 
    level: '95%',
    colorFrom: '#06B6D4', 
    colorTo: '#3B82F6'  
  },
  { 
    name: 'Performance', 
    icon: <FaRocket className="w-6 h-6" />, 
    level: '88%',
    colorFrom: '#F59E0B', 
    colorTo: '#EF4444'  
  },
];

const techStack = [
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
  { name: 'React', icon: <SiReact className="w-6 h-6 text-cyan-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-6 h-6 text-green-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-6 h-6 text-cyan-300" /> },
  { name: 'Figma', icon: <SiFigma className="w-6 h-6 text-purple-500" /> },
];

const stats = [
  { value: '100%', label: 'Dedicación' },
  { value: '4+', label: 'Años de Experiencia' },
  { value: '100%', label: 'Compromiso' },
  { value: '∞', label: 'Creatividad' },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre Mí
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Conoce al creador
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10 overflow-hidden">
                <img 
                  src="/setup-pixel-forge.avif" 
                  alt="Fede - Desarrollador Web"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div 
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Fede</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Desarrollador web full-stack con más de 4 años de experiencia creando soluciones digitales impactantes. Me especializo en construir experiencias web modernas, rápidas y accesibles que generan resultados tangibles.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Mis habilidades</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => {
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <span style={{ color: skill.colorFrom }}>
                              {skill.icon}
                            </span>
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="h-full rounded-full" 
                            style={{
                              width: skill.level,
                              background: `linear-gradient(90deg, ${skill.colorFrom}, ${skill.colorTo})`,
                              boxShadow: `0 0 8px ${skill.colorFrom}80`,
                              transition: 'width 1.5s ease-in-out'
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Tecnologías que uso</h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors"
                      whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.1)' }}
                    >
                      {tech.icon}
                      <span className="text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group flex-1 sm:flex-none sm:px-6"
                >
                  <span>Contáctame</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://curriculum-web-flax.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-3.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden hover:brightness-110 flex-1 sm:flex-none sm:px-6"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="hidden sm:inline-block text-3xl sm:text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <span className="relative z-10 inline-block">
                        <span className="relative z-10 drop-shadow-[0_0_15px_rgba(167,139,250,0.9)] brightness-110 contrast-125">
                          👾
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full blur-md opacity-80 -z-10"></span>
                        <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></span>
                      </span>
                    </span>
                    <span className="font-medium">Ver mi CV</span>
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-purple-200" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
