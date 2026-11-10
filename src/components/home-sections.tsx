import Image from 'next/image';
import { CodeBox, K, L, M, N, S, StrList } from '@/components/code-block';
import { capabilities, credentials, impact, labs, labsIntro, profile, site, stack } from '@/lib/data';

/** Right rail: who this is, as README front matter. */
export function ReadmeCard() {
  return (
    <CodeBox
      file="README.md"
      label="front matter"
      className="rv"
      style={{ '--d': '.6s' } as React.CSSProperties}
      head={
        <div className="fm-head">
          <Image src="/avatar.jpg" alt={`Portrait of ${profile.name}`} width={76} height={76} priority />
          <div className="fm-name">{profile.name}</div>
        </div>
      }
    >
      <L><M>---</M></L>
      <L><K>role</K>: {profile.role} <M>({profile.roleNote})</M></L>
      <L><K>org</K>: {profile.org}</L>
      <L><K>location</K>: {profile.location}</L>
      <L><K>since</K>: <N>{profile.since}</N></L>
      <L><K>status</K>: <S>accepted</S></L>
      <L><K>experience</K>: <N>{profile.experience}</N> years</L>
      <L><K>focus</K>: <StrList values={profile.focus} /></L>
      <L><K>labs</K>: {profile.labs} <M>(founder)</M></L>
      <L><M>---</M></L>
    </CodeBox>
  );
}

/** Right rail: the numbers, as measurable tiles (the YAML keys stay as small labels). */
export function ImpactBlock() {
  return (
    <div className="codex rv" style={{ '--d': '.75s' } as React.CSSProperties}>
      <div className="codeh">
        <span>impact.yaml</span>
      </div>
      <div className="stat-rows">
        <div className="stat-row">
          <div className="stat-key">experience</div>
          <div className="stat-big">{profile.experience}</div>
          <div className="stat-text">years</div>
        </div>
        {impact.map((row) => (
          <div key={row.key} className="stat-row">
            <div className="stat-key">{row.key}</div>
            <div className={`stat-big ${row.valueKind === 'ok' ? 'ok' : ''}`}>{row.value}</div>
            <div className="stat-text">{row.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Labs() {
  return (
    <section className="section">
      <h2 id="labs" className="h2 scroll-mt"># Labs</h2>
      <p className="lead-p">
        <b style={{ fontWeight: 600 }}>Base2 Labs</b> (Engineering for Humanity) {labsIntro}{' '}
        <a href={site.base2labs} target="_blank" rel="noopener noreferrer" className="inline-link">
          base2labs.tech →
        </a>
      </p>
      <div className="grid-auto">
        {labs.map((l) => (
          <div key={l.path} className="cardx">
            <div className="lab-top">
              <span className={`lab-ic ${l.stage === 'beta' ? 'beta' : ''}`} aria-hidden="true">
                {l.name.charAt(0)}
              </span>
              <span className="path">{l.path}</span>
            </div>
            <div className="name">{l.name}</div>
            <div className="tag">{l.tagline}</div>
            <p>{l.desc}</p>
            <span className={`badge ${l.stage === 'beta' ? 'beta' : ''}`}>
              <i aria-hidden="true" />
              {l.stage === 'beta' ? 'BETA · COMING SOON' : 'PRIVATE · RELEASING SOON'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section">
      <h2 id="capabilities" className="h2 scroll-mt"># Capabilities</h2>
      <div className="grid-auto" style={{ marginTop: 18 }}>
        {capabilities.map((c) => (
          <div key={c.title} className="cardx" style={{ padding: '18px 20px' }}>
            <div className="cap-t">{c.title}</div>
            <p className="cap-p">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StackBlock() {
  const entries = Object.entries(stack);
  return (
    <section className="section">
      <h2 id="stack" className="h2 scroll-mt"># Stack</h2>
      <CodeBox file="stack.json" style={{ marginTop: 18 }}>
        <L><M>{'{'}</M></L>
        {entries.map(([key, values], idx) => (
          <L key={key} i={1}>
            <K>&quot;{key}&quot;</K>: <StrList values={values} />
            {idx < entries.length - 1 ? ',' : ''}
          </L>
        ))}
        <L><M>{'}'}</M></L>
      </CodeBox>
    </section>
  );
}

export function Credentials() {
  const { education } = credentials;
  return (
    <section className="section">
      <h2 id="credentials" className="h2 scroll-mt"># Credentials</h2>
      <CodeBox file="credentials.json" style={{ marginTop: 18 }}>
        <L><M>{'{'}</M></L>
        <L i={1}><K>&quot;education&quot;</K>: <M>[</M></L>
        {education.map((e, idx) => (
          <L key={e.degree} i={2}>
            <M>{'{'}</M> <K>&quot;degree&quot;</K>: <S>&quot;{e.degree}&quot;</S>, <K>&quot;school&quot;</K>: <S>&quot;{e.school}&quot;</S>, <K>&quot;years&quot;</K>:{' '}
            <S>&quot;{e.years}&quot;</S> <M>{'}'}</M>
            {idx < education.length - 1 ? ',' : ''}
          </L>
        ))}
        <L i={1}><M>],</M></L>
        <L i={1}><K>&quot;certification&quot;</K>: <S>&quot;{credentials.certification}&quot;</S>,</L>
        <L i={1}><K>&quot;training&quot;</K>: <StrList values={credentials.training} />,</L>
        <L i={1}><K>&quot;languages&quot;</K>: <StrList values={credentials.languages} /></L>
        <L><M>{'}'}</M></L>
      </CodeBox>
    </section>
  );
}

export function Contact() {
  const cmds = [
    { href: site.linkedin, label: 'open linkedin.com/in/harsain' },
    { href: site.github, label: 'open github.com/harsain' },
    { href: site.base2labs, label: 'open base2labs.tech' },
    { href: `mailto:${site.email}`, label: `mail ${site.email}` },
  ];
  return (
    <section id="contact" className="contact scroll-mt">
      <div className="mono" style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--muted)' }}>
        CONTACT.md
      </div>
      <div className="contact-q">Have a decision that&apos;s expensive to get wrong? Let&apos;s talk.</div>
      <div className="cmds">
        {cmds.map((c) => (
          <a key={c.href} href={c.href} className="cmd-btn" {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span>$</span>
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}
