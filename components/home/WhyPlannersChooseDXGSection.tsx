import Image from "next/image";
import Container from "components/shared/Container";
import {
  ClipboardList,
  Headphones,
  Target,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const highlights = [
  {
    icon: "/images/home/why-dxg/icon1.png",
    title: "More Control Over How Your Event Is Planned and Executed",
    desc: "We don’t just support your event — we help structure and manage it so nothing is left to chance.",
  },
  {
    icon: "/images/home/why-dxg/icon2.png",
    title: "Transparent, Predictable Pricing — Without Surprises",
    desc: "From the first proposal to final invoice, you pay what was approved — no surprises, no exceptions.",
  },
  {
    icon: "/images/home/why-dxg/icon3.png",
    title: "A Consistent Team That Knows Your Event From Start to Finish",
    desc: "The same people who plan your event are the ones executing it on-site. No handoffs, no gaps, no starting over.",
  },
  {
    icon: "/images/home/why-dxg/icon4.png",
    title: "A Producer-Led Approach Focused on Real-World Execution",
    desc: "Every decision is made based on how your event will actually run — not just how it looks on paper.",
  },
];

const cards = [
  {
    Icon: ClipboardList,
    title: "How We Works",
    desc: "From kickoff to closeout, How We Works keeps everyone aligned. You always know where things stand, what’s coming next, and who owns it.",
    image: "/images/home/why-dxg/process.png",
  },
  {
    Icon: Headphones,
    title: "Our Service",
    desc: "Our team shows up fully invested in your outcome — not just the technical execution, but the experience your attendees walk away with.",
    image: "/images/home/why-dxg/service.png",
  },
  {
    Icon: Target,
    title: "Our Mission",
    desc: "Success to us means your event runs flawlessly and your stakeholders are thrilled. Every decision we make — from first call to final walkout — is measured against that standard.",
    image: "/images/home/why-dxg/target.png",
  },
  {
    Icon: UserRoundCheck,
    title: "Our Experience",
    desc: "Our core team has worked together since 2006 — with thousands of live events and hundreds of digital productions behind us. That depth of experience means we anticipate challenges and bring solutions before you have to ask.",
    image: "/images/home/why-dxg/experience.png",
  },
] satisfies {
  Icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
}[];

export default function WhyPlannersChooseDXGSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-8 lg:py-16"
      aria-labelledby="why-dxg-heading"
    >
      {/* Background */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/home/why-dxg/why-dxg-bg.png"
          alt="Why planners choose DXG background"
          fill
          className="object-cover object-bottom"
        />
      </div> */}

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">
        <Container>
          <div className="grid gap-12 xl:grid-cols-[1.05fr_1fr] xl:gap-14">
            {/* Left Content */}
            <div>
              <TypingTitle
                as="h2"
                id="why-dxg-heading"
                className="max-w-xl text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl"
              >
                Why Planners <br />
                Choose <span className="text-primary">DXG</span>
              </TypingTitle>

              <div className="mt-8 border-l-2 border-primary pl-5">
                <Reveal
                  as="p"
                  className="max-w-lg text-base italic leading-8 text-white/90 sm:text-lg"
                >
                  We’re not just another AV provider — we operate as a
                  production partner focused on how your event is planned,
                  managed, and executed from start to finish.
                </Reveal>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <TypingTitle
                  as="h3"
                  className="shrink-0 text-lg font-bold uppercase leading-tight text-primary sm:text-xl"
                >
                  What Sets DXG Apart In <br /> Real-World Execution
                </TypingTitle>
                <div className="h-px w-full bg-primary/40" />
              </div>

              <div className="relative mt-8 py-8">
                <div className="absolute bottom-[-20px] left-[calc((100vw-100%)/-2)] right-[-220px] top-24">
                  <Image
                    src="/images/home/why-dxg/bg.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  <div className="absolute inset-0 bg-primary/[0.08]" />
                </div>

                <div className="relative z-10 space-y-7">
                  {highlights.map((item) => (
                    <article
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/50 bg-[#0b2237]">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={22}
                          height={22}
                          className="h-5 w-5 object-contain"
                        />
                      </div>

                      <div>
                        <TypingTitle
                          as="h4"
                          className="text-base font-bold uppercase leading-7 text-white sm:text-lg"
                        >
                          {item.title}
                        </TypingTitle>
                        <Reveal
                          as="p"
                          className="mt-1 text-sm leading-7 text-white/70 sm:text-base"
                        >
                          {item.desc}
                        </Reveal>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:gap-6">
              {cards.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative min-h-[270px] overflow-hidden rounded-lg border border-primary/45 p-6 shadow-[0_0_30px_rgba(0,188,242,0.08)] ${
                    index % 2 === 1 ? "sm:translate-y-16" : ""
                  }`}
                >
                  <Reveal kind="image" className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </Reveal>

                  <div className="absolute inset-0 bg-[#03111e]/65" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#061b2d]/40 via-[#061b2d]/70 to-[#020914]/95" />
                  <div className="absolute inset-0 bg-primary/[0.04]" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary bg-[#08233a] text-white shadow-[0_0_20px_rgba(0,188,242,0.18)]">
                      <item.Icon size={32} strokeWidth={2.2} />
                    </div>

                    <TypingTitle
                      as="h3"
                      className="mt-10 text-2xl font-black uppercase leading-none text-white sm:text-3xl"
                    >
                      {item.title.split(" ")[0]} <br />
                      {item.title.split(" ").slice(1).join(" ")}
                    </TypingTitle>

                    <Reveal
                      as="p"
                      className="mt-4 text-xs font-medium leading-6 text-white/90 sm:text-sm"
                    >
                      {item.desc}
                    </Reveal>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
