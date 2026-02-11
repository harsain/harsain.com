import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profileData, projects, blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProjectCard } from '@/components/project-card';
import { BlogPreviewCard } from '@/components/blog-preview-card';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-avatar');

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    {profileData.name}
                  </h1>
                  <p className="text-xl text-muted-foreground">{profileData.title}</p>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl">
                    {profileData.summary}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#contact">
                    <Button size="lg">Contact Me</Button>
                  </a>
                  <a href="#projects">
                    <Button size="lg" variant="secondary">
                      View My Work
                    </Button>
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profileData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Avatar className="mx-auto aspect-square h-auto w-full max-w-[300px] overflow-hidden rounded-full lg:order-last lg:max-w-[400px]">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={profileData.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
                <AvatarFallback>{profileData.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Projects</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I'm proud to have worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From the Blog</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I enjoy writing about product, growth, and technology. Here are some of my latest articles.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-1 md:gap-12 lg:max-w-none">
              {blogPosts.map((post) => (
                <BlogPreviewCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to work together? Send me a message.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
