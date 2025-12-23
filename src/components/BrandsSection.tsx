const PHONE_NUMBER = "tel:+18886334176";

const brands = [
  { name: "Budget", color: "#e63946" },
  { name: "National", color: "#2d6a4f" },
  { name: "AVIS", color: "#d90429" },
  { name: "Enterprise", color: "#1a472a" },
  { name: "Dollar", color: "#f4a261" },
  { name: "Thrifty", color: "#1d3557" },
  { name: "Alamo", color: "#e76f51" },
  { name: "Sixt", color: "#264653" },
];

const BrandsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading text-cyan-accent text-center mb-8 italic">
          All the brands on the same website, search a car and compare prices
        </h2>
        <a href={PHONE_NUMBER} className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-xl md:text-2xl font-heading font-bold transition-transform hover:scale-105 cursor-pointer"
              style={{ color: brand.color }}
            >
              {brand.name === "Budget" && <span className="text-red-600">🏴 Budget</span>}
              {brand.name === "National" && <span className="text-green-800">🚗 National</span>}
              {brand.name === "AVIS" && <span className="text-red-700 italic">AVIS</span>}
              {brand.name === "Enterprise" && <span className="text-green-900">enterprise</span>}
              {brand.name === "Dollar" && <span className="text-amber-600 font-black">dollar.</span>}
              {brand.name === "Thrifty" && <span className="text-blue-900 italic">thrifty</span>}
              {brand.name === "Alamo" && (
                <span className="bg-orange-500 text-primary-foreground px-3 py-1 rounded">Alamo</span>
              )}
              {brand.name === "Sixt" && <span className="text-slate-800 font-black">SIXT</span>}
            </div>
          ))}
        </a>
      </div>
    </section>
  );
};

export default BrandsSection;
