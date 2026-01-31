import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import { servicesContent, siteConfig } from "@/content";

interface Props {
  params: Promise<{ category: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];

  servicesContent.categories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.id,
        service: service.id,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { category: categoryId, service: serviceId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);
  const service = category?.services.find((s) => s.id === serviceId);

  const detail = servicesContent.serviceDetail;
  if (!category || !service) {
    return { title: detail.notFoundTitle };
  }

  return {
    title: `${service.title} | ${category.title} | ${siteConfig.siteName}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: categoryId, service: serviceId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);
  const service = category?.services.find((s) => s.id === serviceId);
  const labels = servicesContent.serviceDetail;

  if (!category || !service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[var(--color-accent-1)] py-16 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">
          +
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={category.href}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {labels.backToLabel} {category.title}
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
              <h2 className="text-2xl font-bold text-primary mb-4">{labels.overviewLabel}</h2>
              <p className="text-secondary leading-relaxed">
                {service.overview}
              </p>
            </div>

            {/* Symptoms - if available */}
            {service.symptoms && service.symptoms.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {labels.signsYouMayNeedLabel}
                </h2>
                <ul className="space-y-3">
                  {service.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                      </span>
                      <span className="text-secondary">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Procedure */}
            {service.procedure && service.procedure.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  The Procedure
                </h2>
                <div className="space-y-4">
                  {service.procedure.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-1">
                        <p className="text-primary">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <ServiceFaqAccordion faqs={service.faqs} />
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Appointment Card */}
            <div className="bg-gradient-to-br from-primary to-[var(--color-accent-1)] rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-3">{labels.readyToScheduleTitle}</h3>
              <p className="text-white/90 mb-6 text-sm">
                {labels.readyToScheduleDescription}
              </p>
              <Button
                href="/book-appointment"
                variant="secondary"
                className="w-full mb-4"
              >
                {labels.bookAppointmentLabel}
              </Button>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            {/* Related Services */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-primary mb-4">
                {labels.otherServicesLabel.replace("{{category}}", category.title)}
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
                      <h4 className="font-semibold text-primary text-sm">
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
            <h2 className="text-3xl font-bold text-primary mb-4">
              {labels.haveQuestionsLabel.replace("{{service}}", service.title)}
            </h2>
            <p className="text-secondary mb-8">
              Our team is here to help. Contact us for a consultation and learn
              how we can help you achieve your dental goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="outline">
                {labels.contactUsLabel}
              </Button>
              <Button href="/book-appointment">{labels.bookConsultationLabel}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
