import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { getPost, getPosts } from '@/lib/blog';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getPosts().filter((p) => !p.externalUrl).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const { post } = getPost(slug);
  return { title: `${post.title} | Harsain`, description: post.summary };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  let data;
  try { data = getPost(slug); } catch { notFound(); }
  const { post, html } = data;
  return (
    <article className="container mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link href="/blog/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" /> All posts
      </Link>
      <h1 className="mt-6 text-4xl font-bold leading-tight">{post.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        {format(new Date(post.date), 'MMMM d, yyyy')} · {post.readingMinutes} min read
      </p>
      <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
