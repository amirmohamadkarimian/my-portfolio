import { useState } from 'react';
import { useLang } from '../i18n/context';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    color: '#F0F2F7',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    color: '#0A66C2',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:amirmohamad@example.com',
    color: '#F5A623',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

export default function Contact() {
  const { t, isRTL } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send
    setTimeout(() => {
      setStatus('done');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-bg-deep relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-alt/5 blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
          <span className="section-label justify-center">{t.contact.label}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start`}>

          {/* Left: Info + socials */}
          <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
            <div className="mb-10">
              <p className="text-text-secondary text-sm mb-3">{t.contact.social}</p>
              <div className="flex flex-col gap-4">
                {SOCIALS.map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-bg-card border border-border-subtle rounded-xl hover:border-current transition-all duration-200 group ${isRTL ? 'flex-row-reverse' : ''}`}
                    style={{ '--hover-color': color }}
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
                      <p className="text-text-secondary text-xs font-mono">
                        {label === 'Email' ? 'amirmohamad@example.com' : `/${label.toLowerCase()}/amirmohamad`}
                      </p>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className={`text-text-secondary group-hover:text-accent transition-colors ${isRTL ? 'rotate-180' : ''}`}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card border border-border-subtle rounded-2xl p-8 flex flex-col gap-5"
              noValidate
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

              {status === 'done' ? (
                <div className="flex items-center gap-3 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-sm font-semibold">{t.contact.form.success}</span>
                </div>
              ) : (
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
