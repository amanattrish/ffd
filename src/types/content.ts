// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

export interface Navigation {
  main: NavLink[];
  cta: { label: string; href: string };
}

// Site Configuration
export interface SiteConfig {
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  hours: Record<string, string>;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  navigation: Navigation;
  footer: {
    description: string;
    quickLinks: { label: string; href: string }[];
    services: { label: string; href: string }[];
    legal: { label: string; href: string }[];
    copyright: string;
  };
  calendlyUrl: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
}

// CTA Button
export interface CTAButton {
  label: string;
  href: string;
}

// Hero Section
export interface HeroSection {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  cta?: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
  image?: string;
}

// Service Types
export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  shortDescription?: string;
  icon?: string;
  href: string;
  overview?: string;
  symptoms?: string[];
  procedure?: string[];
  faqs?: FAQ[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  image: string;
  services: ServiceItem[];
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

// Blog Post
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
}

// Insurance Provider
export interface InsuranceProvider {
  name: string;
  logo: string;
}

// FAQ
export interface FAQ {
  question: string;
  answer: string;
}

// Team Member
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  image: string;
}

// Form Field
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

// Contact Info Item
export interface ContactInfoItem {
  type: string;
  icon: string;
  label: string;
  value: string;
  href: string;
}

// Legal Page Content
export interface LegalSection {
  title: string;
  text: string;
}

export interface LegalPage {
  pageTitle: string;
  pageDescription: string;
  lastUpdated: string;
  content: LegalSection[];
}
