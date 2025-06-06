import { FaLinkedin } from 'react-icons/fa';
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
    <footer className="relative bg-gray-900 border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Versión móvil - Acordeón */}
        <div className="lg:hidden space-y-6 mb-8">
          {/* Brand y redes sociales */}
          <div className="text-center mb-8">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent mb-4"
            >
              PixelForge
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Soluciones web modernas y personalizadas
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${social.gradient.replace('bg-gradient-to-br', 'bg-gradient-to-r')} text-white`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Acordeón de enlaces */}
          <div className="space-y-4">
            {footerLinks.map((column, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg cursor-pointer list-none">
                  <h4 className="font-medium text-white">{column.title}</h4>
                  <svg className="w-5 h-5 text-gray-400 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="mt-2 pl-4 space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-1.5">
                      {'path' in link ? (
                        <a 
                          href={link.path}
                          onClick={(e) => handleLegalLinkClick(e, link.path)}
                          className="text-gray-400 hover:text-white text-sm block py-1"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a 
                          href={`#${link.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.id);
                          }}
                          className="text-gray-400 hover:text-white text-sm block py-1"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        {/* Versión escritorio */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div>
            <div className="mb-4">
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent"
              >
                PixelForge
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Soluciones web modernas y personalizadas para hacer crecer tu presencia en línea.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${social.gradient} text-white hover:opacity-90 transition-opacity`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {'path' in link ? (
                      <a 
                        href={link.path}
                        onClick={(e) => handleLegalLinkClick(e, link.path)}
                        className="text-gray-400 hover:text-white text-sm block py-1 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a 
                        href={`#${link.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.id);
                        }}
                        className="text-gray-400 hover:text-white text-sm block py-1 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-2 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} <span className="text-[#8b5cf6] font-bold">PixelForge</span>. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/legal/privacidad"
                onClick={(e) => {
                  e.preventDefault();
                  handleLegalLinkClick(e, '/legal/privacidad');
                }}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacidad
              </Link>
              <Link 
                to="/legal/terminos"
                onClick={(e) => {
                  e.preventDefault();
                  handleLegalLinkClick(e, '/legal/terminos');
                }}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Términos
              </Link>
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Volver arriba
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
