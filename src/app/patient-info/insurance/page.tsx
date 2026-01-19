import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, CreditCard, Shield, Percent } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { patientInfoContent } from "@/content";

export const metadata = {
  title: patientInfoContent.insurance.pageTitle,
  description: patientInfoContent.insurance.pageDescription,
};

export default function InsurancePage() {
  const { insurance } = patientInfoContent;

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
            {insurance.hero.title}
          </h1>
          <p className="text-xl text-white/90 mb-2">{insurance.hero.subtitle}</p>
          <p className="text-white/80 max-w-2xl">{insurance.hero.description}</p>
        </div>
      </section>

      {/* Insurance Providers */}
      <Section background="white">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {insurance.providers.title}
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          {insurance.providers.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {insurance.providers.list.map((provider, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-20 hover:shadow-md transition-shadow"
            >
              {provider.logo ? (
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  width={100}
                  height={40}
                  className="object-contain h-10"
                />
              ) : (
                <span className="font-semibold text-[var(--text-secondary)]">
                  {provider.name}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-[var(--text-muted)] text-sm italic">
          {insurance.providers.note}
        </p>
      </Section>

      {/* Out of Network */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
            {insurance.outOfNetwork.title}
          </h2>
          <p className="text-[var(--text-secondary)]">
            {insurance.outOfNetwork.description}
          </p>
        </div>
      </Section>

      {/* Financing Options */}
      <Section background="white">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-[var(--color-secondary)]" />
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            {insurance.financing.title}
          </h2>
        </div>
        <p className="text-[var(--text-secondary)] mb-8">
          {insurance.financing.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {insurance.financing.options.map((option, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {option.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm">
                {option.description}
              </p>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Membership Plans */}
      <Section background="gray">
        <div className="text-center mb-10">
          <span className="w-14 h-14 rounded-full bg-[var(--color-accent-1)]/10 flex items-center justify-center mx-auto mb-4">
            <Percent className="w-7 h-7 text-[var(--color-accent-1)]" />
          </span>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            {insurance.membership.title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {insurance.membership.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insurance.membership.plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${
                index === 1
                  ? "border-[var(--color-secondary)]"
                  : "border-transparent"
              }`}
            >
              {index === 1 && (
                <span className="inline-block bg-[var(--color-secondary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">
                  Best Value
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-secondary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--text-primary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={index === 1 ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent-1)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {insurance.cta.title}
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            {insurance.cta.description}
          </p>
          <Button href={insurance.cta.button.href} variant="secondary" size="lg">
            {insurance.cta.button.label}
          </Button>
        </div>
      </section>
    </>
  );
}
