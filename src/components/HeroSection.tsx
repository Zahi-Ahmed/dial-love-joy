import { Search, Calendar, Clock, Check } from "lucide-react";

const PHONE_NUMBER = "tel:+18449673326";

const HeroSection = () => {
  const benefits = [
    "Get up to 30% off",
    "Free cancellations",
    "Compare over 200 car rental companies",
    "Exclusive discounts"
  ];

  return (
    <section className="bg-hero-gradient relative overflow-hidden pb-32 pt-12">
      {/* Background illustration hint - sky feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Text */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            <span className="italic">Search. Compare. Rent.</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Car rental at the best prices
          </p>
        </div>

        {/* Booking Form */}
        <a href={PHONE_NUMBER} className="block max-w-5xl mx-auto">
          <div className="bg-booking-yellow rounded-xl p-6 shadow-2xl">
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
              <label className="flex items-center gap-2 text-secondary-foreground cursor-pointer">
                <div className="w-5 h-5 border-2 border-secondary-foreground rounded flex items-center justify-center">
                  <Check className="w-3 h-3 text-secondary-foreground opacity-0" />
                </div>
                <span className="text-sm font-medium">Return to Different Location</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-secondary-foreground font-medium">Book Now and Enjoy</span>
                <span className="bg-secondary-foreground text-booking-yellow px-3 py-1 font-heading font-bold text-lg tracking-wide">
                  TRAVEL TUESDAY
                </span>
                <span className="text-secondary-foreground font-medium">PRICE DROPS</span>
              </div>
            </div>

            {/* Search row */}
            <div className="bg-background rounded-lg p-2 flex flex-wrap items-center gap-2">
              {/* Location input */}
              <div className="flex-1 min-w-[200px] flex items-center gap-2 px-4 py-3 border-r border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Pick-up Location</span>
              </div>

              {/* Pickup Date */}
              <div className="flex items-center gap-2 px-4 py-2 border-r border-border">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Pickup Date</p>
                  <p className="font-semibold text-foreground">Sun 28 Dec</p>
                </div>
              </div>

              {/* Pickup Time */}
              <div className="flex items-center gap-2 px-4 py-2 border-r border-border">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">10:00</p>
                </div>
              </div>

              {/* Drop-off Date */}
              <div className="flex items-center gap-2 px-4 py-2 border-r border-border">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Drop-off Date</p>
                  <p className="font-semibold text-foreground">Sun 4 Jan</p>
                </div>
              </div>

              {/* Drop-off Time */}
              <div className="flex items-center gap-2 px-4 py-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">10:00</p>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-success-green hover:bg-success-green/90 text-accent-foreground font-bold px-8 py-4 rounded-lg transition-colors">
                Search
              </button>
            </div>

            {/* Benefits row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-secondary-foreground">
                  <Check className="w-5 h-5 text-success-green" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>

      {/* Decorative car silhouette hint at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hero-blue-dark/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
