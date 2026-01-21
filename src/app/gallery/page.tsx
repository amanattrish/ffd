"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const galleryItems = [
  {
    id: 1,
    title: "Smile Makeover",
    category: "cosmetic",
    before: "/images/gallery/smile-makeover-before.jpg",
    after: "/images/gallery/smile-makeover-after.jpg",
    description: "Complete smile transformation with veneers and whitening",
  },
  {
    id: 2,
    title: "Teeth Whitening",
    category: "cosmetic",
    before: "/images/gallery/whitening-before.jpg",
    after: "/images/gallery/whitening-after.jpg",
    description: "Professional whitening treatment results",
  },
  {
    id: 3,
    title: "Dental Implants",
    category: "restorative",
    before: "/images/gallery/implant-before.jpg",
    after: "/images/gallery/implant-after.jpg",
    description: "Single tooth replacement with dental implant",
  },
  {
    id: 4,
    title: "Invisalign Treatment",
    category: "orthodontics",
    before: "/images/gallery/invisalign-before.jpg",
    after: "/images/gallery/invisalign-after.jpg",
    description: "Clear aligner treatment for straighter teeth",
  },
  {
    id: 5,
    title: "Porcelain Veneers",
    category: "cosmetic",
    before: "/images/gallery/veneers-before.jpg",
    after: "/images/gallery/veneers-after.jpg",
    description: "Custom porcelain veneers for a natural look",
  },
  {
    id: 6,
    title: "Crown Restoration",
    category: "restorative",
    before: "/images/gallery/crown-before.jpg",
    after: "/images/gallery/crown-after.jpg",
    description: "Same-day crown for damaged tooth",
  },
];

const categories = [
  { id: "all", label: "All Cases" },
  { id: "cosmetic", label: "Cosmetic" },
  { id: "restorative", label: "Restorative" },
  { id: "orthodontics", label: "Orthodontics" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Smile Gallery
          </h1>
          {/* <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See the transformative results we achieve for our patients
          </p> */}
        </div>
      </section>

      {/* Gallery */}
      <Section background="white">
        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-secondary hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="relative">
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={item.before}
                      alt={`${item.title} - Before`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.after}
                      alt={`${item.title} - After`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                    <span className="absolute bottom-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary mt-1">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={selectedItem.before}
                  alt={`${selectedItem.title} - Before`}
                  fill
                  className="object-cover"
                  sizes="600px"
                />
                <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg">
                  Before
                </span>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={selectedItem.after}
                  alt={`${selectedItem.title} - After`}
                  fill
                  className="object-cover"
                  sizes="600px"
                />
                <span className="absolute bottom-4 right-4 bg-secondary text-white px-3 py-1 rounded-lg">
                  After
                </span>
              </div>
            </div>
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-white/80">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schedule a consultation to discuss how we can help you achieve your dream smile.
          </p>
          <Button href="/book-appointment" variant="secondary" size="lg">
            Book Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
