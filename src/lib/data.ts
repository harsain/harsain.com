// All site content lives here. Edit this file to change what the site says.

export const site = {
  url: 'https://harsain.com',
  name: 'Harsain Kapoor',
  email: 'harsain@gmail.com',
  linkedin: 'https://linkedin.com/in/harsain',
  github: 'https://github.com/harsain',
  base2labs: 'https://base2labs.tech',
  resume: '/Harsain_Kapoor_Resume.pdf',
};

export const profile = {
  name: 'Harsain Kapoor',
  headline: 'I make the decisions that are expensive to reverse.',
  tldr: "Principal Engineer with 15+ years designing and delivering large-scale distributed systems across Tier-1 banking, global SaaS and AI-enabled products. Today at Commonwealth Bank I lead card-not-present payment acceptance, and I'm starting and leading agentic ecommerce for the bank. Melbourne.",
  role: 'Principal Engineer, eCommerce Crew',
  roleNote: 'Payment Acceptance',
  org: 'Commonwealth Bank of Australia',
  location: 'Melbourne, Australia',
  since: '2026-08',
  experience: '15+',
  focus: ['payments', 'distributed systems', 'event-driven architecture', 'agentic AI', 'technical leadership'],
  labs: 'Base2 Labs',
  description:
    'Principal Engineer on the eCommerce Crew at Commonwealth Bank, Melbourne. 15+ years building distributed systems across Tier-1 banking, global SaaS and AI-enabled products. Founder of Base2 Labs.',
};

export const impact = [
  { key: 'nab_loyalty', value: '3M+', text: 'cardholders, millions of loyalty events and transactions a year' },
  { key: 'zendesk_messaging', value: '5M+', text: 'users across APAC, EMEA and North America' },
  { key: 'citi_loyalty_migration', value: 'zero downtime', text: 'millions of active accounts', valueKind: 'ok' as const },
];

export type AdrItem = { name: string; desc?: string };

export type Adr = {
  num: string;
  short: string;
  title: string;
  org: string;
  role: string;
  period: string;
  status: 'accepted' | 'superseded';
  body: string;
  consequence?: string;
  stats?: { value: string; label: string }[];
  listLabel?: string;
  items?: AdrItem[];
  link?: { href: string; label: string };
  tags: string[];
  chain: string;
  commit: { tag: string; subject: string };
};

