import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blog } from "data/blogs";

type Props = {
  blog: Blog;
  featured?: boolean;
};

function ExploreButton({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`btn-slide-primary inline-flex w-fit items-center gap-2 font-bold ${
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
    <div className={`relative overflow-hidden ${className}`}>
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
    </div>
  );
}

export default function BlogCard({ blog, featured = false }: Props) {
  if (featured) {
    return (
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
          <p className="text-xs font-semibold text-white/75">{blog.date}</p>

          <h2 className="mt-4 max-w-3xl text-2xl font-black leading-tight text-primary sm:text-3xl lg:text-[34px]">
            {blog.title}
          </h2>

          <div className="mt-5 max-w-3xl space-y-3 text-xs leading-6 text-white/75 sm:text-sm">
            {blog.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <ExploreButton />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/planner-insight-blog/${blog.slug}`} className="group block">
      <BlogImage blog={blog} className="aspect-[1.52/1] rounded-sm" />

      <p className="mt-5 text-sm font-semibold text-white/65">
        {blog.date}
      </p>

      <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight text-primary">
        {blog.title}
      </h3>

      <p className="mt-4 line-clamp-3 text-base leading-7 text-white/70">
        {blog.shortDesc}
      </p>

      <div className="mt-6">
        <ExploreButton compact />
      </div>
    </Link>
  );
}
