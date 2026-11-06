import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import type { Post } from '@/lib/blog';

export function PostCard({ post }: { post: Post }) {
  const href = post.externalUrl ?? `/blog/${post.slug}/`;
  const external = Boolean(post.externalUrl);
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group block rounded-lg border bg-background p-6 transition-colors hover:border-primary/60 hover:bg-secondary/40"
    >
      <p className="text-sm text-muted-foreground">
        {format(new Date(post.date), 'MMMM d, yyyy')} · {post.readingMinutes} min read
      </p>
      <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">{post.title}</h3>
      <p className="mt-2 text-muted-foreground">{post.summary}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
          ))}
        </div>
        <span className="flex items-center text-sm font-semibold text-primary">
          Read <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
