import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import { servicesContent, siteConfig } from "@/content";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return servicesContent.categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category: categoryId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);

  if (!category) {
    return { title: servicesContent.notFoundTitle };
  }

  return {
    title: `${category.title} | ${siteConfig.siteName}`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);
  const { sectionLabels, sidebar, defaultServiceImage } = servicesContent;
  const { phone } = siteConfig;

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-container py-16 overflow-hidden custom-gradient-to-br">
        <h1 className="heading-2 text-center mb-4">
          {category.title}
        </h1>
      </section>

      {/* Services - Detailed Sections */}
      <section className="section py-12 bg-background">
        <div className="container">
          {category.services.map((service, idx) => {
            const titleParts = service.title.split("&");
            const leftTitle = titleParts[0]?.trim();
            const rightTitle = titleParts[1]?.trim();

            return (
              <div key={service.id} className="mb-16 lg:mb-20">
                {/* Service Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-8">
                      <h2 className="heading-2">
                        <span className="text-primary">{leftTitle}</span>
                        {service.title.includes("&") && (
                          <>
                            <span className="text-primary px-2">&</span>
                            <span className="text-secondary">{rightTitle}</span>
                          </>
                        )}
                      </h2>
                    </div>

                    {/* Service Image */}
                    <div className="mb-8">
                      <div className="relative w-full lg:w-72 h-64 rounded-lg overflow-hidden">
                        <Image
                          src={service.image || defaultServiceImage}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-text text-(--text-secondary) mb-6">
                      {service.overview}
                    </p>

                    {/* Symptoms Section */}
                    {service.symptoms && service.symptoms.length > 0 && (
                      <div className="mb-6">
                        <h3 className="heading-4 mb-3">{sectionLabels.symptoms}</h3>
                        <ul className="space-y-2">
                          {service.symptoms.map((symptom, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 body-text">
                              <span className="text-primary font-bold mt-1">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Procedures Section */}
                    {service.procedure && service.procedure.length > 0 && (
                      <div className="mb-6">
                        <h3 className="heading-4 mb-3">{sectionLabels.procedure}</h3>
                        <div className="space-y-2 body-text leading-relaxed">
                          {service.procedure.map((step, pIdx) => (
                            <p key={pIdx}>{step}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQs Section */}
                    {service.faqs && service.faqs.length > 0 && (
                      <div>
                        <h3 className="heading-4 mb-3">{sectionLabels.faqs}</h3>
                        <ServiceFaqAccordion faqs={service.faqs} />
                      </div>
                    )}
                  </div>

                  {/* Sidebar - Desktop */}
                  <div className="hidden lg:block w-72">
                    <div className="sticky top-6">
                      <div className="bg-muted-lighter rounded-lg overflow-hidden p-4 border border-(--border-color)">
                        <div className="bg-primary rounded-t-lg p-2">
                          <h3 className="subheading text-white mb-4">{sidebar.scheduleTitle}</h3>
                          <Link
                            href={sidebar.bookAppointmentHref}
                            className="btn btn-secondary block w-full text-center py-2 px-2 rounded-lg mt-2 mb-4"
                          >
                            {sidebar.requestAppointmentLabel}
                          </Link>
                          <h3 className="subheading text-white mb-2 text-center">{sidebar.callUsNowLabel}</h3>
                          <p className="body-text text-white font-semibold text-center">{phone}</p>
                        </div>
                        <div className="p-4">
                          <h4 className="heading-4 mb-4">{sidebar.servicesLabel}</h4>
                          <ul className="space-y-0">
                            {category.services.map((s, serviceIdx) => (
                              <li key={s.id}>
                                <Link
                                  href={s.href}
                                  className="block py-3 body-text text-(--text-primary) hover:text-primary transition-colors"
                                >
                                  {s.title}
                                </Link>
                                {serviceIdx < category.services.length - 1 && (
                                  <div className="border-t border-(--border-color)" />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Sidebar */}
                <div className="lg:hidden mb-8">
                  <div className="bg-muted-lighter rounded-lg overflow-hidden border border-(--border-color)">
                    <div className="bg-primary rounded-t-lg p-6">
                      <h3 className="heading-4 text-white mb-4">{sidebar.scheduleTitle}</h3>
                      <Link
                        href={sidebar.bookAppointmentHref}
                        className="btn btn-secondary block w-full text-center py-3 px-4 rounded-lg mb-4"
                      >
                        {sidebar.requestAppointmentLabel}
                      </Link>
                      <h3 className="heading-4 text-white mb-2">{sidebar.callUsNowLabel}</h3>
                      <p className="body-text text-white font-bold text-2xl">{phone}</p>
                    </div>
                    <div className="p-6">
                      <h4 className="heading-4 mb-4">{sidebar.servicesLabel}</h4>
                      <ul className="space-y-0">
                        {category.services.map((s, serviceIdx) => (
                          <li key={s.id}>
                            <Link
                              href={s.href}
                              className="block py-3 body-text text-(--text-primary) hover:text-primary transition-colors"
                            >
                              {s.title}
                            </Link>
                            {serviceIdx < category.services.length - 1 && (
                              <div className="border-t border-(--border-color)" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {idx < category.services.length - 1 && (
                  <div className="border-t border-(--border-color) mt-12" />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
