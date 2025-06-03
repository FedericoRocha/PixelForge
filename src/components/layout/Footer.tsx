import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

type NavLink = {
  name: string;
  id: string;
};

type LegalLink = {
  name: string;
  path: string;
};

type LinkItem = NavLink | LegalLink;

type FooterColumn = {
  title: string;
  links: LinkItem[];
};

// Función para hacer scroll suave al principio
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Función para hacer scroll suave a una sección
const scrollToSection = (id: string) => {
  if (id === 'hero') {
    scrollToTop();
    return;
  }
  
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Footer = () => {
  // Función para manejar clic en enlaces legales
  const handleLegalLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToTop();
    // Pequeño retraso para permitir que el scroll se complete antes de la navegación
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/federico-daniel-rocha-577b45159/',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="w-5 h-5">
          <path d="M2.5 4.5v11a2 2 0 002 2h11a2 2 0 002-2v-11a2 2 0 00-2-2h-11a2 2 0 00-2 2zm1.6 0a.4.4 0 01.4-.4h11a.4.4 0 01.4.4v.63l-6 4.8-6-4.8V4.5zm0 1.84l5.74 4.6a1 1 0 001.32 0l5.74-4.6V15.5a.4.4 0 01-.4.4h-11a.4.4 0 01-.4-.4V6.34z" fill="#8b5cf6"/>
        </svg>
      ),
      url: 'mailto:federicodanielrocha@outlook.com.ar',
      label: 'Email'
    }
  ];

  const footerLinks: FooterColumn[] = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', id: 'hero' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Proyectos', id: 'proyectos' },
        { name: 'Sobre mí', id: 'about' },
        { name: 'Contacto', id: 'contact' },
      ]
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', id: 'servicios' },
        { name: 'Landing Pages', id: 'servicios' },
        { name: 'Integración de APIs', id: 'servicios' },
        { name: 'Mantenimiento', id: 'servicios' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de privacidad', path: '/legal/privacidad' },
        { name: 'Términos de servicio', path: '/legal/terminos' },
        { name: 'Aviso legal', path: '/legal/aviso' },
      ] as LegalLink[]
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#181825] via-[#232136] to-[#181825] border-t border-gray-800 pt-16 pb-8 backdrop-blur-xl">
      {/* Círculos decorativos blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                PixelForge
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones web modernas y personalizadas para hacer crecer tu presencia en línea.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#8b5cf6] transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/40"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, boxShadow: '0 0 12px #8b5cf6' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  {column.title}
                </span>
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {'path' in link ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleLegalLinkClick(e, link.path)}
                        className="text-gray-400 hover:text-[#8b5cf6] transition-colors font-medium hover:underline underline-offset-4 decoration-[#8b5cf6]/40 block cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-400 hover:text-[#8b5cf6] transition-colors font-medium hover:underline underline-offset-4 decoration-[#8b5cf6]/40 text-left w-full"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/70 pt-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-xl"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center gap-2">
            <img
  src="/yunke.png"
  alt="Yunque PixelForge"
  width={24}
  height={24}
  style={{ mixBlendMode: 'normal', filter: 'none', opacity: 1, display: 'inline-block', verticalAlign: 'middle' }}
/>
            &copy; {currentYear} <span className="text-[#8b5cf6] font-bold">PixelForge</span>. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a 
              href="/legal/privacidad"
              onClick={(e) => handleLegalLinkClick(e, '/legal/privacidad')}
              className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors font-medium cursor-pointer"
            >
              Política de privacidad
            </a>
            <a 
              href="/legal/terminos"
              onClick={(e) => handleLegalLinkClick(e, '/legal/terminos')}
              className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors font-medium cursor-pointer"
            >
              Términos de servicio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
