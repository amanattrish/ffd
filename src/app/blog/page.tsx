import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import { homeContent } from "@/content";

export const metadata = {
  title: "Blog - Freeport Family Dentistry",
  description: "Stay informed with the latest dental health tips and news from our experts",
};

export default function BlogPage() {
  const { blog } = homeContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#F2FDFF] to-white py-20 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-white/10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl! font-bold text-black !mb-4">
            Blogs
          </h1>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <Section background="gray" className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 text-[var(--color-accent-1)] text-3xl font-light opacity-20 hidden lg:block">+</div>
        <div className="absolute bottom-10 left-10 text-[var(--color-accent-2)] text-2xl font-light opacity-20 hidden lg:block">+</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.items.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/images/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.categoryBadge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 !mb-3">
                  <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary group-hover:text-primary transition-colors line-clamp-2 !mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-secondary line-clamp-2 !mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-primary font-semibold text-sm">
                  {blog.readArticleLabel}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
