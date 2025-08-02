import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/data/states";

const StatesCoverageSection = () => {
  // Featured states (major states with high populations)
  const featuredStates = [
    { name: "California", slug: "california", population: "39.5M" },
    { name: "Texas", slug: "texas", population: "29.1M" },
    { name: "Florida", slug: "florida", population: "21.5M" },
    { name: "New York", slug: "new-york", population: "19.8M" },
    { name: "Pennsylvania", slug: "pennsylvania", population: "13.0M" },
    { name: "Illinois", slug: "illinois", population: "12.7M" },
    { name: "Ohio", slug: "ohio", population: "11.8M" },
    { name: "Georgia", slug: "georgia", population: "10.7M" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Car Insurance Coverage Across All 50 States
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Get personalized car insurance quotes for your state. Each state has unique requirements 
            and regulations - we'll help you find coverage that meets your state's laws.
          </p>
        </div>

        {/* Featured States Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Popular States
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStates.map((state) => (
              <Link
                key={state.slug}
                to={`/car-insurance/${state.slug}`}
                className="group bg-card rounded-lg p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {state.name}
                  </h4>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Population: {state.population}
                </p>
                <p className="text-sm text-muted-foreground">
                  Get personalized car insurance quotes for {state.name} residents
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* All States Section */}
        <div className="bg-gradient-card rounded-lg p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              All 50 States Covered
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No matter where you live, we can help you find affordable car insurance. 
              Click on your state below to get started with free quotes.
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {US_STATES.map((state) => (
              <Link
                key={state.slug}
                to={`/car-insurance/${state.slug}`}
                className="text-center p-3 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {state.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {state.abbreviation}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/states">
                View All State Requirements
              </Link>
            </Button>
          </div>
        </div>

        {/* State Requirements Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-foreground mb-2">
              State-Specific Requirements
            </h4>
            <p className="text-sm text-muted-foreground">
              Every state has different minimum coverage requirements. We'll help you understand 
              what's required in your state.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-trust-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-trust-green" />
            </div>
            <h4 className="font-heading font-semibold text-foreground mb-2">
              Local Insurance Experts
            </h4>
            <p className="text-sm text-muted-foreground">
              Our team understands local regulations and can recommend the best coverage 
              options for drivers in your area.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-trust-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-trust-orange" />
            </div>
            <h4 className="font-heading font-semibold text-foreground mb-2">
              Competitive Local Rates
            </h4>
            <p className="text-sm text-muted-foreground">
              Compare quotes from insurers that operate in your state to ensure you're 
              getting the most competitive rates available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatesCoverageSection;