interface MapEmbedProps {
  embedUrl?: string;
  className?: string;
  height?: string;
}

export default function MapEmbed({
  embedUrl,
  className = "",
  height = "400px",
}: MapEmbedProps) {
  // Default to a placeholder if no URL is provided
  const mapUrl = embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.123456789!2d-73.123456!3d40.123456";

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
        title="Office Location"
      />
    </div>
  );
}
