import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function BlogPreview() {
  const { blog } = homeContent;

  return (
    <Section background="gray" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-[var(--color-accent-1)] text-3xl font-light opacity-20 hidden lg:block">+</div>
      <div className="absolute bottom-10 left-10 text-[var(--color-accent-2)] text-2xl font-light opacity-20 hidden lg:block">+</div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="inline-block text-[var(--color-secondary)] font-medium text-sm uppercase tracking-wider mb-2">
            {blog.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            {blog.title}{" "}
            <span className="text-[var(--color-primary)]">{blog.titleHighlight}</span>
          </h2>
          <p className="text-[var(--text-secondary)] mt-2 max-w-xl">
            Stay informed with the latest dental health tips and news from our experts
          </p>
        </div>
        <Link
          href={blog.cta.href}
          className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all"
        >
          View All Articles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.items.map((post, index) => (
          <Link
            key={post.id}
            href={post.href}
            className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
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
                <span className="inline-block bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Dental Tips
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta info */}
              <div className="flex items-center gap-4 mb-3">
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
                  5 min read
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-[var(--color-primary)] font-semibold text-sm">
                Read Article
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href={blog.cta.href} variant="outline" size="lg">
          {blog.cta.label}
        </Button>
      </div>
    </Section>
  );
}
