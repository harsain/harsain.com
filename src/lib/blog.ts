import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const dir = path.join(process.cwd(), 'content', 'blog');

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  externalUrl?: string;
  readingMinutes: number;
};

function read(file: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
  const slug = file.replace(/\.md$/, '');
  const words = content.split(/\s+/).length;
  const post: Post = {
    slug,
    title: String(data.title ?? slug),
    date: new Date(data.date).toISOString().slice(0, 10),
    summary: String(data.summary ?? ''),
    tags: (data.tags as string[]) ?? [],
    externalUrl: data.externalUrl,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { post, content };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => read(f).post)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  const { post, content } = read(`${slug}.md`);
  return { post, html: marked.parse(content, { async: false }) as string };
}
