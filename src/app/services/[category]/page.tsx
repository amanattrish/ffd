import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { servicesContent } from "@/content";

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
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.title} | Freeport Family Dentistry`,
    description: category.description,
  };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { category: categoryId } = await params;
  const category = servicesContent.categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20">
                <Image
                  src={`/images/services/${service.id}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title}
                </h2>
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-[var(--color-primary)] font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
            Why Choose Us for {category.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Experienced, caring dental professionals",
              "State-of-the-art technology and techniques",
              "Comfortable, stress-free environment",
              "Personalized treatment plans",
              "Flexible scheduling options",
              "Affordable financing available",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <span className="text-[var(--text-primary)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Schedule your appointment today and take the first step towards better oral health.
          </p>
          <Button href="/book-appointment" variant="secondary" size="lg">
            Book Appointment
          </Button>
        </div>
      </section>
    </>
  );
}
