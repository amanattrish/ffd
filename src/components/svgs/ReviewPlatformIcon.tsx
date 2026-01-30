import { GoogleIcon } from "./GoogleIcon";
import { YelpIcon } from "./YelpIcon";
import { FacebookIcon } from "./FacebookIcon";

export function ReviewPlatformIcon({
  platform,
  className,
}: {
  platform: string;
  className?: string;
}) {
  switch (platform) {
    case "yelp":
      return <YelpIcon className={className} />;
    case "google":
      return <GoogleIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    default:
      return null;
  }
}

