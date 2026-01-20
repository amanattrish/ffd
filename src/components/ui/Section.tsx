import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "primary" | "accent";
  id?: string;
}

const backgroundStyles: Record<string, string> = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary text-white",
  accent: "bg-[var(--color-accent-1)]/10",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("py-16 md:py-4 lg:py-12 mb-8 md:mb-12 lg:mb-16", backgroundStyles[background], className)}
    >
      <div className={clsx("container mx-auto px-4", containerClassName)}>
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
