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
  return (
    <section className="bg-[#ffffff] py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-14 lg:gap-y-16">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
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
      </Container>
    </section>
  );
}
