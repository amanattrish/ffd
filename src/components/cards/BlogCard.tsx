import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  post: {
    id: string;
    href: string;
    image?: string;
    title: string;
    date: string;
    excerpt: string;
  };
    index: number;
    blog: {
    categoryBadge: string;
    readTime: string;
    readArticleLabel: string;
  };
}

const BlogCard = ({ post, index, blog }: BlogCardProps) => {
  return (
    <Link
            key={post.id}
            href={post.href}
            className={`group flex flex-col bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""
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
              <h3 className="subheading-2 font-semibold line-clamp-2 mb-1">
                {post.title}
              </h3>

              <p className="helper-text line-clamp-2 mb-3">
                {post.excerpt}
              </p>

              {/* CTA pinned to bottom */}
              <span className="mt-auto inline-flex items-center text-primary font-semibold text-sm">
                {blog.readArticleLabel}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </Link>
  )
}

export default BlogCard