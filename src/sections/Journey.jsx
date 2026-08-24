import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/context';

export default function Journey() {
  const { t, isRTL } = useLang();
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.timeline-item');
    if (!items) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [t]);

  return (
    <section id="journey" className="py-28 bg-bg-card relative overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-20 ${isRTL ? 'rtl' : ''}`}>
          <span className="section-label justify-center">{t.journey.label}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-text-primary leading-tight whitespace-pre-line">
            {t.journey.title}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central/side line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-10 md:gap-14">
            {t.journey.items.map((item, i) => {
              const isEven = i % 2 === 0;
              const isVisible = visibleItems.has(String(i));

              const CardContent = (
                <div className={`bg-bg-surface border border-border-subtle rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(245,166,35,0.08)] ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'justify-start' : 'justify-start'}`}>
                    <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              );

              return (
                <div
                  key={i}
                  data-index={i}
                  className={`timeline-item relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Mobile View: Flex with dot + card */}
                  <div className="flex md:hidden items-start gap-4 ps-1">
                    <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 z-10 mt-4">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 border-accent transition-all duration-500 ${
                        isVisible ? 'bg-accent scale-100 shadow-[0_0_10px_rgba(245,166,35,0.8)]' : 'bg-bg-deep scale-75'
                      }`} />
                    </div>
                    <div className="flex-1">
                      {CardContent}
                    </div>
                  </div>

                  {/* Desktop View: 3-column Grid (Column 1 | Center Dot | Column 2) */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                    {/* Column 1 (Start side) */}
                    {isEven ? (
                      <div className="w-full">
                        {CardContent}
                      </div>
                    ) : (
                      <div className="w-full" aria-hidden="true" />
                    )}

                    {/* Center Dot */}
                    <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 z-10">
                      <div className={`w-4 h-4 rounded-full border-2 border-accent transition-all duration-500 ${
                        isVisible ? 'bg-accent scale-100 shadow-[0_0_14px_rgba(245,166,35,0.8)]' : 'bg-bg-deep scale-50'
                      }`} />
                    </div>

                    {/* Column 2 (End side) */}
                    {!isEven ? (
                      <div className="w-full">
                        {CardContent}
                      </div>
                    ) : (
                      <div className="w-full" aria-hidden="true" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
