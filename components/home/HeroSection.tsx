"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

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

const heroSlides = [
  {
    src: "/images/home/hero-section/hero-bg.png",
    alt: "DXG event production setup",
  },
  {
    src: "/images/home/challenges/challenges-bg.png",
    alt: "Conference production stage lighting",
  },
  {
    src: "/images/home/why-dxg/bg.png",
    alt: "Live event production background",
  },
  // {
  //   src: "/images/home/ace-founder/founder-bg.png",
  //   alt: "DXG production team collaboration",
  // },
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === activeSlide ? 1 : 0,
              scale: index === activeSlide ? 1.04 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,162,84,0.22),transparent_38%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center py-28">
        <Container>
          <div className="w-full max-w-full">
            <TypingTitle
              as="h1"
              className="max-w-[1120px] text-3xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <span>
                Your event is too important to hand off to
              </span>{" "}
              <span className="text-primary">the wrong AV partner.</span>
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
                <Reveal
                  as="p"
                  className="text-lg leading-9 text-white/90 sm:text-xl"
                >
                  We help meeting planners execute multi-day conferences,
                  general sessions, and hybrid events without the limitations,
                  surprises, or stress that often come with traditional AV
                  providers.
                </Reveal>

                <Reveal
                  as="p"
                  className="mt-6 text-base leading-8 text-white/75 sm:text-lg"
                  delay={0.08}
                >
                  Whether you&apos;re navigating in-house AV restrictions,
                  managing complex production needs, or simply looking for a
                  more proactive partner, DXG brings clarity, control, and
                  confidence to your event.
                </Reveal>

                <Reveal
                  as="p"
                  className="mt-8 max-w-lg text-lg font-semibold italic leading-8 text-primary"
                  delay={0.16}
                >
                  We don&apos;t just provide equipment. We help you execute your
                  event the way you actually want it to run.
                </Reveal>

                <div className="mt-10 flex items-center gap-3">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show background slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? "w-10 bg-primary"
                          : "w-2.5 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
