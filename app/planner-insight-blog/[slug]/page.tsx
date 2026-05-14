import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";
import { getBlog, getSortedBlogs } from "data/blogs";

type BlogDetailsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getSortedBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailsPageProps) {
  const blog = getBlog(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | DXG Digital",
    };
  }

  return {
    title: `${blog.title} | DXG Digital`,
    description: blog.shortDesc,
  };
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const blog = getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-black text-white">
      <PageBanner
        title={blog.title}
        backgroundImage="/images/banners/planner-insight-blog-banner.png"
        breadcrumbParent={{
          label: "Planner Insight Blog",
          path: "/planner-insight-blog",
        }}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <Reveal delay={0.05} duration={0.75}>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/55"
            >
              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/planner-insight-blog"
                className="transition hover:text-primary"
              >
                Planner Insight Blog
              </Link>
              <span>/</span>
              <span className="text-primary">{blog.title}</span>
            </nav>
          </Reveal>

          <Reveal
            kind="image"
            className="relative aspect-[2.15/1] overflow-hidden rounded-lg"
            delay={0.12}
            duration={0.9}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-125 brightness-75 transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/45 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </Reveal>

          <div className="mx-auto mt-12 max-w-4xl">
            <Reveal
              as="p"
              className="text-sm font-semibold text-white/65"
              delay={0.08}
              duration={0.65}
            >
              {blog.date}
            </Reveal>
            <TypingTitle
              as="h1"
              className="mt-4 text-4xl font-black leading-tight text-primary lg:text-6xl"
            >
              {blog.title}
            </TypingTitle>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/78 lg:text-lg lg:leading-9">
              {blog.content.map((paragraph, index) => (
                <Reveal
                  key={paragraph}
                  as="p"
                  delay={Math.min(index * 0.06, 0.24)}
                  duration={0.85}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
