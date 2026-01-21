const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  // If src already has basePath or is an external URL, return as is
  if (src.startsWith("http") || (basePath && src.startsWith(basePath))) {
    return src;
  }

  // Add basePath for local images
  return `${basePath}${src}`;
}
