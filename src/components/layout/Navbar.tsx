import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Inicio', to: '#' },
    { name: 'Servicios', to: '#servicios' },
    { name: 'Proyectos', to: '#proyectos' },
    { name: 'Sobre mí', to: '#about' },
    { name: 'Contacto', to: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Actualizar la URL sin recargar la página
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  // Efecto para manejar el cierre del menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-2xl shadow-purple-900/20 border-b border-white/5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Link 
              to="/" 
              onClick={(e) => scrollToSection(e, '')}
              className="flex items-center space-x-2 group"
            >
              <span className="w-12 h-12 mr-2 rounded-lg shadow-lg flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#1e1b4b]">
                <img src="/p_logo.png" alt="Logo PixelForge" className="w-10 h-10 rounded-lg" />
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                PixelForge
              </span>
              <span className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 -z-10"></span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x 1 relative">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative px-2">
                  <a
                    href={link.to}
                    onClick={(e) => scrollToSection(e, link.to.replace('#', ''))}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      hoveredItem === link.name 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onMouseEnter={() => setHoveredItem(link.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {link.name}
                  </a>
                  {hoveredItem === link.name && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            
            {/* Separador */}
            <div className="h-6 w-px bg-gray-700 mx-4"></div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden z-50"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 pt-20 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.to}
                    onClick={(e) => {
                      scrollToSection(e, link.to.replace('#', ''));
                      setIsOpen(false);
                    }}
                    className="block px-6 py-4 text-lg text-gray-200 hover:bg-white/5 rounded-xl transition-colors duration-300 font-medium border-b border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
