import React from "react";

/**
 * Real Tech SVG Icons inspired by Streamline HQ & official brand guidelines.
 * Crisp, clean vector paths optimized for 24x24 viewBox.
 */

export function JavaScriptIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7 17.2c.5.8 1.2 1.3 2.2 1.3 1.2 0 2-.7 2-2V9H9.4v7.4c0 .6-.3.9-.8.9-.4 0-.7-.2-.9-.6l-.7.5zm7.3 1.3c1.2.6 2.6.9 3.9.9 2.2 0 3.6-1.1 3.6-3 0-1.7-1-2.5-2.8-3.3-1.2-.5-2-1-2-1.9 0-.8.7-1.4 1.8-1.4 1 0 1.9.4 2.5 1l.9-1.2c-.8-.7-2-1.1-3.4-1.1-2.1 0-3.4 1.2-3.4 2.8 0 1.6 1 2.5 2.8 3.2 1.3.6 2 1.1 2 2 0 .9-.8 1.6-2.1 1.6-1.3 0-2.4-.5-3.1-1.3l-.7 1.4z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4.5 10.5h6.5v2H8.8v6H6.7v-6H4.5v-2zm7.7 7.9c1 .5 2.1.8 3.3.8 1.7 0 2.8-.8 2.8-2.2 0-1.3-.8-1.9-2.3-2.5-1.1-.4-1.6-.8-1.6-1.5 0-.6.6-1.1 1.5-1.1.9 0 1.7.3 2.2.8l.8-1.4c-.8-.6-1.8-.9-3-.9-1.8 0-3 1-3 2.5 0 1.3.8 2 2.3 2.6 1.1.4 1.6.8 1.6 1.5 0 .8-.7 1.3-1.8 1.3-1 0-1.9-.4-2.5-1l-.9 1.4z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function HTML5Icon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M3.5 2.5l1.6 17.5 6.9 2 6.9-2 1.6-17.5H3.5z" fill="#E44D26" />
      <path d="M12 4v16.3l5.5-1.5 1.3-14.8H12z" fill="#F16529" />
      <path
        d="M12 7.7H7.7l.2 2.2h4.1V7.7zm0 4.3H7.9l.2 2.4H12V12zm0 4.6l-2.4-.7-.2-1.7H7.5l.3 3.2L12 18v-1.4z"
        fill="#EBEBEB"
      />
      <path
        d="M12 7.7v2.2h4.1l-.4 4.3-3.7 1v1.5l5.5-1.5.5-5.3H12V7.7zm0 4.3v2.2h1.9l-.2 2.2-1.7.5V12z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CSS3Icon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M3.5 2.5l1.6 17.5 6.9 2 6.9-2 1.6-17.5H3.5z" fill="#1572B6" />
      <path d="M12 4v16.3l5.5-1.5 1.3-14.8H12z" fill="#33A9DC" />
      <path
        d="M12 7.7H7.7l.2 2.2H12V7.7zm0 4.3H8l.2 2.4H12V12zm0 4.6l-2.4-.7-.2-1.7H7.5l.3 3.2L12 18v-1.4z"
        fill="#EBEBEB"
      />
      <path
        d="M16.3 7.7H12v2.2h4.1l-.2 2.1H12v2.2h3.7l-.3 3.7-3.4.9v1.5l5.5-1.5.8-9.1h-2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        stroke="#61DAFB"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#333333" strokeWidth="1" />
      <path
        d="M16.2 17.5l-6.8-8.8v8.8H7.5V6.5h1.9l6.8 8.8V6.5h1.9v11h-1.9z"
        fill="#FFFFFF"
      />
      <path
        d="M15.2 13.2l2.3 3"
        stroke="url(#nextjs-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="nextjs-grad" x1="15" y1="13" x2="17.5" y2="16.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ViteIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M21.5 4.5L12.7 20.9c-.3.5-1 .5-1.3 0L2.5 4.5c-.3-.6.1-1.3.8-1.2l9 1.5 8.4-1.5c.7-.1 1.1.6.8 1.2z"
        fill="url(#vite-grad)"
      />
      <path
        d="M13.2 2.8L6.8 12.5h4.2l-1.8 6.5 6.8-10.2h-4.3l1.5-6z"
        fill="url(#vite-bolt)"
      />
      <defs>
        <linearGradient id="vite-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-bolt" x1="7" y1="3" x2="16" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset=".5" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6-1.2-1.2-2.5-2.6-5.5-2.6zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6-1.2-1.2-2.5-2.6-5.5-2.6z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function CSSModulesIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#264DE4" fillOpacity="0.15" stroke="#264DE4" strokeWidth="1.5" />
      <path
        d="M7 12h2.5m5 0H17M9 8l3 4-3 4m6-8l-3 4 3 4"
        stroke="#38BDF8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StyledComponentsIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      {/* Nail polish bottle / component design */}
      <rect x="9" y="3" width="6" height="5" rx="1" fill="#FFC0CB" stroke="#DB7093" strokeWidth="1.2" />
      <path
        d="M7 8h10a1 1 0 011 1l-1.5 10a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 9a1 1 0 011-1z"
        fill="url(#styled-grad)"
        stroke="#DB7093"
        strokeWidth="1.2"
      />
      <circle cx="10" cy="14" r="1" fill="#FFFFFF" fillOpacity="0.7" />
      <defs>
        <linearGradient id="styled-grad" x1="7" y1="8" x2="17" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7EB3" />
          <stop offset="1" stopColor="#FF758C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path
        d="M21.7 11L13 2.3c-.4-.4-1.1-.4-1.5 0L9.4 4.5l3.2 3.2c.4-.1.9 0 1.2.3.5.5.5 1.3.1 1.8l2.7 2.7c.5-.3 1.3-.3 1.8.2.5.5.5 1.3 0 1.9s-1.3.5-1.9 0c-.4-.4-.5-1-.2-1.5l-2.6-2.6V15c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1.1v-4.7c-.3-.2-.5-.5-.5-.9 0-.4.2-.8.5-1.1L7.5 6.4 2.3 11.6c-.4.4-.4 1.1 0 1.5l8.7 8.7c.4.4 1.1.4 1.5 0l9.2-9.3c.4-.4.4-1.1 0-1.5z"
        fill="#F05032"
      />
    </svg>
  );
}

