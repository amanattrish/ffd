import Section from "@/components/ui/Section";
import { legalContent } from "@/content";

export const metadata = {
  title: "Legal",
  description:
    "Privacy Policy, Terms of Service, Refund & Cancellation Policy, and HIPAA Compliance for Freeport Family Dentistry.",
};

const SECTIONS = [
  { id: "privacy-policy", key: "privacyPolicy" as const },
  { id: "terms-of-service", key: "termsOfService" as const },
  { id: "refund-cancellation", key: "refundCancellation" as const },
  { id: "hipaa", key: "hipaa" as const },
] as const;

/** Split title for two-tone: first part (with number) = primary, second part = secondary */
function splitTitle(title: string): { first: string; second: string } {
  const lastSpace = title.lastIndexOf(" ");
  if (lastSpace <= 0) return { first: title, second: "" };
  return { first: title.slice(0, lastSpace), second: " " + title.slice(lastSpace + 1) };
}

export default function LegalPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative py-12!" background="gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="heading-3">
            Legal
          </h1>
        </div>
      </Section>

      {/* Content - all sections in one scroll */}
      <Section background="white">
        <div className="max-w-3xl! mx-auto space-y-16">
          {SECTIONS.map(({ id, key }, index) => {
            const data = legalContent[key];
            if (!data) return null;
            const { first, second } = splitTitle(data.pageTitle);
            return (
              <article key={id} id={id} className="scroll-mt-24">
                <h2 className="text-2xl! font-bold mb-2!">
                  <span className="text-primary">{index + 1}. {first}</span>
                  {second && <span className="text-secondary">{second}</span>}
                </h2>
                <div className="prose prose-lg">
                  {data.content.map((section, index) => (
                    <div key={index} className="mb-8!">
                      <h3 className="subheading font-bold! text-black mb-3">
                        {section.title}
                      </h3>
                      <p className="body-text">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
