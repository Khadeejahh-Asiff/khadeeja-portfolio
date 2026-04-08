'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-20 bg-background relative overflow-hidden">
      {/* Small blue dot indicator */}
      <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full border border-white opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-48 items-center min-h-[65vh]"
        >
          {/* Left side - My Work content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Large My Work heading */}
            <div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                <div>My</div>
                <div>Work</div>
              </h2>
            </div>

            {/* Description text */}
            <div
              className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg leading-relaxed max-w-lg text-justify"
              style={{
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              <p>
                Full Stack Developer focused on building scalable web
                applications, secure APIs, and maintainable systems using
                ASP.NET Core, C#, React, Next.js, and SQL Server.
              </p>
              <p>
                Delivered business-focused platforms across HR, CRM, and
                enterprise workflows with clean architecture, performance-driven
                development, and reliable Agile execution.
              </p>
            </div>
          </motion.div>

          {/* Right side - Featured Project */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Purple curved arrow - hidden on mobile */}
            <div className="hidden lg:block absolute -left-16 top-1/2 transform -translate-y-1/2 z-20">
              <svg
                width="80"
                height="80"
                viewBox="0 0 120 80"
                className="text-purple-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 40 Q60 10 110 40"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M100 35 L110 40 L100 45"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative">
              {/* Desktop Screen Content */}
              <motion.div
                className="relative z-10"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0],
                  scale: [1, 1.05, 1, 0.95, 1],
                }}
                transition={{
                  rotateY: {
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  rotateX: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  y: {
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <motion.div
                  className="w-[300px] h-[200px] sm:w-[500px] sm:h-[350px] lg:w-[700px] lg:h-[500px] shadow-2xl"
                  animate={{
                    boxShadow: [
                      '0 30px 60px rgba(0,0,0,0.4)',
                      '0 50px 100px rgba(0,0,0,0.6)',
                      '0 30px 60px rgba(0,0,0,0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Desktop Screen Content - Using p1.png image */}
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src="/p1.png"
                      alt="Project Screenshot"
                      fill
                      className="object-cover"
                    />
                    {/* Edgy overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Projects Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid sm:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-20 items-stretch"
        >
          {/* Hiredroid Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p3.png"
                    alt="Hiredroid Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              {/* Header Section */}
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Hiredroid
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Job Portal, HR Management
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Dynamic job portal for HR professionals, job seekers, and
                company owners. Built intuitive front-end interfaces with
                Next.js, enabling HR teams to post jobs, manage interviews, and
                streamline workflows. Implemented UTC-based date and time
                handling for global consistency.
              </p>

              {/* Tech Stack Section */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Next.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    React
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    TypeScript
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    UTC Handling
                  </span>
                </div>
              </div>

              <a
                href="https://hiredroid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-teal-500/10 text-teal-400 rounded border border-teal-500/50 hover:bg-teal-500/20 hover:border-teal-500 transition-all duration-300 text-sm mt-auto"
              >
                View Project →
              </a>
            </div>
          </motion.div>

          {/* SD Trade Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p2.png"
                    alt="SD Trade Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              {/* Header Section */}
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    ScrumDroid
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Attendance Management, UI/UX
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Comprehensive organizational management platform for attendance.
                Designed and optimized UIs with React.js and SWR, ensuring
                seamless data handling and responsiveness. Resolved critical
                rendering issues and implemented performance optimization
                practices including caching, Web Workers.
              </p>

              {/* Tech Stack Section */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    React.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    SWR
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Web Workers
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Caching
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Performance
                  </span>
                </div>
              </div>

              <a
                href="https://scrumdroid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-teal-500/10 text-teal-400 rounded border border-teal-500/50 hover:bg-teal-500/20 hover:border-teal-500 transition-all duration-300 text-sm mt-auto"
              >
                View Project →
              </a>
            </div>
          </motion.div>

          {/* HRango Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p4.jpeg"
                    alt="HRango Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    HRango
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    HRMS, Employee Tracking, Live Activity Feed
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Enterprise-grade HRM platform built to manage the complete
                employee lifecycle, from recruitment and onboarding to
                monitoring and performance tracking. Developed with .NET 6,
                ASP.NET Core MVC, and Razor Pages, with SignalR-powered
                real-time activity feeds for instant system-wide updates.
                Includes an employee tracking module with screenshot and process
                monitoring via a dedicated WPF background application.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    .NET 6
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    ASP.NET Core MVC
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Razor Pages
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    SignalR
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    WPF
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Process Monitoring
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BankMind.ai Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p5.jpeg"
                    alt="BankMind.ai Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    BankMind.ai
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Loan Processing, Real-Time Workflow Automation
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                US-based loan application platform built to streamline the
                complete loan lifecycle through a high-performance Blazor
                frontend and .NET 8 backend. Implemented scalable ASP.NET Core
                APIs with clean architecture, RabbitMQ-driven asynchronous
                processing, background jobs for long-running workflows, and
                SignalR-powered real-time communication for live user support
                and status updates.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Blazor
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    .NET 8
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    ASP.NET Core APIs
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    RabbitMQ
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Background Jobs
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    SignalR
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Salon Reservation System Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p6.jpeg"
                    alt="Salon Reservation System Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    Salon Reservation System
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Appointment Booking, Schedule & Customer Management
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Modern salon booking platform built with React and .NET 6 to
                simplify appointment scheduling and customer management.
                Implemented responsive service browsing and reservation flows
                for customers, along with admin controls for schedules, staff
                availability, and customer records. Powered by scalable ASP.NET
                Core Web APIs with clean architecture and secure data handling
                for reliable real-world booking operations.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    React
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    .NET 6
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    ASP.NET Core Web API
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    RESTful APIs
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Clean Architecture
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 10Marla Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p7.jpeg"
                    alt="10Marla Property Management Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-teal-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    10Marla
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Property Management, Listing Workflow Automation
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Full-stack property management platform developed with .NET
                Core, Razor Views, and MySQL to support complete listing
                workflows from creation and management to browsing. Implemented
                JWT-based authentication with user tracking for secure,
                personalized experiences, and built dedicated admin and user
                dashboards to streamline listing operations and daily management
                tasks.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    .NET Core
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Razor Views
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    MySQL
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    JWT Authentication
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    User Tracking
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SorrowPlace Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p8.png"
                    alt="SorrowPlace Social Platform Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    SorrowPlace
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Social Networking, Moments & Support Communities
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Full-stack social networking platform built with .NET Core,
                React, and PostgreSQL to support end-to-end community workflows
                around emotional moments and post sharing. Implemented JWT-based
                authentication with secure user tracking for privacy and
                personalized engagement, plus intuitive user dashboards for
                profile management, content control, and interaction across
                specialized support groups.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    .NET Core
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    React
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    PostgreSQL
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    JWT Authentication
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    User Tracking
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AkredCenter + Tickato (Project Phases) Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="relative h-full flex flex-col"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -10, 0, 10, 0],
                scale: [1, 1.02, 1, 0.98, 1],
              }}
              transition={{
                y: {
                  duration: 60,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: 100,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            >
              <motion.div
                className="w-full h-[200px] sm:h-[300px] shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 15px 30px rgba(0,0,0,0.3)',
                    '0 25px 50px rgba(0,0,0,0.4)',
                    '0 15px 30px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/p9.png"
                    alt="AkredCenter and Tickato Platform Screenshot"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-500"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-900 rounded-lg border border-teal-500/50 shadow-lg shadow-teal-500/10 h-full flex flex-col">
              <div className="flex items-start mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg border border-teal-500/50 flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white text-base sm:text-lg font-bold">
                    &lt;/&gt;
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    AkredCenter + Tickato
                  </h3>
                  <p className="text-teal-400 text-xs sm:text-sm font-mono">
                    Accreditation + Ticketing (Two Product Phases)
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                Multi-phase full-stack platform delivered in two focused product
                modules: AkredCenter for secure accreditation workflow
                management (submission, approval, and status tracking), and
                Tickato for scalable ticketing operations and streamlined user
                interactions. Built with Next.js and Node.js to provide a fast,
                intuitive dashboard experience with reliable backend workflows.
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Next.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Node.js
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Dashboard Workflows
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Status Tracking
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-800 text-white text-xs rounded border border-teal-500/50">
                    Scalable Architecture
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
