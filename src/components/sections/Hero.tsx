import Image from "next/image";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative bg-gradient-to-br from-[var(--color-accent-1)]/10 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[var(--text-primary)]">{hero.title}</span>{" "}
              <span className="text-[var(--color-primary)] italic">{hero.titleHighlight}</span>
              <br />
              <span className="text-[var(--color-secondary)]">{hero.subtitle}</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {hero.cta?.primary && (
                <Button href={hero.cta.primary.href} size="lg">
                  {hero.cta.primary.label}
                </Button>
              )}
              {hero.cta?.secondary && (
                <Button href={hero.cta.secondary.href} variant="outline" size="lg">
                  {hero.cta.secondary.label}
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-transparent z-10" />
              <Image
                src={hero.image || "/images/hero-placeholder.jpg"}
                alt="Dental care"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-secondary)] rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-primary)] rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-accent-1)]/5 to-transparent pointer-events-none" />
    </section>
  );
}
