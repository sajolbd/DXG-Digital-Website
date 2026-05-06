import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";

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
      className="bg-black py-8 lg:py-16"
      aria-labelledby="lets-talk-heading"
    >
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2
            id="lets-talk-heading"
            className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary">Let’s Talk</span> About Your Event
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
            Your event deserves an AV partner who’s as invested in the outcome
            as you are. Let’s make sure your plan is built for success — before
            you commit.
          </p>
        </div>

        {/* Team Image */}
        <div className="mt-12 lg:mt-14">
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
        </div>

        {/* Action Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {actions.map((item, index) => (
            <article key={item.title} className="relative text-center lg:px-8">
              {/* Divider */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-primary/20 lg:block" />
              )}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/50 bg-[#0b2237]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={26}
                  height={26}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <h3 className="mt-6 text-lg font-bold uppercase text-primary">
                {item.title}
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/70">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </Container>

      {/* Bottom CTA Banner */}
      <div className="relative mt-16 overflow-hidden lg:mt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/home/lets-talk/cta-bg.png"
            alt="Schedule a Strategy Call"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/55" />

        <Container>
          <div className="relative z-10 flex flex-col items-start gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                This isn’t a sales call — it’s a working session to help you
                plan smarter.
              </h3>
            </div>

            <div className="flex flex-col items-start gap-3">
              <Link
                href="/contact"
                className="btn-slide-primary inline-flex items-center justify-center px-8 py-3 text-sm font-semibold"
              >
                Schedule a Strategy Call
              </Link>
              <p className="text-xs leading-6 text-white/75">
                No pressure. No pitch deck. Just a conversation about your
                event.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
