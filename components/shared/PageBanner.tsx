import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

type PageBannerProps = {
  title: string;
  backgroundImage: string;
  breadcrumbParent?: {
    label: string;
    path: string;
  };
};

export default function PageBanner({
  title,
  backgroundImage,
  breadcrumbParent,
}: PageBannerProps) {
  return (
    <section className="relative isolate min-h-[360px] overflow-hidden pb-20 pt-36 sm:min-h-[400px] sm:pb-24 sm:pt-40 lg:min-h-[460px] lg:pb-28 lg:pt-44">
      {/* Background Image */}
      <Reveal kind="image" className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="dxg-banner-media object-cover object-center"
        />
      </Reveal>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />
      <div className="absolute inset-x-0 top-0 h-28 bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
            {/* Title */}
            <TypingTitle
              as="h1"
              className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </TypingTitle>

            {/* Breadcrumb */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/80">
              <Reveal
                as="span"
                className="inline-flex flex-wrap items-center justify-center gap-3"
                delay={0.18}
                duration={0.75}
              >
                <Link href="/" className="transition hover:text-primary">
                  Home
                </Link>

                <span className="text-white/40">/</span>

                {breadcrumbParent && (
                  <>
                    <Link
                      href={breadcrumbParent.path}
                      className="transition hover:text-primary"
                    >
                      {breadcrumbParent.label}
                    </Link>

                    <span className="text-white/40">/</span>
                  </>
                )}

                <span className="text-primary">{title}</span>
              </Reveal>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
