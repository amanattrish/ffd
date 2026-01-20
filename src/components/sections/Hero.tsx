"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";

export default function Hero() {
  const { hero } = homeContent;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative overflow-visible bg-primary/10 bg-cover bg-center hero-bg mb-12 md:mb-16 lg:mb-20"
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
              <span className="text-primary text-xs md:text-5xl">Make your </span>
              <span className="text-secondary text-xs md:text-5xl">perfect </span>
              <span className="text-primary text-xs md:text-5xl">smile even </span>
              <span className="text-secondary text-xs md:text-5xl">better</span>
            </h1>
            <p className="mt-4 text-xs md:text-base text-black max-w-sm">
              {hero.description}
            </p>

            {/* Book Appointment Button and Smile Image - Mobile: Below description */}
            <div className="mt-4 lg:hidden relative z-20">
              <Button
                href="/book-appointment"
                size="sm"
                className="rounded-full lg:px-5 lg:py-2 bg-transparent border border-black text-black whitespace-nowrap shadow-lg hover:bg-primary/40 hover:text-white"
              >
                Book Appointment
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
                href="/book-appointment"
                size="md"
                className="rounded-full! px-5! py-2! bg-transparent border border-black text-black whitespace-nowrap shadow-lg hover:bg-primary/40 hover:text-white"
              >
                Book Appointment
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
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] px-5 md:px-6 lg:px-8 py-5 md:py-6"
          >
            {/* Mobile: 2 columns x 2 rows, Button full width below; Desktop: single row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
              <div className="min-w-0 col-span-1">
                <label htmlFor="hero-name" className="block text-sm font-bold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="hero-name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-8 text-sm px-4 border border-gray-300 rounded-lg bg-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
              </div>
              {/* Place Date next to Name on mobile */}
              <div className="min-w-0 col-span-1">
                <label htmlFor="hero-date" className="block text-sm font-bold text-black mb-2">
                  Date
                </label>
                <input
                  type="text"
                  id="hero-date"
                  placeholder="DD/MM/YYYY"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full h-8 text-sm px-4 border border-gray-300 rounded-lg bg-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
              </div>
              <div className="min-w-0 col-span-1 sm:col-span-1">
                <label htmlFor="hero-email" className="block text-sm font-bold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="hero-email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-8 text-sm px-4 border border-gray-300 rounded-lg bg-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
              </div>
              <div className="min-w-0 col-span-1 sm:col-span-1">
                <label htmlFor="hero-location" className="block text-sm font-bold text-black mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="hero-location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full h-8 text-sm px-4 border border-gray-300 rounded-lg bg-white placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-primary/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="col-span-2 sm:col-span-1 bg-primary text-white font-bold text-base px-8 py-3 rounded-full shadow-lg hover:bg-[#0d5f7a] transition-all duration-200 w-full sm:w-auto sm:justify-self-start"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
