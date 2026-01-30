import Section from "@/components/ui/Section";
import { homeContent } from "@/content";
import BlogCard from "@/components/cards/BlogCard";

export const metadata = {
  title: "Blog - Freeport Family Dentistry",
  description: "Stay informed with the latest dental health tips and news from our experts",
};

export default function BlogPage() {
  const { blog } = homeContent;

  return (
    <>
      <Section className="relative py-12!" background="gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-3">
            Blogs
          </h1>
        </div>
      </Section>

      <Section background="gray" className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.items.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} blog={blog} />
        ))}
        </div>
      </Section>
    </>
  );
}
