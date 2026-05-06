// components/sections/HowWeWorkSection.tsx

import Image from "next/image";
import Container from "components/shared/Container";

const workImage = "/images/home/how-we-work/how-we-work.png";

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
          <h2
            id="how-we-work-heading"
            className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            How We <span className="text-primary">Work</span>
          </h2>
        </div>

        {/* Main Card */}
        <div className="mt-12 overflow-hidden rounded-[28px] bg-[#151515] lg:mt-16">
          <div className="grid lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative min-h-[360px] overflow-hidden bg-[#071a2c] lg:min-h-[560px]">
              <Image
                src={workImage}
                alt="How DXG works"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/30" />
            </div>

            {/* Right Panel */}
            <div className="bg-[#181818] p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                DXG Successful Process™ Methodology
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                We Bring Structure, Clarity, and{" "}
                <span className="text-primary">
                  Consistency to Every Event.
                </span>
              </h3>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {methodology.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/75">
                      {item.desc}
                    </p>
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