export function RestApiIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#0EA5E9" fillOpacity="0.1" stroke="#0EA5E9" strokeWidth="1.5" />
      <path
        d="M6 10h2.5c.8 0 1.5.5 1.5 1.3 0 .8-.7 1.2-1.5 1.2H6v-2.5zm0 2.5h2l1.2 2.5M12.5 10v5m3.5-5h-2.5v2.2h2v.6h-2v2.2H16"
        stroke="#38BDF8"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FigmaIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M8 2.5h4v4H8a2 2 0 010-4z" fill="#F24E1E" />
      <path d="M12 2.5h4a2 2 0 010 4h-4v-4z" fill="#FF7262" />
      <path d="M8 6.5h4v4H8a2 2 0 010-4z" fill="#A259FF" />
      <circle cx="14" cy="8.5" r="2" fill="#1ABCFE" />
      <path d="M8 10.5h4v4a2 2 0 11-4 0v-4z" fill="#0ACF83" />
    </svg>
  );
}

export function WebSocketIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="1.4" />
      <path
        d="M7 10l3-3m0 0l3 3m-3-3v8M17 14l-3 3m0 0l-3-3m3 3V9"
        stroke="#818CF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StripeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path
        d="M14.7 11.2c-.7-.3-1.6-.5-2.2-.7-.7-.2-.9-.5-.9-.8 0-.4.3-.7 1.1-.7.9 0 1.9.4 2.5.8l.6-1.8c-.8-.4-1.9-.7-3.1-.7-2.3 0-3.8 1.2-3.8 3.1 0 2.2 2 2.7 3.6 3.1.8.2 1.1.5 1.1.9 0 .5-.5.8-1.3.8-1 0-2.3-.5-3.1-1.1l-.6 1.9c.9.6 2.3.9 3.6.9 2.5 0 4.1-1.2 4.1-3.2-.1-2.2-2.1-2.7-3.6-3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ZustandIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="12" cy="12" r="9.5" fill="#78350F" fillOpacity="0.2" stroke="#B45309" strokeWidth="1.4" />
      {/* Bear face shape */}
      <circle cx="7" cy="8" r="2.2" fill="#D97706" />
      <circle cx="17" cy="8" r="2.2" fill="#D97706" />
      <ellipse cx="12" cy="13" rx="6" ry="5" fill="#F59E0B" />
      <circle cx="10" cy="12" r="1" fill="#1F2937" />
      <circle cx="14" cy="12" r="1" fill="#1F2937" />
      <ellipse cx="12" cy="15" rx="1.8" ry="1.2" fill="#78350F" />
    </svg>
  );
}

export function DefaultTechIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M8 9l3 3-3 3M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Normalizes tech name and returns corresponding SVG component
 */
export default function TechIcon({ name, className = "w-5 h-5", ...props }) {
  const clean = (name || "").toLowerCase().trim();

  if (clean.includes("javascript") || clean === "js") {
    return <JavaScriptIcon className={className} {...props} />;
  }
  if (clean.includes("typescript") || clean === "ts") {
    return <TypeScriptIcon className={className} {...props} />;
  }
  if (clean.includes("html") || clean === "html5") {
    return <HTML5Icon className={className} {...props} />;
  }
  if (clean === "css" || clean === "css3") {
    return <CSS3Icon className={className} {...props} />;
  }
  if (clean.includes("react")) {
    return <ReactIcon className={className} {...props} />;
  }
  if (clean.includes("next")) {
    return <NextjsIcon className={className} {...props} />;
  }
  if (clean.includes("vite")) {
    return <ViteIcon className={className} {...props} />;
  }
  if (clean.includes("tailwind")) {
    return <TailwindIcon className={className} {...props} />;
  }
  if (clean.includes("modules")) {
    return <CSSModulesIcon className={className} {...props} />;
  }
  if (clean.includes("styled") || clean.includes("components")) {
    return <StyledComponentsIcon className={className} {...props} />;
  }
  if (clean.includes("git")) {
    return <GitIcon className={className} {...props} />;
  }
  if (clean.includes("api") || clean.includes("rest")) {
    return <RestApiIcon className={className} {...props} />;
  }
  if (clean.includes("figma")) {
    return <FigmaIcon className={className} {...props} />;
  }
  if (clean.includes("websocket")) {
    return <WebSocketIcon className={className} {...props} />;
  }
  if (clean.includes("stripe")) {
    return <StripeIcon className={className} {...props} />;
  }
  if (clean.includes("zustand")) {
    return <ZustandIcon className={className} {...props} />;
  }

  return <DefaultTechIcon className={className} {...props} />;
}
