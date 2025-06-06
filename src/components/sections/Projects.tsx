import { useState } from 'react';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const categories = ['Todos', 'Web', 'Aplicaciones', 'Diseño'];

const projects = [
  {
    title: 'Landing para Estudio Jurídico',
    description: 'Sitio clásico y profesional para un estudio jurídico. Diseño sobrio, tipografía elegante y presentación clara de servicios legales.',
    tags: ['React', 'Tailwind CSS', 'Diseño Clásico'],
    category: 'Web',
    image: '/project-01.avif',
    demo: 'https://estudio-juridico-ecru.vercel.app',
    code: ''
  },
  {
    title: 'Landing para Negocio Local (Cafetería Urbana)',
    description: 'Landing moderna y cálida para una cafetería urbana. Secciones de menú, ubicación y galería de ambiente.',
    tags: ['React', 'Tailwind CSS', 'Landing'],
    category: 'Web',
    image: '/project-02.avif',
    demo: 'https://cafeteria-green-two.vercel.app',
    code: ''
  },
  {
    title: 'Landing para Producto Digital (App de productividad)',
    description: 'Landing page para una app de productividad. Presentación de funcionalidades, capturas y llamada a la acción.',
    tags: ['React', 'Tailwind CSS', 'App', 'Landing'],
    category: 'Web',
    image: '/project-03.avif',
    demo: 'https://app-landing-demo.vercel.app',
    code: ''
  },
  {
    title: 'Landing para Tienda Online (Ropa urbana)',
    description: 'Landing atractiva para tienda de ropa urbana. Catálogo destacado, testimonios y enlaces a redes sociales.',
    tags: ['React', 'Tailwind CSS', 'E-commerce'],
    category: 'Web',
    image: '/project-04.avif',
    demo: 'https://tienda-online-red-zeta.vercel.app',
    code: ''
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 -z-10"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Proyectos destacados
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubre algunos de mis trabajos más recientes y cómo pueden inspirar tu próximo proyecto.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.demo || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer block"
              onClick={(e) => !project.demo && e.preventDefault()}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 px-2.5 py-1 rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.demo && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.demo, '_blank', 'noopener,noreferrer');
                          }}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                          aria-label="Ver demo"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </button>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
                          aria-label="Ver código"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-white transition-all duration-300">
                  Ver proyecto
                  <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer"
          >
            <span>¿Tienes un proyecto en mente?</span>
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <motion.img
        src="/yunke.png"
        alt="Yunque PixelForge decorativo"
        initial={{ y: 0 }}
        animate={{ y: [0, -32, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[240px] md:w-[340px] max-w-[40vw] opacity-30 pointer-events-none select-none z-10 shadow-2xl mix-blend-lighten"
        draggable="false"
      />
    </section>
  );
};

export default Projects;
