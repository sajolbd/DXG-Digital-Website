import Image from "next/image";
import Container from "components/shared/Container";

const brands = [
  {
    name: "1199SEIU",
    image: "/images/home/brands/brand-1.png",
  },
  {
    name: "ASDS",
    image: "/images/home/brands/brand-2.png",
  },
  {
    name: "Ford Foundation",
    image: "/images/home/brands/brand-3.png",
  },
  {
    name: "Hennessy",
    image: "/images/home/brands/brand-4.png",
  },
  {
    name: "Phocuswright",
    image: "/images/home/brands/brand-5.png",
  },
  {
    name: "Forte",
    image: "/images/home/brands/brand-6.png",
  },
  {
    name: "Orlando Aviation Authority",
    image: "/images/home/brands/brand-7.png",
  },
  {
    name: "AVI-SPL",
    image: "/images/home/brands/brand-8.png",
  },
  {
    name: "AdventHealth",
    image: "/images/home/brands/brand-9.png",
  },
  {
    name: "ATA",
    image: "/images/home/brands/brand-10.png",
  },
  {
    name: "SEEA",
    image: "/images/home/brands/brand-11.png",
  },
  {
    name: "AES",
    image: "/images/home/brands/brand-12.png",
  },
];

export default function TrustedBrandsSection() {
  const loopedBrands = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-[#ffffff] py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent"
            aria-hidden="true"
          />

          <div className="marquee-track flex w-max items-center gap-10 lg:gap-14">
            {loopedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex h-20 w-[160px] shrink-0 items-center justify-center sm:w-[180px] lg:w-[190px]"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={180}
                  height={90}
                  className="h-auto max-h-[60px] w-auto object-contain opacity-90 transition duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
