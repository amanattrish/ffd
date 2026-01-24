import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/content";

export default function Footer() {
  const { siteName, phone, address, hours, social, footer } = siteConfig;
  const currentYear = new Date().getFullYear();

  // Format hours for display
  const formatHours = (day: string) => {
    const hour = hours[day.toLowerCase() as keyof typeof hours];
    if (hour === "Closed") return "Closed";
    // Convert to lowercase am/pm format and replace " - " with " to "
    return hour.toLowerCase().replace(/\s*-\s*/g, " to ");
  };

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ];

  return (
    <footer className="bg-white text-gray-900">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-24!">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Column 1: Logo*/}
          <div className="flex items-start">
            <Logo width={80} height={80} linkToHome={false} className="h-auto" />
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-base! font-bold text-gray-900 mb-4 lg:mt-10!">Links</h3>
            <ul className="space-y-2!">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Hours */}
          <div>
            <h3 className="text-base! font-bold text-gray-900 mb-4 lg:mt-10!">Office Hours</h3>
            <ul className="space-y-2! text-sm">
              <li className="flex justify-between">
                <span className="text-gray-700">Mon</span>
                <span className="text-gray-700">{formatHours("monday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Tue</span>
                <span className="text-gray-700">{formatHours("tuesday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Wed</span>
                <span className="text-gray-700">{formatHours("wednesday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Thu</span>
                <span className="text-gray-700">{formatHours("thursday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Fri</span>
                <span className="text-gray-700">{formatHours("friday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Sat</span>
                <span className="text-gray-700">{formatHours("saturday")}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Sun</span>
                <span className="text-gray-700">{formatHours("sunday")}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information and Social Media */}
          <div>
            <h3 className="text-base! font-bold text-gray-900 mb-2 lg:mt-10!">Phone Number</h3>
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="text-gray-900 font-bold text-lg mb-4 block hover:text-gray-700 transition-colors"
            >
              {phone}
            </a>
            
            <h3 className="text-base! font-bold text-gray-900 mb-2 mt-6">Address</h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {address.full}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2 mt-4">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8  text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
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
                  className="hover:text-gray-700 transition-colors"
                >
                  {link.label}
                </Link>
              </span>
            ))}
            <span className="mx-2">|</span>
            <span>Web Accessibility</span>
            <span className="mx-2">|</span>
            <span>Dental Website Design by {siteName}</span>
          </div>
        </div>
    </footer>
  );
}
