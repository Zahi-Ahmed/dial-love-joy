import { X } from "lucide-react";
import { useState } from "react";

const PHONE_NUMBER = "tel:+18886334176";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-muted border-t border-border py-3 px-4 flex items-center justify-between z-50">
      <p className="text-sm text-muted-foreground">
        By using cars-rentals.com, you consent to{" "}
        <a href={PHONE_NUMBER} className="text-cyan-accent underline">
          our use of cookies
        </a>
        .
      </p>
      <button
        onClick={handleClose}
        className="text-muted-foreground hover:text-foreground transition-colors p-1"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CookieBanner;
