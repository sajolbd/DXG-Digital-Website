"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Container from "components/shared/Container";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

/* =========================
   VIDEO DATA
========================= */

const videos = [
  {
    id: 1,
    youtube: "https://www.youtube.com/watch?v=7BEx50pspDA",
  },
  {
    id: 2,
    youtube: "https://www.youtube.com/watch?v=zSC4VXg2qKk",
  },
  {
    id: 3,
    youtube: "https://www.youtube.com/watch?v=cs9WrMJwnOA",
  },
  {
    id: 4,
    youtube: "https://www.youtube.com/watch?v=Dq-6_WjdFWA",
  },
];

function getYoutubeVideoId(url: string) {
  const videoUrl = new URL(url);
  return videoUrl.hostname === "youtu.be"
    ? videoUrl.pathname.slice(1)
    : videoUrl.searchParams.get("v");
}

function getYoutubeEmbedUrl(url: string) {
  const videoId = getYoutubeVideoId(url);
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : url;
}

function getYoutubeThumbnailUrl(url: string) {
  const videoId = getYoutubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";
}

export default function WhoWeAreSection() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const moveSlider = (direction: "prev" | "next") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>("[data-video-card]");
    const cardWidth = firstCard?.offsetWidth ?? 360;
    const gap = window.innerWidth >= 640 ? 24 : 16;
    const scrollAmount = cardWidth + gap;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const isAtStart = slider.scrollLeft <= 2;
    const isAtEnd = slider.scrollLeft >= maxScrollLeft - 2;

    if (direction === "next" && isAtEnd) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    if (direction === "prev" && isAtStart) {
      slider.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      });
      return;
    }

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-8 lg:py-8 lg:pt-16">
      <Container>
        {/* Top Content */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* Left */}
          <div className="max-w-[680px]">
            <TypingTitle
              as="h2"
              className="text-4xl font-black text-white sm:text-5xl"
            >
              Who We Are
            </TypingTitle>

            <div className="mt-8 max-w-[650px] space-y-6 text-sm leading-8 text-white/70 sm:text-base">
              <Reveal as="p">
                Our diverse team of audiovisual technical producers, directors,
                project managers, engineers, technicians, and creatives brings a
                collective wealth of experience to your event.
              </Reveal>

              <Reveal as="p" delay={0.06}>
                At DXG, our approach is to intimately understand your
                event&apos;s objectives and forge a connection between your
                content and your audience.
              </Reveal>

              <Reveal as="p" delay={0.12}>
                We stay at the forefront of technology, harnessing innovative
                solutions to enhance engagement and streamline production.
              </Reveal>
            </div>
          </div>

          {/* Right Quote */}
          <div className="border-l border-primary pl-6">
            <div className="text-6xl leading-none text-primary">“</div>

            <Reveal
              as="p"
              className="mt-4 text-sm italic leading-8 text-white/80 sm:text-base"
            >
              Digital Xperience Group Agency (DXG), a pioneering division of
              WJLI Consulting, is a premier partner in transforming events into
              unforgettable experiences.
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Video Slider */}
      <div className="mt-16">
        <Container>
          <div className="mb-6 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Previous video"
              onClick={() => moveSlider("prev")}
              className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/10 text-white transition hover:border-primary hover:bg-primary hover:text-black"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              aria-label="Next video"
              onClick={() => moveSlider("next")}
              className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/10 text-white transition hover:border-primary hover:bg-primary hover:text-black"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </Container>

        <div
          ref={sliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 sm:gap-6 sm:px-6 lg:px-10"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              data-video-card
              className="group relative h-[190px] w-[66vw] max-w-[260px] shrink-0 snap-start overflow-hidden border border-white/10 bg-white/5 sm:h-[300px] sm:w-[420px] sm:max-w-none lg:h-[420px] lg:w-[520px]"
            >
              {activeVideoId === video.id ? (
                <iframe
                  src={getYoutubeEmbedUrl(video.youtube)}
                  title={`DXG video ${video.id}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveVideoId(video.id)}
                  className="relative h-full w-full text-left"
                  aria-label={`Play DXG video ${video.id}`}
                >
                  {/* Thumbnail */}
                  <Reveal kind="image" className="absolute inset-0">
                    <Image
                      src={getYoutubeThumbnailUrl(video.youtube)}
                      alt={`DXG video ${video.id}`}
                      fill
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 420px, 82vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Reveal>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/35" />

                  {/* Play Button */}
                  <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition duration-300 group-hover:scale-110">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
