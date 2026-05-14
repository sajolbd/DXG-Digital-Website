import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "components/shared/Container";
import { caseStudies } from "data/caseStudies";
import LetsTalkSection from "components/shared/LetsTalkSection";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

export default function ExperiencesCreatedCardSection() {
  return (
    <section className="bg-black py-16 text-white sm:py-8 lg:py-16">
      <Container className="max-w-[1460px]">
        {/* <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
            Featured Work
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            Experiences We&apos;ve Created
          </h2>
        </div> */}

        <div className="relative">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              href={`/experiences-created/${study.slug}`}
              className={`group relative z-10 block overflow-hidden rounded-[22px] shadow-[0_28px_70px_rgba(0,0,0,0.46)] transition-[transform,box-shadow,background-color] duration-700 ease-out first:mt-0 hover:z-30 hover:-translate-y-5 hover:scale-[1.015] hover:shadow-[0_38px_95px_rgba(46,198,245,0.18)] focus-visible:z-30 focus-visible:-translate-y-5 focus-visible:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary lg:-mt-[210px] xl:-mt-[235px] ${
                index === 1 ? "bg-[#2b2b2b]" : "bg-[#191919]"
              }`}
            >
              <article className="grid min-h-[360px] gap-7 p-7 transition-colors duration-700 sm:p-9 lg:grid-cols-[330px_1fr] lg:gap-12 lg:p-12 xl:grid-cols-[390px_1fr]">
                <div className="flex min-h-[280px] flex-col">
                  <p className="text-xs font-black uppercase tracking-wide text-primary sm:text-sm">
                    {study.study}
                  </p>

                  <TypingTitle
                    as="h3"
                    className="mt-3 text-4xl font-black uppercase leading-[0.88] text-white sm:text-5xl lg:text-6xl"
                  >
                    {study.title}
                    <span className="block text-primary">
                      {study.highlight}
                    </span>
                  </TypingTitle>

                  <Reveal
                    as="p"
                    className="mt-5 text-sm italic leading-6 text-white/85 sm:text-base"
                  >
                    {study.subtitle}
                  </Reveal>

                  <div className="mt-auto pt-8">
                    <div className="text-6xl leading-none text-primary">
                      &ldquo;
                    </div>
                    <Reveal
                      as="p"
                      className="mt-2 max-w-[320px] text-sm italic leading-6 text-white/90"
                      delay={0.06}
                    >
                      {study.quote}
                    </Reveal>
                    <Reveal
                      as="p"
                      className="mt-4 max-w-[260px] text-xs font-semibold italic leading-5 text-primary"
                      delay={0.12}
                    >
                      {study.quoteAuthor}
                    </Reveal>

                    <span className="btn-slide-primary mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold">
                      Explore Details
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2.4}
                      />
                    </span>
                  </div>
                </div>

                <Reveal
                  kind="image"
                  className="relative min-h-[260px] overflow-hidden rounded-[14px] sm:min-h-[340px] lg:min-h-[430px]"
                >
                  <Image
                    src={study.image}
                    alt={`${study.title} ${study.highlight}`}
                    fill
                    sizes="(min-width: 1024px) 68vw, 100vw"
                    className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition duration-700 ease-out group-hover:bg-transparent" />
                </Reveal>
              </article>
            </Link>
          ))}
        </div>
        <LetsTalkSection />
      </Container>
    </section>
  );
}
