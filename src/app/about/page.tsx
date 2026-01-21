import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent } from "@/content";
import { Section } from "@/components/ui";

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
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#F2FDFF] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12!">
          {dentist.pageTitle}
        </h2>

        {/* Mobile-specific two-column hero layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 items-center">
          {/* Left Content */}
          <div className="col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-primary"> {dentist.hero.displayName ?? dentist.hero.title}</span>
            </h3>
            <p className="text-base md:text-lg text-black font-semibold mb-4">
              {dentist.hero.role ?? ""}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {dentist.bio.content[0]}
            </p>
          </div>

          {/* Right Image */}
          <div className="col-span-1 flex justify-center">
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80">
              <div className="absolute inset-0 left-6 z-0 pointer-events-none">
                <Image
                  src="/images/about/polygon.png"
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
                    <span className="text-gray-500">Doctor Image</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#F2FDFF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image/Icon */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                {qualificationsIcon?.src ? (
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={qualificationsIcon.src}
                      alt={qualificationsIcon.alt}
                      width={150}
                      height={150}
                      className=""
                      priority
                    />
                  </div>
                ) : (
                  <div className="text-6xl mb-4">📚</div>
                )}
                <span>{qualificationsIcon?.alt ?? "Qualifications Icon"}</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6!">
              {dentist.qualifications.title}
            </h3>

            <ul className="space-y-3">
              {dentist.qualifications.items.map((qual, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-teal-500 font-bold min-w-fit">●</span>
                  <span className="text-sm">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-12!">
          {overview.teamSection.title}
        </h3>
        <h4 className="text-center text-2xl font-bold text-teal-600 mb-12!">
          {overview.teamSection.subtitle}
        </h4>

        <div className="space-y-12">
          {teamPreviewMembers.map((member, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              {/* Image */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="relative w-64 h-80 bg-gray-300 rounded-lg overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 256px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 text-center">{member.role}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h5 className="text-lg font-bold text-teal-500 mb-3">
                  {member.name}
                </h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
        {hygienistsSection ? (
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
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
                  <span className="text-gray-500">{hygienistsSection.imageAlt}</span>
                </div>
              )}
            </div>
          </div>


          {/* Right Image */}
                    <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6!">
              {hygienistsSection.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6!">
              {hygienistsSection.description}
            </p>

            <ul className="space-y-2 text-sm">
              {hygienistsSection.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-teal-500 font-bold">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Section>
        ) : null}
        {frontDeskSection ? (
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md bg-gray-300 rounded-lg overflow-hidden h-64">
              {frontDeskImage ? (
                <Image
                  src={frontDeskImage}
                  alt={frontDeskSection.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 448px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">{frontDeskSection.imageAlt}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6!">
              {frontDeskSection.titleLines?.[0] ?? "Front Desk &"}
              <br />
              {frontDeskSection.titleLines?.[1] ?? "Support Staff"}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-6!">
              {frontDeskSection.description}
            </p>

            <div className="flex gap-2 items-center mb-6!">
              <span className="text-teal-500 text-xl">+</span>
            </div>

            <ul className="space-y-2 text-sm">
              {frontDeskSection.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <span className="text-teal-500 font-bold">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
        ) : null}
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-3xl font-bold text-gray-900 mb-12!">
          {missionValues.title}
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-2xl font-bold text-blue-500 mb-6!">
              {missionValues.subtitle}
            </h4>

            <p className="text-gray-700 text-sm leading-relaxed mb-8!">
              {missionValues.mission}
            </p>

            <div className="mb-8">
              <h5 className="font-bold text-gray-900 mb-3!">
                {missionValues.coreValuesLabel}
              </h5>
              <ul className="space-y-2">
                {clinic.values.items.map((value, index) => (
                  <li key={index} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>{value.title}</span>
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
                        <span className="text-gray-500 text-xs text-center">
                          Image
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
    </Section>
        <Section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center! text-3xl font-bold text-gray-900 mb-12!">
          {technologySection.title}
        </h3>
        <p className="text-center! text-gray-600 text-sm mb-12! max-w-7xl mx-auto">
          {technologySection.description}
        </p>
        <div className="space-y-12">
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
                        <span className="text-gray-500 text-xs text-center">{technologySection.imageAlt}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "" : "md:order-1"}>
                  <h4 className="font-bold text-gray-900 mb-2! text-lg">
                    {tech.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>

    </>
  );
}
