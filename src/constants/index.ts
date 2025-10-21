// Portfolio Constants

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Cpu,
  Globe,
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'home', href: '#home' },
  { name: 'expertise', href: '#expertise' },
  { name: 'work', href: '#work' },
  { name: 'experience', href: '#experience' },
  { name: 'contact', href: '#contact' },
] as const;

export const EXPERTISE_DATA = [
  {
    title: 'Software Development',
    highlight: 'Development',
    description:
      'Experienced in both functional and OOP: JavaScript, TypeScript, Python, Java.',
    icon: Code,
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Frontend Dev',
    highlight: 'React, NextJS',
    description:
      'Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.',
    icon: Code,
    technologies: [
      'React',
      'NextJS',
      'Tailwind',
      'Framer Motion',
      'TypeScript',
    ],
  },
  {
    title: 'Backend Dev',
    highlight: 'Node.js, MongoDB',
    description:
      'Skilled in developing scalable backend solutions and APIs using Node.js, Express, and MongoDB.',
    icon: Database,
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'],
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
    href: 'mailto:khadeejaasif323@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/khadeejah-asif/',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Github,
    href: 'https://github.com/Khadeejahh-Asiff',
    color: 'hsl(var(--accent))',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/Khadeejahh-Asiff',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/khadeejah-asif',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Mail,
    href: 'mailto:khadeejaasif323@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Instagram,
    href: '#',
    color: 'hsl(var(--primary))',
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
