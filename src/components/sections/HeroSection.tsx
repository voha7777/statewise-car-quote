import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingDown, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Car insurance protection for families" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Get The Best 
                <span className="text-primary-glow"> Car Insurance </span>
                Quotes Online
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Compare affordable auto insurance rates from top providers across all 50 states. 
                Save up to $500 a year with our free quote comparison tool.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary-glow" />
                <div className="text-2xl font-bold">A+</div>
                <div className="text-sm opacity-90">Rated</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary-glow" />
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm opacity-90">Customers</div>
              </div>
              <div className="text-center">
                <TrendingDown className="h-8 w-8 mx-auto mb-2 text-primary-glow" />
                <div className="text-2xl font-bold">$500</div>
                <div className="text-sm opacity-90">Avg Savings</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary-glow" />
                <div className="text-2xl font-bold">2 Min</div>
                <div className="text-sm opacity-90">Get Quote</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="flex-1 sm:flex-none">
                Get Free Quote Now
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                Call (379) 139-8291
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-white/80 space-y-1">
              <p>✓ No obligation quotes ✓ Compare top providers ✓ Save in minutes</p>
              <p>✓ Licensed agents available ✓ Instant online quotes ✓ 24/7 support</p>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-glow">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-muted-foreground">
                  Compare rates from top insurers in 2 minutes
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      ZIP Code
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter ZIP code"
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Age
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select age</option>
                      <option>18-25</option>
                      <option>26-35</option>
                      <option>36-45</option>
                      <option>46-55</option>
                      <option>56-65</option>
                      <option>65+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Current Insurance Status
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select status</option>
                    <option>Currently insured</option>
                    <option>Expired policy</option>
                    <option>First time buyer</option>
                    <option>Switching providers</option>
                  </select>
                </div>

                <Button variant="quote" size="lg" className="w-full">
                  Get My Free Quotes
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By clicking "Get My Free Quotes", you agree to our Terms of Service and Privacy Policy. 
                  Your information is secure and will only be used to provide you with insurance quotes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;