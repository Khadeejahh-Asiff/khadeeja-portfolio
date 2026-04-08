'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToExpertise = () => {
    const element = document.querySelector('#expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)
        `,
      }}
    >
      {/* Background Elements */}
      <div className="hero-background-pattern"></div>
      <div className="hero-tech-grid"></div>
      <div className="hero-diagonal-line"></div>
      <div className="hero-glow-orb"></div>
      <div className="hero-glow-orb-2"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-24 left-8 sm:left-16 w-8 h-8 sm:w-10 sm:h-10 rounded-full z-10"
        style={{ backgroundColor: 'hsl(var(--accent))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/3 right-8 sm:right-16 w-4 h-4 sm:w-6 sm:h-6 rounded-full z-10"
        style={{ backgroundColor: 'hsl(var(--primary))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-24 right-10 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full z-10"
        style={{ backgroundColor: 'hsl(var(--teal-light))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-1/4 left-4 sm:left-10 w-5 h-5 sm:w-7 sm:h-7 rounded-full z-10"
        style={{ backgroundColor: 'hsl(var(--gold-accent))' }}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 grid lg:grid-cols-2 items-center gap-10 lg:gap-20 relative z-20">
        {/* Left: Name/Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="w-full text-center lg:text-left lg:justify-self-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-title leading-[0.9]"
          >
            MARYAM
            <br />
            ALI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-2 mt-5"
          >
            <p className="hero-subtitle">SOFTWARE ENGINEER</p>
            <p
              className="hero-subtitle"
              style={{ color: 'hsl(var(--accent))' }}
            >
              FULL STACK DEVELOPER
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Profile/Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="w-full max-w-2xl text-center lg:text-right lg:justify-self-end rounded-2xl border border-white/10 bg-black/15 backdrop-blur-sm p-5 sm:p-7"
        >
          {/* Code-style prefix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end gap-3 mb-6"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'hsl(var(--accent))' }}
            ></div>
            <span
              className="font-mono text-sm tracking-wider"
              style={{ color: 'hsl(var(--accent))' }}
            >
              &gt; Maryam_Ali.portfolio
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl mx-auto lg:ml-auto lg:mr-0"
            style={{
              color: 'hsl(var(--muted-foreground))',
              textAlign: 'justify',
              textJustify: 'inter-word',
            }}
          >
            I&apos;m a Full Stack Developer focused on building scalable web
            applications, secure APIs, and enterprise-ready solutions using
            ASP.NET Core, C#, React, Next.js, SQL Server, and modern service
            architectures. I prioritize clean architecture, maintainable code,
            and performance-driven development to deliver seamless user
            experiences. My work includes CRM and business workflow systems,
            healthcare-oriented processes, and responsive frontend applications.
            I collaborate effectively in Agile/Scrum teams and continuously
            explore AI to expand my technical expertise.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-cta mx-auto lg:ml-auto lg:mr-0 mt-7 sm:mt-8"
            onClick={scrollToExpertise}
          >
            <span className="text-sm sm:text-base">VIEW PORTFOLIO</span>
            <svg
              className="hero-cta-arrow w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-8"
      >
        <div
          className="flex flex-col items-center gap-1 sm:gap-2"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-6 sm:h-8"
            style={{ backgroundColor: 'hsl(var(--accent))' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
