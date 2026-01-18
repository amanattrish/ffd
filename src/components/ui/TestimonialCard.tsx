import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, content, rating, image } = testimonial;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-[var(--text-secondary)] flex-grow mb-6 italic">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[var(--color-primary)] text-white font-semibold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-[var(--text-primary)]">{name}</p>
          <p className="text-sm text-[var(--text-muted)]">{role}</p>
        </div>
      </div>
    </div>
  );
}
