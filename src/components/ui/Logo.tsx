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
  width = 140,
  height = 80,
  showText = false,
  linkToHome = true,
}: LogoProps) {
  // Only apply h-20 if className doesn't contain height-related classes
  const hasHeightClass = className.includes("h-");
  
  // Simplified structure for footer (h-auto), full structure for header
  const logoContent = hasHeightClass ? (
    <div style={{ display: 'block', lineHeight: 0, fontSize: 0 }}>
      <Image
        src="/images/FFD_Logo.jpeg"
        alt={siteConfig.siteName}
        width={width}
        height={height}
        className={`object-contain w-auto ${className}`}
        priority
        style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'top' }}
      />
    </div>
  ) : (
    <div className={`flex items-center gap-3 h-20 overflow-hidden ${className}`}>
      <div className="h-full flex items-center">
        <Image
          src="/images/FFD_Logo.jpeg"
          alt={siteConfig.siteName}
          width={width}
          height={height}
          className="object-contain h-full max-h-full w-auto"
          priority
        />
      </div>
      {showText && (
        <span className="font-semibold text-lg text-primary">
          {siteConfig.siteName}
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block h-20">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
