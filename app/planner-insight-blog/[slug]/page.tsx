import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "components/shared/Container";
import PageBanner from "components/shared/PageBanner";
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

          <div className="relative aspect-[2.15/1] overflow-hidden rounded-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale contrast-125 brightness-75"
            />
            <div className="absolute inset-0 bg-primary/45 mix-blend-color" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <p className="text-sm font-semibold text-white/65">{blog.date}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-primary lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-8 space-y-6 text-base leading-8 text-white/78 lg:text-lg lg:leading-9">
              {blog.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
