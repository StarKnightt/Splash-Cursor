import { useState, useRef, useCallback } from "react";
import { SplashCursor } from "./SplashCursor";

const INSTALL_CMD = "npx shadcn@latest add https://starknightt.github.io/Splash-Cursor/r/splash-cursor.json";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-200 cursor-pointer"
      style={{ backgroundColor: "var(--toggle-bg)" }}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-tertiary)" }}>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

function Header({ theme, toggleTheme }) {
  const lightBg = { r: 0.91, g: 0.89, b: 0.87 };
  const darkBg = { r: 0.04, g: 0.04, b: 0.06 };

  return (
    <header
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <SplashCursor
        key={theme}
        BACK_COLOR={theme === "light" ? lightBg : darkBg}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={6000}
        CURL={3}
        COLOR_UPDATE_SPEED={10}
        TRANSPARENT={true}
        className="z-20"
      />

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-6 sm:right-10 z-30 flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 cursor-pointer"
        style={{ backgroundColor: "var(--toggle-bg)", color: "var(--text-secondary)" }}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      {/* Center */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center select-none px-6">
        <h1
          className="text-[clamp(4.5rem,14vw,13rem)] leading-[0.88] transition-colors duration-500"
          style={{ fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif', fontWeight: 900, letterSpacing: "-0.05em", color: "var(--text-primary)" }}
        >
          Splash
          <br />
          Cursor
        </h1>

        <div
          className="mt-8 flex items-center gap-3 px-5 py-3 rounded-xl border transition-colors duration-500"
          style={{ backgroundColor: "var(--code-bg)", borderColor: "var(--code-border)" }}
        >
          <code
            className="text-[14px] font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-primary)" }}
          >
            <span style={{ color: "var(--text-tertiary)" }}>$</span> {INSTALL_CMD}
          </code>
          <CopyButton text={INSTALL_CMD} />
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-5 left-6 right-6 sm:left-10 sm:right-10 z-30 flex items-center justify-between text-[13px] transition-colors duration-500" style={{ color: "var(--text-tertiary)" }}>
        <span>Built with <em style={{ color: "var(--text-secondary)" }}>WebGL</em> &middot; <em style={{ color: "var(--text-secondary)" }}>React</em> &middot; <em style={{ color: "var(--text-secondary)" }}>Tailwind CSS</em></span>
      </div>
    </header>
  );
}

export default Header;
