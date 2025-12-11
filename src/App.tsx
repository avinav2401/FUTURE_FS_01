import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import BlenderShowcase from './components/BlenderShowcase';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ShootingStars from './components/ShootingStars';

function App() {
  return (
    <div className="relative min-h-screen">
      <ShootingStars />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <div className="space-y-20">
          <Experience />
          <Projects />
          <BlenderShowcase />
        </div>
        <Contact />
        <footer className="py-8 text-center text-zinc-500 text-sm glass mt-20 backdrop-blur-md border-t border-white/10">
          <p>
            © {new Date().getFullYear()} <span className="text-zinc-200 font-medium hover:text-indigo-400 transition-colors cursor-pointer">Avinav Priyadarshi</span>. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
