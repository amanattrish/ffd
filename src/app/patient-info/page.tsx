import Link from "next/link";
import { ArrowRight, FileText, CreditCard, HelpCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import { patientInfoContent } from "@/content";

const iconMap = { newPatients: FileText, insurance: CreditCard, faqs: HelpCircle } as const;
const colorMap = {
  newPatients: "var(--color-primary)",
  insurance: "var(--color-secondary)",
  faqs: "var(--color-accent-1)",
} as const;

export const metadata = {
  title: patientInfoContent.overview.pageTitle,
  description: patientInfoContent.overview.pageDescription,
};

export default function PatientInfoPage() {
  const { overview } = patientInfoContent;
  const cards = overview.cards;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#F2FDFF] to-white py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {overview.heroTitle}
          </h1>
        </div>
      </section>

      {/* Info Cards */}
      <Section background="white">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item) => {
            const IconComponent = iconMap[item.key as keyof typeof iconMap];
            const color = colorMap[item.key as keyof typeof colorMap];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <IconComponent
                    className="w-7 h-7"
                    style={{ color }}
                  />
                </span>
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-secondary mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold">
                  {overview.learnMoreLabel}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Need More Information?
          </h2>
          <p className="text-secondary mb-8 max-w-xl mx-auto">
            Our friendly staff is happy to answer any questions you may have about your visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
