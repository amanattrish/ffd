"use client";

import { useEffect } from "react";
import { siteConfig } from "@/content";

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyEmbed({
  url,
  className = "",
  minWidth = "320px",
  height = "700px",
}: CalendlyEmbedProps) {
  const calendlyUrl = url || siteConfig.calendlyUrl;

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className={`rounded-xl overflow-hidden bg-white shadow-lg ${className}`}>
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth, height }}
      />
    </div>
  );
}
