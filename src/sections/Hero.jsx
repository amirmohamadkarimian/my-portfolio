import { useLang } from "../i18n/context";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: Math.random() * 10 + 10,
}));

export default function Hero() {
  const { t, isRTL } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-deep pt-[72px]"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-alt/8 blur-[100px]" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-accent/4 blur-[80px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="floating-dot"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDelay: `-${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>



      {/* Main content */}
      <div className="section-container relative z-10 w-full py-16">
        <div
          className={`flex flex-col ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
        >
          {/* Photo */}
          <div className="flex-shrink-0 order-1 lg:order-none -translate-y-6 lg:translate-y-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 animate-[spin_20s_linear_infinite]" />
              {/* Glow ring */}
              <div className="absolute inset-3 rounded-full glow-amber-pulse" />
              {/* Photo frame */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-accent/60 glow-amber">
                <img
                  src="/selfie.png"
                  alt="Amirmohamad Karimian"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`flex-1 text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}
          >
            {/* Greeting */}
            <p className="section-label justify-center lg:justify-start mb-4 lg:mb-6">
              {t.hero.greeting}
            </p>

            {/* Name — signature element */}
            <h1 className="font-display leading-[0.9] mb-6">
              <span className="block text-[clamp(3rem,8vw,6rem)] font-black text-text-primary tracking-tight">
                {t.hero.name}
              </span>
              <span className="block text-[clamp(3rem,8vw,6rem)] font-black text-outline tracking-tight">
                {t.hero.lastName}
              </span>
            </h1>

            {/* Role badge */}
            <div
              className={`flex items-center justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"} mb-6`}
            >
              <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent font-mono text-sm px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {t.hero.role}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              {t.hero.tagline}
            </p>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
            >
              <a href="#projects" className="btn-primary">
                {t.hero.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center gap-4 mt-10 justify-center ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
            >
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/",
                  path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
              ].map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-secondary hover:text-accent transition-colors hover:-translate-y-0.5 inline-block"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary">
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">
          {t.hero.scrollDown}
        </span>
        <div className="w-6 h-10 rounded-full border border-border-subtle flex items-start justify-center pt-1.5">
          <div className="w-1 h-3 rounded-full bg-accent animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
