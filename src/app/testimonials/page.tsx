import Link from "next/link";
import { Star } from "lucide-react";
import { testimonialsContent, siteConfig } from "@/content";
import CTABanner from "@/components/sections/CTABanner";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ReviewPlatformIcon({
  platform,
  className,
}: {
  platform: string;
  className?: string;
}) {
  switch (platform) {
    case "yelp":
      return <YelpIcon className={className} />;
    case "google":
      return <GoogleIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    default:
      return null;
  }
}

export const metadata = {
  title: testimonialsContent.pageTitle,
  description: testimonialsContent.pageDescription,
};

export default function TestimonialsPage() {
  const { phone, reviews } = siteConfig;
  const {
    mainTitle,
    reviewsHeading,
    reviewsHighlight,
    testimonials,
    shareSection,
    services,
    scheduleSection,
    cta,
  } = testimonialsContent;

  const scheduleBg = scheduleSection.scheduleBgColor ?? "#2973AE";
  const btnBg = scheduleSection.buttonBgColor ?? "#8BC34A";
  const btnText = scheduleSection.buttonTextColor ?? "#1a1a1a";

  return (
    <>
      <section className="bg-linear-to-br from-[#F2FDFF] to-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl! md:text-4xl font-bold text-gray-900 !mb-10">
            {mainTitle}
          </h1>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="text-2xl! font-bold text-primary !mb-6">
                {reviewsHeading}{" "}
                <span className="text-secondary">{reviewsHighlight}</span>
              </h2>

              <div className="space-y-5">
                {testimonials.map((t) => (
                  <article
                    key={t.id}
                    className="bg-white rounded-xl p-5 md:p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <GoogleIcon className="w-8 h-8 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 !mb-2 justify-center">
                          <span className="font-bold text-gray-900">{t.name}</span>
                          <span className="text-gray-500 text-sm">{t.date}</span>
                        </div>
                        <div className="flex gap-0.5 !mb-3 justify-center">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{t.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>


            <aside className="lg:sticky lg:top-24 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 !mb-3 text-center">
                  {shareSection.title}
                </h3>
                <div className="flex gap-5 !mb-4 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {shareSection.buttons.map((btn) => (
                    <a
                      key={btn.platform}
                      href={reviews?.[btn.platform as keyof typeof reviews] ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: btn.bgColor }}
                    >
                      <ReviewPlatformIcon
                        platform={btn.platform}
                        className="w-5 h-5"
                      />
                      {btn.label}
                    </a>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 !mb-4 mt-6! mb-4!">
                  {services.title}
                </h3>
                <div className="mb-4">
                <ul className="space-y-4!">
                  {services.items.map((s) => (
                    <li
                      key={s}
                      className="py-2.5 px-3 text-gray-800 text-sm border-b border-gray-200 last:border-0"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                </div>
              <div
                className="p-4 text-white"
                style={{ backgroundColor: scheduleBg }}
              >
                <h3 className="text-xl font-bold text-center !mb-4">
                  {scheduleSection.title}
                </h3>
                <Link
                  href={scheduleSection.buttonHref}
                  className="inline-flex items-center justify-center w-full !mb-4 py-3 px-6 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: btnBg, color: btnText }}
                >
                  {scheduleSection.buttonLabel}
                </Link>
                <p className="font-bold text-white">{scheduleSection.callLabel}</p>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                  className="text-lg font-bold text-white hover:opacity-90 block"
                >
                  {phone}
                </a>
              </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner description={cta.description} />
    </>
  );
}
