import Link from "next/link";
import { ArrowLeft, Check, Download, Clock, FileText, Stethoscope, ClipboardList } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { patientInfoContent } from "@/content";

export const metadata = {
  title: patientInfoContent.newPatients.pageTitle,
  description: patientInfoContent.newPatients.pageDescription,
};

const expectIcons = [ClipboardList, Stethoscope, FileText, Check];

export default function NewPatientsPage() {
  const { newPatients } = patientInfoContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/patient-info"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Patient Info
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {newPatients.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{newPatients.hero.subtitle}</p>
          <p className="text-white/80 max-w-2xl">{newPatients.hero.description}</p>
        </div>
      </section>

      {/* What to Expect */}
      <Section background="white">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          {newPatients.whatToExpect.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newPatients.whatToExpect.items.map((item, index) => {
            const IconComponent = expectIcons[index] || Check;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <span className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* First Visit Requirements */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </span>
            <h2 className="text-2xl font-bold text-primary">
              {newPatients.firstVisit.title}
            </h2>
          </div>
          <p className="text-secondary mb-6">
            {newPatients.firstVisit.description}
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-primary mb-4">
              Please bring the following:
            </h3>
            <ul className="space-y-3">
              {newPatients.firstVisit.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Patient Forms */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">
            {newPatients.paperwork.title}
          </h2>
          <p className="text-secondary text-center mb-10">
            {newPatients.paperwork.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {newPatients.paperwork.forms.map((form, index) => (
              <a
                key={index}
                href={form.downloadUrl}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-primary group-hover:text-primary transition-colors">
                    {form.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] truncate">
                    {form.description}
                  </p>
                </div>
                <Download className="w-5 h-5 text-primary flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {newPatients.cta.title}
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            {newPatients.cta.description}
          </p>
          <Button href={newPatients.cta.button.href} variant="secondary" size="lg">
            {newPatients.cta.button.label}
          </Button>
        </div>
      </section>
    </>
  );
}
