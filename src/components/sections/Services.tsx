import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="w-10 h-10" />,
    title: 'Desarrollo Web a Medida',
    description: 'Sitios web personalizados, rápidos y optimizados para todos los dispositivos, construidos con las últimas tecnologías del mercado para ofrecer la mejor experiencia de usuario.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    icon: <FaMobileAlt className="w-10 h-10" />,
    title: 'Landing Pages',
    description: 'Diseño y desarrollo de landing pages de alto impacto que convierten visitantes en clientes, optimizadas para conversión y rendimiento.',
    color: 'from-cyan-400 to-blue-500',
    delay: 0.2
  },
  {
    icon: <FaServer className="w-10 h-10" />,
    title: 'APIs & Backend',
    description: 'Desarrollo de APIs robustas y escalables, con integración a servicios externos para potenciar la funcionalidad de tus aplicaciones.',
    color: 'from-emerald-400 to-teal-500',
    delay: 0.3
  },
  {
    icon: <FaTools className="w-10 h-10" />,
    title: 'Mantenimiento',
    description: 'Soporte continuo y mantenimiento proactivo para mantener tu sitio web actualizado, seguro y funcionando sin problemas.',
    color: 'from-amber-400 to-orange-500',
    delay: 0.4
  }
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#1e1b4b] opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-[#8b5cf6]/5"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        
        <div className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-96 -left-64 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-6 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
            Lo que ofrecemos
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="relative">
              <span className="absolute -inset-4 bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#f97316] rounded-xl blur-2xl opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#f97316] animate-text-shimmer bg-[length:200%_auto]">
                Servicios
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones digitales personalizadas que impulsan el crecimiento de tu negocio en el mundo digital.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative h-full bg-gradient-to-br from-[#1e1e2e] to-[#1a1b26] rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div>
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-800">
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      sessionStorage.setItem('interestedService', service.title);
                      const ctaSection = document.getElementById('contact');
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState({}, '', '#contact');
                      }
                    }}
                    className="inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 transition-all"
                  >
                    <span>Solicitar este servicio</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl -z-10"></div>
    </section>
  );
};

export default Services;
