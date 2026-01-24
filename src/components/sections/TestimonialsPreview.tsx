import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { homeContent } from "@/content";

// Google G Logo SVG
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function TestimonialsPreview() {
  const { testimonials } = homeContent;

  return (
    <Section background="white" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-[var(--color-accent-1)] text-3xl font-light opacity-30 hidden lg:block">+</div>
      <div className="absolute bottom-20 right-10 text-[var(--color-accent-1)] text-2xl font-light opacity-30 hidden lg:block">+</div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <span className="inline-block text-secondary font-medium text-sm uppercase tracking-wider mb-2">
            {testimonials.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {testimonials.title}
          </h2>
          <p className="text-secondary mt-2 max-w-xl">
            Real stories from our valued patients who trust us with their smiles
          </p>
        </div>
        <Link
          href={testimonials.cta.href}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          View All Reviews
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.items.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow duration-300"
          >
            {/* Google Icon Badge */}
            <div className="absolute top-5 right-5">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                <GoogleIcon className="w-5 h-5" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonial.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-black mb-6 leading-relaxed line-clamp-4">
              {testimonial.content}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">Verified Patient</p>
                </div>
              </div>

              {/* Quote mark */}
              <div className="text-[var(--color-accent-1)] text-6xl font-serif leading-none opacity-30">
                &rdquo;
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
