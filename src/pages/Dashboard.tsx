import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/ui/navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSubscribed] = useState(false); // In real app, this would come from auth context

  // Mock user data - would come from onboarding
  const userProfile = {
    name: "Alex",
    goal: "Muscle Gain & Skills",
    experience: "Intermediate",
    daysPerWeek: 4,
    targetSkills: ["Handstand", "Muscle-up", "Planche"]
  };

  // Show personalized plan first, then paywall for workouts
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold mb-2">Welcome back, {userProfile.name}! 👋</h1>
              <p className="text-xl text-muted-foreground">Your personalized calisthenics journey awaits</p>
            </div>

            {/* Your Plan Overview */}
            <div className="mb-8">
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Personalized Plan</CardTitle>
                  <p className="text-muted-foreground">
                    Based on your profile, we've created the perfect program for your {userProfile.goal.toLowerCase()} goals
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📅</span>
                      </div>
                      <h3 className="font-semibold">Training Schedule</h3>
                      <p className="text-sm text-muted-foreground">{userProfile.daysPerWeek} days per week</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">💪</span>
                      </div>
                      <h3 className="font-semibold">Experience Level</h3>
                      <p className="text-sm text-muted-foreground">{userProfile.experience}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="font-semibold">Primary Focus</h3>
                      <p className="text-sm text-muted-foreground">{userProfile.goal}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skill Progression Overview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {userProfile.targetSkills.map((skill, index) => (
                <Card key={skill} className="glass-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{skill} Progression</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Current Level</span>
                        <span className="text-primary">Phase {index + 1}</span>
                      </div>
                      <Progress value={(index + 1) * 25} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {index === 0 && "Wall-supported holds → Free handstand"}
                        {index === 1 && "Negative reps → Full muscle-up"}
                        {index === 2 && "Tuck position → Advanced planche"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Weekly Plan Preview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Weekly Plan</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { day: "Monday", focus: "Upper Body Strength", duration: "45 min", exercises: 6 },
                  { day: "Tuesday", focus: "Skill Development", duration: "30 min", exercises: 4 },
                  { day: "Thursday", focus: "Lower Body Power", duration: "40 min", exercises: 5 },
                  { day: "Saturday", focus: "Full Body Flow", duration: "50 min", exercises: 7 }
                ].map((workout) => (
                  <Card key={workout.day} className="glass-card hover-glow transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{workout.day}</h3>
                        <Badge variant="outline" className="text-xs">{workout.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{workout.focus}</p>
                      <p className="text-xs text-muted-foreground">{workout.exercises} exercises</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Nutrition Guidelines Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Nutrition Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Daily Calories</span>
                      <span className="text-sm font-semibold">2,400 kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm font-semibold">140g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Hydration Goal</span>
                      <span className="text-sm font-semibold">3.2L</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recovery Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Sleep Target</span>
                      <span className="text-sm font-semibold">7.5 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Rest Days</span>
                      <span className="text-sm font-semibold">3 per week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Stress Management</span>
                      <span className="text-sm font-semibold">Daily</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Weekly Photos</span>
                      <span className="text-sm font-semibold">Sundays</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Measurements</span>
                      <span className="text-sm font-semibold">Bi-weekly</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Skill Tests</span>
                      <span className="text-sm font-semibold">Monthly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Paywall for Detailed Workouts */}
            <Card className="glass-card border-primary/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to Start Training?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Your personalized plan is ready! Unlock detailed workouts, video demonstrations, 
                  progress tracking, and 1-on-1 coaching to achieve your goals faster.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-4xl mx-auto">
                  <div className="space-y-3">
                    <h4 className="font-semibold">🎯 What You Get:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Detailed workout videos & form cues
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Progressive skill tutorials
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Real-time progress tracking
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Personalized nutrition guidance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">📈 Premium Features:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        1-on-1 coaching sessions
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Community access & challenges
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Advanced analytics dashboard
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        Injury prevention protocols
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">
                    <span className="text-gradient">€9</span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <Button size="lg" className="hover-glow animate-glow-pulse mb-4" asChild>
                    <Link to="/pricing">Start Your Transformation</Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    7-day free trial • Cancel anytime • No commitment
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;