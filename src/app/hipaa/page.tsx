import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { legalContent } from "@/content";

export const metadata = {
  title: legalContent.hipaa.pageTitle,
  description: legalContent.hipaa.pageDescription,
};

export default function HIPAAPage() {
  const { hipaa } = legalContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[var(--color-accent-1)] py-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
            <span className="text-white/80 text-sm">{legalContent.legalBreadcrumbLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {hipaa.pageTitle}
          </h1>
          <p className="text-white/80">
            Last updated: {hipaa.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          {/* HIPAA Badge */}
          <div className="bg-gradient-to-r from-primary/10 to-[var(--color-accent-1)]/10 rounded-2xl p-6 mb-10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-primary">{legalContent.hipaa.compliantTitle}</h2>
              <p className="text-secondary text-sm">
                {legalContent.hipaa.commitmentText}
              </p>
            </div>
          </div>

          <div className="prose prose-lg">
            {hipaa.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-secondary leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-primary mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-primary hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
