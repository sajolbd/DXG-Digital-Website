"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export type MotionRevealVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "shortUp"
  | "scaleIn";

type MotionRevealProps = {
  children: ReactNode;
  as?: MotionRevealAs;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  variant?: MotionRevealVariant;
};

const variantMap: Record<MotionRevealVariant, Variants> = {
  fadeUp: {
    hidden: { x: 0, y: 100, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1 },
  },
  fadeDown: {
    hidden: { x: 0, y: -100, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1 },
  },
  fadeLeft: {
    hidden: { x: 100, y: 0, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1 },
  },
  fadeRight: {
    hidden: { x: -100, y: 0, opacity: 0 },
    show: { x: 0, y: 0, opacity: 1 },
  },
  shortUp: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  scaleIn: {
    hidden: { scale: 0.5, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  },
};

const motionComponents = {
  article: motion.article,
  div: motion.div,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  nav: motion.nav,
  ol: motion.ol,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
};

export type MotionRevealAs = keyof typeof motionComponents;

export default function MotionReveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  duration,
  once = false,
  amount = 0.25,
  variant = "fadeUp",
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motionComponents[as];
  const defaultDuration =
    variant === "scaleIn" ? 0.5 : variant === "shortUp" ? 0.65 : 1;
  const ease = variant === "scaleIn" || variant === "shortUp" ? "easeIn" : "easeOut";

  return (
    <Component
      className={`dxg-motion ${className}`}
      variants={variantMap[variant]}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once, amount }}
      transition={{
        type: "tween",
        delay,
        duration: shouldReduceMotion ? 0 : duration ?? defaultDuration,
        ease,
      }}
    >
      {children}
    </Component>
  );
}
