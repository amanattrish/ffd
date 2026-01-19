"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { patientInfoContent } from "@/content";

export default function FAQsPage() {
  const { faqs } = patientInfoContent;
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqs.categories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-20 overflow-hidden">
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
            {faqs.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{faqs.hero.subtitle}</p>
          <p className="text-white/80 max-w-2xl">{faqs.hero.description}</p>
        </div>
      </section>

      {/* Search */}
      <Section background="white" className="pb-0">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Categories */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">
                No questions found matching your search.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const faqId = `${catIndex}-${faqIndex}`;
                      const isOpen = openFaq === faqId;

                      return (
                        <div
                          key={faqIndex}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : faqId)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-[var(--text-primary)] pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[var(--color-primary)] flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-200 ${
                              isOpen ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <div className="px-5 pb-5 text-[var(--text-secondary)] leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {faqs.cta.title}
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            {faqs.cta.description}
          </p>
          <Button href={faqs.cta.button.href} variant="secondary" size="lg">
            {faqs.cta.button.label}
          </Button>
        </div>
      </section>
    </>
  );
}
