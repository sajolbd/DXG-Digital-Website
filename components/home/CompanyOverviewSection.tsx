import Container from "components/shared/Container";
import { Users, ClipboardList, ClipboardCheck, Globe } from "lucide-react";
import Image from "next/image";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const features = [
  {
    icon: "/images/home/company-overview/img1.png",
    title: "Not Just a Vendor",
    desc: "You get a proactive partner who thinks ahead, solves problems early, and works alongside you — focused on outcomes, not just execution.",
  },
  {
    icon: "/images/home/company-overview/img2.png",
    title: "Always Know What's Next",
    desc: "Stay confident with clear communication at every step of the project plan.",
  },
  {
    icon: "/images/home/company-overview/img3.png",
    title: "Planned for Real Results",
    desc: "Built around your event, not a cookie-cutter production plan.",
  },
  {
    icon: "/images/home/company-overview/img4.png",
    title: "The Experience to Execute Your Vision",
    desc: "We anticipate needs, eliminate surprises, and deliver seamless execution every time.",
  },
];

export default function CompanyOverviewSection() {
  return (
    <section className="bg-black py-8 lg:py-16">
      <Container>
        {/* Top Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <TypingTitle
              as="h2"
              className="text-4xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
            >
              Company <span className="text-primary">Overview</span>
            </TypingTitle>

            <Reveal
              as="p"
              className="mt-6 max-w-md text-base italic leading-7 text-white/70 sm:text-lg"
            >
              Most planners don’t realize how much better their AV experience
              could be — until they work with the right partner.
            </Reveal>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:ml-auto">
            <Reveal
              as="p"
              className="text-base leading-7 text-white/80 sm:text-lg"
            >
              Digital Xperience Group (DXG) is an audiovisual production agency
              for planners who want a better AV experience — more control, more
              clarity, and more confidence.
            </Reveal>

            <Reveal
              as="p"
              className="mt-5 text-base leading-7 text-white/70 sm:text-lg"
              delay={0.06}
            >
              We support planners from initial strategy through execution,
              ensuring every detail aligns with your goals — and your audience.
            </Reveal>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="overview-box group rounded-2xl bg-[#081624] p-6 text-center transition duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-black/40"
              >
                <Reveal
                  kind="image"
                  className="icon-hover mx-auto flex h-14 w-14 items-center justify-center rounded-xl text-primary"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                  />
                </Reveal>

                <TypingTitle
                  as="h3"
                  className="mt-5 text-sm font-semibold uppercase tracking-wide text-white"
                >
                  {item.title}
                </TypingTitle>

                <Reveal
                  as="p"
                  className="mt-3 text-sm leading-6 text-white/70"
                >
                  {item.desc}
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
