const PHONE_NUMBER = "tel:+18449673326";

interface CarDeal {
  price: number;
  type: string;
  capacity: string;
  provider: string;
  isGreatDeal?: boolean;
}

const carDeals: CarDeal[] = [
  { price: 46, type: "Economy", capacity: "2 Adults, 2 Bags", provider: "carrental" },
  { price: 71, type: "Compact", capacity: "4 Adults, 2 Bags", provider: "priceline" },
  { price: 31, type: "Intermediate", capacity: "5 Adults, 3 Bags", provider: "TURO", isGreatDeal: true },
  { price: 47, type: "Standard", capacity: "5 Adults, 3 Bags", provider: "carrental" },
  { price: 56, type: "Full-size", capacity: "5 Adults, 2 Bags", provider: "carrental" },
  { price: 68, type: "Minivan", capacity: "5 Adults, 5 Bags", provider: "carrental" },
  { price: 71, type: "Full-size SUV", capacity: "5 Adults, 2 Bags", provider: "hotwire" },
  { price: 70, type: "Luxury", capacity: "5 Adults, 5 Bags", provider: "wisecars" },
  { price: 68, type: "Intermediate SUV", capacity: "5 Adults, 3 Bags", provider: "carrental" },
  { price: 96, type: "Compact SUV", capacity: "4 Adults, 2 Bags", provider: "carrental" },
  { price: 123, type: "Standard SUV", capacity: "5 Adults, 3 Bags", provider: "wisecars" },
  { price: 77, type: "Supplier choice", capacity: "5 Adults, 5 Bags", provider: "priceline" },
];

const getProviderColor = (provider: string): string => {
  switch (provider) {
    case "carrental": return "text-orange-500";
    case "priceline": return "text-blue-600";
    case "TURO": return "text-slate-800";
    case "hotwire": return "text-red-600";
    case "wisecars": return "text-teal-600";
    default: return "text-foreground";
  }
};

const DealsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-10">
          All the best deals and rental options in one place
        </h2>

        <a href={PHONE_NUMBER} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-deal-orange font-bold text-lg">${deal.price}/day</span>
                  {deal.isGreatDeal && (
                    <span className="bg-success-green text-accent-foreground text-xs px-2 py-1 rounded font-semibold">
                      Great Deal
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-foreground">{deal.type}</h3>
                <p className="text-sm text-muted-foreground">{deal.capacity}</p>
                <button className="mt-3 bg-deal-orange hover:bg-deal-orange/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded transition-colors">
                  View Deal
                </button>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className={`text-sm font-semibold ${getProviderColor(deal.provider)}`}>
                  {deal.provider === "TURO" ? (
                    <span className="border border-foreground px-2 py-0.5">TURO</span>
                  ) : (
                    deal.provider
                  )}
                </span>
                {/* Car silhouette placeholder */}
                <div className="w-24 h-16 bg-muted rounded flex items-center justify-center">
                  <svg viewBox="0 0 100 50" className="w-full h-full text-muted-foreground">
                    <ellipse cx="25" cy="40" rx="10" ry="10" fill="currentColor" opacity="0.3" />
                    <ellipse cx="75" cy="40" rx="10" ry="10" fill="currentColor" opacity="0.3" />
                    <path d="M10 35 Q15 15 35 15 L65 15 Q85 15 90 35 L90 40 L10 40 Z" fill="currentColor" opacity="0.2" />
                    <path d="M30 15 Q35 5 50 5 Q65 5 70 15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </a>
      </div>
    </section>
  );
};

export default DealsSection;
