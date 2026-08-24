import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';

const SKILLS = {
  core: [
    { name: 'JavaScript', level: 90, icon: '⚡' },
    { name: 'TypeScript', level: 82, icon: '🔷' },
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3', level: 90, icon: '🎨' },
  ],
  frameworks: [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 80, icon: '▲' },
    { name: 'Vite', level: 88, icon: '⚡' },
  ],
  styling: [
    { name: 'Tailwind CSS', level: 92, icon: '💨' },
    { name: 'CSS Modules', level: 85, icon: '📦' },
    { name: 'Styled Components', level: 75, icon: '💅' },
  ],
  tooling: [
    { name: 'Git & GitHub', level: 88, icon: '🐙' },
    { name: 'REST APIs', level: 85, icon: '🔌' },
    { name: 'Figma', level: 70, icon: '🎭' },
  ],
};

const CATEGORY_ORDER = ['core', 'frameworks', 'styling', 'tooling'];

const TECH_ICONS = [
  { name: 'React', color: '#61DAFB', abbr: 'Re' },
  { name: 'Next.js', color: '#FFFFFF', abbr: 'Nx' },
  { name: 'TypeScript', color: '#3178C6', abbr: 'TS' },
  { name: 'JavaScript', color: '#F7DF1E', abbr: 'JS' },
  { name: 'Tailwind', color: '#38BDF8', abbr: 'Tw' },
  { name: 'Vite', color: '#A855F7', abbr: 'Vi' },
  { name: 'Git', color: '#F05032', abbr: 'Gt' },
  { name: 'HTML5', color: '#E34F26', abbr: 'H5' },
];

function SkillBar({ name, level, icon, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-1 bg-bg-deep rounded-full overflow-hidden">
        {visible && (
          <div
            className="skill-bar-fill h-full rounded-full"
            style={{ width: `${level}%` }}
          />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-bg-deep" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : ''}`}>
          <span className="section-label justify-center">{t.skills.label}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary">
            {t.skills.title}
          </h2>
        </div>

        {/* Tech icon strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {TECH_ICONS.map(tech => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:border-current"
                style={{ color: tech.color }}
              >
                {tech.abbr}
              </div>
              <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CATEGORY_ORDER.map(cat => (
            <div
              key={cat}
              className={`bg-bg-card border border-border-subtle rounded-2xl p-7 reveal ${visible ? 'visible' : ''}`}
            >
              <h3 className={`font-display text-base font-bold text-text-primary mb-6 pb-4 border-b border-border-subtle ${isRTL ? 'text-right' : ''}`}>
                {t.skills.categories[cat]}
              </h3>
              <div className="flex flex-col gap-5">
                {SKILLS[cat].map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
