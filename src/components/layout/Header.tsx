"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const { navigation, phone } = siteConfig;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navigation.main.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <span className="body-text hover:text-primary transition-colors font-semibold! text-base cursor-default">
                      {item.label}
                    </span>

                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block font-semibold! px-4 py-2 body-text hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="body-text font-semibold! hover:text-primary! transition-colors text-base"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          {/* <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
            <Button href={navigation.cta.href} size="md">
              {navigation.cta.label}
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 body-text"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden bg-white border-t border-gray-200
          overflow-hidden
          transition-all duration-600 ease-linear
          ${
            isMobileMenuOpen
              ? "max-h-250 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
      >
        <nav className="container mx-auto px-4 py-4">
          {navigation.main.map((item) => (
            <div
              key={item.label}
              className="border-b border-gray-100 last:border-0"
            >
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-3 body-text font-normal"
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    <span className="flex-1 text-left">{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        openSubmenu === item.label
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pl-4 pb-3">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block py-2 text-gray-600 hover:text-primary transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-3 body-text font-normal hover:text-primary transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center justify-center gap-2 py-3 text-primary font-medium"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
            <Button href={navigation.cta.href} fullWidth>
              {navigation.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
