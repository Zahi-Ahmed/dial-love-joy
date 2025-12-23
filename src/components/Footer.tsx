const PHONE_NUMBER = "tel:+18886334176";

const Footer = () => {
  return (
    <footer className="bg-footer-navy text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-heading font-bold mb-4">ABOUT CARS RENTALS</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Cars Rentals was founded by three friends with years of experience in the online tourism field. 
              We love to travel and to share our insights with other vacation goers. After years of using tourism 
              websites, we noticed that often times it's possible to save a lot of money with the help of efficient 
              and thorough price comparisons.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_NUMBER}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors border-b border-primary-foreground/30 pb-1 inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={PHONE_NUMBER}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors border-b border-primary-foreground/30 pb-1 inline-block"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href={PHONE_NUMBER}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors border-b border-primary-foreground/30 pb-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-primary-foreground/60 text-xs leading-relaxed">
            cars-rentals.com is an online marketplace connecting consumers with leading travel providers and agents. 
            We provide travel information. We do not provide quotes directly to consumers. cars-rentals.com does not 
            provide travel services nor are we a licensed travel provider. cars-rentals.com matches consumers to 
            reliable travel suppliers and travel agents that can offer the best solution for their needs. The lowest 
            advertised rates are not necessarily always available on our site. Rates and availabilities are subject 
            to numerous factors, such as limited time deals, seasonal price changes, location, etc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
