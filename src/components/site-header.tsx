import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { getPosts } from '@/lib/blog';
import { site } from '@/lib/data';

export function SiteHeader() {
  const hasPosts = getPosts().length > 0;
  return (
    <header className="shell">
      <div className="hdr">
        <div className="crumb rv">
          harsain.com <i>/</i> career <i>/</i> <b>README.md</b>
        </div>
        <nav className="nav rv" style={{ '--d': '.1s' } as React.CSSProperties} aria-label="Main">
          <Link href="/#decisions">decisions</Link>
          <Link href="/#labs">labs</Link>
          <Link href="/#stack">stack</Link>
          {hasPosts && <Link href="/blog/">notes</Link>}
          <Link href="/#contact">contact</Link>
          <a href={site.resume} download>
            resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
