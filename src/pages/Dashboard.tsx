import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSubscribed] = useState(false); // In real app, this would come from auth context

  if (!isSubscribed) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Paywall */}
              <Card className="glass-card border-primary/20 animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <CardTitle className="text-3xl font-bold">
                    Your Personalized Plan is Ready!
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Based on your profile, we've created the perfect calisthenics program for you
                  </p>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">🎯 What You'll Get:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Personalized workout plans
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Progressive skill training
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Advanced progress tracking
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Nutrition guidance
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">📈 Premium Features:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Real-time form analysis
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Community access
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Weekly coaching sessions
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          24/7 support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold mb-4">
                      <span className="text-gradient">€9</span>
                      <span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <Button size="lg" className="hover-glow animate-glow-pulse" asChild>
                      <Link to="/pricing">Unlock Your Plan</Link>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      7-day free trial • Cancel anytime
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Preview of Premium Dashboard */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Premium Dashboard Preview</h2>
                <div className="grid md:grid-cols-3 gap-6 opacity-50 pointer-events-none">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Today's Workout</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Upper Body Strength</p>
                      <p className="text-sm text-muted-foreground">45 minutes • 6 exercises</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">+15%</p>
                      <p className="text-sm text-muted-foreground">Strength gain this month</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Next Skill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Handstand Hold</p>
                      <p className="text-sm text-muted-foreground">73% complete</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg">
                  <div className="text-center">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xl">🔒</span>
                    </div>
                    <p className="font-semibold">Premium Feature</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // This would be the actual dashboard for subscribed users
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
          {/* Premium dashboard content would go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;