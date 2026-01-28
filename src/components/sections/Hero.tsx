"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";
import TextInput from "../form-elements/TextInput";
import Label from "../form-elements/Label";
import AboutPreview from "./AboutPreview";

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
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  console.log(formHeight)

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

  useEffect(() => {
    if (!formRef.current) return;

    // Create ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setFormHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(formRef.current);

    // Cleanup on unmount
    return () => resizeObserver.disconnect();
  }, []);
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
    <>
    <section
      className="relative overflow-visible  bg-linear-to-br from-[#F2FDFF] to-white bg-cover bg-center hero-bg mb-2"
    >    
      <div className="section-container relative pt-8 pb-4 lg:pt-12 lg:pb-8">
        {/* Mobile: Stack vertically, Desktop: Grid layout */}
        <div className="grid md:grid-cols-[60%_40%] grid-cols-[45%_55%] lg:gap-8 md:gap-6 sm:gap-4 gap-2 items-start relative ">
          {/* Left Content - Mobile: Full width, Desktop: Left column */}
          <div className="relative z-10 lg:pt-8 w-full lg:w-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:leading-16">
              <span className="text-primary">{hero.title} </span>
              <span className="text-secondary">{hero.titleHighlight} </span>
              <span className="text-primary">{hero.subtitle}</span>
            </h1>
            <p className="mt-4 text-xs md:text-base text-black max-w-sm font-semibold">
              {hero.description}
            </p>

            <div className="mt-6 mb-4 flex items-center gap-4">
              <div className="relative w-32 h-28 md:w-56 md:h-36 rounded-lg  shadow-md">
                <Image
                  src="/images/smile-preview.png"
                  alt="Beautiful smile"
                  fill
                  className="object-cover z-20"
                  sizes="160px"
                />
                <div className="absolute w-[92%] h-[92%] bg-primary z-10 -right-1 -bottom-1 rounded-lg"></div>
              </div>

              <div className="text-primary text-5xl font-medium">+</div>
            </div>
          </div>

          {/* Right - Doctor Image with Book Button - Mobile: Absolute positioned overlapping, Desktop: Right column */}
          <div className="relative w-full lg:w-auto h-96 sm:104 md:h-120">
            {/* Book Appointment Button - Desktop only */}
            <div className="absolute md:top-1/2 bottom-12 md:right-4 right-1/2 z-20">
              <Button
                href={hero.cta.primary.href}
                size="md"
                className="rounded-full! px-5 py-2 border border-black/80 text-black whitespace-nowrap shadow-lg hover:bg-primary/40 hover:border-transparent duration-200 hover:text-white font-medium backdrop-blur-lg bg-white/50"
              >
                {hero.cta.primary.label}
              </Button>
            </div>

            {/* Doctor Image - Mobile: Positioned on right, overlapping behind content */}
            <div className="relative lg:w-[72%] md:w-[84%] w-full flex justify-end lg:justify-end h-full ">
              <div className="absolute top-4 -right-12 text-primary text-5xl font-medium hidden lg:block">+</div>
              {/* Image container */}
  <div className="absolute h-full w-[72%] md:w-[80%] lg:w-[68%] left-1/2 -translate-x-1/2 bg-accent-1/46 bottom-1/3"></div>
  <div className="absolute lg:right-0 -right-4 bottom-12 size-24 rounded-full bg-accent-1/46"></div>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={hero.image || "/images/hero-dentist.png"}
                  alt="Dental care professional"
                  fill
                  className="object-cover pt-4"
                  priority
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 400px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Inquiry Form - Mobile: Below hero section, Desktop: Overlaps */}
        <div className="relative section-container">
          <div ref={formRef} className="w-full left-1/2 -translate-x-1/2 absolute top-[96%] z-20">
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
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6 items-start">

                  <div className="">
                    <Label htmlFor="hero-name" required>
                      {hero.form.fields.name.label}
                    </Label>
                    <TextInput
                      id="hero-name"
                      placeholder={hero.form.fields.name.placeholder}
                      value={formData.name}
                      maxLength={20}
                      error={errors.name}
                      onChange={(e) => {
                        const v = filterName(e.target.value).slice(0, 20);
                        setFormData({ ...formData, name: v });
                        setErrors((p) => ({ ...p, name: "" }));
                      }}
                    />
                  </div>

                  <div className="">
                    <Label htmlFor="hero-date" required>
                      {hero.form.fields.date.label}
                    </Label>
                    <TextInput
                      id="hero-date"
                      placeholder={hero.form.fields.date.placeholder}
                      value={formData.date}
                      error={errors.date}
                      onChange={(e) => {
                        const v = filterDate(e.target.value);
                        setFormData({ ...formData, date: v });
                        setErrors((p) => ({ ...p, date: "" }));
                      }}
                    />
                  </div>

                  <div className="">
                    <Label htmlFor="hero-email" required>
                      {hero.form.fields.email.label}
                    </Label>
                    <TextInput
                      id="hero-email"
                      type="email"
                      placeholder={hero.form.fields.email.placeholder}
                      value={formData.email}
                      error={errors.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors((p) => ({ ...p, email: "" }));
                      }}
                    />
                  </div>

                  <div className="">
                    <Label htmlFor="hero-location" required>
                      {hero.form.fields.location.label}
                    </Label>
                    <TextInput
                      id="hero-location"
                      placeholder={hero.form.fields.location.placeholder}
                      value={formData.location}
                      error={errors.location}
                      onChange={(e) => {
                        const v = filterLocation(e.target.value);
                        setFormData({ ...formData, location: v });
                        setErrors((p) => ({ ...p, location: "" }));
                      }}
                    />
                  </div>

                  <div className="flex items-center md:col-span-1 col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary text-white font-bold text-sm sm:text-base lg:text-lg text-center py-4 rounded-full shadow-lg hover:bg-primary-hover transition-all duration-200 w-full disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                    >
                      {isSubmitting
                        ? hero.form.submittingButton
                        : hero.form.submitButton}
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    <AboutPreview style={{paddingTop: `${formHeight}px`}} className="[transition:padding-top_0.3s_ease]" />
    </>
  );
}
