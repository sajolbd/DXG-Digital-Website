import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blog } from "data/blogs";
import TypingTitle from "components/layout/TypingTitle";
import Reveal from "components/shared/Reveal";

type Props = {
  blog: Blog;
  featured?: boolean;
  revealDelay?: number;
};

function ExploreButton({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`btn-slide-primary inline-flex w-fit items-center gap-2 rounded-full font-bold ${
        compact ? "px-5 py-2.5 text-xs" : "px-6 py-3 text-base"
      }`}
    >
      Explore More
      <ArrowUpRight className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} />
    </span>
  );
}

function BlogImage({
  blog,
  className,
  priority = false,
}: {
  blog: Blog;
  className: string;
  priority?: boolean;
}) {
  return (
    <Reveal kind="image" className={`relative overflow-hidden ${className}`}>
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        priority={priority}
        sizes={priority ? "(min-width: 1024px) 520px, 100vw" : "360px"}
        className="object-cover grayscale contrast-125 brightness-75 transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/45 mix-blend-color" />
      <div className="absolute inset-0 bg-[#001826]/20" />
    </Reveal>
  );
}

export default function BlogCard({
  blog,
  featured = false,
  revealDelay = 0,
}: Props) {
  if (featured) {
    return (
      <Reveal delay={revealDelay} duration={1}>
        <Link
          href={`/planner-insight-blog/${blog.slug}`}
          className="group grid overflow-hidden rounded-lg bg-[#061827] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(46,198,245,0.16)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <BlogImage
            blog={blog}
            className="h-full min-h-[280px] lg:min-h-[360px]"
            priority
          />

          <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-11">
            <Reveal as="p" className="text-xs font-semibold text-white/75">
              {blog.date}
            </Reveal>

            <TypingTitle
              as="h2"
              className="mt-4 max-w-3xl text-2xl font-black leading-tight text-primary sm:text-3xl lg:text-[34px]"
            >
              {blog.title}
            </TypingTitle>

            <div className="mt-5 max-w-3xl space-y-3 text-xs leading-6 text-white/75 sm:text-sm">
              {blog.content.map((paragraph, index) => (
                <Reveal
                  key={paragraph}
                  as="p"
                  delay={Math.min(index * 0.05, 0.2)}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            <div className="mt-8">
              <ExploreButton />
            </div>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal
      className="h-full"
      delay={revealDelay}
      duration={0.85}
    >
      <Link href={`/planner-insight-blog/${blog.slug}`} className="group block">
        <BlogImage blog={blog} className="aspect-[1.52/1] rounded-sm" />

        <Reveal as="p" className="mt-5 text-sm font-semibold text-white/65">
          {blog.date}
        </Reveal>

        <TypingTitle
          as="h3"
          className="mt-3 line-clamp-2 text-2xl font-black leading-tight text-primary"
        >
          {blog.title}
        </TypingTitle>

        <Reveal
          as="p"
          className="mt-4 line-clamp-3 text-base leading-7 text-white/70"
        >
          {blog.shortDesc}
        </Reveal>

        <div className="mt-6">
          <ExploreButton compact />
        </div>
      </Link>
    </Reveal>
  );
}
