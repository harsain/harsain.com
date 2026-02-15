import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, CodeXml, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profileData, skills, experience, projects, blogs, interests } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BlogPreviewCard } from '@/components/blog-preview-card';

const iconMap: { [key: string]: React.ElementType } = {
  User,
  GraduationCap,
  CodeXml,
};


export default function Home() {
  const avatarImage = PlaceHolderImages.find(p => p.id === profileData.avatarImageId);

  return (
    <div className="container mx-auto max-w-4xl px-6">
      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center py-20 text-center md:py-32">
        <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-primary shadow-lg">
          {avatarImage && (
            <Image
              src={avatarImage.imageUrl}
              alt={profileData.name}
              fill
              className="object-cover"
              data-ai-hint={avatarImage.imageHint}
              unoptimized
            />
          )}
        </div>
        <div className="mb-4 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          {profileData.experience}
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary">
          {profileData.title}<br />
          <span className="text-foreground">{profileData.subtitle}</span>
        </h1>
        <p 
          className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: profileData.summary }}
        >
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href={profileData.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </a>
          </Button>
          <Button asChild size="lg">
            <a href="https://linkedin.com/in/harsain" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t-2 border-secondary py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {profileData.stats.map(stat => {
             const Icon = iconMap[stat.icon];
             return (
              <div key={stat.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold">{stat.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="border-t-2 border-secondary py-20">
         <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Technical Arsenal</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">My preferred stack for building robust, scalable applications.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => <Badge key={skill} className="rounded-full bg-primary/10 py-1 px-3 font-medium text-primary hover:bg-primary/20">{skill}</Badge>)}
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="text-primary">Backend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.backend.map(skill => <Badge key={skill} className="rounded-full bg-primary/10 py-1 px-3 font-medium text-primary hover:bg-primary/20">{skill}</Badge>)}
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="text-primary">Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.devops.map(skill => <Badge key={skill} className="rounded-full bg-primary/10 py-1 px-3 font-medium text-primary hover:bg-primary/20">{skill}</Badge>)}
              </CardContent>
            </Card>
          </div>
      </section>
      
      {/* Experience Timeline */}
      <section id="experience" className="border-t-2 border-secondary py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-primary">Professional Journey</h2>
              <p className="mt-4 text-muted-foreground">Over a decade of solving complex problems and leading high-performing teams.</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative">
              {experience.map((item, index) => (
                <div key={item.title} className="relative pl-8 pb-12">
                  {index < experience.length -1 && <div className="absolute left-3 top-2 h-full w-0.5 bg-secondary"></div>}
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-background">
                    <div className="h-4 w-4 rounded-full border-4 border-primary bg-background"></div>
                  </div>
                  <p className="text-sm font-medium text-primary">{item.date}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  {item.tags.length > 0 && (
                     <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.map(tag => <Badge key={tag} variant="outline" className="rounded-full border-primary/50 text-primary">{tag}</Badge>)}
                     </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section id="interests" className="border-t-2 border-secondary py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Passions & Interests</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Beyond the terminal, I explore the world through sound, lenses, and logic.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {interests.map(interest => {
              const image = PlaceHolderImages.find(p => p.id === interest.imagePlaceholderId);
              return (
              <Card key={interest.title}>
                <CardContent className="p-0">
                  <div className="mb-6 h-48 w-full overflow-hidden rounded-md">
                    {image && <Image src={image.imageUrl} alt={interest.title} width={400} height={300} className="h-full w-full object-cover" data-ai-hint={image.imageHint} unoptimized />}
                  </div>
                  <h3 className="text-xl font-semibold">{interest.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            );
            })}
          </div>
      </section>
    </div>
  );
}
