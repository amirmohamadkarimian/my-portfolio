import { useState, useEffect } from 'react';
import { useLang } from '../i18n/context';

const NAV_LINKS = [
  { key: 'hero', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'journey', href: '#journey' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t, lang, toggleLang, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120;
      const scrollPos = window.scrollY + headerOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // When near bottom of page, highlight contact
      if (windowHeight + Math.round(window.scrollY) >= docHeight - 60) {
        setActive('contact');
        return;
      }

      let current = 'hero';
      for (const { key, href } of NAV_LINKS) {
        const el = document.querySelector(href);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (window.scrollY >= top) {
            current = key;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key) => {
    setActive(key);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-bg-card/85 backdrop-blur-xl border-border-subtle/60 shadow-lg shadow-black/30'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="section-container h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleNavClick('hero')}
          className="font-display text-xl font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
          aria-label="Home"
        >
          <span className="text-accent">A</span>K
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                onClick={() => handleNavClick(key)}
                className={`hover-underline text-sm font-medium transition-colors ${
                  active === key ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Lang toggle + CV button */}
        <div className={`hidden md:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="relative inline-flex items-center w-14 h-7 rounded-full bg-bg-surface border border-border-subtle transition-colors focus-visible:outline-accent"
          >
            <span
              className={`absolute w-5 h-5 rounded-full bg-accent transition-all duration-300 ${
                lang === 'fa' ? (isRTL ? 'right-1' : 'right-1') : 'left-1'
              }`}
            />
            <span className={`absolute text-[10px] font-bold select-none transition-opacity ${lang === 'en' ? 'opacity-0' : 'opacity-100'} ${isRTL ? 'left-1.5' : 'left-1.5'} text-accent`}>
              فا
            </span>
            <span className={`absolute text-[10px] font-bold select-none transition-opacity ${lang === 'fa' ? 'opacity-0' : 'opacity-100'} right-1.5 text-accent`}>
              EN
            </span>
          </button>

          {/* Download CV */}
          <a
            href="/CV Resume.pdf"
            download="Amirmohamad_Karimian_CV.pdf"
            id="nav-download-cv"
            className="btn-primary text-xs py-2 px-4"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-bg-card/95 backdrop-blur-xl border-t border-border-subtle transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => handleNavClick(key)}
              className={`text-base font-medium transition-colors py-1 ${
                active === key ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.nav[key]}
            </a>
          ))}
          <div className={`flex items-center gap-4 pt-4 border-t border-border-subtle ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={toggleLang}
              className="text-sm font-semibold text-accent border border-accent rounded-full px-4 py-1.5"
            >
              {lang === 'en' ? 'فارسی' : 'English'}
            </button>
            <a
              href="/CV Resume.pdf"
              download="Amirmohamad_Karimian_CV.pdf"
              className="btn-primary text-xs py-2 px-4"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
