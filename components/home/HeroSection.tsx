"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";

const stats = [
  {
    number: 5000,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    number: 25,
    suffix: "+",
    label: "Years Experience",
  },
];

function CounterCard({
  number,
  suffix,
  label,
}: {
  number: number;
  suffix: string;
  label: string;
}) {
  return (
    <div className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/[0.08] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-[18px]">
      {/* soft glass gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0.03)_100%)]" />

      {/* top highlight */}
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)]" />

      {/* subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

      {/* content */}
      <div className="relative z-10">
        <div className="text-4xl font-bold text-primary lg:text-5xl">
          <CountUp end={number} duration={2.2} enableScrollSpy scrollSpyOnce />
          {suffix}
        </div>

        <p className="mt-3 text-base font-medium text-white">{label}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-section/hero-bg.png"
          alt="DXG Event Production"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center py-28">
        <Container>
          <div>
            <TypingTitle
              as="h1"
              className="max-w-none text-4xl font-black uppercase  text-white sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <span className="leading-relaxed">
                A Better Production Partner <br />
              </span>{" "}
              To Deliver <span className="text-primary">Your Vision</span>
            </TypingTitle>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left Content */}
              <div className="mx-auto grid w-full max-w-[360px] grid-cols-2 justify-center gap-4 sm:max-w-[480px] sm:gap-6 md:max-w-[560px]">
                {stats.map((item) => (
                  <CounterCard
                    key={item.label}
                    number={item.number}
                    suffix={item.suffix}
                    label={item.label}
                  />
                ))}
              </div>

              {/* Right Content */}
              <div className="max-w-xl lg:ml-auto">
                <p className="text-lg leading-9 text-white/90 sm:text-xl">
                  We help meeting planners execute multi-day conferences,
                  general sessions, and hybrid events without the limitations,
                  surprises, or stress that often come with traditional AV
                  providers.
                </p>

                <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
                  Whether you&apos;re navigating in-house AV restrictions,
                  managing complex production needs, or simply looking for a
                  more proactive partner, DXG brings clarity, control, and
                  confidence to your event.
                </p>

                <p className="mt-8 max-w-lg text-lg font-semibold italic leading-8 text-primary">
                  We don&apos;t just provide equipment. We help you execute your
                  event the way you actually want it to run.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
