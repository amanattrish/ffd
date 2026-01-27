"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Allow only letters, spaces, hyphen, apostrophe, period (e.g. O'Brien, Jr.)
const filterName = (v: string) => v.replace(/[^a-zA-Z\s\-'.]/g, "");
// Allow only digits and / or - for DD/MM/YYYY
const filterDate = (v: string) => v.replace(/[^0-9/\-]/g, "");
// Allow letters, numbers, spaces, comma, period, hyphen for location/address
const filterLocation = (v: string) => v.replace(/[^a-zA-Z0-9\s,.\-]/g, "");

/** Returns: "invalid" | "past" | null (valid, today or future) */
function checkDate(str: string): "invalid" | "past" | null {
  const s = str.trim();
  if (!s) return "invalid";
  const parts = s.split(/[\/\-]/);
  if (parts.length !== 3) return "invalid";
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || isNaN(month) || isNaN(year) || month < 0 || month > 11) return "invalid";
  const d = new Date(year, month, day);
  if (d.getDate() !== day || d.getMonth() !== month || d.getFullYear() !== year) return "invalid";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return d < today ? "past" : null;
}

export default function Hero() {
  const { hero } = homeContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(formData.email)) next.email = "Please enter a valid email";
    if (!formData.date.trim()) next.date = "Date is required";
    else {
      const r = checkDate(formData.date);
      if (r === "invalid") next.date = "Please enter a valid date (DD/MM/YYYY)";
      else if (r === "past") next.date = "Please select a date today or in the future";
    }
    if (!formData.location.trim()) next.location = "Location is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setErrors({});
    await new Promise((r) => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", date: "", location: "" });
  };

  return (
    <section
      className="relative overflow-visible  bg-linear-to-br from-[#F2FDFF] to-white bg-cover bg-center hero-bg mb-12 md:mb-16 lg:mb-20"
    >
      {/* Curved Background Shape */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        {/* <svg
          className="absolute top-0 right-0 h-full w-2/3 lg:w-1/2"
          viewBox="0 0 600 800"
          fill="none"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M200 0 Q300 100 250 200 Q200 300 300 400 Q400 500 350 600 Q300 700 400 800 L600 800 L600 0 Z"
            fill="#E8F6F8"
          />
          <path
            d="M300 0 Q400 150 350 300 Q300 450 400 600 Q450 700 500 800 L600 800 L600 0 Z"
            fill="#D4EEF2"
            opacity="0.5"
          />
        </svg> */}
      </div>

      {/* Decorative + Elements */}
      <div className="absolute top-5 right-100 text-primary text-5xl font-medium hidden lg:block">+</div>

      <div className="container mx-auto px-4 pt-8 pb-4 lg:pt-12 lg:pb-8 relative">
        {/* Mobile: Stack vertically, Desktop: Grid layout */}
        <div className="grid grid-cols-2 gap-8 items-start relative pb-8 lg:pb-0">
          {/* Left Content - Mobile: Full width, Desktop: Left column */}
          <div className="relative z-10 lg:pt-8 w-full lg:w-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold lg:leading-[1.1]">
              <span className="text-primary text-xs md:text-5xl">{hero.title} </span>
              <span className="text-secondary text-xs md:text-5xl">{hero.titleHighlight} </span>
              <span className="text-primary text-xs md:text-5xl">{hero.subtitle}</span>
            </h1>
            <p className="mt-4 text-xs md:text-base text-black max-w-sm">
              {hero.description}
            </p>

            {/* Book Appointment Button and Smile Image - Mobile: Below description */}
            <div className="mt-4 lg:hidden relative z-20">
              <Button
                href={hero.cta.primary.href}
                size="sm"
                className="rounded-full lg:px-5 lg:py-2 bg-transparent border border-black text-black whitespace-nowrap shadow-lg hover:bg-primary/40 hover:text-white"
              >
                {hero.cta.primary.label}
              </Button>
              {/* Small Smile Image - Positioned to the lower left of button */}
              <div className="relative w-24 h-16 mt-2 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/smile-preview.png"
                  alt="Beautiful smile"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>

            {/* Small Smile Image - Desktop: Below text */}
            <div className="mt-6 mb-4 hidden lg:flex items-center gap-4">
              <div className="relative w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/smile-preview.png"
                  alt="Beautiful smile"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
              <div className="text-primary text-5xl font-medium">+</div>
            </div>
          </div>

          {/* Right - Doctor Image with Book Button - Mobile: Absolute positioned overlapping, Desktop: Right column */}
          <div className="absolute top-0 right-0 lg:relative flex justify-end lg:justify-end w-full lg:w-auto h-[450px] sm:h-[500px] lg:h-auto">
            {/* Book Appointment Button - Desktop only */}
            <div className="absolute top-4 lg:top-50 z-20 hidden lg:block">
              <Button
                href={hero.cta.primary.href}
                size="md"
                className="rounded-full! px-5! py-2! bg-transparent border border-black text-black whitespace-nowrap shadow-lg hover:bg-primary/40 hover:text-white"
              >
                {hero.cta.primary.label}
              </Button>
            </div>

            {/* Doctor Image - Mobile: Positioned on right, overlapping behind content */}
            <div className="relative w-full flex justify-end lg:justify-end h-full">
              {/* Background color container */}
              <div className="absolute lg:top-0 right-12 lg:right-0 lg:left-auto lg:right-35 lg:translate-x-0 w-full max-w-[60px] sm:max-w-[180px] lg:max-w-50 h-30 lg:h-3/4 bg-accent-1/46"></div>
              {/* Image container */}
              <div className="relative w-full max-w-[150px] sm:max-w-[180px] lg:max-w-md h-40 lg:h-100 z-0">
                <Image
                  src={hero.image || "/images/hero-dentist.png"}
                  alt="Dental care professional"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 400px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Inquiry Form - Mobile: Below hero section, Desktop: Overlaps */}
        <div className="relative lg:absolute inset-x-0 lg:-bottom-18 z-20 mt-8 lg:mt-0 px-4 lg:px-0">
          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 md:px-6 lg:px-8 py-8 md:py-10 text-center">
              <span className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 text-white" />
              </span>
              <h3 className="text-lg font-bold text-primary mb-2">{hero.form.title}</h3>
              <p className="text-secondary text-sm mb-4">{hero.enquirySuccessMessage ?? "Thank you! We'll get back to you shortly."}</p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-primary font-semibold text-sm hover:underline"
              >
                {hero.form.sendAnother}
              </button>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 md:px-6 lg:px-8 py-5 md:py-6"
          >
            {/* Mobile: 2 columns x 2 rows, Button full width below; Desktop: single row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              <div className="min-w-0 col-span-1">
                <label htmlFor="hero-name" className="block text-sm font-bold text-black mb-2">
                  {hero.form.fields.name.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="hero-name"
                  placeholder={hero.form.fields.name.placeholder}
                  value={formData.name}
                  onChange={(e) => { const v = filterName(e.target.value).slice(0, 20); setFormData({ ...formData, name: v }); setErrors((p) => ({ ...p, name: "" })); }}
                  maxLength={20}
                  className={`w-full h-8 text-sm px-4 border rounded-lg bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div className="min-w-0 col-span-1">
                <label htmlFor="hero-date" className="block text-sm font-bold text-black mb-2">
                  {hero.form.fields.date.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="hero-date"
                  placeholder={hero.form.fields.date.placeholder}
                  value={formData.date}
                  onChange={(e) => { const v = filterDate(e.target.value); setFormData({ ...formData, date: v }); setErrors((p) => ({ ...p, date: "" })); }}
                  className={`w-full h-8 text-sm px-4 border rounded-lg bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none ${errors.date ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div className="min-w-0 col-span-1 sm:col-span-1">
                <label htmlFor="hero-email" className="block text-sm font-bold text-black mb-2">
                  {hero.form.fields.email.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="hero-email"
                  placeholder={hero.form.fields.email.placeholder}
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((p) => ({ ...p, email: "" })); }}
                  className={`w-full h-8 text-sm px-4 border rounded-lg bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="min-w-0 col-span-1 sm:col-span-1">
                <label htmlFor="hero-location" className="block text-sm font-bold text-black mb-2">
                  {hero.form.fields.location.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="hero-location"
                  placeholder={hero.form.fields.location.placeholder}
                  value={formData.location}
                  onChange={(e) => { const v = filterLocation(e.target.value); setFormData({ ...formData, location: v }); setErrors((p) => ({ ...p, location: "" })); }}
                  className={`w-full h-8 text-sm px-4 border rounded-lg bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none ${errors.location ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="col-span-2 sm:col-span-1 bg-primary text-white font-bold text-base px-8 py-3 rounded-full shadow-lg hover:bg-[#0d5f7a] transition-all duration-200 w-full sm:w-auto sm:justify-self-start disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? hero.form.submittingButton : hero.form.submitButton}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
