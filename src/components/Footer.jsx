import { useLang } from "../i18n/context";

export default function Footer() {
  const { t, isRTL } = useLang();

  return (
    <footer className="border-t border-border-subtle bg-bg-card py-3">
      <div
        className="section-container flex items-center justify-center"
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Brand */}
        <p className="text-text-secondary text-xs text-center">
          {t.footer.made}{" "}
          <span className="text-accent font-semibold">
            {t.hero.name} {t.hero.lastName}
          </span>{" "}
          · {new Date().getFullYear()} · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
