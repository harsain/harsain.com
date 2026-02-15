export const profileData = {
  name: 'Harsain',
  avatarImageId: 'hero-avatar',
  githubUrl: 'https://github.com/harsain',
  experience: '10+ Years of Experience',
  title: 'Principal Software Engineer &',
  subtitle: 'Technical Leader',
  summary:
    'A technical leader with 10+ years of experience delivering enterprise-scale platforms for Tier-1 banking and global SaaS organizations. <br /> Deep expertise in technical strategy, AWS, event-driven microservices, and reliability engineering.',
  stats: [
      {
        icon: 'User',
        title: 'Technical Leadership',
        description: 'Domain ownership, roadmap definition, and architecture governance.',
      },
      {
        icon: 'GraduationCap',
        title: 'Education',
        description: 'M.S. Computer Science\nB.S. Computer Engineering',
      },
      {
        icon: 'CodeXml',
        title: 'Distributed Systems',
        description: 'Event-driven architecture, microservices, and asynchronous messaging patterns.',
      }
  ]
};

export const skills = {
  frontend: ['TypeScript', 'React', 'Next.js', 'React Native', 'JavaScript'],
  backend: ['Java', 'Golang', 'Python', 'Node.js', 'Spring Boot', 'Kafka'],
  devops: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Jenkins'],
};

export const experience = [
  {
    date: 'Nov 2022 - Present',
    title: 'Principal Engineer | National Australia Bank',
    description: 'Owning technical strategy, architecture, and engineering roadmap for the Loyalty sub-domain. Leading platform modernisation into event-driven, cloud-native microservices.',
    tags: ['Leadership', 'Architecture', 'AWS']
  },
  {
    date: 'Sep 2019 - Nov 2022',
    title: 'Senior Staff Engineer | Zendesk',
    description: 'Defined and executed the technical vision for global customer messaging platforms. Designed highly available, distributed systems supporting millions of users.',
    tags: ['Distributed Systems', 'Kafka', 'TypeScript']
  },
  {
    date: 'Sep 2018 - Sep 2019',
    title: 'Senior Consultant & Team Lead | National Australia Bank',
    description: 'Led teams delivering customer-facing digital platforms. Established engineering standards and provided hands-on leadership.',
    tags: ['React', 'Node.js', 'Team Lead']
  },
  {
    date: 'Mar 2017 - Sep 2018',
    title: 'Senior Microservices Engineer | Versent',
    description: 'Designed and built cloud-native microservices platforms for clients, advising on event choreography and orchestration patterns.',
    tags: ['Microservices', 'Consulting', 'Cloud-Native']
  },
];

export const projects = [
  {
    title: 'NAB Loyalty & Offers Platform',
    description: 'Led architecture and execution of a large-scale credit card loyalty migration to a modern, event-driven offers platform on AWS with zero customer disruption.',
    imagePlaceholderId: 'project-analytics',
    githubUrl: 'https://github.com/harsain',
    liveUrl: '#',
    tags: ['AWS', 'Java', 'Kafka', 'Architecture']
  },
  {
    title: 'Zendesk Global Messaging',
    description: 'Designed a highly available, distributed messaging platform for Zendesk, supporting millions of end-users across multiple regions and social channels.',
    imagePlaceholderId: 'project-fintech',
    githubUrl: 'https://github.com/harsain',
    liveUrl: '#',
    tags: ['Distributed Systems', 'TypeScript', 'Golang', 'Python']
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
