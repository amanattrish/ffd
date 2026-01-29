"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content";
import AboutPreview from "./AboutPreview";
import EnquiryForm from "../forms/EnquiryForm";

export default function Hero() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  console.log(formHeight)

  const { hero } = homeContent;

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
              <h1 className="heading-1">
                <span className="text-primary">{hero.title} </span>
                <span className="text-secondary">{hero.titleHighlight} </span>
                <span className="text-primary">{hero.subtitle}</span>
              </h1>
              <p className="mt-4 body-text max-w-md font-semibold">
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
                <div className="absolute h-full w-[64%] md:w-[82%] lg:w-[68%] left-[48%] lg:left-[46%] -translate-x-1/2 bg-accent-1/46 bottom-1/3"></div>
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
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
      <AboutPreview style={{ paddingTop: `${formHeight}px` }} className="[transition:padding-top_0.3s_ease]" />
    </>
  );
}
