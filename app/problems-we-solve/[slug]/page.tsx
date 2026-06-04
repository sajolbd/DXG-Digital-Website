import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
import { getProblemService, problemServices } from "data/problemServices";
import ChallengesHeroSection from "components/home/ChallengesHeroSection";
import LetsTalkSection from "components/shared/LetsTalkSection";
import TrustedBrandsSection from "components/shared/TrustedBrandsSection";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

type ServiceDetailsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return problemServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailsPageProps) {
  const service = getProblemService(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | DXG Digital",
    };
  }

  return {
    title: `${service.title} | DXG Digital`,
    description: service.desc,
  };
}

export default function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const service = getProblemService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <div className="bg-black text-white">
        <PageBanner
          title={service.title}
          backgroundImage={service.bannerImage}
          breadcrumbParent={{
            label: "Problems We Solve",
            path: "/problems-we-solve",
          }}
        />
        <section className="relative w-full overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(0,188,242,0.14),transparent_30%)]" />

          <div className="relative z-10 grid items-center gap-0 lg:min-h-[600px] lg:grid-cols-2">
            {/* Left side - Image */}
            <Reveal
              kind="image"
              className="relative hidden min-h-[600px] overflow-hidden lg:block"
            >
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="50vw"
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/50 to-transparent" />
            </Reveal>

            {/* Right side - Content */}
            <div className="flex items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-20">
              <div className="max-w-2xl">
                <TypingTitle
                  as="h1"
                  className="text-3xl font-black uppercase leading-[0.95] text-white sm:text-4xl lg:text-6xl"
                >
                  {service.title}
                </TypingTitle>

                <div className="mt-5 space-y-4 text-xs leading-6 text-white/85 sm:mt-6 sm:space-y-5 sm:text-sm lg:mt-7 lg:space-y-6 lg:text-base">
                  {service.details.map((paragraph, index) => (
                    <Reveal
                      key={paragraph}
                      as="p"
                      delay={Math.min(index * 0.06, 0.18)}
                    >
                      {paragraph}
                    </Reveal>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-slide-primary mt-6 inline-flex items-center justify-center px-6 py-3 text-xs font-semibold sm:mt-7 sm:px-7 sm:py-4 sm:text-sm lg:mt-8 lg:text-base"
                >
                  Schedule a Strategy Call
                </Link>
              </div>
            </div>

            {/* Mobile Image */}
            <Reveal
              kind="image"
              className="relative min-h-[200px] overflow-hidden lg:hidden sm:min-h-[250px]"
            >
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent sm:h-24" />
            </Reveal>
          </div>
        </section>
      </div>
      <ChallengesHeroSection />
      <LetsTalkSection />
      <TrustedBrandsSection />
    </div>
  );
}