// Newest first. Each record supersedes the one below it.
export const adrs: Adr[] = [
  {
    num: '0005',
    short: 'CBA',
    title: 'Own card-not-present payment acceptance and start agentic commerce at CBA',
    org: 'Commonwealth Bank of Australia',
    role: 'Principal Engineer, eCommerce Crew (Payment Acceptance)',
    period: '2026-08 → now',
    status: 'accepted',
    body: 'Principal Engineer on the eCommerce Crew within Payment Acceptance, Everyday Business Banking. The crew owns all card-not-present payment flows for merchants: online and IVR payment acceptance, integrated with multiple payment gateways and wallets, with fraud and 3DS checks.',
    listLabel: 'WHAT THE CREW OWNS',
    items: [
      { name: 'Online and IVR acceptance', desc: ': every card-not-present payment flow for CBA merchants.' },
      {
        name: 'Platform consolidation',
        desc: ': supporting and evolving an acquired payments platform for existing customers while migrating CBA merchants onto the new unified eCommerce payments platform.',
      },
      { name: 'Gateway and wallet integrations', desc: ': multiple payment gateways, wallets and buy-now-pay-later providers.' },
      { name: 'Fraud and authentication', desc: ': fraud screening and 3DS checks across payment flows.' },
      { name: 'Agentic ecommerce', desc: ': starting and leading the agentic commerce capability for CBA.' },
    ],
    link: {
      href: 'https://www.commbank.com.au/business/payments/take-online-payments/connected-payments.html',
      label: 'Related: CommBank Connected Payments (coming soon)',
    },
    tags: ['Payments', 'Agentic AI', '3DS', 'Fraud', 'Architecture', 'Leadership'],
    chain: 'Supersedes ADR-0004 · current',
    commit: { tag: 'v5.0.0', subject: 'feat(cba): lead card-not-present payments and agentic commerce' },
  },
  {
    num: '0004',
    short: 'NAB',
    title: 'Decompose legacy loyalty into event-driven, cloud-native services',
    org: 'National Australia Bank',
    role: 'Principal Engineer, Loyalty',
    period: '2022-11 → 2026-07',
    status: 'superseded',
    body: 'Defined the technical strategy and architecture roadmap for NAB Loyalty. Led the decomposition of legacy loyalty capabilities into event-driven services on Kafka and AWS, with domain boundaries, API contracts and event schemas across banking systems. Partnered with product, risk and compliance, and mentored senior and junior engineers.',
    consequence:
      'A platform supporting 3M+ cardholders and millions of loyalty events and transactions a year. Improved scalability, resilience and independent team delivery.',
    stats: [
      { value: '3M+', label: 'cardholders' },
      { value: 'Millions', label: 'loyalty events and transactions a year' },
      { value: 'Zero', label: 'downtime on the card migration' },
    ],
    listLabel: 'KEY INITIATIVES',
    items: [
      {
        name: 'Citi credit card loyalty migration to NAB',
        desc: ': led architecture and execution of a high-concurrency, large-scale migration for millions of active accounts with zero downtime, safeguarding enterprise revenue and regulatory compliance.',
      },
      { name: 'Personal Cards loyalty offers platform', desc: ': an event-driven offers platform built for high throughput and extensibility.' },
      { name: 'Buy Now Pay Later', desc: ': contributed to a high-availability transactional platform supporting rapid growth.' },
      { name: 'Credit card instalments', desc: ': core payments capability aligned with regulatory and risk controls.' },
    ],
    tags: ['AWS', 'Java (Spring Boot)', 'React', 'PostgreSQL', 'Kafka', 'Terraform'],
    chain: 'Supersedes ADR-0003 · superseded by ADR-0005',
    commit: { tag: 'v4.0.0', subject: 'feat(nab): decompose Loyalty into event-driven services' },
  },
  {
    num: '0003',
    short: 'Zendesk',
    title: 'Architect globally distributed messaging for 5M+ users',
    org: 'Zendesk',
    role: 'Senior Staff Engineer',
    period: '2019-09 → 2022-11',
    status: 'superseded',
    body: 'Architected scalable event-streaming and message-processing platforms for real-time customer engagement across channels. Led decisions on service decomposition, fault tolerance and reliability, championed reliability and performance-testing frameworks for tier-0 infrastructure, and served as senior technical escalation point for complex incidents.',
    consequence: 'Messaging platforms serving 5M+ users across APAC, EMEA and North America, with high availability and low latency.',
    stats: [
      { value: '5M+', label: 'users' },
      { value: '3', label: 'regions: APAC, EMEA and North America' },
    ],
    listLabel: 'KEY PLATFORMS',
    items: [
      { name: 'Business Messaging', desc: ': real-time, scalable messaging infrastructure.' },
      { name: 'Public Social Messaging', desc: ': large-scale social channel ingestion and processing.' },
      { name: 'Sandbox Platform', desc: ': multi-language experimentation platform enabling rapid innovation.' },
    ],
    tags: ['TypeScript', 'Java', 'Kafka', 'AWS', 'MySQL', 'Redis', 'Golang', 'Python'],
    chain: 'Supersedes ADR-0002 · superseded by ADR-0004',
    commit: { tag: 'v3.0.0', subject: 'feat(zendesk): architect global messaging platforms' },
  },
  {
    num: '0002',
    short: 'NAB',
    title: 'Lead teams delivering customer-facing digital platforms',
    org: 'National Australia Bank',
    role: 'Senior Consultant Software Engineer / Team Lead',
    period: '2018-09 → 2019-09',
    status: 'superseded',
    body: 'Led teams delivering customer-facing digital platforms, established engineering standards and best practices, and provided hands-on leadership, production support and stakeholder alignment.',
    listLabel: 'KEY PROJECTS',
    items: [{ name: 'Customer on a Page' }, { name: 'Debt Servicing Platform' }, { name: 'Home Loan Pricing Engine' }],
    tags: ['AWS (Lambda, ECS, EC2)', 'Java', 'Node.js', 'React', 'Terraform', 'PostgreSQL', 'Oracle'],
    chain: 'Supersedes ADR-0001 · superseded by ADR-0003',
    commit: { tag: 'v2.0.0', subject: 'feat(nab): lead customer-facing delivery teams' },
  },
  {
    num: '0001',
    short: 'Versent',
    title: 'Build cloud-native microservices platforms for clients',
    org: 'Versent',
    role: 'Senior Microservices Engineer',
    period: '2017-03 → 2018-09',
    status: 'superseded',
    body: 'Designed and built cloud-native microservices platforms for clients, and advised them on event choreography versus orchestration patterns.',
    listLabel: 'CLIENTS',
    items: [{ name: 'Transurban' }, { name: 'Vocus' }],
    tags: ['Microservices', 'Cloud-native', 'Consulting'],
    chain: 'Supersedes ADR-0000 · superseded by ADR-0002',
    commit: { tag: 'v1.0.0', subject: 'feat(versent): build cloud-native microservices platforms' },
  },
  {
    num: '0000',
    short: 'Early career',
    title: 'Build full-stack, API and mobile platforms, and lead delivery',
    org: 'Tundra Interactive · Ladoo · IP Health and earlier',
    role: 'Senior Software Engineer / Technical Lead',
    period: '2011 → 2017',
    status: 'superseded',
    body: 'Full-stack development, architecture design, API platforms, and mobile and web solutions across consultancies, startups and enterprise projects. Designed a service-oriented, API-first system from scratch, and led teams, sprint planning and engineering delivery.',
    tags: ['Full-stack', 'API platforms', 'Mobile', 'Web'],
    chain: 'First record · superseded by ADR-0001',
    commit: { tag: 'v0.1.0', subject: 'feat(early): ship full-stack and API platforms' },
  },
];

