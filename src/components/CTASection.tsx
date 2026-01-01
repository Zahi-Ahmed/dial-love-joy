const PHONE_NUMBER = "tel:+18449673326";

const CTASection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          Comparison of car rental prices can{" "}
          <span className="text-cyan-accent">save you</span> up to{" "}
          <span className="text-deal-orange">70%</span>
        </h2>
        <a
          href={PHONE_NUMBER}
          className="inline-block mt-4 text-xl md:text-2xl font-heading text-cyan-accent underline hover:text-cyan-accent/80 transition-colors"
        >
          Search Now
        </a>{" "}
        <span className="text-xl md:text-2xl font-heading text-foreground">
          to find the best prices!
        </span>
      </div>
    </section>
  );
};

export default CTASection;
