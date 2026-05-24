import Image from "next/image";
import Container from "components/shared/Container";
import { ChevronRight } from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const services = [
  {
    icon: "/images/home/one-partner/icon1.png",
    title: "Meeting Planning Support",
    desc: "From pre-event logistics and run-of-show development to on-site coordination and post-event recaps, DXG works alongside you through every phase of the planning process — so you're never navigating it alone.",
  },
  {
    icon: "/images/home/one-partner/icon2.png",
    title: "General Sessions",
    desc: "Every technical element of your general session — fully managed, flawlessly executed, and built around the experience you want your audience to have.",
  },
  {
    icon: "/images/home/one-partner/icon3.png",
    title: "Breakouts",
    desc: "Consistent AV quality in every room, so every attendee gets the same high-quality experience — not just the ones in the main hall.",
  },
  {
    icon: "/images/home/one-partner/icon4.png",
    title: "Hybrid & Virtual",
    desc: "Streaming and platform support that keeps your remote audience as engaged as the room — not just connected, but genuinely part of the experience.",
  },
  {
    icon: "/images/home/one-partner/icon5.png",
    title: "Content Capture",
    desc: "Professional video and photography that turns your event into assets you can use long after the last session ends — for marketing, internal communications, and proof of impact.",
  },
  {
    icon: "/images/home/one-partner/icon5.png",
    title: "Creative & Design",
    desc: "Environmental and visual design that makes your event feel intentional from the moment attendees walk in — branded, cohesive, and built around your program.",
  },
];

export default function OnePartnerMarqueeSection() {
  const looped = [...services, ...services];

  return (
    <section
      className="overflow-hidden bg-black py-8 lg:py-16"
      aria-labelledby="one-partner-heading"
    >
      <Container>
        {/* Heading */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden h-px flex-1 bg-primary/40 sm:block" />
          <TypingTitle
            as="h2"
            id="one-partner-heading"
            className="shrink-0 text-left text-sm font-bold uppercase tracking-wide text-white sm:text-center sm:text-base lg:text-2xl"
          >
            One Partner.{" "}
            <span className="text-primary">Every Part of Your Event.</span>
          </TypingTitle>
          <div className="h-px flex-1 bg-primary/40" />
        </div>

        <Reveal
          as="p"
          className="mt-5 max-w-3xl text-left text-sm leading-7 text-white/75 sm:mx-auto sm:text-center sm:text-base"
        >
          From the first planning call through post-event wrap-up, DXG supports
          every element of your event — so nothing falls through the cracks.
        </Reveal>
      </Container>

      {/* Marquee */}
      <div className="relative mt-12">
        <div className="overflow-hidden bg-[#071a2c] py-10">
          <div className="marquee-track flex w-max gap-6">
            {looped.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="relative w-[280px] shrink-0 px-6 text-center sm:w-[320px] lg:w-[360px]"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-full w-16 translate-x-1/2"
                  aria-hidden="true"
                >
                  <span className="absolute bottom-[calc(50%+38px)] left-1/2 top-0 w-px -translate-x-1/2 bg-primary/70" />
                  <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-[#071a2c] text-primary">
                    <ChevronRight size={20} strokeWidth={2} />
                  </span>
                  <span className="absolute bottom-0 left-1/2 top-[calc(50%+38px)] w-px -translate-x-1/2 bg-primary/70" />
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/50 bg-[#0b2237]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <TypingTitle
                  as="h3"
                  className="mt-6 text-xl font-bold uppercase leading-snug text-primary"
                >
                  {item.title}
                </TypingTitle>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
