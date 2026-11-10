import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getPost, getPosts } from '@/lib/blog';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const slugs = getPosts()
    .filter((p) => !p.externalUrl)
    .map((p) => ({ slug: p.slug }));
  // Static export needs at least one param. With no posts yet, this placeholder renders a 404.
  return slugs.length ? slugs : [{ slug: '_none' }];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { post } = getPost(slug);
    return { title: post.title, description: post.summary };
  } catch {
    return { title: 'Not found' };
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  let data;
  try {
    data = getPost(slug);
  } catch {
    notFound();
  }
  const { post, html } = data;
  return (
    <article className="shell" style={{ maxWidth: 760, padding: '40px 32px 72px' }}>
      <Link href="/blog/" className="mono" style={{ fontSize: 13 }}>
        ← all notes
      </Link>
      <h1 className="h2" style={{ marginTop: 24, fontSize: 'clamp(30px, 5vw, 46px)', lineHeight: 1.1 }}>
        {post.title}
      </h1>
      <p className="mono" style={{ marginTop: 12, fontSize: 12, color: 'var(--muted)' }}>
        {format(new Date(post.date), 'yyyy-MM-dd')} · {post.readingMinutes} min read
      </p>
      <div className="prose-post" style={{ marginTop: 36 }} dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
