"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "components/shared/Container";
import { problemServices } from "data/problemServices";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

const hoverBackground = "/images/problems-we-solve/services-hover-bg.png";

export default function ServicesGridSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-black py-8 lg:py-16">
      <Container>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problemServices.map((service, index) => {
            const isHovered = hoveredCard === index;

            return (
              <Reveal key={service.title} className="h-full">
                <Link
                  href={`/problems-we-solve/${service.slug}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glowing-border group relative block h-full min-h-[360px] overflow-hidden rounded-lg border border-primary/20 bg-[#071a2c] p-10 shadow-[0_0_30px_rgba(0,188,242,0.08)] transition duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-primary/70 hover:shadow-[0_22px_55px_rgba(0,188,242,0.18)]"
                >
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isHovered
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                  >
                    <Image
                      src={hoverBackground}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#081624]/30" />
                  </div>

                  <div
                    className={`absolute inset-0 bg-[linear-gradient(180deg,#071a2c_0%,#03111f_100%)] transition duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  <div className="relative z-10 flex h-full flex-col items-center text-center transition duration-500 group-hover:-translate-y-2">
                    <Reveal
                      kind="image"
                      className="flex h-24 w-24 items-center justify-center rounded-lg shadow-[0_0_20px_rgba(0,188,242,0.12)] transition duration-500 group-hover:scale-110 group-hover:border-primary"
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={70}
                        height={70}
                        className="h-[70px] w-[70px] object-contain"
                      />
                    </Reveal>

                    <TypingTitle
                      as="h3"
                      className="mt-6 text-3xl font-black uppercase leading-[0.95] text-white"
                    >
                      {service.title}
                    </TypingTitle>

                    <Reveal
                      as="p"
                      className="mt-6 max-w-sm text-sm leading-7 text-white/80 sm:text-base"
                    >
                      {service.desc}
                    </Reveal>

                    <span className="mt-8 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-semibold text-black opacity-0 transition duration-500 group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
