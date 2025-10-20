'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { SectionProps, AnimationVariants } from '@/types';

interface AnimatedSectionProps extends SectionProps {
  animationVariants?: AnimationVariants;
  delay?: number;
  children: ReactNode;
}

const defaultVariants: AnimationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const AnimatedSection = ({
  id,
  className = '',
  animationVariants = defaultVariants,
  delay = 0,
  children,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={animationVariants.initial}
      animate={isInView ? animationVariants.animate : animationVariants.initial}
      transition={{ ...animationVariants.transition, delay }}
    >
      {children}
    </motion.section>
  );
};
