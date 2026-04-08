// Portfolio Constants

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Cpu,
  Globe,
  Zap,
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'home', href: '#home' },
  { name: 'expertise', href: '#expertise' },
  { name: 'work', href: '#work' },
  { name: 'contact', href: '#contact' },
] as const;

export const EXPERTISE_DATA = [
  {
    title: 'Backend Development',
    highlight: 'ASP.NET Core, C#, .NET',
    description:
      'Building secure and scalable APIs and enterprise systems with modern .NET stack and proven backend patterns.',
    icon: Database,
    technologies: [
      'ASP.NET Core',
      'ASP.NET MVC',
      'C#',
      '.NET 6-9',
      'Web API',
      'REST APIs',
      'Entity Framework Core',
      'LINQ',
      'Razor Pages',
    ],
  },
  {
    title: 'Frontend Development',
    highlight: 'React Ecosystem, Modern UI',
    description:
      'Creating responsive, component-driven interfaces with strong focus on performance, clean UX, and production-ready frontend architecture.',
    icon: Code,
    technologies: [
      'React.js',
      'Next.js',
      'Remix.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'jQuery',
      'AJAX',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'ShadCN UI',
      'Material UI',
      'React Bootstrap',
      'Redux Toolkit',
      'React Query (TanStack Query)',
      'SWR',
      'Responsive Design',
      'Razor UI',
    ],
  },
  {
    title: 'Architecture, Security & Messaging',
    highlight: 'Clean Architecture, Auth, Event-Driven',
    description:
      'Designing maintainable systems with clean architecture, secure authentication flows, and reliable background/event processing.',
    icon: Cpu,
    technologies: [
      'Clean Architecture',
      'Microservices',
      'Repository Pattern',
      'MVC',
      'Layered Architecture',
      'Multi-Tenant Systems',
      'JWT Authentication',
      'OAuth',
      'ASP.NET Identity',
      'RBAC',
      'Keycloak',
      'RabbitMQ',
      'MassTransit',
      'Hangfire',
      'Background Worker Services',
      'Event-Driven Architecture',
    ],
  },
  {
    title: 'Databases & Platforms',
    highlight: 'SQL, NoSQL, Dev Tooling',
    description:
      'Working across relational and NoSQL databases with practical DevOps-friendly workflows and deployment tooling.',
    icon: Globe,
    technologies: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Firebase Realtime Database',
      'Docker',
      'Git',
      'GitHub',
      'GitLab',
      'Azure DevOps',
      'Postman',
      'Swagger',
      'Insomnia',
      'Visual Studio',
      'VS Code',
      'Vercel',
      'Netlify',
    ],
  },
  {
    title: 'Full-Stack Delivery',
    highlight: 'MERN + Integrations + Optimization',
    description:
      'Delivering end-to-end product features by combining MERN development, API integration, and performance-focused engineering.',
    icon: Code,
    technologies: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Integration',
      'CRM Integrations',
      'Performance Optimization',
      'Database Design',
      'Query Optimization',
      'Debugging',
      'Agile/Scrum',
      'Figma',
      'AI Basics',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Performance Optimization',
    highlight: 'Frontend + Backend Performance',
    description:
      'Frontend: improving perceived speed and runtime efficiency with React/Next.js best practices—bundle splitting, lazy loading, memoization, image optimization, and efficient data-fetch caching (React Query, SWR). Backend: faster APIs and data paths via query tuning, indexing, lean payloads, and async/background processing so the UI stays responsive under load.',
    icon: Zap,
    technologies: [
      'Core Web Vitals',
      'React / Next.js Performance',
      'Lazy Loading',
      'Code Splitting',
      'Memoization',
      'Image Optimization',
      'Web Workers',
      'React Query (TanStack Query)',
      'SWR Caching',
      'Bundle Optimization',
      'Query Optimization',
      'Indexing',
      'API Response Optimization',
      'Background Jobs',
      'RabbitMQ',
      'Performance Profiling',
      'Load Testing',
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: 'Associate Software Developer (Frontend)',
    company: 'Tekvaly, Phenologix',
    location: 'Canada',
    period: '04/2024 - Present',
    workType: 'Hybrid' as const,
    description:
      'Designed and optimized responsive UIs using React.js, Next.js, and SWR, ensuring seamless performance and data handling. Built and maintained management and job portal platforms with features like authentication, attendance tracking, and workflow automation.',
    technologies: [
      { name: 'React.js', level: 95, icon: Code },
      { name: 'Next.js', level: 90, icon: Globe },
      { name: 'SWR', level: 85, icon: Database },
      { name: 'TypeScript', level: 90, icon: Code },
      { name: 'Web Workers', level: 80, icon: Cpu },
    ],
    website: 'https://tekvaly.com',
    logo: 'TEK',
    expanded: true,
    achievements: [
      'Resolved critical rendering issues and revamped UIs',
      'Implemented performance optimizations (caching, Web Workers, refetching, validations)',
      'Developed role-based features for HR teams, job seekers, and company owners',
      'Ensured smooth and consistent global user experience',
    ],
    type: 'Frontend' as const,
    contact: 'Hamza Ahmed (Technical Lead) - 0322 4874405',
  },
  {
    title: 'Junior MERN Stack Developer',
    company: 'WebSouls',
    location: 'Lahore, Pakistan',
    period: '05/2023 - 12/2023',
    workType: 'On-site' as const,
    description:
      'Developed full-stack web platforms Voyage Vista (property booking) and ShopEase (e-commerce) using the MERN stack. Built key features like search, filtering, booking, cart, and checkout flows, ensuring smooth user interaction and data flow. Worked on both the front-end and back-end of the projects. Collaborated with the team to deliver on time.',
    technologies: [
      { name: 'React.js', level: 90, icon: Code },
      { name: 'Node.js', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Database },
      { name: 'MongoDB', level: 80, icon: Database },
      { name: 'Tailwind CSS', level: 90, icon: Code },
    ],
    website: 'https://websouls.com',
    logo: 'WS',
    expanded: false,
    achievements: [
      'Designed responsive and dynamic UIs with React.js and Tailwind CSS',
      'Integrated Node.js/Express and MongoDB for secure authentication',
      'Implemented user sessions and role-based access control',
      'Built seamless cross-device experiences',
    ],
    type: 'Full-Stack' as const,
  },
] as const;

export const CONTACT_METHODS = [
  {
    icon: Mail,
    href: 'mailto:marium.ali1623@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Github,
    href: 'https://github.com/merium6',
    color: 'hsl(var(--accent))',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/merium6',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Mail,
    href: 'mailto:marium.ali1623@gmail.com',
    color: 'hsl(var(--accent))',
  },
] as const;

export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  INITIAL: 0.2,
  HEADER: 0.4,
  CONTENT: 0.6,
  CARDS: 0.8,
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const CONTACT_INFO = {
  email: 'khadeejaasif323@gmail.com',
  phone: '+92 333 4304342',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com/in/khadeejah-asif',
  github: 'https://github.com/Khadeejahh-Asiff',
} as const;
