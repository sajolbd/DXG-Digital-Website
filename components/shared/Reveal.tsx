"use client";

import { ReactNode } from "react";
import MotionReveal, {
  type MotionRevealAs,
  type MotionRevealVariant,
} from "components/shared/MotionReveal";

type RevealKind = "text" | "list" | "image";

type RevealProps = {
  children: ReactNode;
  as?: MotionRevealAs;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  kind?: RevealKind;
  variant?: MotionRevealVariant;
};

const revealDefaults: Record<
  RevealKind,
  {
    as: MotionRevealAs;
    duration: number;
    amount: number;
    variant: MotionRevealVariant;
  }
> = {
  text: {
    as: "div",
    duration: 0.75,
    amount: 0.28,
    variant: "fadeUp",
  },
  list: {
    as: "ul",
    duration: 0.85,
    amount: 0.24,
    variant: "fadeUp",
  },
  image: {
    as: "div",
    duration: 1,
    amount: 0.2,
    variant: "fadeLeft",
  },
};

export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  duration,
  once = true,
  amount,
  kind = "text",
  variant,
}: RevealProps) {
  const defaults = revealDefaults[kind];

  return (
    <MotionReveal
      as={as ?? defaults.as}
      className={className}
      delay={delay}
      duration={duration ?? defaults.duration}
      once={once}
      amount={amount ?? defaults.amount}
      variant={variant ?? defaults.variant}
    >
      {children}
    </MotionReveal>
  );
}
