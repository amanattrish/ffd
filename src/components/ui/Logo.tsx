import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
  linkToHome?: boolean;
}

export default function Logo({
  className = "",
  width = 150,
  height = 50,
  showText = false,
  linkToHome = true,
}: LogoProps) {
  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/FFD_Logo.jpeg"
        alt={siteConfig.siteName}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {showText && (
        <span className="font-semibold text-lg text-[var(--color-primary)]">
          {siteConfig.siteName}
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
