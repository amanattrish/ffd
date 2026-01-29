import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, Stethoscope, CircleDot, Sparkles, AlignCenter, LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import { homeContent } from "@/content";
import FirstCardSvg from "./FirstCardSvg";
import SecondCardSvg from "./SecondCardSvg";
import ThirdCardSvg from "./ThirdCardSvg";
import FourthCardSvg from "./FourthCardSvg";
import { ToothDecoration } from "./ToothDecoration";
import { FrontToothDecoration } from "./FrontToothDecoration";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  CircleDot,
  Sparkles,
  AlignCenter,
};

export default function ServicesPreview() {
  const { services } = homeContent;

  return (
    <Section background="gradient" isBgLtr={false} className="relative overflow-hidden">

      <div className="absolute pointer-events-none top-1/3 left-20 -rotate-12 hidden lg:block">
        <ToothDecoration
          className="absolute -right-1 -top-2 -translate-y-1/2 w-28 h-40 opacity-80"
        />
        <FrontToothDecoration
          className="absolute -right-3 top-2 -translate-y-1/2 w-28 h-40 opacity-80"
        />
      </div>
      {/* Header with left content and right image placeholder */}
      <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
        <div className="md:order-1 order-2">
          <span className="inline-block text-secondary font-medium text-sm uppercase tracking-wider mb-2!">
            {services.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4!">
            {services.title}{" "}
            <span className="text-secondary">{services.titleHighlight}</span>
          </h2>
          <p className="mb-6! text-body">
            {services.description}
          </p>

          {/* Service Highlights */}
          <ul className="space-y-1">
            {services.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-body font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service highlight image */}
        <div className="md:order-2 order-1 relative flex md:justify-end justify-start">
          <div className="relative aspect-4/3 rounded-2xl shadow-xl max-w-md w-full">
            <Image
              src="/images/dental-care.png"
              alt="Dental services"
              fill
              className="object-cover rounded-2xl"
              sizes="400px"
            />
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.items.map((service, index) => {
          const Icon = iconMap[service.icon] || Stethoscope;
          const isFirstCard = index === 0;
          const isSecondCard = index === 1;
          const isThirdCard = index === 2;
          const isFourthCard = index === 3;

          return (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-primary hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4! text-primary group-hover:text-white transition-colors">
                  {isFirstCard ? (
                    <FirstCardSvg />
                  ) : isSecondCard ? (
                    <SecondCardSvg />
                  ) : isThirdCard ? (
                    <ThirdCardSvg />
                  ) : isFourthCard ? (
                    <FourthCardSvg />
                  ) : (
                    <Icon className="w-8 h-8" />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3! text-primary group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6! grow group-hover:text-white/90! transition-colors body-text">
                  {service.description}
                </p>

                {/* Read More Button */}
                <div className="inline-flex items-center w-35 gap-2 px-4 py-2 rounded-full font-semibold text-sm bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  {services.readMoreButton}
                  <ArrowUpRight className="w-4 h-4 flex size-5! justify-center items-center border rounded-full" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
