
import { useState } from "react";
import { Flower2 } from "lucide-react";

function SiteImage({
  src,
  alt,
  className = "",
  fallback = "Petals & Pages",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`site-image-fallback ${className}`}>
        <Flower2 size={45} strokeWidth={1} />
        <span>{fallback}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`site-image ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default SiteImage;
