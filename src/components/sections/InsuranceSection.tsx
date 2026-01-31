import Image from "next/image";
import { Check, Shield, CreditCard } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

// Molar tooth SVG decoration (background)
function MolarToothDecoration({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 291 333" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.4743 73.6461C13.2724 51.0279 29.4517 22.2108 56.8923 19.4503C57.5269 19.3924 58.0902 19.8257 58.1523 20.4177C58.2075 20.9496 57.8373 21.4301 57.3016 21.5609C40.1728 25.7221 26.8146 39.9558 26.0903 56.6026C25.7432 62.0185 26.5778 67.5267 28.5711 72.7603C29.0149 73.9872 27.1962 74.7851 26.4766 73.6461H26.4743Z" fill="#1E1E1E" fillOpacity="0.05"/>
      <path d="M269.218 14.474C265.811 11.7907 261.988 9.63723 257.98 7.82906C249.124 3.83092 239.187 0.847328 229.302 0.341126C217.294 -0.521134 205.145 1.08756 193.686 4.17625C190.398 5.05567 186.834 6.23324 183.685 7.47515C170.814 12.4857 159.26 19.9415 146.827 25.7649C145.482 25.2158 144.143 24.6474 142.814 24.0533C130.45 18.6245 118.816 11.4068 105.952 6.77805C104.791 6.33834 103.397 5.92008 102.211 5.49753C100.344 4.92054 97.7668 4.14837 95.8355 3.69793C88.8506 1.78466 81.4795 0.945995 74.2578 0.291793C58.5015 -1.13029 41.5198 2.71985 27.9708 10.2207C23.8898 12.4793 20.1674 15.287 16.921 18.5086C7.36563 28.0364 1.93498 40.7386 0.415228 53.6189C-0.456158 61.2055 0.10254 69.0023 1.54412 76.4988C7.56795 107.868 29.4699 133.708 40.9198 162.791C42.7292 167.444 44.4651 172.531 46.0377 177.231C55.8368 206.923 56.7955 238.988 59.5959 269.486C60.4972 279.291 61.4215 289.1 63.9667 298.7C66.0658 306.664 69.103 314.68 74.5222 321.366C80.8219 329.141 92.0672 334.638 102.473 330.84C107.43 329.162 110.019 325.407 110.831 320.932C112.419 312.181 110.221 304.024 109.201 295.845C108.226 288.034 107.255 279.516 108.046 271.876C109.398 258.805 112.705 245.684 118.39 233.72C119.639 231.15 121.262 228.784 123.209 226.714C129.038 220.449 138.06 217.127 146.902 217.579C158.017 217.985 168.227 224.482 172.566 234.052C180.845 251.658 184.071 264.135 182.137 289.318C181.353 299.522 175.311 317.99 183.399 327.59C186.582 331.367 192.311 332.035 197.13 331.676C206.403 330.986 213.569 325.066 218.115 317.893C222.607 310.868 225.077 302.928 226.838 295.043C228.594 287.098 229.406 278.83 230.167 270.771C233.797 232.362 235.025 193.429 251.471 157.397C262.909 131.675 281.441 108.263 288.145 80.3361C293.682 57.2825 289.506 30.443 269.221 14.4762L269.218 14.474ZM275.525 84.6431C266.807 111.32 248.365 134.094 238.596 160.473C234.046 172.757 230.006 185.283 227.688 198.12C223.26 220.209 222.364 242.859 220.354 265.194C219.805 271.239 219.241 277.995 218.377 283.975C216.933 293.226 214.751 302.64 210.118 310.924C208.32 314.109 205.947 317.256 202.899 319.463C199.312 322.02 191.339 324.381 189.186 319.266C188.113 316.756 187.683 313.755 187.554 310.92C187.393 305.461 188.173 299.91 188.727 294.464C189.361 287.95 189.506 281.41 189.154 274.894C188.547 263.53 186.795 252.127 183.528 241.143C182.857 238.848 182.011 236.315 181.16 234.069C180.509 232.45 179.997 230.985 179.213 229.335C174.559 219.274 164.659 211.833 153.154 209.641C135.425 206.121 117.243 214.769 110.617 230.642C110.065 231.995 109.529 233.366 108.987 234.728C104.676 246.527 102.331 258.948 101.39 271.365C100.804 279.085 101.022 286.905 101.924 294.603C102.735 301.864 103.708 308.846 102.832 316.156C102.538 318.601 101.558 321.359 98.1416 321.93C90.2738 323.245 85.6892 318.564 81.9094 312.441C74.9406 300.684 73.0346 286.622 71.7287 273.281C70.4664 260.838 69.6019 247.685 68.4868 235.195C66.4291 212.176 63.1137 189.015 54.9539 167.098C53.7928 163.982 52.2892 159.801 51.0154 156.721C41.8969 134.332 26.9661 114.413 17.9418 92.0732C15.2219 85.3595 13.04 78.3478 11.8674 71.2502C11.7708 70.684 11.6283 69.5986 11.5248 69.0259C11.4007 68.1594 11.2696 66.6193 11.1524 65.6863C11.0926 64.4615 10.9041 62.4196 10.9339 61.2334C10.5086 44.8162 17.7349 27.0068 33.029 18.0496C47.7736 9.89677 64.5599 7.03758 81.3599 8.56048C90.552 9.39271 99.6291 11.4175 108.233 14.547C120.161 18.8197 131.365 24.8083 143.415 28.8944C155.54 33.1542 168.459 35.5587 181.358 36.2171C181.659 36.2322 181.935 36.0327 181.986 35.7474C182.038 35.4428 181.818 35.1533 181.489 35.1039C170.54 33.4566 159.826 30.7733 149.611 26.8653C154.747 25.1386 159.867 23.1031 164.831 21.0332C171.885 18.1161 178.721 15.1862 185.903 13.0198C188.931 12.076 192.327 11.2095 195.449 10.5874C206.635 8.35457 218.324 7.37005 229.608 8.83503C238.842 10.1627 247.369 13.1163 255.653 17.1123C281.406 30.1191 282.898 61.5122 275.527 84.641L275.525 84.6431Z" fill="#1E1E1E" fillOpacity="0.05"/>
    </svg>
  );
}

