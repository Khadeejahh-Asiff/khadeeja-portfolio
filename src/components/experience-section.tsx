'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code,
  Cpu,
  Database,
  Globe,
  Zap,
  GitBranch,
  Terminal,
} from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState(0);

  const experiences = [
    {
      title: 'Associate Software Developer (Frontend)',
      company: 'Tekvaly, Phenologix',
      location: 'Canada',
      period: '04/2024 - Present',
      workType: 'Hybrid',
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
      type: 'Frontend',
      contact: 'Hamza Ahmed (Technical Lead) - 0322 4874405',
    },
    {
      title: 'Junior MERN Stack Developer',
      company: 'WebSouls',
      location: 'Lahore, Pakistan',
      period: '05/2023 - 12/2023',
      workType: 'On-site',
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
      type: 'Full-Stack',
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)
        `,
      }}
    >
      {/* Advanced Background Elements */}
      <div className="hero-background-pattern"></div>
      <div className="hero-tech-grid"></div>
      <div className="hero-diagonal-line"></div>
      <div className="hero-glow-orb"></div>
      <div className="hero-glow-orb-2"></div>

      {/* Enhanced Tech Background Elements */}
      <div className="circuit-pattern-overlay"></div>
      <div className="data-flow-lines"></div>
      <div className="tech-matrix-overlay"></div>
      <div className="binary-code-rain"></div>
      <div className="tech-radar-sweep"></div>
      <div className="neural-network-pattern"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl"
        >
          {/* Enhanced Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-hsl(var(--accent))"></div>
              <span
                className="text-sm font-mono tracking-wider uppercase"
                style={{ color: 'hsl(var(--accent))' }}
              >
                Experience
              </span>
              <div className="w-2 h-2 rounded-full bg-hsl(var(--accent))"></div>
            </motion.div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              My Experience
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg max-w-2xl mx-auto px-4"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Professional journey through innovative companies and cutting-edge
              projects
            </motion.p>
          </motion.div>

          {/* Enhanced Experience Timeline */}
          {/* Experience Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="expertise-card group relative p-6 sm:p-8 lg:p-12"
                whileHover={{ y: -2 }}
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-hsl(var(--accent)) opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="expertise-icon relative">
                    <Code
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      style={{ color: 'hsl(var(--accent))' }}
                    />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-semibold"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      {experience.title.split(' ')[0]}
                      {experience.title
                        .split(' ')
                        .slice(1)
                        .map((word, i) => (
                          <span key={i}>
                            {' '}
                            <span style={{ color: 'hsl(var(--accent))' }}>
                              {word}
                            </span>
                          </span>
                        ))}
                    </h3>
                    <p
                      className="text-sm sm:text-base font-medium font-mono"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      {experience.company}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-mono text-hsl(var(--accent)) mb-3 sm:mb-4 opacity-80">
                    TECH STACK
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono rounded"
                        style={{
                          backgroundColor: 'hsl(var(--accent) / 0.1)',
                          color: 'hsl(var(--accent))',
                          border: '1px solid hsl(var(--accent) / 0.2)',
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Period and Work Type */}
                <div className="text-left mt-4 sm:mt-6">
                  <p
                    className="text-xs sm:text-sm font-mono"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {experience.period} • {experience.workType}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
