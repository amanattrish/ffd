"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, ChevronDown, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { servicesContent } from "@/content";

export default function ServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const serviceId = params.service as string;

  const category = servicesContent.categories.find((c) => c.id === categoryId);
  const service = category?.services.find((s) => s.id === serviceId);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!category || !service) {
    return (
      <Section background="white">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            Service Not Found
          </h1>
          <Button href="/services">Back to Services</Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={category.href}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category.title}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Symptoms - if available */}
            {service.symptoms && service.symptoms.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Signs You May Need This Treatment
                </h2>
                <ul className="space-y-3">
                  {service.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                      </span>
                      <span className="text-[var(--text-secondary)]">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedure */}
            {service.procedure && service.procedure.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  The Procedure
                </h2>
                <div className="space-y-4">
                  {service.procedure.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-1">
                        <p className="text-[var(--text-primary)]">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-[var(--text-primary)] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[var(--color-primary)] flex-shrink-0 transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-4 pb-4 text-[var(--text-secondary)]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Appointment Card */}
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-3">Ready to Schedule?</h3>
              <p className="text-white/90 mb-6 text-sm">
                Book your appointment today and take the first step towards better oral health.
              </p>
              <Button
                href="/book-appointment"
                variant="secondary"
                className="w-full mb-4"
              >
                Book Appointment
              </Button>
              <a
                href="tel:+15161235467"
                className="flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (516) 123-5467</span>
              </a>
            </div>

            {/* Related Services */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
                Other {category.title} Services
              </h3>
              <div className="space-y-3">
                {category.services
                  .filter((s) => s.id !== service.id)
                  .slice(0, 4)
                  .map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      href={relatedService.href}
                      className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                        {relatedService.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Have Questions About {service.title}?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Our team is here to help. Contact us for a consultation and learn how we can help you achieve your dental goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
              <Button href="/book-appointment">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
