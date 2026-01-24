import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Section from "@/components/ui/Section";
import NewPatientForm from "@/components/ui/NewPatientForm";
import CTABanner from "@/components/sections/CTABanner";
import { patientInfoContent, homeContent } from "@/content";

export const metadata = {
  title: patientInfoContent.newPatients.pageTitle,
  description: patientInfoContent.newPatients.pageDescription,
};

export default function NewPatientsPage() {
  const { newPatients } = patientInfoContent;
  const { hero, mission, expect, firstVisit, form, cta } = newPatients;

  return (
    <>
      {/* Hero - Patients Info / New Patients */}
      <section className="relative bg-linear-to-br from-[#F2FDFF] to-white py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* <Link
            href="/patient-info"
            className="inline-flex items-center text-primary/80 hover:text-primary !mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Patient Info
          </Link> */}
          <h1 className="text-2xl! md:text-3xl! font-bold text-[var(--text-primary)] text-center !mb-2">
            {hero.sectionTitle}
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
            {/* Left: New Patients title + description */}
            <div className="flex-1 lg:min-w-0 text-center lg:text-left">
              <h2 className="text-3xl! md:text-4xl! lg:text-5xl! font-bold !mb-6 lg:!mb-8">
                <span className="text-primary">{hero.titleFirst}</span>{" "}
                <span className="text-secondary">{hero.titleSecond}</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-3xl! mx-auto lg:mx-0 leading-relaxed !mb-8 lg:!mb-0">
                {hero.description}
              </p>
            </div>

            {/* Right: Image with teal accent bar — rounded only on top-right and bottom-right */}
            <div className="relative w-full lg:w-[45%] lg:max-w-lg h-50 lg:flex-shrink-0 rounded-tr-2xl rounded-br-2xl overflow-hidden">
              <div className="relative w-full h-full aspect-video">
                <Image
                  src={hero.image}
                  alt="Family at Freeport Family Dentistry"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute right-0 top-0 -bottom-0 w-1 md:w-2 bg-primary" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Practice's Mission */}
      <section className="bg-linear-to-br from-white to-[#F2FDFF]">
        <div className="max-w-7xl! mx-auto ">
          <h2 className="text-xl! md:text-2xl! font-bold text-[var(--text-primary)] !mb-4">
            {mission.title}
          </h2>
          <p className="text-[var(--text-secondary)] !mb-4 leading-relaxed">
            {mission.intro}
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[var(--text-secondary)]">
            {mission.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Every Patient Can Expect */}
      <Section background="gray">
        <div className="max-w-7xl! mx-auto">
          <h2 className="text-xl! md:text-2xl! font-bold text-[var(--text-primary)] !mb-4">
            {expect.title}
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            {expect.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* First Visit Requirements */}
      <Section background="white">
        <div className="max-w-7xl! mx-auto">
          <h2 className="text-xl! md:text-2xl! font-bold text-[var(--text-primary)] !mb-4">
            {firstVisit.title}
          </h2>
          <p className="text-[var(--text-secondary)] !mb-4 leading-relaxed">
            {firstVisit.intro}
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[var(--text-secondary)]">
            {firstVisit.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* New Patients? Contact Form */}
      <Section background="gray">
        <div className="max-w-7xl! mx-auto">
          <h2 className="text-xl! md:text-2xl! font-bold text-[var(--text-primary)] !mb-6">
            {form.title}
          </h2>
          <NewPatientForm />
        </div>
      </Section>

      {/* Get a FREE Consultation CTA Banner */}
      <CTABanner
        title={cta.title}
        description={cta.description}
        phone={homeContent.cta.phone}
        showPhone={true}
      />
    </>
  );
}
