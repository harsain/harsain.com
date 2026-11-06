import type { Metadata } from 'next';
import { getPosts } from '@/lib/blog';
import { PostCard } from '@/components/post-card';

export const metadata: Metadata = {
  title: 'Blog | Harsain',
  description: 'Writing on event-driven systems, platform engineering and technical leadership.',
};

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-primary">Blog</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Notes on event-driven systems, platform engineering and technical leadership.
      </p>
      <div className="mt-10 grid gap-6">
        {posts.length === 0 && <p className="text-muted-foreground">First post coming soon.</p>}
        {posts.map((p) => <PostCard key={p.slug} post={p} />)}
      </div>
    </div>
  );
}
