'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  indicator?: string;
  className?: string;
  isInView?: boolean;
  children?: ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  indicator,
  className = '',
  isInView = true,
  children,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`text-left ${className}`}
    >
      {indicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-hsl(var(--accent))"></div>
          <span className="font-mono text-xs text-hsl(var(--accent)) tracking-wider">
            {indicator}
          </span>
          <div className="w-2 h-2 rounded-full bg-hsl(var(--accent))"></div>
        </motion.div>
      )}

      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
        style={{ color: 'hsl(var(--foreground))' }}
      >
        {title}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl px-4"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl px-4"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {description}
        </motion.p>
      )}

      {children}
    </motion.div>
  );
};
