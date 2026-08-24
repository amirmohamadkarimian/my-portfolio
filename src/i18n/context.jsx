import { createContext, useContext, useState, useEffect } from 'react';
import en from './en';
import fa from './fa';

const translations = { en, fa };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const t = translations[lang];
  const isRTL = lang === 'fa';

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.style.fontFamily = isRTL
      ? '"Vazirmatn", sans-serif'
      : '"Inter", sans-serif';
  }, [lang, isRTL]);

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'fa' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t, isRTL, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
