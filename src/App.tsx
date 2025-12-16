import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import BlenderShowcase from './components/BlenderShowcase';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ShootingStars from './components/ShootingStars';
import AboutModal from './components/AboutModal';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import StealthBrowserDetail from './components/StealthBrowserDetail';

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showStealthDetail, setShowStealthDetail] = useState(false);

  return (
    <div className="relative min-h-screen">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {showStealthDetail ? (
            <StealthBrowserDetail onBack={() => setShowStealthDetail(false)} />
          ) : (
            <>
              <ShootingStars />
              <ScrollProgress />
              <Navbar onAboutClick={() => setIsAboutModalOpen(true)} />
              <div className="relative z-10 animate-fade-up">
                <Hero />
                <About onOpenModal={() => setIsAboutModalOpen(true)} />
                <div className="space-y-8">
                  <Experience />
                  <Projects onViewStealthBrowser={() => setShowStealthDetail(true)} />
                  <BlenderShowcase />
                </div>
                <Contact />
                <footer className="py-8 text-center text-zinc-500 text-sm glass backdrop-blur-md border-t border-white/10">
                  <p>
                    © {new Date().getFullYear()} <span className="text-zinc-200 font-medium hover:text-indigo-400 transition-colors cursor-pointer">Avinav Priyadarshi</span>. All rights reserved.
                  </p>
                </footer>
              </div>
              <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
