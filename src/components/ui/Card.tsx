import { clsx } from "clsx";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = "", href, hoverable = false }: CardProps) {
  const cardStyles = clsx(
    "bg-white rounded-xl overflow-hidden",
    "border border-gray-100 shadow-sm",
    hoverable && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        {children}
      </Link>
    );
  }

  return <div className={cardStyles}>{children}</div>;
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "portrait";
  className?: string;
}

export function CardImage({ src, alt, aspectRatio = "video", className = "" }: CardImageProps) {
  const aspectStyles = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={clsx("relative overflow-hidden", aspectStyles[aspectRatio], className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={clsx("p-5", className)}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({ children, className = "", as: Tag = "h3" }: CardTitleProps) {
  return (
    <Tag className={clsx("font-semibold text-primary", className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={clsx("text-secondary text-sm mt-2", className)}>
      {children}
    </p>
  );
}
