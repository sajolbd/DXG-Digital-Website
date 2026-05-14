import Image from "next/image";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { CaseStudy } from "data/caseStudies";

type Props = {
  data: CaseStudy;
};

export default function CaseStudyCard({ data }: Props) {
  return (
    <section
      className="py-8 lg:py-16"
      style={{ backgroundColor: data.background }}
    >
      <Container>
        {/* Top */}
        <div className="grid gap-10 xl:grid-cols-[460px_1fr] xl:gap-16">
          {/* Left */}
          <div>
            <Reveal
              as="p"
              className="text-sm font-bold uppercase tracking-wide text-primary"
            >
              {data.study}
            </Reveal>

            <TypingTitle
              as="h2"
              className="mt-3 text-5xl font-black uppercase leading-[0.95] text-white lg:text-6xl"
            >
              {data.title}{" "}
              <span className="text-primary">{data.highlight}</span>
            </TypingTitle>

            <Reveal
              as="p"
              className="mt-6 text-base italic leading-8 text-white/75"
            >
              {data.subtitle}
            </Reveal>

            <div className="mt-10 border-l border-primary pl-5">
              <div className="text-6xl leading-none text-primary">“</div>

              <Reveal
                as="p"
                className="mt-2 text-lg italic leading-8 text-white"
              >
                {data.quote}
              </Reveal>

              <Reveal
                as="p"
                className="mt-4 text-sm font-semibold text-primary"
                delay={0.08}
              >
                {data.quoteAuthor}
              </Reveal>
            </div>
          </div>

          {/* Image */}
          <Reveal
            kind="image"
            className="ml-auto w-full max-w-[880px] overflow-hidden rounded-[28px]"
          >
            <Image
              src={data.image}
              alt={data.title}
              width={1200}
              height={760}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-10 rounded-2xl bg-[#0b0b0b] p-6 lg:p-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {data.stats.map((item: any) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-[#071a2c]">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/5 bg-[#0b0b0b]">
          {data.sections.map((section: any, index: number) => (
            <div
              key={section.highlight}
              className={`grid gap-8 p-6 lg:grid-cols-[220px_1fr] lg:p-8 ${
                index !== data.sections.length - 1
                  ? "border-b border-white/5"
                  : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-[#071a2c]">
                  <Image
                    src={section.icon}
                    alt={section.highlight}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <TypingTitle
                  as="h3"
                  className="text-2xl font-bold uppercase leading-none text-white"
                >
                  {section.title} <br />
                  <span className="text-primary">{section.highlight}</span>
                </TypingTitle>
              </div>

              {section.list ? (
                <Reveal kind="list" className="space-y-5">
                  {section.list.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-7 text-white/75 sm:text-base"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </Reveal>
              ) : (
                <Reveal
                  as="p"
                  className="text-sm leading-8 text-white/75 sm:text-base"
                >
                  {section.content}
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
