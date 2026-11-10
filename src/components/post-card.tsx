import Link from 'next/link';
import { format } from 'date-fns';
import type { Post } from '@/lib/blog';

export function PostCard({ post }: { post: Post }) {
  const href = post.externalUrl ?? `/blog/${post.slug}/`;
  const external = Boolean(post.externalUrl);
  return (
    <Link href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="cardx block" style={{ textDecoration: 'none', color: 'var(--ink)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
        {format(new Date(post.date), 'yyyy-MM-dd')} · {post.readingMinutes} min read
      </div>
      <div style={{ marginTop: 8, fontWeight: 600, fontSize: 24, lineHeight: 1.2 }}>{post.title}</div>
      <p>{post.summary}</p>
      <div className="chips">
        {post.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
