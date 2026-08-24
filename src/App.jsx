import { LanguageProvider } from './i18n/context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg-deep">
        {/* Subtle noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
