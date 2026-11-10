'use client';

import { useState, type CSSProperties } from 'react';
import type { Adr } from '@/lib/data';

type View = 'adr' | 'git';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

// Domain and architecture competencies are drawn heavier than implementation technology.
const DOMAIN = new Set([
  'Leadership',
  'Architecture',
  'Payments',
  'Agentic AI',
  '3DS',
  'Fraud',
  'eCommerce',
  'Distributed systems',
  'Microservices',
  'Cloud-native',
  'Consulting',
  'Team lead',
  'Full-stack',
  'API platforms',
  'Mobile',
  'Web',
]);

function AdrCard({ a, index }: { a: Adr; index: number }) {
  const current = a.status === 'accepted';
  return (
    <article id={`adr-${a.num}`} className={`adr rv scroll-mt ${current ? 'current' : ''}`} style={delay(0.8 + index * 0.12)}>
      <span className={`stamp ${current ? 'ok' : 'old'}`} style={delay(0.9 + index * 0.18)}>
        {a.status}
      </span>
      <div className="adr-meta">
        {current ? <b>ADR-{a.num}</b> : <s>ADR-{a.num}</s>} · {a.period}
      </div>
      <h3>{a.title}</h3>
      <div className="adr-org">
        {a.org} · {a.role}
      </div>

      <div className="adr-cols">
        <div className="adr-col-a">
          <div className="lbl">DECISION</div>
          <p>{a.body}</p>
        </div>
        {a.consequence && (
          <div className="adr-col-b">
            <div className="lbl">CONSEQUENCES</div>
            {a.stats && (
              <div className="stats">
                {a.stats.map((st) => (
                  <div key={st.value + st.label} className="stat">
                    <span className="stat-v">{st.value}</span>
                    <span className="stat-l">{st.label}</span>
                  </div>
                ))}
              </div>
            )}
            <p className="strong">{a.consequence}</p>
          </div>
        )}
      </div>

      {a.items && a.items.length > 0 && (
        <div style={{ marginTop: 26 }}>
          <div className="lbl">{a.listLabel}</div>
          <ul>
            {a.items.map((it) => (
              <li key={it.name}>
                <b>{it.name}</b>
                {it.desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {a.link && (
        <div style={{ marginTop: 18 }}>
          <a href={a.link.href} target="_blank" rel="noopener noreferrer" className="inline-link">
            {a.link.label} →
          </a>
        </div>
      )}

      <div className="chips">
        {a.tags.map((t) => (
          <span key={t} className={`chip ${DOMAIN.has(t) ? 'dom' : ''}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="adr-chain">{a.chain}</div>
    </article>
  );
}

function GitLog({ adrs }: { adrs: Adr[] }) {
  return (
    <div className="codex gitlog rv">
      <div className="codeh">
        <span>
          <span className="prompt">~/career</span> $ git log --oneline --decorate --graph
        </span>
      </div>
      <div style={{ padding: '10px 18px 18px' }}>
        {adrs.map((a) => (
          <div key={a.num} className="gl-row">
            <span className="gl-star">*</span>
            <span className="gl-main">
              <span style={{ color: a.status === 'accepted' ? 'var(--ok)' : 'var(--hl)', fontWeight: 500 }}>
                (tag: {a.commit.tag}
                {a.status === 'accepted' ? ', HEAD -> main' : ''})
              </span>{' '}
              <strong>{a.commit.subject}</strong>
              <br />
              <span style={{ color: 'var(--muted)' }}>
                {a.org} · {a.role}
              </span>
            </span>
            <span className="gl-when">{a.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Phones and tablets: the supersedes graph as a horizontal stepper (the graph itself lives in the desktop left rail). */
function Stepper({ adrs }: { adrs: Adr[] }) {
  return (
    <nav className="stepper" aria-label="Jump to a decision record">
      {adrs.map((a, i) => (
        <span key={a.num} className="step-wrap">
          <a href={`#adr-${a.num}`} className={`step ${a.status === 'accepted' ? 'cur' : ''}`}>
            <i aria-hidden="true" />
            {a.num} {a.short}
          </a>
          {i < adrs.length - 1 && (
            <span className="step-arrow" aria-hidden="true">
              ←
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function DecisionLog({ adrs }: { adrs: Adr[] }) {
  const [view, setView] = useState<View>('adr');
  return (
    <section>
      <div id="decisions" className="dl-head scroll-mt">
        <h2 className="h2"># Decision log</h2>
        <div role="group" aria-label="Choose a view" className="seg">
          <button type="button" aria-pressed={view === 'adr'} onClick={() => setView('adr')}>
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 2h7l3 3v9H3z M10 2v3h3 M5.5 8h5 M5.5 10.5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            ADR view
          </button>
          <button type="button" aria-pressed={view === 'git'} onClick={() => setView('git')}>
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="4" cy="3.5" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="4" cy="12.5" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="8" r="1.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 5.2v5.6 M5.6 8h4.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            git log
          </button>
        </div>
      </div>
      <p className="seg-note" aria-live="polite">
        {view === 'adr' ? 'Showing full decision records' : 'Showing the commit history'}
      </p>
      <Stepper adrs={adrs} />
      {view === 'adr' ? (
        <div className="adr-list">
          {adrs.map((a, i) => (
            <AdrCard key={a.num} a={a} index={i} />
          ))}
        </div>
      ) : (
        <GitLog adrs={adrs} />
      )}
    </section>
  );
}
