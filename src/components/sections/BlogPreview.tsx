import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function BlogPreview() {
  const { blog } = homeContent;

  return (
    <Section background="transparent" className="relative overflow-hidden">

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mb-4">
        <div className="flex flex-col gap-4">
          <span className="body-text text-primary! font-semibold">
            {blog.sectionLabel}
          </span>
          <h2 className="heading-3">
            {blog.title}{" "}
            <span className="font-semibold">{blog.titleHighlight}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="body-text font-medium mt-2 max-w-xl">
            {blog.description}
          </p>
          <Link
            href={blog.cta.href}
            className="inline-flex items-center gap-2 text-primary! border-primary border w-fit p-2 py-1 rounded-lg font-semibold hover:gap-3 transition-all"
          >
            {blog.viewAllLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {blog.items.map((post, index) => (
          <Link
            key={post.id}
            href={post.href}
            className={`group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <Image
                src={post.image || "/images/blog-placeholder.jpg"}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.categoryBadge}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1 text-xs text-muted font-medium!">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Clock className="w-3 h-3" />
                  {blog.readTime}
                </span>
              </div>

              {/* Title + excerpt */}
              <h3 className="subheading font-semibold line-clamp-2 mb-2">
                {post.title}
              </h3>

              <p className="body-text line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* CTA pinned to bottom */}
              <span className="mt-auto inline-flex items-center text-primary font-semibold text-sm">
                {blog.readArticleLabel}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
