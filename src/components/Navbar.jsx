import { useState, useEffect, useRef } from "react";
import { useLang } from "../i18n/context";

const NAV_LINKS = [
  { key: "hero", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "journey", href: "#journey" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, toggleLang, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const drawerRef = useRef(null);

  // When language changes, instantly reposition the closed drawer
  // without animating through translateX(0) (which causes the flash).
  useEffect(() => {
    if (menuOpen) return;
    const el = drawerRef.current;
    if (!el) return;
    el.style.transition = "none";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = "";
      });
    });
  }, [isRTL]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 120;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (windowHeight + Math.round(window.scrollY) >= docHeight - 60) {
        setActive("contact");
        return;
      }

      let current = "hero";
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, key) => {
    e.preventDefault();
    setActive(key);
    setMenuOpen(false);

    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#hero");
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 ${scrolled
          ? "bg-bg-card/85 backdrop-blur-xl border-border-subtle/60 shadow-lg shadow-black/30"
          : "bg-transparent border-transparent"
          }`}
      >
        <nav className="section-container h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero", "hero")}
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
                  onClick={(e) => handleNavClick(e, href, key)}
                  className={`hover-underline text-sm font-medium transition-colors ${active === key
                    ? "text-accent font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                    }`}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Lang toggle + CV button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="relative inline-flex items-center w-14 h-7 rounded-full bg-bg-surface border border-border-subtle transition-colors focus-visible:outline-accent"
            >
              <span
                className={`absolute w-5 h-5 rounded-full bg-accent transition-all duration-300 ${lang === "fa" ? "right-1" : "left-1"
                  }`}
              />
              <span
                className={`absolute text-[10px] font-bold select-none transition-opacity ${lang === "en" ? "opacity-0" : "opacity-100"} left-1.5 text-accent`}
              >
                FA
              </span>
              <span
                className={`absolute text-[10px] font-bold select-none transition-opacity ${lang === "fa" ? "opacity-0" : "opacity-100"} right-1.5 text-accent`}
              >
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.nav.downloadCV}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="nav-hamburger-icon">
              <span className={`nav-bar ${menuOpen ? "nav-bar-top-open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar-mid-open" : ""}`} />
              <span className={`nav-bar ${menuOpen ? "nav-bar-bot-open" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-overlay-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu drawer */}
      <div
        ref={drawerRef}
        className={`mobile-menu-drawer ${menuOpen ? "mobile-menu-drawer-open" : ""}`}
        data-rtl={isRTL ? "true" : "false"}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-identity">
            <span className="mobile-menu-name">Amirmohamad</span>
            <span className="mobile-menu-role">Frontend Developer</span>
          </div>
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ key, href }, i) => (
            <a
              key={key}
              href={href}
              onClick={(e) => handleNavClick(e, href, key)}
              className={`mobile-nav-link ${active === key ? "mobile-nav-link-active" : ""}`}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="mobile-nav-link-text">{t.nav[key]}</span>
              <svg
                className="mobile-nav-link-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Footer: language + CV */}
        <div className="mobile-menu-footer">
          <div className="mobile-menu-lang-row">
            <span className="mobile-menu-lang-label">Language / زبان</span>
            <div className="mobile-menu-lang-toggle">
              <button
                onClick={() => lang !== "en" && toggleLang()}
                className={`mobile-lang-btn ${lang === "en" ? "mobile-lang-btn-active" : ""}`}
              >
                English
              </button>
              <button
                onClick={() => lang !== "fa" && toggleLang()}
                className={`mobile-lang-btn ${lang === "fa" ? "mobile-lang-btn-active" : ""}`}
              >
                فارسی
              </button>
            </div>
          </div>

          <a
            href="/CV Resume.pdf"
            download="Amirmohamad_Karimian_CV.pdf"
            className="mobile-menu-cv-btn"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {t.nav.downloadCV}
          </a>
        </div>
      </div>
    </>
  );
}
