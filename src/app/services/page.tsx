import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope, Sparkles, Wrench, AlignCenter, AlertCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { servicesContent } from "@/content";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  Wrench,
  AlignCenter,
  AlertCircle,
};

export const metadata = {
  title: servicesContent.pageTitle,
  description: servicesContent.pageDescription,
};

export default function ServicesPage() {
  const { hero, categories, cta } = servicesContent;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-[var(--color-accent-1)] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 text-white/10 text-4xl font-light">+</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-3xl font-light">+</div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full border border-white/10" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{hero.subtitle}</p>
          <p className="text-white/80 max-w-2xl mx-auto">{hero.description}</p>
        </div>
      </section>

      {/* Service Categories */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Stethoscope;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-secondary mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Services List Preview */}
                  <ul className="space-y-1 mb-4">
                    {category.services.slice(0, 3).map((service) => (
                      <li
                        key={service.id}
                        className="text-sm text-[var(--text-muted)] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {service.title}
                      </li>
                    ))}
                    {category.services.length > 3 && (
                      <li className="text-sm text-primary font-medium">
                        +{category.services.length - 3} more services
                      </li>
                    )}
                  </ul>

                  <span className="inline-flex items-center text-primary font-semibold">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{cta.title}</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">{cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={cta.buttons.primary.href} variant="secondary" size="lg">
              {cta.buttons.primary.label}
            </Button>
            <Button
              href={cta.buttons.secondary.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              {cta.buttons.secondary.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