export const labsIntro =
  "is my independent engineering studio, building AI-native, privacy-first products and systems: AI-native applications, distributed systems, developer tooling and workflow automation. I'm the founder and principal engineer. Most products are private and releasing soon, and the newest are about to enter beta.";

export type Lab = { path: string; name: string; tagline: string; desc: string; stage: 'private' | 'beta' };

export const labs: Lab[] = [
  {
    path: 'labs/growli',
    name: 'Growli',
    tagline: 'Parenting intelligence platform',
    desc: 'AI-assisted parenting and early-childhood insights platform focused on structured data collection and intelligent pattern detection.',
    stage: 'private',
  },
  {
    path: 'labs/draftlog',
    name: 'DraftLog',
    tagline: 'AI-powered execution workspace for teams',
    desc: 'AI-enabled product and engineering workspace designed to accelerate ideation, planning and execution workflows.',
    stage: 'private',
  },
  {
    path: 'labs/reinvent-property',
    name: 'Reinvent Property',
    tagline: 'Property transaction modernisation',
    desc: 'Exploring secure multi-party workflows, verification systems and trusted digital interactions for property transactions in Australia.',
    stage: 'private',
  },
  {
    path: 'labs/kelpie',
    name: 'Kelpie',
    tagline: 'Email for iOS, macOS and Android',
    desc: 'A cross-platform email client starting with Gmail, with rich markdown and diagrams, inline drawing, an alias picker and draft sync.',
    stage: 'beta',
  },
  {
    path: 'labs/pithly',
    name: 'Pithly',
    tagline: 'A private to-do app that runs on your phone',
    desc: 'Type, talk or photograph a messy note and Pithly turns it into ranked next actions, using AI that runs on the device. No account, no servers.',
    stage: 'beta',
  },
  {
    path: 'labs/kinflo',
    name: 'Kinflo',
    tagline: 'Family, in flow.',
    desc: 'A family organiser for shared calendars, chores, lists, meal planning, chat and location, with an assistant that runs on the phone where possible.',
    stage: 'beta',
  },
];

export const capabilities = [
  { title: 'AI platforms and intelligent systems', text: 'RAG, AI agents, LLM integration, workflow automation, intelligent developer tooling.' },
  { title: 'Technical leadership and strategy', text: 'Domain ownership, roadmap definition, architecture governance.' },
  { title: 'Distributed systems', text: 'Event-driven systems, microservices, asynchronous messaging.' },
  { title: 'Platform engineering', text: 'Cloud-native platforms, AWS, infrastructure as code, Kubernetes, reliability and scalability.' },
  { title: 'Engineering excellence', text: 'Dev standards, CI/CD, observability, quality and resilience.' },
  { title: 'Stakeholder influence', text: 'Executive, product, architecture and cross-organisation alignment.' },
];

export const stack: Record<string, string[]> = {
  languages: ['Java', 'Golang', 'Python', 'TypeScript', 'JavaScript'],
  frameworks: ['Spring Boot', 'Vert.x', 'Quarkus', 'React', 'React Native', 'Node.js', 'Next.js', 'Flask'],
  data_messaging: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Elasticsearch', 'Kafka', 'Redis', 'SQS', 'SNS', 'Kinesis', 'RabbitMQ'],
  cloud_devops: ['AWS (EC2, ECS, EKS, Lambda, S3)', 'Terraform', 'CloudFormation', 'Docker', 'Kubernetes'],
  architecture: ['Microservices', 'Event-driven architecture', 'REST', 'GraphQL'],
  delivery: ['CI/CD (Jenkins)', 'Agile', 'Scrum', 'Kanban'],
  ai: ['RAG architectures', 'AI agent design', 'MCP integrations', 'LLM-assisted SDLC'],
};

export const credentials = {
  education: [
    { degree: 'Master of Computer Science (Web Computing)', school: 'RMIT University, Melbourne', years: '2011–2013' },
    { degree: 'Bachelor of Engineering, Computer Science', school: 'Pune Institute of Computer Technology', years: '2005–2009' },
  ],
  certification: 'AI Agent Fundamentals (Academy Accreditation)',
  training: ['AI/ML', 'Apache Kafka', 'Elasticsearch', 'AWS', 'TDD/BDD'],
  languages: ['English', 'Hindi', 'Punjabi'],
};
