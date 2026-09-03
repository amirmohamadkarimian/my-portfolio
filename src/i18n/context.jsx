import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import en from './en';

const LanguageContext = createContext(null);

const VAZIRMATN_HREF = 'https://cdn.jsdelivr.net/npm/vazirmatn@33.003/Vazirmatn-font-face.css';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });
  const [t, setT] = useState(en);

  const isRTL = lang === 'fa';

  useEffect(() => {
    let cancelled = false;

    if (lang === 'fa') {
      import('./fa').then((mod) => {
        if (!cancelled) setT(mod.default);
      });
    } else {
      setT(en);
    }

    return () => { cancelled = true; };
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.style.fontFamily = isRTL
      ? '"Vazirmatn", sans-serif'
      : '"Inter", sans-serif';
  }, [lang, isRTL]);

  // Load Farsi font only when needed
  useEffect(() => {
    if (!isRTL) return;

    const existing = document.querySelector(`link[href="${VAZIRMATN_HREF}"]`);
    if (existing) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = VAZIRMATN_HREF;
    document.head.appendChild(link);
  }, [isRTL]);

  const toggleLang = useCallback(
    () => setLang((prev) => (prev === 'en' ? 'fa' : 'en')),
    [],
  );

  const value = useMemo(
    () => ({ lang, t, isRTL, toggleLang }),
    [lang, t, isRTL, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
