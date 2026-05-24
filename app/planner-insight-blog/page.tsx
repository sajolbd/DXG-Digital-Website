import Container from "components/shared/Container";
import { getSortedBlogs } from "data/blogs";
import PageBanner from "components/shared/PageBanner";
import BlogCard from "components/planner-insight-blog/BlogCard";
import LetsTalkSection from "components/shared/LetsTalkSection";

export default function BlogsPage() {
  const sortedBlogs = getSortedBlogs();
  const featuredBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1);

  return (
    <div>
      <PageBanner
        title="Planner Insight Blog"
        backgroundImage="/images/banners/planner-insight-blog-banner.png"
      />

      <section className="bg-black py-8 lg:py-16">
        <Container>
          {featuredBlog && (
            <BlogCard blog={featuredBlog} featured revealDelay={0.05} />
          )}

          <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
            {otherBlogs.map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                revealDelay={Math.min(index * 0.08, 0.24)}
              />
            ))}
          </div>
          <LetsTalkSection />
        </Container>
      </section>
    </div>
  );
}
