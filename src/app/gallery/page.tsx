import Image from "next/image";
import Link from "next/link";
import { galleryContent } from "@/content";
import { Section } from "@/components/ui";

export const metadata = {
  title: galleryContent.pageTitle,
  description: galleryContent.pageDescription,
};

export default function GalleryPage() {
  const { title, items, linkText, beforeLabel = "BEFORE", afterLabel = "AFTER" } = galleryContent;

  return (
    <>
       <Section className="relative py-12!" background="gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-3">
            {title}
          </h1>
        </div>
      </Section>

      {/* Gallery Grid */}
      <section className="section-container pb-16">
        <div className="section-container">
          <div className="grid grid-cols-3 gap-2 lg:gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="card space-y-2 overflow-hidden border border-(--border-color)"
              >
                {/* BEFORE Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.before}
                    alt={`${item.title} - Before`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-2 left-2 bg-black/80 text-muted-lighter font-medium px-2 py-1 rounded">
                    {beforeLabel}
                  </span>
                </div>

                {/* AFTER Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.after}
                    alt={`${item.title} - After`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-2 left-2 bg-black/80 text-muted-lighter font-medium px-2 py-1 rounded">
                    {afterLabel}
                  </span>
                </div>

                {/* Link */}
                <div className="lg:p-4 text-center text-primary bg-muted-lighter flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="underline subheading-2 font-medium transition-colors"
                  >
                    {linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
