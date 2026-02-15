export const profileData = {
  name: 'Harsain',
  avatarImageId: 'hero-avatar',
  githubUrl: '#',
  experience: '14+ Years of Experience',
  title: 'Principal Engineer &',
  subtitle: 'Full Stack Developer',
  summary:
    'Building scalable systems and leading technical teams. <br /> Specializing in cloud architecture, distributed systems, and engineering leadership.',
  stats: [
      {
        icon: 'User',
        title: 'Personal',
        description: 'Father, husband, son, and brother. Family is my foundation and my greatest project.',
      },
      {
        icon: 'GraduationCap',
        title: 'Education',
        description: 'M.S. Computer Science\nB.S. Computer Engineering',
      },
      {
        icon: 'CodeXml',
        title: 'Expertise',
        description: 'Full Stack Architecture, System Design, Technical Leadership, Scalable Solutions.',
      }
  ]
};

export const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'],
  backend: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Microservices'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
};

export const experience = [
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

export const projects = [
  {
    title: 'Cloud Analytics Platform',
    description: 'A real-time data visualization platform processing terabytes of data daily. Built with React, D3.js, and AWS.',
    imagePlaceholderId: 'project-analytics',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React', 'AWS', 'D3.js']
  },
  {
    title: 'FinTech Mobile App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction tracking.',
    imagePlaceholderId: 'project-fintech',
    githubUrl: '#',
    liveUrl: '#',
    tags: ['React Native', 'Node.js', 'GraphQL']
  }
];

export const blogs = [
  {
    id: 'gcp-genai-mastery',
    title: 'Mastering Generative AI on Google Cloud',
    summary: 'A deep dive into the architectures and best practices for deploying scalable and efficient generative AI workloads on Google Cloud Platform.',
    publicationDate: '2024-05-20',
    imagePlaceholderId: 'blog-genai-gcp',
    link: '#',
  },
  {
    id: 'microservices-vs-monoliths',
    title: 'Microservices vs. Monoliths: The Final Verdict?',
    summary: 'Decades into the debate, has a clear winner emerged? I break down the real-world trade-offs, costs, and team dynamics I’ve observed.',
    publicationDate: '2024-04-15',
    imagePlaceholderId: 'blog-microservices',
    link: '#',
  },
];

export const interests = [
  {
    title: 'Coding',
    description: 'Crafting elegant solutions to complex problems. For me, engineering is as much an art as it is a science.',
    imagePlaceholderId: 'interest-coding',
  },
  {
    title: 'Music',
    description: 'Finding rhythm and harmony in noise. Music fuels my creativity and helps me find flow.',
    imagePlaceholderId: 'interest-music',
  },
  {
    title: 'Photography',
    description: 'Capturing moments in time. Photography teaches me to look at the world from different perspectives.',
    imagePlaceholderId: 'interest-photography',
  }
];
