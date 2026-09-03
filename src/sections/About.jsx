import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/context";
import TechIcon from "../components/TechIcon";

const STATS = [
  { key: "projects", value: 20, suffix: "+" },
  { key: "technologies", value: 15, suffix: "+" },
  { key: "commits", value: 500, suffix: "+" },
];

function useCountUp(target, duration = 2000, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);
  return count;
}

function StatCard({ statKey, value, suffix, label, trigger }) {
  const count = useCountUp(value, 1800, trigger);
  return (
    <div className="bg-bg-surface border border-border-subtle rounded-2xl p-6 text-center hover:border-accent/40 transition-colors">
      <p className="font-display text-4xl font-black text-accent mb-1">
        {count}
        {suffix}
      </p>
      <p className="text-text-secondary text-sm">{label}</p>
    </div>
  );
}

export default function About() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-bg-deep" ref={sectionRef}>
      <div className="section-container">
        <div
          className={`flex flex-col ${isRTL ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-start`}
        >
          {/* Text column */}
          <div className={`flex-1 reveal ${triggered ? "visible" : ""}`}>
            <span className="section-label">{t.about.label}</span>
            <h2
              className={`font-display text-4xl lg:text-5xl font-black text-text-primary leading-tight mb-8 ${isRTL ? "text-right" : ""}`}
            >
              {t.about.title}
            </h2>
            <p
              className={`text-text-secondary text-lg leading-relaxed mb-5 ${isRTL ? "text-right" : ""}`}
            >
              {t.about.body1}
            </p>
            <p
              className={`text-text-secondary text-lg leading-relaxed mb-10 ${isRTL ? "text-right" : ""}`}
            >
              {t.about.body2}
            </p>

            {/* Tech mini-badges */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Vite",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 font-mono text-xs text-text-primary bg-bg-surface hover:border-accent/40 border border-border-subtle px-3 py-1.5 rounded-full transition-all"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div
            className={`w-full lg:w-72 reveal ${triggered ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <StatCard
                  key={s.key}
                  statKey={s.key}
                  value={s.value}
                  suffix={s.suffix}
                  label={t.about.stats[s.key]}
                  trigger={triggered}
                />
              ))}
              {/* Responsive Design card — fills the 4th cell */}
              <div className="bg-bg-surface border border-border-subtle rounded-2xl p-6 text-center hover:border-accent/40 transition-colors">
                <p className="font-display text-4xl font-black text-accent mb-1">100%</p>
                <p className="text-text-secondary text-sm">{isRTL ? "طراحی ریسپانسیو" : "Responsive Design"}</p>
              </div>
            </div>

            {/* Personal card */}
            <div className="mt-4 bg-bg-card border border-border-subtle rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={isRTL ? "text-right" : ""}>
                <p className="text-text-primary font-semibold text-sm mb-1">
                  {isRTL ? "ایران" : "Iran"}
                </p>
                <p className="text-text-secondary text-xs">
                  {isRTL
                    ? "آماده همکاری ریموت "
                    : "Available for remote work"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
