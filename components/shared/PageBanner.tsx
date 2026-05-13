import Image from "next/image";
import Link from "next/link";
import Container from "components/shared/Container";

type PageBannerProps = {
  title: string;
  backgroundImage: string;
};

export default function PageBanner({
  title,
  backgroundImage,
}: PageBannerProps) {
  return (
    <section className="relative isolate min-h-[360px] overflow-hidden pb-20 pt-36 sm:min-h-[400px] sm:pb-24 sm:pt-40 lg:min-h-[460px] lg:pb-28 lg:pt-44">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/75" />
      <div className="absolute inset-x-0 top-0 h-28 bg-black/25" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
            {/* Title */}
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {/* Breadcrumb */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/80">
              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>

              <span className="text-white/40">/</span>

              <span className="text-primary">{title}</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
