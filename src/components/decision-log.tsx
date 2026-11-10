'use client';

import { useState, type CSSProperties } from 'react';
import type { Adr } from '@/lib/data';

type View = 'adr' | 'git';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

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
            <p className="strong">{a.consequence}</p>
          </div>
        )}
      </div>

      {a.items && a.items.length > 0 && (
        <div style={{ marginTop: 20 }}>
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
        <div style={{ marginTop: 16, fontFamily: 'var(--font-mono), monospace', fontSize: 13 }}>
          <a href={a.link.href} target="_blank" rel="noopener noreferrer">
            {a.link.label} →
          </a>
        </div>
      )}

      <div className="chips">
        {a.tags.map((t) => (
          <span key={t} className="chip">
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
      <div className="codeh" style={{ fontSize: 12 }}>
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

export function DecisionLog({ adrs }: { adrs: Adr[] }) {
  const [view, setView] = useState<View>('adr');
  return (
    <section>
      <div id="decisions" className="dl-head scroll-mt">
        <h2 className="h2"># Decision log</h2>
        <div role="group" aria-label="Choose a view" className="seg">
          <button type="button" aria-pressed={view === 'adr'} onClick={() => setView('adr')}>
            ADR view
          </button>
          <button type="button" aria-pressed={view === 'git'} onClick={() => setView('git')}>
            git log
          </button>
        </div>
      </div>
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
