"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const { navigation, phone } = siteConfig;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo width={140} height={45} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors font-medium"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-4 py-2 text-[var(--text-primary)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] transition-colors"
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
                    className="px-4 py-2 text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[#0d5f7a] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
            <Button href={navigation.cta.href} size="md">
              {navigation.cta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[var(--text-primary)]"
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4">
            {navigation.main.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 text-[var(--text-primary)] font-medium"
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pl-4 pb-3">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block py-2 text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                            onClick={toggleMobileMenu}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-[var(--text-primary)] font-medium hover:text-[var(--color-primary)] transition-colors"
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
                className="flex items-center justify-center gap-2 py-3 text-[var(--color-primary)] font-medium"
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
      )}
    </header>
  );
}
