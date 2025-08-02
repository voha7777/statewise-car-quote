import { Shield, DollarSign, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: DollarSign,
    title: "Save Up To $500 Annually",
    description: "Compare rates from multiple insurers and find the most affordable coverage that meets your needs. Our customers save an average of $500 per year.",
    features: ["Free rate comparison", "No hidden fees", "Instant savings calculation"]
  },
  {
    icon: Clock,
    title: "Get Quotes In 2 Minutes",
    description: "Our streamlined process gets you multiple quotes fast. No lengthy forms or phone calls required - just quick, accurate quotes online.",
    features: ["Simple online form", "Instant results", "No waiting periods"]
  },
  {
    icon: Shield,
    title: "Comprehensive Coverage Options",
    description: "From basic liability to full coverage, we help you find the right protection. Choose from liability, collision, comprehensive, and more.",
    features: ["All coverage types", "Customizable policies", "Expert guidance"]
  },
  {
    icon: Users,
    title: "Trusted By 1M+ Drivers",
    description: "Join over a million satisfied customers who trust us for their car insurance needs. Rated A+ for customer service and satisfaction.",
    features: ["1M+ happy customers", "A+ rating", "24/7 customer support"]
  },
  {
    icon: Award,
    title: "Top-Rated Insurance Providers",
    description: "We partner with the most reputable insurance companies in the industry to bring you the best rates and coverage options available.",
    features: ["Premium providers", "Financial stability", "Excellent service"]
  },
  {
    icon: CheckCircle,
    title: "No Obligation Quotes",
    description: "Get free quotes with no commitment. Compare your options and make an informed decision without any pressure or obligations.",
    features: ["100% free quotes", "No commitments", "Compare at your pace"]
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose USA Car Insurance?
          </h2>
          <p className="text-xl text-muted-foreground">
            We make finding affordable car insurance simple, fast, and hassle-free. 
            Here's why millions of drivers trust us with their insurance needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-trust-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Ready to Save on Your Car Insurance?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join millions of satisfied customers and start saving on your car insurance today. 
            Get your free quote in minutes and see how much you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Free Quotes Now
            </Button>
            <Button variant="outline" size="lg">
              Call (379) 139-8291
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;