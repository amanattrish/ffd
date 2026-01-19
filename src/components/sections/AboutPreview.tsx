import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

// Feature icons with different colors
const featureIcons = [
  { color: "#117598", label: "Elite Clinical Expertise" },
  { color: "#74C6D1", label: "Precision Smile Design" },
  { color: "#70CCB9", label: "Advanced Professional Care" },
  { color: "#A1C65D", label: "Proven Medical Excellence" },
];

// Tooth SVG decoration
function ToothDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 250" fill="none">
      <path
        d="M100 10 C140 10 170 40 170 80 C170 120 160 160 150 200 C145 220 130 240 100 240 C70 240 55 220 50 200 C40 160 30 120 30 80 C30 40 60 10 100 10Z"
        fill="#E8F6F8"
        stroke="#D4EEF2"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function AboutPreview() {
  const { about } = homeContent;

  return (
    <Section background="white" className="relative overflow-hidden">
      {/* Decorative tooth on right */}
      <ToothDecoration className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-80 opacity-50 hidden lg:block" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Image - Circular Frame */}
        <div className="relative flex justify-center">
          {/* Decorative + elements */}
          <div className="absolute -top-4 -left-4 text-[var(--color-accent-1)] text-3xl font-light">+</div>
          <div className="absolute bottom-1/4 -left-8 text-[var(--color-accent-1)] text-2xl font-light hidden lg:block">+</div>
          <div className="absolute bottom-0 right-1/4 text-[var(--color-accent-1)] text-2xl font-light hidden lg:block">+</div>

          {/* Circular image container */}
          <div className="relative">
            {/* Background decorative circles */}
            <div className="absolute -top-3 -left-3 w-full h-full rounded-full border-2 border-dashed border-[var(--color-accent-1)]/30" />

            {/* Small decorative dots */}
            <div className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-[var(--color-primary)]" />
            <div className="absolute bottom-1/4 -left-4 w-2 h-2 rounded-full bg-[var(--color-secondary)]" />

            {/* Main image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={about.image || "/images/about-clinic.png"}
                alt="Our clinic"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block text-[var(--color-primary)] font-medium text-sm border border-[var(--color-primary)]/20 rounded-full px-4 py-1 mb-4">
            Overview of practice
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            {about.title}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            Focuses on high standards and precision.
          </p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed text-sm md:text-base">
            Precision dentistry meets artistic excellence. We combine years of specialized experience with advanced medical technology to deliver transformative care and long-term oral health.
          </p>

          {/* Features List - with colored icons */}
          <ul className="space-y-3 mb-8">
            {featureIcons.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: feature.color }}
                  />
                </span>
                <span className="text-[var(--color-primary)] font-medium text-sm">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>

          <Button href={about.cta.href}>{about.cta.label}</Button>
        </div>
      </div>
    </Section>
  );
}
