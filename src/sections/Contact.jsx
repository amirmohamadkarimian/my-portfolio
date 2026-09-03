import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/amirmohamadkarimian',
    color: '#F0F2F7',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amirmohammadkarimian/',
    color: '#0A66C2',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/amirm.code/',
    color: '#E4405F',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:karimian.dev@gmail.com',
    color: '#F5A623',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
];

export default function Contact() {
  const { t, isRTL } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const to = 'karimian.dev@gmail.com';
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 bg-bg-deep relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-alt/5 blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''} ${isRTL ? 'rtl' : ''}`}>
          <span className="section-label justify-center">{t.contact.label}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: Info + socials */}
          <div className={`flex-1 w-full reveal ${visible ? 'visible' : ''} ${isRTL ? 'text-right' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="mb-10 w-full">
              <p className="text-text-secondary text-sm mb-3">{t.contact.social}</p>
              <div className="flex flex-col gap-4 w-full">
                {SOCIALS.map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-accent transition-all duration-200 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ color, background: `${color}15` }}
                    >
                      {icon}
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <p className="text-text-primary font-semibold text-sm group-hover:text-accent transition-colors">
                        {label}
                      </p>

                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`text-text-secondary group-hover:text-accent transition-colors ${isRTL ? 'rotate-180' : ''}`}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`flex-1 w-full reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className={`block text-sm font-medium text-text-secondary mb-2 ${isRTL ? 'text-right' : ''}`}
                >
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-accent outline-none transition-colors text-sm ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.name}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className={`block text-sm font-medium text-text-secondary mb-2 ${isRTL ? 'text-right' : ''}`}
                >
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-accent outline-none transition-colors text-sm ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.email}
                  dir="ltr"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-sm font-medium text-text-secondary mb-2 ${isRTL ? 'text-right' : ''}`}
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-accent outline-none transition-colors text-sm resize-none ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                disabled={isSubmitting}
                className="btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    {t.contact.form.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
