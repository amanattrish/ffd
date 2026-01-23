import Image from "next/image";
import Link from "next/link";
import { galleryContent } from "@/content";

export const metadata = {
  title: galleryContent.pageTitle,
  description: galleryContent.pageDescription,
};

export default function GalleryPage() {
  const { title, items, linkText } = galleryContent;

  return (
    <div className="">
      {/* Page Title */}
      <section className="py-16 bg-linear-to-br from-[#F2FDFF] to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl! font-bold text-black text-center">
            {title}
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 lg:gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white overflow-hidden shadow-md border border-gray-100"
              >
                {/* BEFORE Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.before}
                    alt={`${item.title} - Before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-2 left-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                    BEFORE
                  </span>
                </div>

                {/* AFTER Image */}
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.after}
                    alt={`${item.title} - After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-2 left-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                    AFTER
                  </span>
                </div>

                {/* Link */}
                <div className="lg:p-4 text-center text-primary bg-[#F2F2F2] flex items-center justify-center">
                  <Link
                    href={item.link}
                    className="underline text-sm font-medium transition-colors"
                  >
                    {linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
