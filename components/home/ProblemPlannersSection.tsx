import Image from "next/image";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const problems = [
  {
    icon: "/images/home/problems/icon1.png",
    title: "AV Solutions That Feel",
    highlight: "Rigid or Limited",
    desc: "One-size-fits-all setups don’t fit your vision.",
  },
  {
    icon: "/images/home/problems/icon2.png",
    title: "Pricing That Lacks",
    highlight: "Clarity or Flexibility",
    desc: "Unclear costs and inflexible pricing structures create unnecessary risk.",
  },
  {
    icon: "/images/home/problems/icon3.png",
    title: "Teams That Are Reactive",
    highlight: "Instead of Proactive",
    desc: "Issues get addressed after they happen — instead of being planned for in advance.",
  },
  {
    icon: "/images/home/problems/icon4.png",
    title: "Managing Execution Without",
    highlight: "A True Production Partner",
    desc: "You’re left coordinating vendors instead of having a partner leading execution.",
  },
];

export default function ProblemPlannersSection() {
  return (
    <section
      className="bg-black py-8 lg:py-16"
      aria-labelledby="problem-planners-heading"
    >
      <Container>
        {/* Section Heading */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden h-px flex-1 bg-primary/40 sm:block" />
          <TypingTitle
            as="h2"
            id="problem-planners-heading"
            className="shrink-0 text-left text-sm font-bold uppercase tracking-wide text-white sm:text-center sm:text-base"
          >
            <span className="text-primary">The Problem</span> Most Planners
            Face:
          </TypingTitle>
          <div className="h-px flex-1 bg-primary/40" />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {problems.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] bg-[#081624] p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
            >
              <Reveal
                kind="image"
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/50 bg-[#0b2237]"
              >
                <Image
                  src={item.icon}
                  alt={item.highlight}
                  width={38}
                  height={38}
                  className="h-9 w-9 object-contain"
                />
              </Reveal>

              <TypingTitle
                as="h3"
                className="mt-6 text-xl font-bold uppercase leading-snug text-white"
              >
                {item.title}{" "}
                <span className="text-primary">{item.highlight}</span>
              </TypingTitle>

              <Reveal as="p" className="mt-4 text-sm leading-7 text-white/70">
                {item.desc}
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
