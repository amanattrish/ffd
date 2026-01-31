import Link from "next/link";
import { Star } from "lucide-react";
import { testimonialsContent, siteConfig } from "@/content";
import CTABanner from "@/components/sections/CTABanner";
import { GoogleIcon } from "@/components/svgs/GoogleIcon";
import { ReviewPlatformIcon } from "@/components/svgs/ReviewPlatformIcon";

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
      <section className="py-10 md:py-14 custom-gradient-to-br">
        <div className="section-container">
          <h1 className="heading-2 text-center mb-10">
            {mainTitle}
          </h1>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
            <div>
              <h2 className="heading-3 text-primary mb-6">
                <span className="text-primary">{reviewsHeading}{" "}</span>
                <span className="text-secondary">{reviewsHighlight}</span>
              </h2>

              <div className="space-y-5">
                {testimonials.map((t) => (
                  <article
                    key={t.id}
                    className="card rounded-xl p-5 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <GoogleIcon className="w-8 h-8 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 justify-center">
                          <span className="body-text font-bold text-(--text-primary)">{t.name}</span>
                          <span className="helper-text text-muted">{t.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-3 justify-center">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                        </div>
                        <p className="body-text text-(--text-secondary) leading-relaxed">{t.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-muted-lighter p-6 border border-(--border-color) rounded-xl">
                <h3 className="heading-4 text-center mb-3">
                  {shareSection.title}
                </h3>
                <div className="flex gap-5 mb-4 justify-center">
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
                      className="btn flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
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

                <h3 className="heading-4 mt-6 mb-4">
                  {services.title}
                </h3>
                <ul className="space-y-0 mb-4">
                  {services.items.map((s) => (
                    <li
                      key={s}
                      className="py-2.5 px-3 helper-text text-(--text-secondary) border-b border-(--border-color) last:border-0"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div
                  className="p-4 text-white rounded-lg bg-primary"
                  style={{ backgroundColor: scheduleBg }}
                >
                  <h3 className="heading-4 text-center mb-4">
                    {scheduleSection.title}
                  </h3>
                  <Link
                    href={scheduleSection.buttonHref}
                    className="btn inline-flex items-center justify-center w-full mb-4 py-3 px-6 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: btnBg, color: btnText }}
                  >
                    {scheduleSection.buttonLabel}
                  </Link>
                  <p className="body-text font-bold text-white">{scheduleSection.callLabel}</p>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="subheading-2 font-bold text-white hover:opacity-90 block"
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
