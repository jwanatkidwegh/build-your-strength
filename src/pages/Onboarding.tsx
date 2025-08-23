import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    age: "",
    gender: "",
    height: "",
    weight: "",
    // Goals
    primaryGoal: "",
    targetWeight: "",
    skillGoals: [] as string[],
    // Training
    experience: "",
    daysPerWeek: "",
    sessionLength: "",
    equipment: [] as string[],
    // Lifestyle
    activityLevel: "",
    dietStyle: "",
    sleepHours: "",
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    toast({
      title: "Information saved!",
      description: "Now let's create your account to continue...",
    });
    
    setTimeout(() => {
      navigate("/register");
    }, 1500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
              <p className="text-muted-foreground">Help us understand your starting point</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="175"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={formData.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Goals</h2>
              <p className="text-muted-foreground">What do you want to achieve?</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Goal</Label>
                <Select value={formData.primaryGoal} onValueChange={(value) => handleInputChange("primaryGoal", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Select your main goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fat-loss">Fat Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="strength">Build Strength</SelectItem>
                    <SelectItem value="skills">Master Skills</SelectItem>
                    <SelectItem value="endurance">Improve Endurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Skills You Want to Master</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Handstand", "Muscle-up", "Human Flag", "Planche", "Front Lever", "Back Lever"].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.skillGoals.includes(skill)}
                        onCheckedChange={(checked) => handleArrayChange("skillGoals", skill, !!checked)}
                      />
                      <Label htmlFor={skill} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetWeight">Target Weight (kg) - Optional</Label>
                <Input
                  id="targetWeight"
                  type="number"
                  placeholder="65"
                  value={formData.targetWeight}
                  onChange={(e) => handleInputChange("targetWeight", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Training Preferences</h2>
              <p className="text-muted-foreground">Let's customize your workout plan</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Experience Level</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Select your experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-6 months)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (6 months - 2 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Days per week</Label>
                  <Select value={formData.daysPerWeek} onValueChange={(value) => handleInputChange("daysPerWeek", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="How often?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="4">4 days</SelectItem>
                      <SelectItem value="5">5 days</SelectItem>
                      <SelectItem value="6">6 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Session length</Label>
                  <Select value={formData.sessionLength} onValueChange={(value) => handleInputChange("sessionLength", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Duration?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Available Equipment</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {["Pull-up Bar", "Rings", "Parallettes", "Resistance Bands", "Dip Bars", "None"].map((equipment) => (
                    <div key={equipment} className="flex items-center space-x-2">
                      <Checkbox
                        id={equipment}
                        checked={formData.equipment.includes(equipment)}
                        onCheckedChange={(checked) => handleArrayChange("equipment", equipment, !!checked)}
                      />
                      <Label htmlFor={equipment} className="text-sm">{equipment}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Lifestyle & Preferences</h2>
              <p className="text-muted-foreground">Final touches for your perfect plan</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Activity Level</Label>
                <Select value={formData.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How active are you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (desk job, little activity)</SelectItem>
                    <SelectItem value="lightly-active">Lightly Active (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderately-active">Moderately Active (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="very-active">Very Active (hard exercise 6-7 days/week)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Diet Style</Label>
                <Select value={formData.dietStyle} onValueChange={(value) => handleInputChange("dietStyle", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Select diet preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-preference">No Preference</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="keto">Keto</SelectItem>
                    <SelectItem value="paleo">Paleo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sleepHours">Average Sleep (hours)</Label>
                <Input
                  id="sleepHours"
                  type="number"
                  placeholder="7-8"
                  value={formData.sleepHours}
                  onChange={(e) => handleInputChange("sleepHours", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Profile Setup</h1>
            <Badge variant="outline" className="glass-card">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>
          
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8">
              {renderStep()}
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="glass-card border-border/20"
                >
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep} className="hover-glow">
                    Next Step
                  </Button>
                ) : (
                  <Button onClick={handleComplete} className="hover-glow">
                    Continue to Registration
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;