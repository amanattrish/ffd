import type { Metadata } from "next";
import Section, { SectionHeader } from "@/components/ui/Section";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/content";
import type { TeamMember } from "@/types/content";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Get to know the friendly and experienced dental team at Freeport Family Dentistry.",
};

export default function MeetTheTeamPage() {
  const { team } = aboutContent;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {team.hero.title}
            </h1>
            <p className="text-xl text-white/80 mb-2">{team.hero.subtitle}</p>
            <p className="text-white/70">{team.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <Section background="gray">
        <SectionHeader
          title="Our Dental Professionals"
          description="Each member of our team is dedicated to providing you with the best possible care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.members.map((member) => (
            <TeamMemberCard key={member.id} member={member as TeamMember} />
          ))}
        </div>
      </Section>

      {/* Join Our Team CTA */}
      <Section background="white">
        <div className="bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Join Our Team
          </h2>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented and compassionate dental professionals to join our growing team. If you&apos;re passionate about patient care, we&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us About Opportunities
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Meet Our Team in Person?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Schedule your visit today and experience our warm, welcoming environment.
          </p>
          <Button
            href="/book-appointment"
            variant="secondary"
            size="lg"
          >
            Book Your Appointment
          </Button>
        </div>
      </Section>
    </>
  );
}
