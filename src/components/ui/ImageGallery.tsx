"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={clsx("grid gap-4", columnClasses[columns])}>
        {images.map((image, index) => (
          <button
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium text-sm">{image.title}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Image Title */}
          {images[selectedIndex].title && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-lg font-medium">
              {images[selectedIndex].title}
            </div>
          )}
        </div>
      )}
    </>
  );
}
