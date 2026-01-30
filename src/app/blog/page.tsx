import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
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
      <Section background="gradient" isBgLtr={false} className="relative overflow-hidden">
          <h1 className="heading-3 md:text-center my-12">
            Blogs
          </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.items.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} blog={blog} />
        ))}
        </div>
      </Section>
    </>
  );
}
