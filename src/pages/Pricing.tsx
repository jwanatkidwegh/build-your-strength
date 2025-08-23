import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";

const Pricing = () => {
  const features = [
    "Personalized workout plans",
    "Progressive skill training",
    "Real-time form analysis",
    "Nutrition guidance",
    "Progress tracking & analytics",
    "Community access",
    "Weekly live coaching sessions",
    "Equipment recommendations",
    "Injury prevention protocols",
    "24/7 support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your body with calisthenics. 
              No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <Card className="glass-card border-primary/20 hover-glow animate-fade-in">
              <CardHeader className="text-center pb-4">
                <Badge className="mb-4 gradient-primary mx-auto">
                  🚀 Most Popular
                </Badge>
                <CardTitle className="text-3xl font-bold">Premium Plan</CardTitle>
                <div className="text-5xl font-bold mt-4">
                  <span className="text-gradient">€9</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Complete calisthenics transformation
                </p>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button size="lg" className="w-full hover-glow animate-glow-pulse" asChild>
                  <Link to="/register">Start Your Transformation</Link>
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  7-day free trial • Cancel anytime • No commitment
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What equipment do I need?",
                  answer: "You can start with just your bodyweight! Our system adapts to your available equipment - from no equipment at all to fully equipped gyms."
                },
                {
                  question: "Is this suitable for beginners?",
                  answer: "Absolutely! Our personalized approach means we start exactly where you are and progress at your pace, whether you're a complete beginner or advanced athlete."
                },
                {
                  question: "How quickly will I see results?",
                  answer: "Most users see strength improvements within 2-3 weeks and visible physique changes within 4-6 weeks when following the program consistently."
                },
                {
                  question: "Can I cancel anytime?",
                  answer: "Yes! You can cancel your subscription at any time with no questions asked. Your access continues until the end of your current billing period."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands transforming their bodies with FitForge
            </p>
            <Button size="lg" className="hover-glow" asChild>
              <Link to="/register">Begin Your Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;