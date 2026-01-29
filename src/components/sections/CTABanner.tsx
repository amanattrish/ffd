import Image from "next/image";
import { homeContent } from "@/content";
import { Section } from "../ui";

interface CTABannerProps {
  title?: string;
  description?: string;
  phone?: string;
  showPhone?: boolean;
}

export default function CTABanner({
  title,
  description,
  phone,
  showPhone = true,
}: CTABannerProps) {
  const content = homeContent.cta;

  const displayTitle = title || content.title;
  const displayDescription =
    description ||
    content.description ||
    "Give us a call. We are here to answer your questions";
  const displayPhone = phone || content.phone;

  return (
    <Section background="transparent" className="relative mt-32">
      <div className="bg-primary relative md:gap-4 gap-2 grid md:grid-cols-[70%_30%] sm:grid-cols-[60%_40%] grid-cols-1 rounded-2xl">
        <div className="flex flex-col md:gap-6 sm:gap-4 gap-2 p-12 lg:max-w-2xl md:max-w-lg max-w-md">
            <div className="sm:hidden relative w-full aspect-square">
            <Image
            src={content.image || "/images/dentist-doing-check-up-patient.png"}
            alt="Dental care professional examining patient"
            fill
            className="object-contain object-top-left"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
          </div>
          <h2 className="heading-2 font-bold! text-white!">
            {displayTitle}
          </h2>

          {displayDescription && (
            <p className="body-text sm:max-w-xl max-w-lg text-muted-lighter!">
              {displayDescription}
            </p>
          )}

          {showPhone && displayPhone && (
            <a
              href={`tel:${displayPhone.replace(/[^0-9+]/g, "")}`}
              className="heading-2 font-bold text-white! hover:opacity-90"
            >
              {displayPhone}
            </a>
          )}
        </div>
        <div className="hidden sm:block sm:absolute aspect-square lg:h-124 md:h-116 sm:h-112 h-100 lg:-bottom-7.5 md:-bottom-7.25 sm:-bottom-6.75 right-0">
  <Image
    src={content.image || "/images/dentist-doing-check-up-patient.png"}
    alt="Dental care professional examining patient"
    fill
    className="object-contain object-bottom-right"
    sizes="(max-width: 1024px) 100vw, 33vw"
    priority
  />
</div>

      </div>
    </Section>
  );
}
