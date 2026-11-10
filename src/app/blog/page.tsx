import type { Metadata } from 'next';
import Link from 'next/link';
import { PostCard } from '@/components/post-card';
import { getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Technical writing on distributed systems, platforms and engineering leadership.',
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <div className="shell" style={{ maxWidth: 860, padding: '40px 32px 72px' }}>
      <h1 className="h2"># Notes</h1>
      <p className="lead-p">Technical writing on distributed systems, platforms and engineering leadership.</p>
      <div style={{ marginTop: 28, display: 'grid', gap: 16 }}>
        {posts.length === 0 && (
          <p className="mono" style={{ color: 'var(--muted)', fontSize: 14 }}>
            No posts yet. <Link href="/">Back to the decision log →</Link>
          </p>
        )}
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
