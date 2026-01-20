import Link from "next/link";
import {
  Stethoscope,
  CircleDot,
  Sparkles,
  AlignCenter,
  Wrench,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { clsx } from "clsx";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  CircleDot,
  Sparkles,
  AlignCenter,
  Wrench,
  AlertCircle,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  href: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  variant = "default",
}: ServiceCardProps) {
  const Icon = icon ? iconMap[icon] : Stethoscope;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
        </div>
        <div>
          <h4 className="font-semibold text-primary group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-sm text-secondary mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "group block p-6 rounded-xl bg-white border border-gray-100",
        "shadow-sm hover:shadow-lg hover:-translate-y-1",
        "transition-all duration-300"
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-secondary text-sm line-clamp-3">
        {description}
      </p>
      <span className="inline-flex items-center mt-4 text-primary font-medium text-sm group-hover:underline">
        Learn More
        <svg
          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
