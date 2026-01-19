"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
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
      className="relative overflow-hidden bg-primary/10 bg-cover bg-center hero-bg"
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
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="relative z-10 pt-4 lg:pt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]">
              <span className="text-primary">{hero.title}</span>
              <br />
              <span className="text-primary italic">{hero.titleHighlight}</span>{" "}
              <span className="text-secondary">{hero.subtitle}</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-black max-w-sm">
              {hero.description}
            </p>

            {/* Small Smile Image */}
            <div className="mt-6 mb-4 flex items-center gap-4">
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

          {/* Right - Doctor Image with Book Button */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Book Appointment Button - Positioned near doctor */}
            <div className="absolute top-4 right-4 lg:top-50 lg:right-8 z-20">
              <Button href="/book-appointment" className="shadow-lg bg-transparent px-10 py-3 rounded border border-black text-primary whitespace-nowrap hover:bg-primary hover:text-white">
                Book Appointment
              </Button>
            </div>

            {/* Doctor Image */}
            <div className="relative w-full max-w-sm lg:max-w-md h-80 sm:h-96 lg:h-100 bg-accent-1/46">
              <Image
                src={hero.image || "/images/hero-dentist.png"}
                alt="Dental care professional"
                fill
                className="object-contain object-bottom h-20"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="relative z-10 mt-6 lg:mt-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-4 md:p-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div>
                <label htmlFor="hero-name" className="block text-xs font-medium text-primary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="hero-name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-sm py-2 px-3 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="hero-email" className="block text-xs font-medium text-primary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="hero-email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-sm py-2 px-3 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="hero-date" className="block text-xs font-medium text-primary mb-1.5">
                  Date
                </label>
                <input
                  type="text"
                  id="hero-date"
                  placeholder="DD/MM/YYYY"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full text-sm py-2 px-3 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="hero-location" className="block text-xs font-medium text-primary mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  id="hero-location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full text-sm py-2 px-3 border border-gray-200 rounded-md focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Enquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
