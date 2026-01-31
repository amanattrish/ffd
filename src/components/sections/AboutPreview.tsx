import Image from "next/image";
import Section from "@/components/ui/Section";
import { homeContent } from "@/content";
import clsx from "clsx";
import { ToothDecoration } from "../svgs/ToothDecoration";
import { FrontToothDecoration } from "../svgs/FrontToothDecoration";
import { ShieldIcon } from "../svgs/ShieldIconSvg";
import { WaveformIcon } from "../svgs/WaveformIconSvg";
import { StarsIcon } from "../svgs/StarsIconSvg";
import { TrophyIcon } from "../svgs/TrophyIconSvg";

function getFeatureIcon(index: number, color: string) {
  switch (index) {
    case 0:
      return <StarsIcon color={color} />;

    case 1:
      return <ShieldIcon color={color} />;

    case 2:
      return <WaveformIcon color={color} />;
    case 3:
      return <TrophyIcon color={color} />;
    default:
      return null;
  }
}

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function AboutPreview({ className, style }: Props) {
  const { about } = homeContent;

  return (
    <Section style={style} background="gradient" isBgLtr={false} className={clsx("relative", className)}>
      {/* Decorative teeth over teeth on right - layered effect */}
      <div className="absolute inset-0 pointer-events-none top-[92%] right-20  hidden lg:block">
        <ToothDecoration
          className="absolute -right-1 -top-5 -translate-y-1/2 w-64 h-80 opacity-80"
        />
        <FrontToothDecoration
          className="absolute -right-6 top-2 -translate-y-1/2 w-60 h-90 opacity-80"
        />
      </div>


      <div className="grid md:grid-cols-[30%_70%] gap-12 lg:gap-16 items-center relative z-10 mt-4">

        <div className=" relative flex lg:justify-start justify-center">
          {/* Decorative + elements */}
          <div className="absolute -top-4 left-0 text-primary text-5xl font-medium">+</div>
          <div className="absolute bottom-0 right-12 text-primary text-5xl font-medium hidden lg:block">+</div>

          <div className="relative">         
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="size-20 md:size-24 bg-accent-1/30 rounded-full absolute right-20 bottom-8" />
              <Image
                src={about.image || "/images/about-clinic.png"}
                alt={about.imageAlt ?? "Our clinic"}
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="">
          <span className="section-badge mb-4">
            {about.sectionLabel}
          </span>
          <h2 className="heading-3 mb-2">
            {about.title}
          </h2>
          <p className="text-muted-light subheading mb-4!">
            {about.shortDescription}
          </p>
          <p className=" mb-8! body-text">
            {about.description}
          </p>

          {/* Features List - with colored icons */}
          <ul className="space-y-3 mb-8!">
            {about.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {getFeatureIcon(index, feature.color)}
                </span>
                <span className="text-primary font-medium text-sm">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
