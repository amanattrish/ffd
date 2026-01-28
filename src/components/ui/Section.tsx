import { clsx } from "clsx";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "primary" | "accent" | "gradient";
  id?: string;
  isBgLtr?: boolean;
  style?: React.CSSProperties;
}

const backgroundStyles: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary text-white",
  accent: "bg-[var(--color-accent-1)]/10",
};

const gradientStyles = {
  ltr: "bg-linear-to-br from-[#F2FDFF] to-white",
  rtl: "bg-linear-to-bl from-[#F2FDFF] to-white",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  id,
  isBgLtr = true,
  style
}: SectionProps) {
  const bgClass =
    background === "gradient"
      ? isBgLtr
        ? gradientStyles.ltr
        : gradientStyles.rtl
      : backgroundStyles[background];

  return (
    <section
      style={style}
      id={id}
      className={clsx(
        "pb-16 md:pb-4 lg:pb-12",
        bgClass,
        className
      )}
    >
      <div className={clsx("section-container", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={clsx("mb-12", centered && "text-center", className)}>
      {label && (
        <span className="inline-block text-secondary font-medium text-sm uppercase tracking-wider mb-2">
          {label}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
