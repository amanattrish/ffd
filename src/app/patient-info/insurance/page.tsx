import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { patientInfoContent } from "@/content";
import { siteConfig } from "@/content";
import { CTABanner } from "@/components/sections";

export const metadata = {
  title: patientInfoContent.insurance.pageTitle,
  description: patientInfoContent.insurance.pageDescription,
};

export default function InsurancePage() {
  const { insurance } = patientInfoContent;
  const { phone } = siteConfig;

  return (
    <>
      {/* Page Title Section */}
      <section className="bg-linear-to-br from-[#F2FDFF] to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl! font-bold text-center text-gray-900">
            {insurance.hero.title}
          </h1>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Insurance Providers Section */}
              <div>
                <h2 className="text-3xl! md:text-4xl! font-bold text-primary !mb-2">
                  {insurance.providers.title}
                </h2>
                <span className="text-3xl! md:text-4xl! font-bold text-secondary block !mb-6">
                  {insurance.providers.titleHighlight}
                </span>
                
                <p className="text-gray-800 !mb-4 leading-relaxed">
                  {insurance.providers.description}
                </p>
                
                <p className="text-gray-800 !mb-6 leading-relaxed">
                  {insurance.providers.contactNote}
                </p>

                <h3 className="font-bold text-gray-900 !mb-4 text-lg">
                  {insurance.providers.carriersHeading}
                </h3>

                <ul className="space-y-2 !mb-8">
                  {insurance.providers.carriersList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Insurance Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 !mb-8">
                  {insurance.providers.logos.map((provider) => (
                    <div
                      key={provider.name}
                      className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow min-h-24"
                    >
                      {provider.logo ? (
                        <Image
                          src={provider.logo}
                          alt={provider.name}
                          width={120}
                          height={50}
                          className="object-contain max-h-12 w-auto"
                        />
                      ) : (
                        <span className="text-sm font-medium text-gray-700 text-center">
                          {provider.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CareCredit Section */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-900 font-bold text-lg !mb-4">
                  {insurance.careCredit.heading}
                </p>
                <div className="!mb-8">
                  <Image
                    src={insurance.careCredit.logo}
                    alt="CareCredit"
                    width={200}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Discounts & Me!mberships Section */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl! font-bold text-gray-900 !mb-4">
                  {insurance.discounts.title}
                </h3>
                <p className="text-gray-800 !mb-4 leading-relaxed">
                  {insurance.discounts.description}
                </p>

                <ul className="space-y-2 !mb-6">
                  {insurance.discounts.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-gray-800 mt-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-800 leading-relaxed">
                  {insurance.discounts.contactNote}
                </p>
              </div>
            </div>

            {/* Right Column - Sidebar (1/3 width) */}
            <div className="lg:col-span-1 space-y-6">
              {/* Combined Schedule Today and Services Card */}
              <div className="bg-gray-100 rounded-lg p-6">
                {/* Schedule Today Section */}
                <div className="bg-primary rounded-lg p-6 text-white mb-6 text-center">
                  <h3 className="text-2xl! font-bold !mb-4">{insurance.scheduleSection.title}</h3>
                  <Button
                    href={insurance.scheduleSection.buttonHref}
                    variant="secondary"
                    className="w-full !mb-6"
                  >
                    {insurance.scheduleSection.buttonLabel}
                  </Button>
                  <h3 className="text-3xl! font-bold !mb-2">{insurance.scheduleSection.callHeading}</h3>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="text-4xl! font-bold hover:text-secondary transition-colors block"
                  >
                    {phone}
                  </a>
                </div>

                {/* Services List Section */}
                <div className="p-6">
                  <h3 className="text-xl! font-bold text-gray-900 !mb-4">{insurance.services.title}</h3>
                  <ul className="space-y-3!">
                    {insurance.services.list.map((service, index) => (
                      <li
                        key={index}
                        className={`text-gray-700 ${
                          index < insurance.services.list.length - 1 ? "border-b border-gray-200 pb-3" : ""
                        }`}
                      >
                        <Link
                          href={insurance.services.href}
                          className="hover:text-primary transition-colors"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <span className="text-gray-900 font-bold text-sm block !mb-4">
                  {insurance.specialOffer.title}
                </span>
                <h4 className="text-xl! font-bold text-gray-900 !mb-3">
                  {insurance.specialOffer.heading}
                </h4>
                <p className="text-gray-800 !mb-4 leading-relaxed text-sm">
                  {insurance.specialOffer.description.beforeLink}
                  <Link
                    href={insurance.specialOffer.newPatientLink}
                    className="text-primary underline hover:text-primary/80"
                  >
                    {insurance.specialOffer.description.linkText}
                  </Link>
                  {insurance.specialOffer.description.afterLink}
                </p>
                <p className="font-bold text-gray-900 !mb-3 text-sm">
                  {insurance.specialOffer.noInsuranceHeading}
                </p>
                <p className="text-gray-800 !mb-6 leading-relaxed text-sm">
                  {insurance.specialOffer.wellnessProgram.beforeLink}
                  <Link
                    href={insurance.specialOffer.wellnessLink}
                    className="text-gray-800 underline hover:text-primary/80"
                  >
                    {insurance.specialOffer.wellnessProgram.linkText}
                  </Link>
                  {insurance.specialOffer.wellnessProgram.afterLink}
                </p>
                <Button
                  href={insurance.specialOffer.buttonHref}
                  variant="primary"
                  className="w-full"
                >
                  {insurance.specialOffer.buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get a FREE Consultation Banner */}
      <CTABanner />
    </>
  );
}
