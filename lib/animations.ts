// lib/animations.ts
import { Variants } from "framer-motion";

// Basic fade and slide animations
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.175, 0.885, 0.32, 1.275],
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

// Container animations for staggered children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Specialized animations
export const slideInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInFromTop: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Hero-specific animations
export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
    },
  },
};

export const heroButtons: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.6,
    },
  },
};

export const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.8,
    },
  },
};

// Card animations
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Button animations
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    transition: { duration: 0.2 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
};

// Page transition animations
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

// Utility function to create custom stagger container
export const createStaggerContainer = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0.1
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

// Utility function to create custom fade in up with delay
export const createFadeInUp = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
      delay,
    },
  },
});
