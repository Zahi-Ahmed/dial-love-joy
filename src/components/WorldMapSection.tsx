import { MapPin } from "lucide-react";

const PHONE_NUMBER = "tel:+18449673326";

const WorldMapSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <a href={PHONE_NUMBER} className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left text */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-heading text-cyan-accent leading-tight">
              We search car rental and travel
              <br />
              booking sites across the web to
              <br />
              find the world's lowest prices
            </h2>
          </div>

          {/* Right - World Map illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-64 lg:h-80">
              {/* Stylized world map - yellow silhouette */}
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Simplified world continents */}
                <ellipse cx="200" cy="100" rx="180" ry="90" fill="hsl(var(--booking-yellow))" opacity="0.3" />
                {/* North America */}
                <path d="M50 50 Q80 30 100 45 Q120 60 110 80 Q100 100 70 90 Q40 80 50 50Z" fill="hsl(var(--booking-yellow))" />
                {/* Europe */}
                <path d="M180 40 Q210 30 230 45 Q250 60 240 75 Q220 85 190 75 Q170 65 180 40Z" fill="hsl(var(--booking-yellow))" />
                {/* Asia */}
                <path d="M250 45 Q300 35 340 55 Q360 80 340 100 Q300 110 270 95 Q240 80 250 45Z" fill="hsl(var(--booking-yellow))" />
                {/* South America */}
                <path d="M100 110 Q120 100 130 120 Q140 150 120 170 Q100 180 90 160 Q80 140 100 110Z" fill="hsl(var(--booking-yellow))" />
                {/* Africa */}
                <path d="M190 90 Q220 80 240 100 Q250 130 230 160 Q200 170 180 150 Q170 120 190 90Z" fill="hsl(var(--booking-yellow))" />
                {/* Australia */}
                <path d="M310 130 Q340 120 360 135 Q370 155 350 165 Q320 170 310 155 Q300 145 310 130Z" fill="hsl(var(--booking-yellow))" />
                
                {/* Connection lines (dashed) */}
                <path d="M70 70 Q150 30 200 50" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M200 50 Q280 40 300 65" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M300 65 Q340 100 340 140" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <path d="M200 50 Q210 100 215 140" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
              </svg>

              {/* Location pins */}
              <div className="absolute top-[20%] left-[18%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute top-[15%] left-[48%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute top-[25%] left-[55%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute top-[20%] right-[18%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute top-[40%] right-[25%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute bottom-[25%] right-[15%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
              <div className="absolute bottom-[20%] left-[50%]">
                <MapPin className="w-6 h-6 text-cyan-accent fill-cyan-accent" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WorldMapSection;
