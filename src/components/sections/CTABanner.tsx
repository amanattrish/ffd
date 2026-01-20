import Image from "next/image";
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
  const displayDescription = description || content.description || "Give us a call. We are here to answer your questions";
  const displayPhone = phone || content.phone;

  return (
    <section className="relative py-12 md:py-28 mb-8 md:mb-12 lg:mb-16">
      <div className="container mx-auto px-4">
        {/* CTA Banner wrapper - allows image overflow */}
        <div className="relative w-full">
          {/* Banner with rounded corners */}
          <div className="relative w-full rounded-4xl shadow-xl overflow-hidden h-56">
            <div className="flex flex-col lg:flex-row justify-center">
              {/* Left section - Dark teal background with text (2/3 width) */}
              <div className="bg-primary lg:w-2/3 px-8 md:px-12 lg:px-16 flex flex-col gap-2 pt-4 relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white! mb-4 md:mb-6">
                  {displayTitle}
                </h2>
                {displayDescription && (
                  <p className="text-white! text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
                    {displayDescription}
                  </p>
                )}
                {showPhone && displayPhone && (
                  <a
                    href={`tel:${displayPhone.replace(/[^0-9+]/g, "")}`}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white! hover:opacity-90 transition-opacity inline-block"
                  >
                    {displayPhone}
                  </a>
                )}
              </div>

              {/* Right section - Spacer for image (1/3 width) */}
              <div className="lg:w-1/3 bg-primary relative min-h-[250px]"></div>
            </div>
          </div>

          {/* Image positioned to extend beyond banner boundaries */}
          <div className="absolute right-0 lg:right-4 top-12 -translate-y-1/2 w-full lg:w-1/3 max-w-sm lg:max-w-md h-[400px] z-20">
            <div className="relative w-full h-full">
              <Image
                src="/images/dentist-doing-check-up-patient.png"
                alt="Dental care professional examining patient"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
