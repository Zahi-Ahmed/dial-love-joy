import { Car } from "lucide-react";

const PHONE_NUMBER = "tel:+18886334176";

const Header = () => {
  return (
    <header className="bg-hero-blue py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href={PHONE_NUMBER} className="flex items-center gap-2 text-primary-foreground">
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <Car className="w-5 h-5 text-hero-blue" />
          </div>
          <span className="text-xl font-heading font-bold">
            cars-rentals<span className="text-xs">.com</span>
          </span>
        </a>
        <a href={PHONE_NUMBER} className="flex items-center gap-2 text-primary-foreground">
          <img 
            src="https://flagcdn.com/w40/us.png" 
            alt="USD" 
            className="w-6 h-4 object-cover rounded-sm"
          />
          <span className="font-semibold">USD</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
