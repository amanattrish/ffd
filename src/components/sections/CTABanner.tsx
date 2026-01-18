import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

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
    <section className="bg-[var(--color-primary)] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {displayTitle}
        </h2>
        {displayDescription && (
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            {displayDescription}
          </p>
        )}
        {showPhone && displayPhone && (
          <a
            href={`tel:${displayPhone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-8 hover:text-[var(--color-secondary)] transition-colors"
          >
            <Phone className="w-8 h-8" />
            {displayPhone}
          </a>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {displayPrimaryBtn && (
            <Button
              href={displayPrimaryBtn.href}
              variant="secondary"
              size="lg"
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
    </section>
  );
}
