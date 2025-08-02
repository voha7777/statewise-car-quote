import { Shield, Car, Users, Home, Wrench, AlertTriangle } from "lucide-react";
import protectionShield from "@/assets/protection-shield.jpg";

const coverageTypes = [
  {
    icon: Shield,
    title: "Liability Coverage",
    description: "Required in most states, covers damages to others when you're at fault",
    details: ["Bodily injury liability", "Property damage liability", "Legal protection"],
    popular: true
  },
  {
    icon: Car,
    title: "Collision Coverage",
    description: "Pays for damage to your car from accidents, regardless of fault",
    details: ["Accident damage repair", "Vehicle replacement", "Deductible options"],
    popular: true
  },
  {
    icon: AlertTriangle,
    title: "Comprehensive Coverage",
    description: "Protects against theft, vandalism, weather damage, and more",
    details: ["Theft protection", "Weather damage", "Vandalism coverage"],
    popular: false
  },
  {
    icon: Users,
    title: "Uninsured Motorist",
    description: "Covers you when hit by a driver without insurance",
    details: ["Uninsured driver protection", "Hit-and-run coverage", "Medical expenses"],
    popular: false
  },
  {
    icon: Home,
    title: "Personal Injury Protection",
    description: "Covers medical expenses regardless of who caused the accident",
    details: ["Medical bill coverage", "Lost wage protection", "Rehabilitation costs"],
    popular: false
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "24/7 help for breakdowns, flat tires, and emergency services",
    details: ["Towing service", "Jump start", "Flat tire assistance"],
    popular: false
  }
];

const CoverageSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Complete Car Insurance Coverage Options
          </h2>
          <p className="text-xl text-muted-foreground">
            Protect yourself and your vehicle with comprehensive coverage options tailored to your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coverage Types */}
          <div className="space-y-6">
            {coverageTypes.map((coverage, index) => {
              const IconComponent = coverage.icon;
              return (
                <div 
                  key={index}
                  className={`bg-card rounded-lg p-6 shadow-soft border border-border transition-all duration-300 hover:shadow-brand ${
                    coverage.popular ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${coverage.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-heading font-semibold text-foreground mr-2">
                          {coverage.title}
                        </h3>
                        {coverage.popular && (
                          <span className="bg-trust-green text-white text-xs px-2 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-3">
                        {coverage.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {coverage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image and Additional Info */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={protectionShield} 
                alt="Car insurance protection coverage" 
                className="w-full h-64 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>

            <div className="bg-gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Need Help Choosing Coverage?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our licensed insurance experts are here to help you understand your options 
                and find the right coverage for your specific needs and budget.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-trust-green mr-2" />
                  <span className="text-foreground">Licensed insurance professionals</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-trust-green mr-2" />
                  <span className="text-foreground">Free consultation and quotes</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-trust-green mr-2" />
                  <span className="text-foreground">Personalized recommendations</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Quick Tip:</strong> Most states require liability coverage, 
                  but adding collision and comprehensive provides complete protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;