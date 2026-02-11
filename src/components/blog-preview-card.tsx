import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  publicationDate: string;
  imagePlaceholderId: string;
  link: string;
};

interface BlogPreviewCardProps {
  post: BlogPost;
}

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === post.imagePlaceholderId);
  const formattedDate = format(new Date(post.publicationDate), 'MMMM d, yyyy');

  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] items-center gap-6 overflow-hidden transition-all duration-300 hover:bg-secondary/60">
        <div className="aspect-video md:aspect-square h-full w-full overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={post.title}
              width={200}
              height={200}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="p-6 pt-0 md:pt-6 md:p-6">
          <p className="mb-2 text-sm text-muted-foreground">{formattedDate}</p>
          <CardTitle className="mb-2 font-headline text-xl">{post.title}</CardTitle>
          <CardDescription className="mb-4 leading-relaxed">{post.summary}</CardDescription>
          <div className="flex items-center font-semibold text-primary">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </a>
  );
}
