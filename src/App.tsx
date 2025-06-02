import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import LegalPage from './pages/LegalPage';

// Styles
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#171B22] text-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Process />
                <Projects />
                <About />
                <CTA />
              </>
            } />
            <Route path="/legal/:section" element={<LegalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-center" />
      </div>
    </Router>
  )
}

export default App
