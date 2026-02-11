import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, GraduationCap, Code2, Linkedin, Github, ExternalLink } from 'lucide-react';

const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Microservices'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
};

const experience = [
  {
    date: '2021 - Present',
    title: 'Principal Engineer',
    description: 'Leading architecture and technical strategy for core platform services. Mentoring senior engineers and driving best practices across the organization.',
    tags: ['Architecture', 'Team Leadership']
  },
  {
    date: '2018 - 2021',
    title: 'Senior Staff Engineer',
    description: 'Designed and implemented high-throughput data processing pipelines. Reduced system latency by 40% through infrastructure optimization.',
    tags: ['System Design', 'Cloud Native']
  },
  {
    date: '2014 - 2018',
    title: 'Senior Full Stack Engineer',
    description: 'Full-cycle development of customer-facing web applications. Led the migration from monolithic architecture to microservices.',
    tags: []
  },
  {
    date: '2011 - 2014',
    title: 'Software Engineer',
    description: 'Developed core features for SaaS products. Collaborated closely with product and design teams to deliver seamless user experiences.',
    tags: []
  },
];

const projects = [
  {
    title: 'Cloud Analytics Platform',
    description: 'A real-time data visualization platform processing terabytes of data daily. Built with React, D3.js, and AWS.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    imageHint: 'dashboard analytics',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React', 'AWS', 'D3.js']
  },
  {
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1580674287405-80cd35825358?q=80&w=1470&auto=format&fit=crop',
    imageHint: 'mobile banking',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React Native', 'Node.js', 'GraphQL']
  }
];

const interests = [
  {
    title: 'Coding',
    description: 'Crafting elegant solutions to complex problems. For me, engineering is as much an art as it is a science.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-1428bc64a27a?q=80&w=1470&auto=format&fit=crop',
    imageHint: 'code editor'
  },
  {
    title: 'Music',
    description: 'Finding rhythm and harmony in noise. Music fuels my creativity and helps me find flow.',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop',
    imageHint: 'music sound'
  },
  {
    title: 'Photography',
    description: 'Capturing moments in time. Photography teaches me to look at the world from different perspectives.',
    imageUrl: 'https://images.unsplash.com/photo-1502982720700-b8f83a731b53?q=80&w=1470&auto=format&fit=crop',
    imageHint: 'photography camera'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {/* Hero Section */}
      <section id="about" className="flex flex-col items-center py-20 text-center md:py-32">
        <div className="mb-8 h-32 w-32 rounded-full border-4 border-primary shadow-lg">
          <Image
            src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F35-50%2FSouth%20Asian%2F0"
            alt="Har Sain"
            width={128}
            height={128}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="mb-4 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          14+ Years of Experience
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary">
          Principal Engineer &<br />
          <span className="text-foreground">Full Stack Developer</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Building scalable systems and leading technical teams. <br />
          Specializing in cloud architecture, distributed systems, and engineering leadership.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary">
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
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Personal</h3>
            <p className="mt-2 text-sm text-muted-foreground">Father, husband, son, and brother. Family is my foundation and my greatest project.</p>
          </div>
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
              M.S. Computer Science{'\n'}
              B.S. Computer Engineering
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Expertise</h3>
            <p className="mt-2 text-sm text-muted-foreground">Full Stack Architecture, System Design, Technical Leadership, Scalable Solutions.</p>
          </div>
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
                <CardTitle className="text-primary">DevOps</CardTitle>
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

      {/* Featured Projects */}
      <section id="projects" className="border-t-2 border-secondary py-20">
         <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map(project => (
              <Card key={project.title} className="overflow-hidden p-0">
                <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="h-60 w-full object-cover" data-ai-hint={project.imageHint}/>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-5 w-5" />
                      </a>
                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="outline" className="rounded-full border-primary/50 text-primary">{tag}</Badge>)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </section>

      {/* Interests */}
      <section id="interests" className="border-t-2 border-secondary py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Passions & Interests</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Beyond the terminal, I explore the world through sound, lenses, and logic.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {interests.map(interest => (
              <Card key={interest.title}>
                <CardContent className="p-0">
                  <div className="mb-6 h-48 w-full overflow-hidden rounded-md">
                     <Image src={interest.imageUrl} alt={interest.title} width={400} height={300} className="h-full w-full object-cover" data-ai-hint={interest.imageHint} />
                  </div>
                  <h3 className="text-xl font-semibold">{interest.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
      </section>
    </div>
  );
}
