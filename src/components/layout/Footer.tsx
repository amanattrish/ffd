import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/content";

export default function Footer() {
  const { siteName, phone, address, hours, social, footer } = siteConfig;
  const currentYear = new Date().getFullYear();
  const dayLabels = footer.dayLabels ?? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Format hours for display
  const formatHours = (day: string) => {
    const hour = hours[day.toLowerCase() as keyof typeof hours];
    if (hour === "Closed") return "Closed";
    return hour.toLowerCase().replace(/\s*-\s*/g, " to ");
  };

  const footerLinks = footer.mainLinks ?? [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ];

  return (
    <footer className="bg-white text-muted-bolder">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-24!">
        <div className="grid grid-cols-4 gap-8 sm:gap-4 md:gap-8 lg:gap-12 items-start">
          {/* Column 1: Logo*/}
          <div className="sm:col-span-1 col-span-2 flex items-start">
            <Logo width={80} height={80} linkToHome={false} className="h-auto" />
          </div>

          {/* Column 2: Links */}
          <div className="sm:col-span-1 col-span-2">
            <h3 className="text-base! font-bold text-muted-bolder mb-4 lg:mt-10!">{footer.linksLabel}</h3>
            <ul className="space-y-2!">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-bold hover:text-muted-bolder transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Hours */}
          <div className="lg:col-span-1 col-span-2">
            <h3 className="text-base! font-bold text-muted-bolder mb-4 lg:mt-10!">{footer.officeHoursLabel}</h3>
            <ul className="space-y-2! sm:text-sm text-xs text-muted-bold grid grid-cols-[24px_1fr] gap-x-4 gap-y-2 list-none">
                <li className="contents"><span className="font-medium">{dayLabels[0]}</span><span>{formatHours("monday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[1]}</span><span>{formatHours("tuesday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[2]}</span><span>{formatHours("wednesday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[3]}</span><span>{formatHours("thursday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[4]}</span><span>{formatHours("friday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[5]}</span><span>{formatHours("saturday")}</span></li>
                <li className="contents"><span className="font-medium">{dayLabels[6]}</span><span>{formatHours("sunday")}</span></li>
            </ul>
          </div>

          {/* Column 4: Contact Information and Social Media */}
          <div className="md:col-span-1 col-span-2">
            <h3 className="text-base! font-bold text-muted-bolder mb-2 lg:mt-10!">{footer.phoneNumberLabel}</h3>
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="text-muted-bolder font-bold text-lg mb-4 block hover:text-muted-bold transition-colors"
            >
              {phone}
            </a>
            
            <h3 className="text-base! font-bold text-muted-bolder mb-2 mt-6">{footer.addressLabel}</h3>
            <p className="text-muted-bold text-sm mb-4 leading-relaxed">
              {address.full}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2 mt-4">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white flex items-center justify-center group rounded-xl hover:bg-muted transition-colors"
                  aria-label={siteConfig.accessibility?.facebookAriaLabel ?? "Facebook"}
                >
                  <Facebook className="w-4 h-4 group-hover:text-muted-lighter" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white flex items-center justify-center group rounded-xl hover:bg-muted transition-colors"
                  aria-label={siteConfig.accessibility?.instagramAriaLabel ?? "Instagram"}
                >
                  <Instagram className="w-4 h-4 group-hover:text-muted-lighter" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white flex items-center justify-center group rounded-xl hover:bg-muted transition-colors"
                  aria-label={siteConfig.accessibility?.twitterAriaLabel ?? "Twitter"}
                >
                  <Twitter className="w-4 h-4 group-hover:text-muted-lighter" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
        <div className="container mx-auto px-4 py-6!">
          <div className="text-center text-gray-500 text-sm">
            <span>© {currentYear} {siteName}</span>
            {footer.legal.map((link, index) => (
              <span key={link.label}>
                <span className="mx-2">|</span>
                <Link
                  href={link.href}
                  className="hover:text-muted-bold transition-colors"
                >
                  {link.label}
                </Link>
              </span>
            ))}
            <span className="mx-2">|</span>
            <span>{footer.webAccessibilityLabel}</span>
            <span className="mx-2">|</span>
            <span>{footer.designByLabel}{siteName}</span>
          </div>
        </div>
    </footer>
  );
}
