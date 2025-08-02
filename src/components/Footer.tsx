import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { US_STATES } from "@/data/states";

const Footer = () => {
  // Get first 12 states for popular states section
  const popularStates = US_STATES.slice(0, 12);

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl text-foreground">
                USA Car Insurance
              </span>
            </div>
            <p className="text-muted-foreground">
              Get affordable car insurance quotes from top providers across all 50 states. 
              Compare rates and save money on your auto insurance today.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+13791398291" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(379) 139-8291</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@usacarinsurance.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quotes" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Quotes
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="text-muted-foreground hover:text-primary transition-colors">
                  Coverage Options
                </Link>
              </li>
              <li>
                <Link to="/states" className="text-muted-foreground hover:text-primary transition-colors">
                  All States
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular States */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Popular States</h3>
            <ul className="space-y-2">
              {popularStates.map((state) => (
                <li key={state.slug}>
                  <Link 
                    to={`/car-insurance/${state.slug}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {state.name} Car Insurance
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Auto Insurance Quotes</li>
              <li className="text-muted-foreground">Liability Coverage</li>
              <li className="text-muted-foreground">Comprehensive Coverage</li>
              <li className="text-muted-foreground">Collision Coverage</li>
              <li className="text-muted-foreground">Uninsured Motorist</li>
              <li className="text-muted-foreground">Personal Injury Protection</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 USA Car Insurance. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;