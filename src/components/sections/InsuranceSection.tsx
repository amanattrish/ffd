import Image from "next/image";
import { Check, Shield, CreditCard } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function InsuranceSection() {
  const { insurance, careCredit } = homeContent;

  const insuranceList = [
    "Aetna",
    "Cigna",
    "Delta Dental",
    "Guardian",
    "Metlife",
    "All insurance associated with Dentemax",
  ];

  return (
    <Section background="white" className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-[var(--color-accent-1)] text-3xl font-light opacity-20 hidden lg:block">+</div>
      <div className="absolute bottom-40 left-10 text-[var(--color-accent-2)] text-2xl font-light opacity-20 hidden lg:block">+</div>

      {/* Insurance Providers Section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" />
            </span>
            <span className="text-[var(--color-secondary)] font-medium text-sm uppercase tracking-wider">
              Insurance Coverage
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            {insurance.title}
          </h2>
          <p className="text-xl text-[var(--color-secondary)] font-medium mb-6">
            {insurance.titleHighlight}
          </p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            We accept most major dental insurance plans and are happy to help verify your
            coverage. Our team will assist in maximizing your benefits and clearly explaining
            any out-of-pocket costs before treatment begins.
          </p>
          <p className="text-[var(--text-secondary)] mb-6 text-sm italic">
            If you don&apos;t see your provider listed please contact us for confirmation.
          </p>

          <h3 className="font-semibold text-[var(--text-primary)] mb-4">
            We are in-network with the following insurance carriers:
          </h3>

          {/* Insurance List - Two columns */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
            {insuranceList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Insurance Logos */}
          <div className="flex flex-wrap items-center gap-3">
            {insurance.providers.slice(0, 6).map((provider) => (
              <div
                key={provider.name}
                className="bg-gray-50 rounded-xl px-5 py-3 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                {provider.logo ? (
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={80}
                    height={32}
                    className="object-contain h-8"
                  />
                ) : (
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    {provider.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          {/* Decorative background shapes */}
          <div className="absolute -top-4 -right-4 w-full h-full">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[var(--color-accent-1)]/10 rounded-3xl" />
          </div>

          <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/insurance-person.png"
              alt="Friendly dental staff"
              fill
              className="object-cover"
              sizes="500px"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-[var(--text-primary)]">100%</p>
              <p className="text-xs text-[var(--text-muted)]">Coverage Verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* CareCredit Section */}
      <div className="border-t border-gray-200 pt-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-full bg-[var(--color-accent-2)]/20 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-[var(--color-accent-2)]" />
          </span>
          <p className="text-[var(--text-primary)] font-semibold">
            We finance through Care Credit, ask us how
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CareCredit Logo & Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/carecredit-logo.png"
                alt="CareCredit"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Discounts & Memberships
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              For patients without insurance, we offer flexible financing options through
              CareCredit and our in-house membership plans. Get the dental care you need
              with affordable payment options.
            </p>

            <ul className="space-y-3 mb-6">
              {careCredit.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[var(--text-primary)] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button href={careCredit.cta.href}>
              {careCredit.cta.label}
            </Button>
          </div>

          {/* Special Offer Card */}
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="inline-block bg-[var(--color-secondary)] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Special Offer
              </span>
              <h4 className="text-2xl font-bold mb-3">
                New Patient Special
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Save on your first visit! New patients receive a comprehensive exam,
                full set of X-rays, and professional cleaning at a special discounted rate.
              </p>
              <Button
                href="/book-appointment"
                variant="secondary"
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                Claim Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
