import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Plus } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function ServicesPreview() {
  const { services } = homeContent;

  const serviceHighlights = [
    "Experienced Team",
    "State-Of-The-Art Technology",
    "Comprehensive Services",
    "Emergency Dental Services",
  ];

  return (
    <Section background="gray" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 text-[var(--color-accent-1)] text-3xl font-light opacity-30 hidden lg:block">+</div>
      <div className="absolute bottom-20 left-10 text-[var(--color-accent-1)] text-2xl font-light opacity-30 hidden lg:block">+</div>

      {/* Header with left content and right image placeholder */}
      <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
        <div>
          <span className="inline-block text-[var(--color-secondary)] font-medium text-sm uppercase tracking-wider mb-2">
            {services.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            {services.title}{" "}
            <span className="text-[var(--color-primary)]">{services.titleHighlight}</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            {services.description}
          </p>

          {/* Service Highlights */}
          <ul className="space-y-3">
            {serviceHighlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-[var(--text-primary)] font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service highlight image */}
        <div className="relative hidden lg:flex justify-end">
          {/* Decorative background shape */}
          <div className="absolute -top-4 -right-4 w-full h-full max-w-md">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-[var(--color-accent-1)]/10 rounded-2xl" />
          </div>

          {/* Decorative dots */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-1)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-2)]" />
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
            <Image
              src="/images/services/dental-care.png"
              alt="Dental services"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.items.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Card Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={`/images/services/${service.id}.png`}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors text-lg">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-flex items-center text-[var(--color-primary)] text-sm font-semibold">
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href={services.cta.href} variant="outline" size="lg">
          {services.cta.label}
        </Button>
      </div>
    </Section>
  );
}
