import Link from "next/link";
import { FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import { legalContent } from "@/content";

export const metadata = {
  title: legalContent.termsOfService.pageTitle,
  description: legalContent.termsOfService.pageDescription,
};

export default function TermsOfServicePage() {
  const { termsOfService } = legalContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-white" />
            <span className="text-white/80 text-sm">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {termsOfService.pageTitle}
          </h1>
          <p className="text-white/80">
            Last updated: {termsOfService.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {termsOfService.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {section.title}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-[var(--text-primary)] mb-4">
              Related Legal Documents
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy-policy"
                className="text-[var(--color-primary)] hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/hipaa"
                className="text-[var(--color-primary)] hover:underline"
              >
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
