import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';
import TechIcon from '../components/TechIcon';

const SKILLS = {
  core: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 82 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
  ],
  frameworks: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'Vite', level: 88 },
  ],
  styling: [
    { name: 'Tailwind CSS', level: 92 },
    { name: 'CSS Modules', level: 85 },
    { name: 'Styled Components', level: 75 },
  ],
  tooling: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'REST APIs', level: 85 },
    { name: 'Figma', level: 70 },
  ],
};

const CATEGORY_ORDER = ['core', 'frameworks', 'styling', 'tooling'];

function SkillBar({ name, level, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2.5">
        <span className="flex items-center gap-2.5 text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
          <span className="w-7 h-7 rounded-lg bg-bg-surface border border-border-subtle flex items-center justify-center p-1 shadow-sm group-hover:border-accent/50 group-hover:shadow-[0_0_12px_rgba(245,166,35,0.15)] transition-all">
            <TechIcon name={name} className="w-4 h-4 flex-shrink-0" />
          </span>
          {name}
        </span>
        <span className="text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-bg-deep rounded-full overflow-hidden border border-border-subtle/50">
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
