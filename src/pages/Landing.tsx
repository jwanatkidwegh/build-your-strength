import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";
import heroImage from "@/assets/hero-bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 z-10 gradient-hero" />
        
        <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in">
          <Badge variant="secondary" className="mb-6 glass-card border-primary/20">
            🚀 Transform Your Body with Calisthenics
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlock Your{" "}
            <span className="text-gradient">True Potential</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Personalized calisthenics coaching that adapts to your goals, experience, and lifestyle. 
            Build strength, master skills, and transform your body with progressive workouts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="hover-glow animate-glow-pulse" asChild>
              <Link to="/onboarding">Start Your Journey</Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-primary/20" asChild>
              <Link to="#features">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            Join thousands transforming their bodies with calisthenics
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="features" className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose ExilsFit?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of personalized calisthenics training
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="glass-card hover-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Personalized Plans</h3>
              <p className="text-muted-foreground">
                Custom workout programs tailored to your experience level, goals, and available equipment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Advanced analytics to monitor your strength gains, skill progressions, and body composition.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card hover-glow transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Master Skills</h3>
              <p className="text-muted-foreground">
                Learn advanced movements like handstands, muscle-ups, and human flags with structured progressions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from real people
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                achievement: "First Muscle-Up in 6 months",
                quote: "ExilsFit's progressive training got me my first muscle-up! The personalized approach made all the difference.",
                rating: 5
              },
              {
                name: "Mike R.",
                achievement: "Lost 25lbs, gained incredible strength",
                quote: "Amazing platform! The workouts are challenging but achievable. I've never been stronger.",
                rating: 5
              },
              {
                name: "Emma K.",
                achievement: "Handstand mastery in 4 months",
                quote: "The skill progressions are incredible. I went from barely holding a wall handstand to 60-second freestanding holds.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <span key={j} className="text-primary text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.achievement}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Complete Training System</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to master calisthenics
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
                <p className="text-muted-foreground">
                  Track your progress with detailed analytics and performance insights to optimize your training.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Goal-Oriented</h3>
                <p className="text-muted-foreground">
                  Whether it's strength, skills, or body composition - we'll create the perfect plan for your goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptive Training</h3>
                <p className="text-muted-foreground">
                  Your program evolves with you, adjusting intensity and complexity as you get stronger.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">💪</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Skill Mastery</h3>
                <p className="text-muted-foreground">
                  Master advanced movements like handstands, muscle-ups, and levers with structured progressions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands who have already started their calisthenics journey with ExilsFit
          </p>
          <Button size="lg" className="hover-glow animate-glow-pulse" asChild>
            <Link to="/onboarding">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-gradient">ExilsFit</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 ExilsFit. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;