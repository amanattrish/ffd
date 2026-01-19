import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Users, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/content";

export const metadata: Metadata = {
  title: "About the Dentist",
  description: "Meet Dr. John Smith, our experienced dentist at Freeport Family Dentistry. Learn about his qualifications, experience, and approach to dental care.",
};

export default function AboutDentistPage() {
  const { dentist } = aboutContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary)]/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--color-secondary)] font-medium mb-2">
                {dentist.pageTitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {dentist.hero.title}
              </h1>
              <p className="text-xl text-white/80">{dentist.hero.subtitle}</p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/40 to-transparent z-10" />
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex items-center justify-center">
                  <span className="text-white text-8xl font-bold opacity-30">Dr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
            {dentist.bio.title}
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
            {dentist.bio.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Qualifications & Associations */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {dentist.qualifications.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {dentist.qualifications.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Associations */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {dentist.associations.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {dentist.associations.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Awards */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              {dentist.awards.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {dentist.awards.items.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent-1)]/5 rounded-xl p-6 text-center border border-[var(--color-primary)]/10"
              >
                <Award className="w-8 h-8 text-[var(--color-secondary)] mx-auto mb-3" />
                <p className="text-[var(--text-primary)] font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy Quote */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            {dentist.philosophy.title}
          </h2>
          <p className="text-xl text-white/90 italic leading-relaxed">
            &ldquo;{dentist.philosophy.content}&rdquo;
          </p>
          <p className="mt-6 text-white/60">- Dr. John Smith</p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Meet Dr. Smith?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Schedule your appointment today and experience personalized dental care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/book-appointment" size="lg">
              Book Appointment
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
