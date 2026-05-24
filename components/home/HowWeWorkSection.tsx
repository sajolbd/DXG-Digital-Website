// components/sections/HowWeWorkSection.tsx

import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import ProcessTimelineAnimation from "components/home/ProcessTimelineAnimation";
import Reveal from "components/shared/Reveal";

const methodology = [
  {
    title: "Strategy & Planning",
    desc: "We align on your goals, audience, and event requirements.",
  },
  {
    title: "Design & Budget Alignment",
    desc: "We build a plan that matches your vision and your budget.",
  },
  {
    title: "Pre-Production",
    desc: "We coordinate logistics, vendors, timelines, and technical details.",
  },
  {
    title: "On-Site Execution",
    desc: "Our team manages rehearsals, show flow, and live execution.",
  },
  {
    title: "Post-Event Support",
    desc: "We deliver content, recap insights, and support future planning.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section
      className="bg-black py-8 lg:py-16"
      aria-labelledby="how-we-work-heading"
    >
      <Container>
        {/* Heading */}
        <div className="text-left sm:text-center">
          <TypingTitle
            as="h2"
            id="how-we-work-heading"
            className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            How We <span className="text-primary">Work</span>
          </TypingTitle>
        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-[28px] bg-[#151515] lg:mt-16">
          <div className="grid overflow-hidden lg:grid-cols-2">
            {/* Left Animation */}
            <div className="overflow-visible">
              <ProcessTimelineAnimation />
            </div>

            {/* Right Panel */}
            <div className="bg-[#181818] p-6 sm:p-8 sm:ml-4 lg:ml-0 lg:p-12">
              <Reveal
                as="p"
                className="text-xs font-bold uppercase tracking-wide text-white/70"
              >
                DXG Successful Process™ Methodology
              </Reveal>

              <TypingTitle
                as="h3"
                className="mt-4 max-w-xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl"
              >
                We Bring Structure, Clarity, and{" "}
                <span className="text-primary">
                  Consistency to Every Event.
                </span>
              </TypingTitle>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {methodology.map((item) => (
                  <div key={item.title}>
                    <TypingTitle as="h4" className="text-xl font-bold text-white">
                      {item.title}
                    </TypingTitle>
                    <Reveal
                      as="p"
                      className="mt-3 text-sm leading-7 text-white/75"
                    >
                      {item.desc}
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
