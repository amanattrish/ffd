import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import { aboutContent } from "@/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Freeport Family Dentistry, our experienced team, and our commitment to quality dental care.",
};

const aboutPages = [
  {
    title: "About the Dentist",
    description: "Meet Dr. Smith and learn about his qualifications, experience, and approach to dental care.",
    href: "/about/dentist",
    image: "/images/about/dr-smith.jpg",
  },
  {
    title: "Meet the Team",
    description: "Get to know our friendly and experienced dental team dedicated to your care.",
    href: "/about/team",
    image: "/images/about/team.jpg",
  },
  {
    title: "Our Clinic",
    description: "Tour our modern facility and discover why patients choose Freeport Family Dentistry.",
    href: "/about/clinic",
    image: "/images/about/clinic.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/80">
              Dedicated to providing exceptional dental care for you and your family in a comfortable, welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Cards */}
      <Section background="white">
        <SectionHeader
          title="Get to Know Us"
          description="Learn more about our practice, our team, and our commitment to your oral health."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {aboutPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-[var(--color-accent-1)]/60 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    {page.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary group-hover:text-primary transition-colors mb-2">
                  {page.title}
                </h2>
                <p className="text-secondary text-sm mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
