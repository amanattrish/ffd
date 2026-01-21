import type { Metadata } from "next";
import Image from "next/image";
import { Check, Sparkles, Heart, Shield, Lightbulb, Target } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/content";

export const metadata: Metadata = {
  title: "Our Clinic",
  description: "Tour our modern dental facility and discover why patients choose Freeport Family Dentistry for their oral health needs.",
};

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Patient-Centered Care": Heart,
  "Excellence": Target,
  "Integrity": Shield,
  "Compassion": Heart,
  "Innovation": Lightbulb,
};

export default function OurClinicPage() {
  const { clinic } = aboutContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {clinic.hero.title}
            </h1>
            <p className="text-xl text-white/80 mb-2">{clinic.hero.subtitle}</p>
            <p className="text-white/70">{clinic.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {clinic.mission.title}
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            {clinic.mission.content}
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray">
        <SectionHeader
          title={clinic.values.title}
          description="The principles that guide everything we do."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinic.values.items.map((value, index) => {
            const Icon = valueIcons[value.title] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-secondary text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Facility Section */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {clinic.facility.title}
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              {clinic.facility.description}
            </p>

            {/* Facility Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {clinic.facility.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-[var(--color-accent-1)]/20"
                >
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 260px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary/30 text-sm font-medium">
                        {image.alt}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {clinic.technology.title}
            </h2>
            <div className="space-y-4">
              {clinic.technology.items.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      {tech.title}
                    </h4>
                    <p className="text-sm text-secondary mt-1">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="accent">
        <SectionHeader
          title={clinic.whyChooseUs.title}
          description="Experience the difference at Freeport Family Dentistry."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {clinic.whyChooseUs.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-primary text-sm font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Visit Our Clinic?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Experience our modern facility and compassionate care firsthand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/book-appointment" variant="secondary" size="lg">
              Book Appointment
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