export default function InsuranceSection() {
  const { insurance, careCredit } = homeContent;

  return (
    <Section background="transparent" className="relative overflow-hidden">
      {/* Faint molar tooth decoration in background (top right) */}
      <div className="absolute top-0 right-0 w-64 h-80 opacity-20 hidden lg:block pointer-events-none z-0">
        <MolarToothDecoration className="w-full h-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        <div className="flex flex-col gap-4">
          <h2 className="heading-2 text-primary!">
            {insurance.title}
          </h2>
          <p className="heading-3 text-secondary!">
            {insurance.titleHighlight}
          </p>
          
          {/* First paragraph */}
          <p className="body-text">
            {insurance.paragraph1}
          </p>
          
          {/* Second paragraph */}
          <p className="body-text">
            {insurance.paragraph2}
          </p>

          {/* Sub-heading */}
          <h3 className="font-bold text-foreground mt-4 text-lg">
            {insurance.heading}
          </h3>

          {/* Insurance List - Bulleted list */}
          <ul className="space-y-1 mb-8">
            {insurance.list.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-black text-base">
                <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                <span className="body-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Dental Office Image */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={insurance.image || "/images/insurance-person.png"}
              alt={insurance.imageAlt ?? "Dental office"}
              width={100}
              height={100}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Insurance Logos Grid */}
          <div className="grid grid-cols-3 gap-3">
            {insurance.providers.map((provider) => (
              <div
                key={provider.name}
                className="bg-white rounded-lg p-3 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow min-h-20"
              >
                {provider.logo ? (
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={100}
                    height={40}
                    className="object-contain max-h-10 w-auto"
                  />
                ) : (
                  <span className="text-xs font-medium text-secondary text-center">
                    {provider.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CareCredit Section */}
      <div className="border-t border-(--border-color) pt-12">
        {/* Centered Header */}
        <div className="text-center lg:text-left mb-8">
          <p className="text-black font-bold text-lg mb-4">
            {careCredit.careCreditHeading}
          </p>
          <div className="flex justify-center lg:justify-start mb-4">
            <Image
              src={careCredit.logo || "/images/carecredit-logo.png"}
              alt={careCredit.logoAlt ?? "CareCredit"}
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Discounts & Memberships */}
          <div>
            <h3 className="subheading font-semibold! mb-4">
              {careCredit.discountsTitle}
            </h3>
            <p className="body-text mb-4">
              {careCredit.discountsDescription}
            </p>

            <ul className="space-y-2 mb-6">
              {careCredit.discountsList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-black">
                  <span className="w-2 h-2 rounded-full bg-black mt-2 shrink-0" />
                  <span className="body-text">{item}</span>
                </li>
              ))}
            </ul>

            <p className="bod-text">
              {careCredit.contactText}
            </p>
          </div>

          {/* Right Column - Special Offer Card */}
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <span className="inline-block text-black font-bold text-sm mb-4">
              {careCredit.specialOffer.title}
            </span>
            
            <h4 className="text-xl font-bold text-black mb-3">
              {careCredit.specialOffer.heading}
            </h4>
            
            <p className="body-text mb-4">
              {careCredit.specialOffer.description}{" "}
              <a 
                href={careCredit.specialOffer.newPatientLink.href} 
                className="text-primary! body-text underline! font-semibold! hover:text-primary/80"
              >
                {careCredit.specialOffer.newPatientLink.label}
              </a>
              . {careCredit.specialOffer.restrictions}
            </p>
            
            <p className="font-bold body-text mb-3">
              {careCredit.specialOffer.noInsuranceHeading}
            </p>
            
            <p className="text-black mb-6 leading-relaxed">
              {careCredit.specialOffer.wellnessText}{" "}
              <a 
                href={careCredit.specialOffer.wellnessLink.href} 
                className="body-text underline! font-semibold! hover:text-primary/80"
              >
                {careCredit.specialOffer.wellnessLink.label}
              </a>
              {" "}{careCredit.specialOffer.wellnessTextEnd}
            </p>
            
            <Button
              href={careCredit.specialOffer.buttonHref}
              className="w-50 rounded-full! px-5! py-2! bg-primary text-white! shadow-lg hover:bg-primary/90 mt-2"
            >
              {careCredit.specialOffer.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
