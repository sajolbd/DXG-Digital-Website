import Image from "next/image";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

export default function ChallengesHeroSection() {
  return (
    <section
      id="challenges"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
      aria-labelledby="challenges-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/challenges/challenges-bg.png"
          alt="Event production challenges background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="max-w-4xl">
            <TypingTitle
              as="h2"
              id="challenges-heading"
              className="max-w-4xl text-4xl font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-7xl"
            >
              The Challenges <br />
              Planners Face – And How{" "}
              <span className="text-primary">DXG Solves Them</span>
            </TypingTitle>

            <Reveal
              as="p"
              className="mt-8 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              We partner with planners to deliver seamless, engaging events—so
              you can focus on your attendees, not the technology.
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
