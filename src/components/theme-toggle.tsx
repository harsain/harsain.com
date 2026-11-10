'use client';

import { useSyncExternalStore } from 'react';

// The theme lives on <html data-theme>, set before first paint by the inline script in layout.tsx.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.dataset.theme === 'dark';
const serverSnapshot = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, serverSnapshot);

  const toggle = () => {
    const theme = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage can be unavailable (private mode); the choice just won't persist */
    }
  };

  return (
    <button type="button" className="btn-toggle" aria-pressed={dark} aria-label="Switch between light and dark theme" onClick={toggle}>
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 2a6 6 0 0 1 0 12z" fill="currentColor" />
      </svg>
      <span className="lbl-light">dark</span>
      <span className="lbl-dark">light</span>
    </button>
  );
}
