import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LegalSection from '../components/sections/LegalSection';

const LegalPage = () => {
  const { section } = useParams<{ section: 'privacidad' | 'terminos' | 'aviso' }>();
  
  if (!section || !['privacidad', 'terminos', 'aviso'].includes(section)) {
    window.location.href = '/legal/privacidad';
    return null;
  }

  const pageTitles = {
    privacidad: 'Política de Privacidad',
    terminos: 'Términos de Servicio',
    aviso: 'Aviso Legal'
  };

  return (
    <div className="min-h-screen bg-[#171B22] text-white">
      <header className="border-b border-[#23272f] bg-[#181C22]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-gray-300 hover:text-white transition-colors group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            {pageTitles[section]}
          </h1>
          <div className="w-8"></div>
        </div>
      </header>

      <main>
        <LegalSection sectionId={section} />
      </main>
      <footer className="bg-[#181C22] border-t border-[#23272f] py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} PixelForge. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link 
              to="/legal/privacidad" 
              className={`${section === 'privacidad' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
            >
              Privacidad
            </Link>
            <Link 
              to="/legal/terminos" 
              className={`${section === 'terminos' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
            >
              Términos
            </Link>
            <Link 
              to="/legal/aviso" 
              className={`${section === 'aviso' ? 'text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalPage;
