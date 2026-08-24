import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';

const PROJECT_COLORS = ['#F5A623', '#5865F2', '#10B981', '#EC4899', '#8B5CF6'];

const PROJECT_PATTERNS = [
  // DevBoard
  `<rect x="10" y="10" width="80" height="12" rx="4" fill="currentColor" opacity="0.2"/>
   <rect x="10" y="30" width="55" height="8" rx="3" fill="currentColor" opacity="0.15"/>
   <rect x="10" y="50" width="35" height="35" rx="6" fill="currentColor" opacity="0.2"/>
   <rect x="52" y="50" width="38" height="16" rx="4" fill="currentColor" opacity="0.15"/>
   <rect x="52" y="72" width="38" height="13" rx="4" fill="currentColor" opacity="0.1"/>`,
  // ShopFront
  `<rect x="10" y="10" width="80" height="35" rx="6" fill="currentColor" opacity="0.15"/>
   <circle cx="28" cy="27" r="10" fill="currentColor" opacity="0.2"/>
   <rect x="44" y="18" width="40" height="8" rx="3" fill="currentColor" opacity="0.2"/>
   <rect x="44" y="30" width="28" height="6" rx="2" fill="currentColor" opacity="0.12"/>
   <rect x="10" y="55" width="24" height="35" rx="5" fill="currentColor" opacity="0.18"/>
   <rect x="40" y="55" width="24" height="35" rx="5" fill="currentColor" opacity="0.14"/>
   <rect x="70" y="55" width="20" height="35" rx="5" fill="currentColor" opacity="0.1"/>`,
  // Portfolio
  `<circle cx="30" cy="40" r="20" fill="currentColor" opacity="0.15"/>
   <rect x="60" y="18" width="30" height="10" rx="4" fill="currentColor" opacity="0.2"/>
   <rect x="60" y="34" width="22" height="7" rx="3" fill="currentColor" opacity="0.15"/>
   <rect x="60" y="47" width="26" height="7" rx="3" fill="currentColor" opacity="0.1"/>
   <rect x="10" y="68" width="80" height="4" rx="2" fill="currentColor" opacity="0.12"/>
   <rect x="10" y="78" width="60" height="4" rx="2" fill="currentColor" opacity="0.08"/>`,
  // Weather
  `<circle cx="50" cy="40" r="22" fill="currentColor" opacity="0.12"/>
   <circle cx="50" cy="40" r="14" fill="currentColor" opacity="0.18"/>
   <rect x="10" y="72" width="80" height="8" rx="4" fill="currentColor" opacity="0.12"/>
   <rect x="10" y="86" width="55" height="6" rx="3" fill="currentColor" opacity="0.08"/>`,
  // TaskFlow
  `<rect x="10" y="10" width="22" height="80" rx="5" fill="currentColor" opacity="0.18"/>
   <rect x="38" y="10" width="22" height="55" rx="5" fill="currentColor" opacity="0.14"/>
   <rect x="66" y="10" width="22" height="68" rx="5" fill="currentColor" opacity="0.1"/>
   <rect x="14" y="20" width="14" height="8" rx="3" fill="currentColor" opacity="0.25"/>
   <rect x="14" y="34" width="14" height="8" rx="3" fill="currentColor" opacity="0.2"/>`,
];

function ProjectCard({ project, color, pattern, index, visible, isRTL }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card bg-bg-card border border-border-subtle rounded-2xl overflow-hidden flex flex-col reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual preview */}
      <div
        className="relative h-44 overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)` }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full opacity-60 transition-transform duration-500"
          style={{ color, transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          dangerouslySetInnerHTML={{ __html: pattern }}
        />
        {/* Type badge */}
        <span
          className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full border"
          style={{ color, borderColor: `${color}50`, background: `${color}15` }}
        >
          {project.type}
        </span>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${isRTL ? 'text-right' : ''}`}>
        <h3 className="font-display text-xl font-bold text-text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
          {project.desc}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 mb-5 ${isRTL ? 'justify-end' : ''}`}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs text-text-secondary bg-bg-surface border border-border-subtle px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <a
            href="#"
            className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
            style={{ background: color }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {/* t.projects.viewLive */}
            Live
          </a>
          <a
            href="#"
            className="btn-secondary text-xs py-2 px-4 flex-1 justify-center"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 bg-bg-card" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
          <span className="section-label justify-center">{t.projects.label}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary">
            {t.projects.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              color={PROJECT_COLORS[i % PROJECT_COLORS.length]}
              pattern={PROJECT_PATTERNS[i % PROJECT_PATTERNS.length]}
              index={i}
              visible={visible}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
