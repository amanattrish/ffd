import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";
import BlogCard from "../cards/BlogCard";

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
          <p className="helper-text font-medium mt-2 max-w-xl">
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
          <BlogCard key={post.id} post={post} index={index} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
