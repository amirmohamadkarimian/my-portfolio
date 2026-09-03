import { lazy, Suspense } from 'react';
import { LanguageProvider } from './i18n/context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

const About = lazy(() => import('./sections/About'));
const Journey = lazy(() => import('./sections/Journey'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function SectionFallback() {
  return <div className="py-28" aria-hidden="true" />;
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg-deep">
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />

        <main>
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Journey />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
