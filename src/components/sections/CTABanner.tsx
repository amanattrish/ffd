import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

// Decorative tooth SVG
function ToothDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 250" fill="none">
      <path
        d="M100 10 C140 10 170 40 170 80 C170 120 160 160 150 200 C145 220 130 240 100 240 C70 240 55 220 50 200 C40 160 30 120 30 80 C30 40 60 10 100 10Z"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  );
}

interface CTABannerProps {
  title?: string;
  description?: string;
  phone?: string;
  showPhone?: boolean;
  primaryButton?: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

export default function CTABanner({
  title,
  description,
  phone,
  showPhone = true,
  primaryButton,
  secondaryButton,
}: CTABannerProps) {
  const content = homeContent.cta;
  const displayTitle = title || content.title;
  const displayDescription = description || content.description;
  const displayPhone = phone || content.phone;
  const displayPrimaryBtn = primaryButton || content.buttons.primary;
  const displaySecondaryBtn = secondaryButton || content.buttons.secondary;

  return (
    <section className="relative bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent-1)] to-[var(--color-accent-2)] py-16 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <ToothDecoration className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-48 text-white hidden lg:block" />
      <ToothDecoration className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-48 text-white hidden lg:block" />

      {/* Decorative + signs */}
      <div className="absolute top-8 left-1/4 text-white/20 text-4xl font-light hidden lg:block">+</div>
      <div className="absolute bottom-8 right-1/4 text-white/20 text-4xl font-light hidden lg:block">+</div>

      {/* Background pattern circles */}
      <div className="absolute top-4 right-1/3 w-16 h-16 rounded-full border border-white/10 hidden lg:block" />
      <div className="absolute bottom-4 left-1/3 w-12 h-12 rounded-full border border-white/10 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left max-w-xl">
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
              Free Consultation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {displayTitle}
            </h2>
            {displayDescription && (
              <p className="text-white/90 text-lg mb-6">
                {displayDescription}
              </p>
            )}
          </div>

          {/* Right content - Phone and buttons */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            {showPhone && displayPhone && (
              <a
                href={`tel:${displayPhone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-2xl md:text-3xl font-bold text-white hover:bg-white/20 transition-colors"
              >
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </span>
                {displayPhone}
              </a>
            )}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {displayPrimaryBtn && (
                <Button
                  href={displayPrimaryBtn.href}
                  variant="secondary"
                  size="lg"
                  className="shadow-lg"
                >
                  {displayPrimaryBtn.label}
                </Button>
              )}
              {displaySecondaryBtn && (
                <Button
                  href={displaySecondaryBtn.href}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                >
                  {displaySecondaryBtn.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
