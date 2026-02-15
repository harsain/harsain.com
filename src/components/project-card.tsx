import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { StaticImageData } from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  imagePlaceholderId: string;
  tags: string[];
  link: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === project.imagePlaceholderId);

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden">
            {image && (
              <Image
                src={image.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
                unoptimized
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 font-headline text-xl">{project.title}</CardTitle>
          <CardDescription className="mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
