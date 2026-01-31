import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent } from "@/content";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: aboutContent.overview.pageTitle,
  description: aboutContent.overview.pageDescription,
};


export default function AboutPage() {
  const { dentist, team, clinic, overview } = aboutContent;
  const teamPreviewCount = overview.teamSection?.previewCount ?? 4;
  const teamPreviewMembers = team.members.slice(0, teamPreviewCount);
  const qualificationsIcon = overview.qualificationsIcon as
    | { src: string; alt: string }
    | undefined;
  const placeholders = overview.placeholderLabels as
    | {
      qualificationsIconAlt?: string;
      doctorImage?: string;
      genericImage?: string;
      frontDeskLine1?: string;
      frontDeskLine2?: string;
    }
    | undefined;
  const decorativeImage = (dentist.hero as { decorativeImage?: string }).decorativeImage;

  const hygienistsSection = overview.staffSections?.find(
    (s) => s.id === "hygienists",
  );
  const frontDeskSection = overview.staffSections?.find(
    (s) => s.id === "front-desk-support",
  );
  const hygienistsImage = (
    hygienistsSection as { image?: string } | undefined
  )?.image;
  const frontDeskImage = (
    frontDeskSection as { image?: string } | undefined
  )?.image;

  const missionValues = overview.missionValuesSection;
  const technologySection = overview.technologySection;

  return (
    <>
      <section className="py-10 md:py-14 bg-accent-3" >
        <div className="section-container">
          <h1 className="heading-2 text-center">
            {dentist.pageTitle}
          </h1>
        </div>
      </section>
      <section   className="custom-gradient-to-br">
        <div className="section-container">

          {/* Mobile-specific two-column hero layout */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-1">
              <h3 className="heading-3 mb-2">
                <span className="text-primary"> {dentist.hero.displayName ?? dentist.hero.title}</span>
              </h3>
              <p className="subheading text-(--text-primary) mb-4">
                {dentist.hero.role ?? ""}
              </p>

              <p className="body-text text-sm mb-4">
                {dentist.bio.content[0]}
              </p>
            </div>

            {/* Right Image */}
            <div className="col-span-1 flex justify-center">
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80">
                <div className="absolute inset-0 left-6 z-0 pointer-events-none">
                  <Image
                    src={decorativeImage ?? "/images/about/polygon.png"}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 80vw, 320px"
                    priority
                    aria-hidden
                  />
                </div>
                {/* Decorative plus icons for mobile */}
                <span className="absolute -left-3 top-6 text-primary text-2xl md:text-3xl font-bold select-none">+</span>
                <span className="absolute -right-3 bottom-4 text-primary text-2xl md:text-3xl font-bold select-none">+</span>

                <div className="relative z-10 rounded-3xl w-full h-full overflow-hidden">
                  {dentist.hero.image ? (
                    <Image
                      src={dentist.hero.image}
                      alt={dentist.hero.displayName ?? dentist.hero.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 300px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <span className="muted-text">{placeholders?.doctorImage ?? "Doctor Image"}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section   className="custom-gradient-to-l py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Image/Icon */}
            <div className="flex justify-center">
              <div className="w-72 h-72 rounded-2xl flex items-center justify-center">
                <div className="text-center muted-text">
                  {qualificationsIcon?.src ? (
                    <div className="mb-4 flex justify-center">
                      <Image
                        src={qualificationsIcon.src}
                        alt={qualificationsIcon.alt}
                        width={250}
                        height={250}
                        className=""
                        priority
                      />
                    </div>
                  ) : (
                    <div className="text-6xl mb-4">📚</div>
                  )}
                  {/* <span>{qualificationsIcon?.alt ?? placeholders?.qualificationsIconAlt ?? "Qualifications Icon"}</span> */}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h3 className="heading-3 mb-6">
                {dentist.qualifications.title}
              </h3>

              <ul className="space-y-1">
                {dentist.qualifications.items.map((qual, index) => (
                  <li key={index} className="flex gap-3 body-text">
                    <span className="text-primary font-bold! min-w-fit">●</span>
                    <span className="text-black font-semibold">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section   className="">
          <h3 className="heading-3 text-center py-12 bg-accent-3">
            {overview.teamSection.title}
          </h3>
        <div className="custom-gradient-to-l">
          <h4 className="heading-3 text-center text-primary py-12">
            <span className="text-primary">{overview.teamSection.subtitle}</span>

          </h4>

          <div className="section-container space-y-16">
            {teamPreviewMembers.map((member, index) => (
              <article key={index} className="space-y-6">
                {/* Alternating layout: image and text very close (tight horizontal spacing) */}
                <div className={`grid gap-4 md:gap-6 items-start ${index % 2 === 1 ? 'md:grid-cols-[1fr_auto]' : 'md:grid-cols-[auto_1fr]'}`}>
                  {/* Image */}
                  <div className={`flex shrink-0 ${index % 2 === 1 ? 'md:order-2 justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                    <div className="relative w-64 h-56 sm:w-72 sm:h-56 md:w-80 md:h-60 bg-gray-300 rounded-lg overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, 320px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="muted-text text-center">{member.role}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1 text-center md:text-right' : 'text-center md:text-left'}>
                    <h4 className="heading-2 text-secondary! uppercase tracking-wide mb-4">
                      {member.name}
                    </h4>
                    <p className="body-text text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {hygienistsSection ? (
        <section   className="custom-gradient-to-l">
          <div className="section-container py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
                            <div>
                <h3 className="heading-3 text-primary! mb-6">
                  {hygienistsSection.title}
                </h3>

                <p className="body-text text-sm mb-6">
                  {hygienistsSection.description}
                </p>

                <ul className="space-y-2! text-sm">
                  {hygienistsSection.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 body-text">
                      <span className="text-primary font-bold">●</span>
                      <span className="font-semibold">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Right Image */}
              <div className="flex justify-center">
                <div className="relative w-80 h-64 bg-gray-300 rounded-lg overflow-hidden">
                  {hygienistsImage ? (
                    <Image
                      src={hygienistsImage}
                      alt={hygienistsSection.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 320px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="muted-text">{hygienistsSection.imageAlt}</span>
                    </div>
                  )}
                </div>
              </div>


            </div>
          </div>
        </section>
      ) : null}
      {frontDeskSection ? (
        <section   className="custom-gradient-to-l">
          <div className="section-container py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
                            <div className="order-1 md:order-1">
                <h3 className="heading-3 text-primary! mb-6">
                  {frontDeskSection.titleLines?.[0] ?? placeholders?.frontDeskLine1 ?? "Front Desk &"}
                  <br />
                  {frontDeskSection.titleLines?.[1] ?? placeholders?.frontDeskLine2 ?? "Support Staff"}
                </h3>

                <p className="body-text text-sm mb-6">
                  {frontDeskSection.description}
                </p>

                {/* <div className="flex gap-2 items-center mb-6">
                  <span className="text-primary text-xl">+</span>
                </div> */}

                <ul className="space-y-2! text-sm">
                  {frontDeskSection.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-3 body-text">
                      <span className="text-primary font-bold">●</span>
                      <span className="font-semibold">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center order-2 md:order-2">
                {/* Front desk image with reference-style background: light upper area, teal lower shape, corner plus signs */}
                <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden">
                  <span
                    className="absolute top-15 md:top-25 left-4 z-20 text-primary text-2xl md:text-3xl font-bold select-none"
                    aria-hidden
                  >
                    +
                  </span>
                  <span
                    className="absolute top-20 md:top-30 right-4 z-20 text-primary text-2xl md:text-3xl font-bold select-none"
                    aria-hidden
                  >
                    +
                  </span>
                  {/* Teal rounded shape behind lower portion of image */}
                  <div
                    className="absolute bottom-5 left-0 right-0 h-[40%] rounded-t-4xl bg-primary"
                    aria-hidden
                  />
                  {/* Image container above the teal shape */}
                  <div className="absolute inset-0 z-10 flex items-end justify-center pb-2">
                    <div className="relative w-full h-full rounded-t-xl overflow-hidden">
                      {frontDeskImage ? (
                        <Image
                          src={frontDeskImage}
                          alt={frontDeskSection.imageAlt}
                          fill
                          className="object-contain object-bottom"
                          sizes="(max-width: 768px) 90vw, 448px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <span className="muted-text">{frontDeskSection.imageAlt}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}

            </div>
          </div>
        </section>
      ) : null}
      <section   className="custom-gradient-to-l py-16">
        <div className="">
          <h3 className="heading-2 text-center  bg-accent-3 py-16">
            {missionValues.title}
          </h3>

          <div className="section-container grid md:grid-cols-2 gap-12 items-center custom-gradient-to-l">
            {/* Left Content */}
            <div className="">
              <h4 className="heading-3 text-primary! font-bold mb-6">
                {missionValues.subtitle}
              </h4>

              <p className="body-text text-sm mb-8">
                {missionValues.mission}
              </p>

              <div className="mb-8">
                <h5 className="heading-3 font-semibold text-(--text-primary) mb-3">
                  {missionValues.coreValuesLabel}
                </h5>
                <ul className="space-y-2">
                  {clinic.values.items.map((value, index) => (
                    <li key={index} className="flex gap-3 body-text text-sm">
                      <span className="text-primary font-bold">✓</span>
                      <span className="font-semibold">{value.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Images */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[missionValues.images?.[0], missionValues.images?.[1]].map(
                  (src, idx) => (
                    <div
                      key={idx}
                      className="relative w-32 h-40 bg-gray-300 rounded-lg overflow-hidden"
                    >
                      {src ? (
                        <Image
                          src={src}
                          alt={`${missionValues.title} image ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="muted-text text-xs text-center">
                            {placeholders?.genericImage ?? "Image"}
                          </span>
                        </div>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section   className="custom-gradient-to-l py-16">
        <div className="">
          <h3 className="heading-2 text-center bg-accent-3 py-16">
            {technologySection.title}
          </h3>
          <p className="body-text text-center text-sm mb-12 max-w-7xl mx-auto">
            {technologySection.description}
          </p>
          <div className="space-y-12! section-container">
            {clinic.technology.items.map((tech: { title: string; description: string; image?: string; imageAlt?: string }, index) => {
              const isEven = index % 2 === 0;
              const imageSrc = tech.image;
              const imageAlt = tech.imageAlt ?? technologySection.imageAlt;
              return (
                <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className={`flex justify-center ${isEven ? "" : "md:order-2"}`}>
                    <div className="relative w-72 h-40 md:w-80 md:h-44 bg-gray-200 rounded-xl overflow-hidden">
                      {imageSrc ? (
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 90vw, 320px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="muted-text text-xs text-center">{technologySection.imageAlt ?? placeholders?.genericImage ?? "Image"}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "" : "md:order-1"}>
                    <h4 className="heading-3 font-semibold text-(--text-primary) mb-2">
                      {tech.title}
                    </h4>
                    <p className="body-text text-sm">
                      {tech.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="custom-gradient-to-l py-16">
        <CTABanner />
      </section>
      

    </>
  );
}
