import { useParams } from "react-router-dom";
import { getStateBySlug } from "@/data/states";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Users, Phone, CheckCircle, MapPin, Clock, Award } from "lucide-react";
import protectionShield from "@/assets/protection-shield.jpg";
import digitalInsurance from "@/assets/digital-insurance.jpg";

const StateInsurance = () => {
  const { state } = useParams<{ state: string }>();
  const stateData = state ? getStateBySlug(state) : null;

  if (!stateData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
            <p className="text-xl text-muted-foreground">
              The state you're looking for doesn't exist or the URL is incorrect.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Up To $500 Annually",
      description: `${stateData.name} drivers can save hundreds on car insurance by comparing rates from multiple providers.`
    },
    {
      icon: Shield,
      title: "Meet State Requirements",
      description: `Ensure you have the minimum coverage required by ${stateData.name} law while getting the best rates.`
    },
    {
      icon: Clock,
      title: "Quick 2-Minute Quotes",
      description: `Get instant car insurance quotes for ${stateData.name} residents in just 2 minutes online.`
    },
    {
      icon: Users,
      title: "Local Insurance Experts",
      description: `Our team understands ${stateData.name} insurance regulations and can help you find the right coverage.`
    }
  ];

  const coverageTypes = [
    {
      title: "Liability Coverage",
      description: `Required in ${stateData.name}, protects you from financial responsibility when you cause an accident.`,
      required: true
    },
    {
      title: "Collision Coverage", 
      description: "Pays for damage to your vehicle from accidents, regardless of who's at fault.",
      required: false
    },
    {
      title: "Comprehensive Coverage",
      description: "Protects against theft, vandalism, weather damage, and other non-collision incidents.",
      required: false
    },
    {
      title: "Uninsured Motorist",
      description: "Covers you when hit by a driver without insurance or insufficient coverage.",
      required: false
    },
    {
      title: "Personal Injury Protection",
      description: "Covers medical expenses and lost wages regardless of who caused the accident.",
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-6 w-6 text-primary-glow" />
                  <span className="text-primary-glow font-medium">{stateData.name}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                  Best Car Insurance in {stateData.name}
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Find affordable car insurance quotes for {stateData.name} residents. 
                  Compare rates from top providers and save up to $500 annually on your auto insurance.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-glow">2 Min</div>
                    <div className="text-sm opacity-90">Get Quote</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-glow">$500</div>
                    <div className="text-sm opacity-90">Avg Savings</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg">
                    Get {stateData.name} Quotes
                  </Button>
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                    Call (379) 139-8291
                  </Button>
                </div>
              </div>

              {/* Quote Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-glow">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Get Your {stateData.name} Quote
                    </h2>
                    <p className="text-muted-foreground">
                      Compare rates from top insurers in {stateData.name}
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
                          placeholder={`${stateData.name} ZIP code`}
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
                      Get My {stateData.name} Quotes
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Quotes for {stateData.name} residents only. Your information is secure and protected.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why {stateData.name} Drivers Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Get the best car insurance rates and coverage options specifically for {stateData.name} residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={protectionShield} 
                  alt={`Car insurance protection in ${stateData.name}`}
                  className="w-full h-64 object-cover rounded-lg shadow-soft"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {stateData.name} Insurance Requirements
                </h3>
                <p className="text-muted-foreground">
                  Every state has different minimum coverage requirements. In {stateData.name}, 
                  you need to have adequate coverage to legally drive. We'll help you understand 
                  what's required and what additional coverage might benefit you.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                    <span className="text-foreground">Meet {stateData.name} minimum requirements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                    <span className="text-foreground">Compare multiple insurance providers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-trust-green mr-3" />
                    <span className="text-foreground">Get personalized coverage recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Types Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Car Insurance Coverage Options in {stateData.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose from a variety of coverage options to protect yourself and your vehicle on {stateData.name} roads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageTypes.map((coverage, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-lg p-6 shadow-soft border border-border ${
                    coverage.required ? 'ring-2 ring-primary/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {coverage.title}
                    </h3>
                    {coverage.required && (
                      <span className="bg-trust-orange text-white text-xs px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {coverage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Information Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Local {stateData.name} Insurance Expertise
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our team understands the unique insurance landscape in {stateData.name}. 
                  From state-specific requirements to local driving conditions, we provide 
                  personalized recommendations for {stateData.name} drivers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-trust-green" />
                    <span className="text-foreground">Licensed in {stateData.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-trust-green" />
                    <span className="text-foreground">Local customer support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-trust-green" />
                    <span className="text-foreground">State requirement expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-trust-green" />
                    <span className="text-foreground">Thousands of {stateData.name} customers</span>
                  </div>
                </div>

                <Button variant="hero" size="lg">
                  Get Started with {stateData.name} Coverage
                </Button>
              </div>

              <div>
                <img 
                  src={digitalInsurance} 
                  alt={`Digital insurance services for ${stateData.name}`}
                  className="w-full h-64 object-cover rounded-lg shadow-soft"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Save on {stateData.name} Car Insurance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of {stateData.name} drivers who have saved money on their car insurance. 
              Get your free quote today and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl">
                Get My {stateData.name} Quote Now
              </Button>
              <Button variant="outline" size="xl">
                <Phone className="h-5 w-5 mr-2" />
                Call (379) 139-8291
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StateInsurance;