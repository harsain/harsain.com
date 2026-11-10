'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import type { Adr } from '@/lib/data';

const SECTIONS = [
  { id: 'reviews', label: 'Reviews' },
  { id: 'labs', label: 'Labs' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'stack', label: 'Stack' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

/** Left rail: contents that follow your scroll, plus a graph of how each decision supersedes the last. */
export function ContentsNav({ adrs }: { adrs: Adr[] }) {
  const [active, setActive] = useState('decisions');

  useEffect(() => {
    const ids = ['decisions', ...adrs.map((a) => `adr-${a.num}`), ...SECTIONS.map((s) => s.id)];
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [adrs]);

  const step = 56;
  const y = (i: number) => 26 + i * step;
  const height = y(adrs.length - 1) + 26;

  return (
    <>
      <div className="rail-label">CONTENTS</div>
      <nav className="toc" aria-label="Contents">
        <a href="#decisions" className={active === 'decisions' ? 'on' : ''}>
          <span className="dot sq" />
          <span>Decision log</span>
        </a>
        {adrs.map((a) => (
          <a key={a.num} href={`#adr-${a.num}`} className={active === `adr-${a.num}` ? 'on' : ''} aria-current={active === `adr-${a.num}` ? 'true' : undefined}>
            <span className={`dot round ${a.status === 'accepted' ? 'ok' : ''}`} />
            <span>
              ADR-{a.num} {a.short}
            </span>
          </a>
        ))}
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>
            <span className="dot sq" />
            <span>{s.label}</span>
          </a>
        ))}
      </nav>

      <div className="rail-label" style={{ marginTop: 26 }}>
        SUPERSEDES GRAPH
      </div>
      <svg
        viewBox={`0 0 230 ${height}`}
        role="img"
        aria-label="Chain of decision records, each superseding the previous one, ending at the current record"
        style={{ width: '100%', maxWidth: 230, height: 'auto', display: 'block', marginTop: 8 }}
      >
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M1 1L9 5L1 9" style={{ fill: 'none', stroke: 'var(--muted)', strokeWidth: 1.6 }} />
          </marker>
        </defs>
        {adrs.slice(0, -1).map((_, i) => (
          <path
            key={i}
            className="gdr"
            pathLength={1}
            d={`M24 ${y(i + 1) - 10}V${y(i) + 20}`}
            style={{ fill: 'none', stroke: 'var(--muted)', strokeWidth: 1.6, markerEnd: 'url(#arr)', '--d': `${0.9 + (adrs.length - 2 - i) * 0.15}s` } as CSSProperties}
          />
        ))}
        {adrs.map((a, i) => {
          const isCurrent = a.status === 'accepted';
          const isActive = active === `adr-${a.num}`;
          return (
            <g key={a.num}>
              {isCurrent && <circle className="pls" cx="24" cy={y(i)} r="9" style={{ fill: 'none', stroke: 'var(--ok)', strokeWidth: 2 }} />}
              {isActive && <circle cx="24" cy={y(i)} r="14" style={{ fill: 'none', stroke: 'var(--ink)', strokeWidth: 1.5, strokeDasharray: '3 3' }} />}
              <circle cx="24" cy={y(i)} r="9" style={{ fill: isCurrent ? 'var(--ok)' : 'var(--card)', stroke: isCurrent ? 'var(--ok)' : 'var(--muted)', strokeWidth: 2 }} />
              <text
                x="46"
                y={y(i) + 4}
                style={{ fill: isActive || isCurrent ? 'var(--ink)' : 'var(--muted)', fontFamily: 'var(--font-mono), monospace', fontSize: 12, fontWeight: isActive || isCurrent ? 700 : 400 }}
              >
                {a.num} {a.short}
              </text>
            </g>
          );
        })}
      </svg>
    </>
  );
}
