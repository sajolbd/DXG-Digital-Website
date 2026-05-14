import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const actions = [
  {
    icon: "/images/home/lets-talk/second-opinion.png",
    title: "Get a Second Opinion",
    desc: "Before you commit, we’ll review your AV approach and identify any gaps, risks, or missed opportunities.",
  },
  {
    icon: "/images/home/lets-talk/strategy-call.png",
    title: "Book a Strategy Call",
    desc: "A quick 30-minute conversation to align on your goals.",
  },
  {
    icon: "/images/home/lets-talk/improve-experience.png",
    title: "Improve Your Experience",
    desc: "Before you finalize your AV plan — let’s make sure it’s set up for success.",
  },
];

export default function LetsTalkSection() {
  return (
    <section
      className="bg-black pb-0 pt-8 lg:py-16"
      aria-labelledby="lets-talk-heading"
    >
      <Container>
        {/* Heading */}
        <div className="text-left sm:text-center">
          <TypingTitle
            as="h2"
            id="lets-talk-heading"
            className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary">Let’s Talk</span> About Your Event
          </TypingTitle>

          <Reveal
            as="p"
            className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:mx-auto sm:text-base"
          >
            Your event deserves an AV partner who’s as invested in the outcome
            as you are. Let’s make sure your plan is built for success — before
            you commit.
          </Reveal>
        </div>

        {/* Team Image */}
        {/* <div className="mt-12 lg:mt-14">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
            <Image
              src="/images/home/lets-talk/team-photo.png"
              alt="DXG Team"
              width={1200}
              height={760}
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium italic leading-8 text-white/90 sm:text-lg">
            The DXG team — on-site, hands-on, and accountable from load-in to
            wrap
          </p>
        </div> */}

        {/* Action Cards */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {actions.map((item) => (
            <article
              key={item.title}
              className="relative flex min-h-[230px] flex-col items-center justify-center rounded-xl bg-[#071826] px-8 py-9 text-center"
            >
              <Reveal kind="image">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={68}
                  height={68}
                  className="h-12 w-12 object-contain"
                />
              </Reveal>

              <TypingTitle
                as="h3"
                className="mt-6 text-lg font-bold text-white"
              >
                {item.title}
              </TypingTitle>

              <Reveal
                as="p"
                className="mx-auto mt-4 max-w-[260px] text-sm leading-7 text-white/70"
              >
                {item.desc}
              </Reveal>
            </article>
          ))}
        </div>
      </Container>

      {/* Bottom CTA Banner */}
      <div className="relative mt-8 overflow-hidden sm:mt-12 lg:mt-20">
        <Reveal kind="image" className="absolute inset-0">
          <Image
            src="/images/home/lets-talk/cta-bg.png"
            alt="Schedule a Strategy Call"
            fill
            className="object-cover"
          />
        </Reveal>

        <div className="absolute inset-0 bg-black/55" />

        <Container>
          <div className="relative z-10 flex flex-col items-start gap-6 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <TypingTitle
                as="h3"
                className="text-2xl font-bold leading-tight text-white sm:text-3xl"
              >
                This isn’t a sales call — it’s a working session to help you
                plan smarter.
              </TypingTitle>
            </div>

            <div className="flex flex-col items-start gap-3">
              <Link
                href="/contact"
                className="btn-slide-primary inline-flex items-center justify-center px-8 py-3 text-sm font-semibold"
              >
                Schedule a Strategy Call
              </Link>
              <Reveal as="p" className="text-xs leading-6 text-white/75">
                No pressure. No pitch deck. Just a conversation about your
                event.
              </Reveal>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
