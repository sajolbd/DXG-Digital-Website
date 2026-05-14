"use client";

import Image from "next/image";
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
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-2xl">
      {/* Glass Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_100%)]" />

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-5xl font-black text-primary lg:text-6xl">
          <CountUp end={number} duration={2.4} enableScrollSpy scrollSpyOnce />
          {suffix}
        </div>

        <p className="mt-4 text-lg font-medium text-white">{label}</p>
      </div>
    </div>
  );
}

export default function BusinessNextLevelSection() {
  return (
    <section className="relative overflow-hidden bg-black py-8 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/difference/challenges-bg.png"
          alt="Business Event Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/40 to-black/80" /> */}

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            {/* Left */}
            <div className="lg:pt-28 xl:pt-60">
              <div className="grid max-w-[620px] gap-6 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <CounterCard
                    key={item.label}
                    number={item.number}
                    suffix={item.suffix}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="max-w-2xl lg:ml-auto">
              <TypingTitle
                as="h2"
                className="text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl"
              >
                Take Your Business <br />
                To The Next Level
              </TypingTitle>

              <div className="mt-8 space-y-6 text-sm leading-8 text-white/80 sm:text-base">
                <Reveal as="p">
                  We ensure an unparalleled fusion of experience, innovation,
                  and dedication. With core teams boasting an average of 20+
                  years in live events, virtual and hybrid corporate events,
                  broadcast, and entertainment, DXG brings a depth of knowledge
                  that is unmatched.
                </Reveal>

                <Reveal as="p" delay={0.08}>
                  DXG excels in Production Management, Audiovisual Technology,
                  Event Platform Services, Event Experience Design, Graphics &
                  Animation, and Video Production & Photography.
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
