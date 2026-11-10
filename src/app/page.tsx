import type { CSSProperties } from 'react';
import { ContentsNav } from '@/components/contents-nav';
import { DecisionLog } from '@/components/decision-log';
import { Capabilities, Contact, Credentials, ImpactBlock, Labs, ReadmeCard, StackBlock } from '@/components/home-sections';
import { adrs, profile, site } from '@/lib/data';

const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: profile.description,
  url: site.url,
  image: `${site.url}/avatar.jpg`,
  worksFor: { '@type': 'Organization', name: profile.org },
  address: { '@type': 'PostalAddress', addressLocality: 'Melbourne', addressCountry: 'AU' },
  knowsLanguage: ['English', 'Hindi', 'Punjabi'],
  sameAs: [site.linkedin, site.github, site.base2labs],
};

export default function Home() {
  return (
    <div className="shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="layout">
        <aside className="a-left" aria-label="Page navigation">
          <div className="rail">
            <ContentsNav adrs={adrs} />
          </div>
        </aside>

        <section className="a-hero hero">
          <div className="cmd rv" style={d(0)}>
            <span className="prompt">~/career</span> $ <span className="type">git log --oneline --tags</span>
          </div>
          <h1 className="h1 rv" style={d(0.5)}>
            {profile.headline}
          </h1>
          <p className="tldr rv" style={d(0.7)}>
            <b>TL;DR</b> &nbsp;{profile.tldr}
          </p>
          <div className="dimline rv" style={d(0.85)}>
            <a href="#decisions" className="btn btn-primary">
              Read the decision log
            </a>
            <a href={site.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.github} className="btn" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <aside className="a-right" aria-label="Profile summary">
          <div className="rail">
            <ReadmeCard />
            <ImpactBlock />
          </div>
        </aside>

        <div className="a-main">
          <DecisionLog adrs={adrs} />
          <Labs />
          <Capabilities />
          <StackBlock />
          <Credentials />
          <Contact />
        </div>
      </div>
    </div>
  );
}
