import { siteConfig } from "@/content";

interface MapEmbedProps {
  embedUrl?: string;
  className?: string;
  height?: string;
  title?: string;
}

export default function MapEmbed({
  embedUrl,
  className = "",
  height = "400px",
  title,
}: MapEmbedProps) {
  const mapUrl = embedUrl || "https://www.openstreetmap.org/export/embed.html?bbox=-73.65%2C40.64%2C-73.51%2C40.68&layer=mapnik&marker=40.6576%2C-73.5832";
  const iframeTitle = title ?? siteConfig?.ui?.mapEmbedTitle ?? "Office Location";

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={iframeTitle}
      />
    </div>
  );
}
