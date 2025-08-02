import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";
import customerService from "@/assets/customer-service.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Contact USA Car Insurance
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with our licensed insurance experts. We're here to help you 
              find the best car insurance coverage at the most affordable rates.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our team of licensed insurance professionals is ready to help you find 
                    the perfect car insurance coverage. Contact us today for free quotes and expert advice.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          Call Us Now
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Speak directly with our licensed insurance agents
                        </p>
                        <a 
                          href="tel:+13791398291" 
                          className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
                        >
                          (379) 139-8291
                        </a>
                        <div className="mt-2 text-sm text-muted-foreground">
                          Available 24/7 for quotes and claims
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="bg-trust-green/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-trust-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          Email Support
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Send us your questions and we'll respond within 24 hours
                        </p>
                        <a 
                          href="mailto:info@usacarinsurance.com" 
                          className="text-lg font-semibold text-trust-green hover:text-trust-green/80 transition-colors"
                        >
                          info@usacarinsurance.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="bg-trust-orange/10 p-3 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-trust-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          Live Chat
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Chat with our experts in real-time for instant help
                        </p>
                        <Button variant="cta" size="default">
                          Start Live Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-card rounded-lg p-6 shadow-soft">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-primary font-medium">
                        Emergency Claims: 24/7 Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="space-y-6">
                <img 
                  src={customerService} 
                  alt="Car insurance customer service representative" 
                  className="w-full h-64 object-cover rounded-lg shadow-soft"
                />
                
                <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Why Choose Our Support Team?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <HeadphonesIcon className="h-5 w-5 text-trust-green mr-3" />
                      <span className="text-muted-foreground">Licensed insurance professionals</span>
                    </li>
                    <li className="flex items-center">
                      <HeadphonesIcon className="h-5 w-5 text-trust-green mr-3" />
                      <span className="text-muted-foreground">Average 2-minute response time</span>
                    </li>
                    <li className="flex items-center">
                      <HeadphonesIcon className="h-5 w-5 text-trust-green mr-3" />
                      <span className="text-muted-foreground">Multilingual support available</span>
                    </li>
                    <li className="flex items-center">
                      <HeadphonesIcon className="h-5 w-5 text-trust-green mr-3" />
                      <span className="text-muted-foreground">No wait time guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized response.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select your state</option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>Delaware</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a subject</option>
                      <option>Get a car insurance quote</option>
                      <option>File a claim</option>
                      <option>Policy questions</option>
                      <option>Billing inquiries</option>
                      <option>Technical support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Please describe how we can help you..."
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent"
                      className="mt-1 mr-3 h-4 w-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to receive communications from USA Car Insurance regarding my inquiry. 
                      You can unsubscribe at any time. View our Privacy Policy for more information.
                    </label>
                  </div>

                  <Button variant="quote" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our car insurance services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  How quickly can I get a car insurance quote?
                </h3>
                <p className="text-muted-foreground">
                  You can get multiple car insurance quotes in just 2 minutes using our online form. 
                  Our system instantly compares rates from top providers to show you the best options.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Do you offer coverage in all 50 states?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide car insurance quotes and coverage options in all 50 states. 
                  Our network of insurance providers ensures you can find coverage no matter where you live.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Is there a fee for getting quotes?
                </h3>
                <p className="text-muted-foreground">
                  No, all quotes are completely free with no obligation to purchase. 
                  You can compare rates and coverage options at no cost to you.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  What information do I need to get a quote?
                </h3>
                <p className="text-muted-foreground">
                  You'll need basic information like your ZIP code, age, driving history, and vehicle details. 
                  The process is simple and secure, taking just a few minutes to complete.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;