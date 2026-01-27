"use client";

import CTABanner from "@/components/sections/CTABanner";
import Section from "@/components/ui/Section";
import { patientInfoContent } from "@/content";

export default function FAQsPage() {
  const { faqs } = patientInfoContent;

  return (
    <>
      {/* Page Title Section */}
      
      <Section className="pt-20 pb-16 bg-linear-to-br from-[#F2FDFF] to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl! font-bold text-gray-900 text-center !mb-16">
            FAQs
          </h1>

          {/* FAQ Categories */}
          <div className="max-w-4xl! mx-auto space-y-20!">
            {faqs.categories.map((category, catIndex) => (
              <div key={catIndex} className="space-y-8!">
                {/* Category Heading */}
                <h2 className="text-3xl! md:text-4xl! lg:text-5xl! font-bold">
                  <span className="text-primary">{category.title}</span>
                  {category.titleSuffix && (
                    <span className="text-secondary ml-2">
                      {category.titleSuffix}
                    </span>
                  )}
                </h2>

                {/* Questions and Answers */}
                <div className="space-y-8!">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-lg md:text-xl! font-bold text-gray-900 !mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed pl-4 md:pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <CTABanner
        title={faqs.cta.title}
        description={faqs.cta.description}
      />
    </>
  );
}
