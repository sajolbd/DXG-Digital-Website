// components/sections/SmarterApproachSection.tsx

import Image from "next/image";
import Container from "components/shared/Container";
import { CheckCircle2 } from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const points = [
  "Runs multi-day conferences where every detail works seamlessly — from general sessions to breakouts",
  "Knows the ins and outs of complex venues like hotels, convention centers and arena's",
  "Brings flexibility and proactive support — not just a crew that shows up and waits",
  "Leads your production from the front — as a true partner invested in every detail of your event's success",
];

export default function SmarterApproachSection() {
  return (
    <section className="bg-black py-8 lg:py-16">
      <Container>
        {/* Heading */}
        <div className="text-left sm:text-center">
          <TypingTitle
            as="h2"
            className="text-4xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-6xl"
          >
            A Smarter Approach To{" "}
            <span className="text-primary">Event AV Production</span>
          </TypingTitle>
        </div>

        {/* Main Card */}
        <div className="mt-12 overflow-hidden rounded-[28px] bg-[#191919] lg:mt-16">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <TypingTitle
                as="h3"
                className="max-w-xl text-2xl font-bold uppercase leading-snug text-white sm:text-3xl"
              >
                Designed For Planners Who Expect More From Event Production
              </TypingTitle>

              <Reveal
                as="p"
                className="mt-6 text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
              >
                DXG is built for planners who want more control, more support,
                and a better production experience — especially when the stakes
                are high. If that sounds like your world, DXG was built for you.
                We&apos;re the production partner who:
              </Reveal>

              <Reveal kind="list" className="mt-8 space-y-5">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-white/75 sm:text-base"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </Reveal>
            </div>

            {/* Right Image */}
            <Reveal
              kind="image"
              className="relative min-h-[320px] lg:min-h-full"
            >
              <Image
                src="/images/home/smarter-approach/smarter-approach.png"
                alt="Event AV Production"
                fill
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
