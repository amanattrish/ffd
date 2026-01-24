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
  // Default to OpenStreetMap (Freeport, NY) if no URL is provided
  const mapUrl = embedUrl || "https://www.openstreetmap.org/export/embed.html?bbox=-73.65%2C40.64%2C-73.51%2C40.68&layer=mapnik&marker=40.6576%2C-73.5832";

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
