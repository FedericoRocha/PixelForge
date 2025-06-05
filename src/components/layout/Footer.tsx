import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  
  // Cerrar el menú móvil si está abierto
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    if (menuButton) (menuButton as HTMLElement).click();
  }
  
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

const Footer = () => {
  const handleLegalLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    scrollToTop();
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  };
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/federico-daniel-rocha-577b45159/',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path 
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path 
            d="M22 6l-10 7L2 6" 
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      url: 'mailto:federicodanielrocha@outlook.com.ar',
      label: 'Email',
      gradient: 'from-rose-500 to-pink-600'
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
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent animate-pulse drop-shadow-lg hover:opacity-80 transition-opacity cursor-pointer"
              >
                PixelForge
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Soluciones web modernas y personalizadas para hacer crecer tu presencia en línea.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-1.5 rounded-full bg-gradient-to-br ${social.gradient} shadow-lg`}
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-white">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 to-transparent"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-lg tracking-wide">
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                  {column.title}
                </span>
                <span className="block h-0.5 w-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-500 group-hover:w-full group-hover:opacity-100 opacity-0 mt-1"></span>
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
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.id);
                        }}
                        className="text-gray-400 hover:text-[#8b5cf6] transition-colors font-medium hover:underline underline-offset-4 decoration-[#8b5cf6]/40 text-left w-full py-1"
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
            <Link 
              to="/legal/privacidad"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.location.href = '/legal/privacidad';
                }, 100);
              }}
              className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors font-medium cursor-pointer"
            >
              Política de privacidad
            </Link>
            <Link 
              to="/legal/terminos"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.location.href = '/legal/terminos';
                }, 100);
              }}
              className="text-gray-500 hover:text-[#8b5cf6] text-sm transition-colors font-medium cursor-pointer"
            >
              Términos de servicio
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
