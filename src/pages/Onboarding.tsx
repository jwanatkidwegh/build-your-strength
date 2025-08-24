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
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bodyFat: "",
    waist: "",
    hip: "",
    neck: "",
    timezone: "",
    occupation: "",
    
    // Goals & Motivation
    primaryGoal: "",
    secondaryGoals: [] as string[],
    targetWeight: "",
    targetBodyFat: "",
    skillGoals: [] as string[],
    motivation: "",
    timeframe: "",
    whyStarted: "",
    previousAttempts: "",
    biggestChallenge: "",
    successMeasure: "",
    
    // Training Background
    experience: "",
    yearsActive: "",
    daysPerWeek: "",
    sessionLength: "",
    preferredTime: "",
    location: "",
    equipment: [] as string[],
    currentMaxes: {
      pushups: "",
      pullups: "",
      squats: "",
      plankSeconds: "",
      handstandWall: "",
      burpees: "",
    },
    pastInjuries: "",
    currentPain: "",
    doctorClearance: "",
    previousPrograms: "",
    
    // Lifestyle & Nutrition
    activityLevel: "",
    dailySteps: "",
    sleepHours: "",
    bedTime: "",
    wakeTime: "",
    sleepQuality: "",
    hydrationLiters: "",
    dietStyle: "",
    dietRestrictions: [] as string[],
    calorieKnowledge: "",
    currentProtein: "",
    mealsPerDay: "",
    cookingSkills: "",
    supplementUse: [] as string[],
    eatingHabits: "",
    
    // Health & Wellness
    stressLevel: "",
    stressSources: [] as string[],
    recoveryMethods: [] as string[],
    energyLevels: "",
    chronicConditions: "",
    medications: "",
    smokingStatus: "",
    alcoholConsumption: "",
    caffeineIntake: "",
    mindfulnessPractice: "",
    
    // Preferences & Personality
    coachingStyle: "",
    musicPreference: "",
    workoutEnvironment: "",
    socialPreference: "",
    challengePreference: "",
    feedbackStyle: "",
    notificationPreference: "",
    reminderTimes: [] as string[],
    personalityType: "",
    
    // Lifestyle Constraints
    availableDays: [] as string[],
    busyPeriods: "",
    travelFrequency: "",
    workSchedule: "",
    familyTime: "",
    budgetConcerns: "",
    timeConstraints: "",
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const totalSteps = 10;

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
      title: "🎉 Profile Complete!",
      description: "Amazing! Now let's create your account to unlock your personalized plan...",
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
              <h2 className="text-2xl font-bold mb-2">👋 Let's Get to Know You!</h2>
              <p className="text-muted-foreground">Tell us about yourself so we can create the perfect plan</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-sm text-muted-foreground">Welcome Video: "Your Fitness Journey Starts Here"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">👤 Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">🎂 Age</Label>
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
                <Label htmlFor="gender">⚧ Gender</Label>
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
                <Label htmlFor="occupation">💼 Occupation</Label>
                <Input
                  id="occupation"
                  type="text"
                  placeholder="Software Engineer"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange("occupation", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">📏 Height (cm)</Label>
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
                <Label htmlFor="weight">⚖️ Current Weight (kg)</Label>
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

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bodyFat">📊 Body Fat % (optional)</Label>
                <Input
                  id="bodyFat"
                  type="number"
                  placeholder="15"
                  value={formData.bodyFat}
                  onChange={(e) => handleInputChange("bodyFat", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waist">📐 Waist (cm, optional)</Label>
                <Input
                  id="waist"
                  type="number"
                  placeholder="80"
                  value={formData.waist}
                  onChange={(e) => handleInputChange("waist", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hip">📐 Hip (cm, optional)</Label>
                <Input
                  id="hip"
                  type="number"
                  placeholder="95"
                  value={formData.hip}
                  onChange={(e) => handleInputChange("hip", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>🌍 Timezone</Label>
              <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                <SelectTrigger className="glass-card border-border/20">
                  <SelectValue placeholder="Select your timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc-8">PST (UTC-8)</SelectItem>
                  <SelectItem value="utc-5">EST (UTC-5)</SelectItem>
                  <SelectItem value="utc+0">GMT (UTC+0)</SelectItem>
                  <SelectItem value="utc+1">CET (UTC+1)</SelectItem>
                  <SelectItem value="utc+8">CST (UTC+8)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🎯 Your Fitness Goals</h2>
              <p className="text-muted-foreground">What do you want to achieve? Be specific - this helps us create your perfect plan!</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-sm text-muted-foreground">Goal Setting Guide: "How to Set Achievable Fitness Goals"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🥇 Primary Goal</Label>
                <Select value={formData.primaryGoal} onValueChange={(value) => handleInputChange("primaryGoal", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="What's your main focus?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fat-loss">🔥 Fat Loss & Body Composition</SelectItem>
                    <SelectItem value="muscle-gain">💪 Muscle Gain & Strength</SelectItem>
                    <SelectItem value="skills">🤸 Master Calisthenics Skills</SelectItem>
                    <SelectItem value="endurance">🏃 Improve Endurance & Stamina</SelectItem>
                    <SelectItem value="flexibility">🧘 Flexibility & Mobility</SelectItem>
                    <SelectItem value="general-fitness">⚡ General Fitness & Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🎖️ Secondary Goals (select all that apply)</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Better posture", "Pain relief", "Stress reduction", "Better sleep", 
                    "More energy", "Confidence boost", "Athletic performance", "Longevity"
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.secondaryGoals.includes(goal)}
                        onCheckedChange={(checked) => handleArrayChange("secondaryGoals", goal, !!checked)}
                      />
                      <Label htmlFor={goal} className="text-sm">{goal}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>🤸‍♂️ Calisthenics Skills You Want to Master</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Handstand", "Muscle-up", "Human Flag", "Planche", "Front Lever", 
                    "Back Lever", "Pistol Squat", "One-Arm Push-up", "Dragon Flag", "L-Sit"
                  ].map((skill) => (
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

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="targetWeight">⚖️ Target Weight (kg) - Optional</Label>
                  <Input
                    id="targetWeight"
                    type="number"
                    placeholder="65"
                    value={formData.targetWeight}
                    onChange={(e) => handleInputChange("targetWeight", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetBodyFat">📊 Target Body Fat % - Optional</Label>
                  <Input
                    id="targetBodyFat"
                    type="number"
                    placeholder="12"
                    value={formData.targetBodyFat}
                    onChange={(e) => handleInputChange("targetBodyFat", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>🔥 Motivation Level (1-10)</Label>
                <Select value={formData.motivation} onValueChange={(value) => handleInputChange("motivation", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How motivated are you right now?" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(10)].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1} - {i < 3 ? '🔴 Low' : i < 7 ? '🟡 Medium' : '🟢 High'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>⏰ Target Timeframe</Label>
                <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="When do you want to reach your goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-month">1 month (Quick start)</SelectItem>
                    <SelectItem value="3-months">3 months (Focused)</SelectItem>
                    <SelectItem value="6-months">6 months (Steady progress)</SelectItem>
                    <SelectItem value="1-year">1 year (Long-term transformation)</SelectItem>
                    <SelectItem value="no-rush">No specific timeline</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whyStarted">💭 Why did you decide to start this fitness journey?</Label>
                <Textarea
                  id="whyStarted"
                  placeholder="Share your story... What made you decide to take action now?"
                  value={formData.whyStarted}
                  onChange={(e) => handleInputChange("whyStarted", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousAttempts">🔄 Have you tried fitness programs before? What happened?</Label>
                <Textarea
                  id="previousAttempts"
                  placeholder="Tell us about your previous attempts, what worked, what didn't..."
                  value={formData.previousAttempts}
                  onChange={(e) => handleInputChange("previousAttempts", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">💪 Training Background & Fitness Level</h2>
              <p className="text-muted-foreground">Help us understand your current fitness level and experience</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📹</div>
                    <p className="text-sm text-muted-foreground">Fitness Assessment: "How to Test Your Current Level"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🏋️ Experience Level</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete-beginner">🌱 Complete Beginner (Never exercised regularly)</SelectItem>
                    <SelectItem value="beginner">🌿 Beginner (0-6 months)</SelectItem>
                    <SelectItem value="intermediate">🌳 Intermediate (6 months - 2 years)</SelectItem>
                    <SelectItem value="advanced">🌲 Advanced (2+ years)</SelectItem>
                    <SelectItem value="expert">🌟 Expert (5+ years, competition level)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearsActive">📅 How many years have you been active in fitness?</Label>
                <Input
                  id="yearsActive"
                  type="number"
                  placeholder="2"
                  value={formData.yearsActive}
                  onChange={(e) => handleInputChange("yearsActive", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>📅 How many days per week can you train?</Label>
                  <Select value={formData.daysPerWeek} onValueChange={(value) => handleInputChange("daysPerWeek", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Training frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 days (Minimal)</SelectItem>
                      <SelectItem value="3">3 days (Balanced)</SelectItem>
                      <SelectItem value="4">4 days (Dedicated)</SelectItem>
                      <SelectItem value="5">5 days (Serious)</SelectItem>
                      <SelectItem value="6">6 days (Advanced)</SelectItem>
                      <SelectItem value="7">7 days (Elite)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>⏰ Preferred session length</Label>
                  <Select value={formData.sessionLength} onValueChange={(value) => handleInputChange("sessionLength", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Duration per session" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20">20 minutes (Quick)</SelectItem>
                      <SelectItem value="30">30 minutes (Efficient)</SelectItem>
                      <SelectItem value="45">45 minutes (Standard)</SelectItem>
                      <SelectItem value="60">60 minutes (Comprehensive)</SelectItem>
                      <SelectItem value="90">90 minutes (Extended)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>🕐 Best training time for you</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="When do you prefer to train?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="early-morning">🌅 Early Morning (5-7 AM)</SelectItem>
                      <SelectItem value="morning">🌄 Morning (7-10 AM)</SelectItem>
                      <SelectItem value="late-morning">☀️ Late Morning (10-12 PM)</SelectItem>
                      <SelectItem value="afternoon">🏙️ Afternoon (12-5 PM)</SelectItem>
                      <SelectItem value="evening">🌆 Evening (5-8 PM)</SelectItem>
                      <SelectItem value="night">🌙 Night (8-11 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>📍 Where will you train?</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Training location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">🏠 Home</SelectItem>
                      <SelectItem value="gym">🏋️ Gym</SelectItem>
                      <SelectItem value="park">🌳 Park/Outdoor</SelectItem>
                      <SelectItem value="workplace">💼 Workplace</SelectItem>
                      <SelectItem value="mixed">🔄 Mixed locations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>🛠️ Available Equipment (select all you have)</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Pull-up Bar", "Gymnastic Rings", "Parallettes", "Resistance Bands", 
                    "Dip Bars", "Suspension Trainer", "Yoga Mat", "Dumbbells", 
                    "Kettlebell", "Weighted Vest", "None - Bodyweight Only"
                  ].map((equipment) => (
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

              <div className="space-y-4">
                <Label>📊 Current Performance (help us calibrate your program)</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pushups">💪 Max Push-ups (in a row)</Label>
                    <Input
                      id="pushups"
                      type="number"
                      placeholder="0 if you can't do any"
                      value={formData.currentMaxes.pushups}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, pushups: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pullups">🏗️ Max Pull-ups (in a row)</Label>
                    <Input
                      id="pullups"
                      type="number"
                      placeholder="0 if you can't do any"
                      value={formData.currentMaxes.pullups}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, pullups: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="squats">🦵 Max Bodyweight Squats</Label>
                    <Input
                      id="squats"
                      type="number"
                      placeholder="50"
                      value={formData.currentMaxes.squats}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, squats: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plank">🪨 Plank Hold (seconds)</Label>
                    <Input
                      id="plank"
                      type="number"
                      placeholder="30"
                      value={formData.currentMaxes.plankSeconds}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, plankSeconds: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="handstand">🤸 Wall Handstand (seconds)</Label>
                    <Input
                      id="handstand"
                      type="number"
                      placeholder="0"
                      value={formData.currentMaxes.handstandWall}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, handstandWall: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="burpees">🔥 Max Burpees (in 1 minute)</Label>
                    <Input
                      id="burpees"
                      type="number"
                      placeholder="10"
                      value={formData.currentMaxes.burpees}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        currentMaxes: { ...prev.currentMaxes, burpees: e.target.value }
                      }))}
                      className="glass-card border-border/20"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pastInjuries">🩹 Past or Current Injuries</Label>
                <Textarea
                  id="pastInjuries"
                  placeholder="Any injuries, surgeries, or physical limitations we should know about..."
                  value={formData.pastInjuries}
                  onChange={(e) => handleInputChange("pastInjuries", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>🏥 Do you have medical clearance to exercise?</Label>
                <Select value={formData.doctorClearance} onValueChange={(value) => handleInputChange("doctorClearance", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Medical clearance status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">✅ Yes, cleared by doctor</SelectItem>
                    <SelectItem value="not-needed">✅ Yes, no medical issues</SelectItem>
                    <SelectItem value="no">❌ No, need to consult doctor</SelectItem>
                    <SelectItem value="partial">⚠️ Partial - with restrictions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🍎 Nutrition & Diet</h2>
              <p className="text-muted-foreground">Your nutrition is 70% of your results. Let's get this right!</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎞️</div>
                    <p className="text-sm text-muted-foreground">Nutrition Basics: "Fuel Your Workouts for Maximum Results"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🥗 Diet Style/Preference</Label>
                <Select value={formData.dietStyle} onValueChange={(value) => handleInputChange("dietStyle", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="What's your diet style?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="omnivore">🍖 Omnivore (everything)</SelectItem>
                    <SelectItem value="vegetarian">🥬 Vegetarian</SelectItem>
                    <SelectItem value="vegan">🌱 Vegan</SelectItem>
                    <SelectItem value="pescatarian">🐟 Pescatarian</SelectItem>
                    <SelectItem value="keto">🥓 Ketogenic</SelectItem>
                    <SelectItem value="paleo">🦴 Paleo</SelectItem>
                    <SelectItem value="mediterranean">🫒 Mediterranean</SelectItem>
                    <SelectItem value="intermittent-fasting">⏰ Intermittent Fasting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🚫 Dietary Restrictions/Allergies</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "None", "Gluten intolerant", "Lactose intolerant", "Nut allergy", 
                    "Shellfish allergy", "Soy allergy", "Egg allergy", "Dairy-free", 
                    "Sugar-free", "Low sodium", "Halal", "Kosher"
                  ].map((restriction) => (
                    <div key={restriction} className="flex items-center space-x-2">
                      <Checkbox
                        id={restriction}
                        checked={formData.dietRestrictions.includes(restriction)}
                        onCheckedChange={(checked) => handleArrayChange("dietRestrictions", restriction, !!checked)}
                      />
                      <Label htmlFor={restriction} className="text-sm">{restriction}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>📚 Calorie Knowledge</Label>
                  <Select value={formData.calorieKnowledge} onValueChange={(value) => handleInputChange("calorieKnowledge", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="How much do you know about calories?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">❓ No idea about calories</SelectItem>
                      <SelectItem value="basic">📖 Basic understanding</SelectItem>
                      <SelectItem value="good">📚 Good understanding</SelectItem>
                      <SelectItem value="expert">🎓 Track calories regularly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentProtein">🥩 Daily Protein Intake (grams, estimate)</Label>
                  <Input
                    id="currentProtein"
                    type="number"
                    placeholder="80"
                    value={formData.currentProtein}
                    onChange={(e) => handleInputChange("currentProtein", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>🍽️ Meals per day</Label>
                  <Select value={formData.mealsPerDay} onValueChange={(value) => handleInputChange("mealsPerDay", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="How many meals?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 meal (OMAD)</SelectItem>
                      <SelectItem value="2">2 meals</SelectItem>
                      <SelectItem value="3">3 meals (traditional)</SelectItem>
                      <SelectItem value="4">4 meals</SelectItem>
                      <SelectItem value="5">5-6 small meals</SelectItem>
                      <SelectItem value="grazing">Constant grazing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>👨‍🍳 Cooking Skills</Label>
                  <Select value={formData.cookingSkills} onValueChange={(value) => handleInputChange("cookingSkills", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="How well can you cook?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">🚫 Can't cook at all</SelectItem>
                      <SelectItem value="basic">🍳 Basic (eggs, pasta)</SelectItem>
                      <SelectItem value="intermediate">👨‍🍳 Intermediate</SelectItem>
                      <SelectItem value="advanced">👨‍🍳 Advanced chef</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>💊 Supplements Currently Using</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "None", "Protein Powder", "Creatine", "Multivitamin", 
                    "Vitamin D", "Fish Oil", "BCAA", "Pre-workout", 
                    "Caffeine", "Magnesium", "Zinc", "Probiotics"
                  ].map((supplement) => (
                    <div key={supplement} className="flex items-center space-x-2">
                      <Checkbox
                        id={supplement}
                        checked={formData.supplementUse.includes(supplement)}
                        onCheckedChange={(checked) => handleArrayChange("supplementUse", supplement, !!checked)}
                      />
                      <Label htmlFor={supplement} className="text-sm">{supplement}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eatingHabits">🍽️ Describe your current eating habits</Label>
                <Textarea
                  id="eatingHabits"
                  placeholder="Tell us about your typical day of eating, challenges, habits..."
                  value={formData.eatingHabits}
                  onChange={(e) => handleInputChange("eatingHabits", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hydration">💧 Daily Water Intake (liters)</Label>
                <Input
                  id="hydration"
                  type="number"
                  placeholder="2.5"
                  step="0.1"
                  value={formData.hydrationLiters}
                  onChange={(e) => handleInputChange("hydrationLiters", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">😴 Lifestyle & Recovery</h2>
              <p className="text-muted-foreground">Recovery is when the magic happens. Let's optimize your lifestyle!</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📺</div>
                    <p className="text-sm text-muted-foreground">Recovery Guide: "Sleep, Stress & Recovery Optimization"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🏃‍♂️ Daily Activity Level (outside workouts)</Label>
                <Select value={formData.activityLevel} onValueChange={(value) => handleInputChange("activityLevel", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How active are you daily?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">🪑 Sedentary (desk job, minimal walking)</SelectItem>
                    <SelectItem value="lightly-active">🚶 Lightly Active (some walking, light activity)</SelectItem>
                    <SelectItem value="moderately-active">🚶‍♂️ Moderately Active (regular walking, active lifestyle)</SelectItem>
                    <SelectItem value="very-active">🏃 Very Active (on feet all day, physical job)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dailySteps">👟 Average Daily Steps</Label>
                <Input
                  id="dailySteps"
                  type="number"
                  placeholder="8000"
                  value={formData.dailySteps}
                  onChange={(e) => handleInputChange("dailySteps", e.target.value)}
                  className="glass-card border-border/20"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sleepHours">😴 Average Sleep (hours)</Label>
                  <Input
                    id="sleepHours"
                    type="number"
                    placeholder="7.5"
                    step="0.5"
                    value={formData.sleepHours}
                    onChange={(e) => handleInputChange("sleepHours", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bedTime">🌙 Typical Bedtime</Label>
                  <Input
                    id="bedTime"
                    type="time"
                    value={formData.bedTime}
                    onChange={(e) => handleInputChange("bedTime", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="wakeTime">☀️ Wake Up Time</Label>
                  <Input
                    id="wakeTime"
                    type="time"
                    value={formData.wakeTime}
                    onChange={(e) => handleInputChange("wakeTime", e.target.value)}
                    className="glass-card border-border/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>💤 Sleep Quality</Label>
                <Select value={formData.sleepQuality} onValueChange={(value) => handleInputChange("sleepQuality", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How well do you sleep?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">🌟 Excellent (deep, refreshing)</SelectItem>
                    <SelectItem value="good">😊 Good (mostly restful)</SelectItem>
                    <SelectItem value="fair">😐 Fair (some issues)</SelectItem>
                    <SelectItem value="poor">😴 Poor (frequent waking, tired)</SelectItem>
                    <SelectItem value="terrible">😵 Terrible (insomnia, exhausted)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>😰 Current Stress Level</Label>
                <Select value={formData.stressLevel} onValueChange={(value) => handleInputChange("stressLevel", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How stressed are you typically?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">😌 Low (1-3/10)</SelectItem>
                    <SelectItem value="moderate">😐 Moderate (4-6/10)</SelectItem>
                    <SelectItem value="high">😬 High (7-8/10)</SelectItem>
                    <SelectItem value="very-high">🤯 Very High (9-10/10)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>😓 Main Sources of Stress</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Work/Career", "Family", "Finances", "Health", 
                    "Relationships", "School/Education", "Social Media", "News/World Events"
                  ].map((source) => (
                    <div key={source} className="flex items-center space-x-2">
                      <Checkbox
                        id={source}
                        checked={formData.stressSources.includes(source)}
                        onCheckedChange={(checked) => handleArrayChange("stressSources", source, !!checked)}
                      />
                      <Label htmlFor={source} className="text-sm">{source}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>🧘 Recovery Methods You Use</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "None currently", "Meditation", "Yoga", "Massage", 
                    "Hot baths", "Sauna", "Stretching", "Deep breathing", 
                    "Reading", "Nature walks", "Music", "Journaling"
                  ].map((method) => (
                    <div key={method} className="flex items-center space-x-2">
                      <Checkbox
                        id={method}
                        checked={formData.recoveryMethods.includes(method)}
                        onCheckedChange={(checked) => handleArrayChange("recoveryMethods", method, !!checked)}
                      />
                      <Label htmlFor={method} className="text-sm">{method}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>⚡ Energy Levels Throughout Day</Label>
                <Select value={formData.energyLevels} onValueChange={(value) => handleInputChange("energyLevels", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How are your energy levels?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consistent-high">🚀 Consistently High</SelectItem>
                    <SelectItem value="morning-high">🌅 High in morning, crash afternoon</SelectItem>
                    <SelectItem value="evening-high">🌆 Low morning, high evening</SelectItem>
                    <SelectItem value="consistent-low">😴 Consistently Low</SelectItem>
                    <SelectItem value="unpredictable">🎢 Unpredictable ups and downs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>☕ Daily Caffeine</Label>
                  <Select value={formData.caffeineIntake} onValueChange={(value) => handleInputChange("caffeineIntake", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Caffeine consumption" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="1-cup">1 cup coffee</SelectItem>
                      <SelectItem value="2-3-cups">2-3 cups</SelectItem>
                      <SelectItem value="4-plus-cups">4+ cups</SelectItem>
                      <SelectItem value="energy-drinks">Energy drinks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>🍷 Alcohol Consumption</Label>
                  <Select value={formData.alcoholConsumption} onValueChange={(value) => handleInputChange("alcoholConsumption", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Weekly alcohol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="social">Social only</SelectItem>
                      <SelectItem value="1-2-week">1-2 drinks/week</SelectItem>
                      <SelectItem value="3-7-week">3-7 drinks/week</SelectItem>
                      <SelectItem value="daily">Daily drinking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>🚭 Smoking Status</Label>
                  <Select value={formData.smokingStatus} onValueChange={(value) => handleInputChange("smokingStatus", value)}>
                    <SelectTrigger className="glass-card border-border/20">
                      <SelectValue placeholder="Smoking habits" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never smoked</SelectItem>
                      <SelectItem value="former">Former smoker</SelectItem>
                      <SelectItem value="occasional">Occasional</SelectItem>
                      <SelectItem value="regular">Regular smoker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🏥 Health & Medical</h2>
              <p className="text-muted-foreground">Your health and safety are our top priority</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎥</div>
                    <p className="text-sm text-muted-foreground">Health & Safety: "Exercise Safely with Medical Conditions"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="chronicConditions">🏥 Any chronic health conditions?</Label>
                <Textarea
                  id="chronicConditions"
                  placeholder="Diabetes, hypertension, heart conditions, arthritis, etc. (or 'None')"
                  value={formData.chronicConditions}
                  onChange={(e) => handleInputChange("chronicConditions", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="medications">💊 Current medications or supplements?</Label>
                <Textarea
                  id="medications"
                  placeholder="List any medications, supplements, or treatments (or 'None')"
                  value={formData.medications}
                  onChange={(e) => handleInputChange("medications", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentPain">🤕 Any current pain or discomfort?</Label>
                <Textarea
                  id="currentPain"
                  placeholder="Back pain, joint pain, muscle tension, etc. (or 'None')"
                  value={formData.currentPain}
                  onChange={(e) => handleInputChange("currentPain", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousPrograms">📋 Previous fitness programs or trainers?</Label>
                <Textarea
                  id="previousPrograms"
                  placeholder="Tell us about your fitness history, what worked, what didn't..."
                  value={formData.previousPrograms}
                  onChange={(e) => handleInputChange("previousPrograms", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>🧘 Do you practice mindfulness or meditation?</Label>
                <Select value={formData.mindfulnessPractice} onValueChange={(value) => handleInputChange("mindfulnessPractice", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Mindfulness practice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No, never tried</SelectItem>
                    <SelectItem value="interested">Interested but haven't started</SelectItem>
                    <SelectItem value="beginner">Beginner (occasional)</SelectItem>
                    <SelectItem value="regular">Regular practice</SelectItem>
                    <SelectItem value="advanced">Advanced practitioner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-yellow-600">⚠️ Important Health Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This program is for educational purposes only and is not a substitute for professional medical advice. 
                  Always consult with your healthcare provider before starting any new exercise program, especially if you have health conditions.
                </p>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">🎭 Personality & Preferences</h2>
              <p className="text-muted-foreground">Help us match your personality for the best coaching experience</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-sm text-muted-foreground">Coaching Styles: "Find Your Perfect Motivation Style"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🗣️ Coaching Style That Motivates You Most</Label>
                <Select value={formData.coachingStyle} onValueChange={(value) => handleInputChange("coachingStyle", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="What motivates you best?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supportive">🤗 Supportive & Encouraging</SelectItem>
                    <SelectItem value="scientific">🔬 Scientific & Data-Driven</SelectItem>
                    <SelectItem value="tough-love">💪 Tough Love & Challenging</SelectItem>
                    <SelectItem value="playful">🎉 Fun & Playful</SelectItem>
                    <SelectItem value="calm">😌 Calm & Zen-like</SelectItem>
                    <SelectItem value="energetic">⚡ High Energy & Enthusiastic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🎵 Music Preference During Workouts</Label>
                <Select value={formData.musicPreference} onValueChange={(value) => handleInputChange("musicPreference", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="What gets you pumped?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-energy">🎵 High Energy / EDM</SelectItem>
                    <SelectItem value="hip-hop">🎤 Hip Hop / Rap</SelectItem>
                    <SelectItem value="rock">🎸 Rock / Metal</SelectItem>
                    <SelectItem value="pop">🎤 Pop Music</SelectItem>
                    <SelectItem value="focus">🎼 Focus / Instrumental</SelectItem>
                    <SelectItem value="podcasts">🎙️ Podcasts / Audiobooks</SelectItem>
                    <SelectItem value="none">🔇 Prefer Silence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🏃‍♂️ Workout Environment Preference</Label>
                <Select value={formData.workoutEnvironment} onValueChange={(value) => handleInputChange("workoutEnvironment", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Where do you feel most motivated?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">🏠 Private (alone at home)</SelectItem>
                    <SelectItem value="social">👥 Social (with others)</SelectItem>
                    <SelectItem value="outdoor">🌳 Outdoor (nature)</SelectItem>
                    <SelectItem value="gym">🏋️ Gym atmosphere</SelectItem>
                    <SelectItem value="quiet">🤫 Quiet & calm</SelectItem>
                    <SelectItem value="energetic">⚡ High energy environment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>👥 Social Preference for Fitness</Label>
                <Select value={formData.socialPreference} onValueChange={(value) => handleInputChange("socialPreference", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="Do you prefer working out alone or with others?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">🧘 Prefer solo workouts</SelectItem>
                    <SelectItem value="partner">👫 With a workout partner</SelectItem>
                    <SelectItem value="small-group">👥 Small group (3-5 people)</SelectItem>
                    <SelectItem value="large-group">👨‍👩‍👧‍👦 Large group/class setting</SelectItem>
                    <SelectItem value="mixed">🔄 Mix of solo and group</SelectItem>
                    <SelectItem value="online-community">💻 Online community support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🎯 Challenge Preference</Label>
                <Select value={formData.challengePreference} onValueChange={(value) => handleInputChange("challengePreference", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How do you like to be challenged?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradual">🐌 Gradual, steady progression</SelectItem>
                    <SelectItem value="moderate">🚶 Moderate challenges</SelectItem>
                    <SelectItem value="intense">🔥 Intense, push-to-limits</SelectItem>
                    <SelectItem value="variety">🎲 Variety of challenge types</SelectItem>
                    <SelectItem value="competitive">🏆 Competitive challenges</SelectItem>
                    <SelectItem value="personal">📈 Personal record focused</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>📊 Feedback Style Preference</Label>
                <Select value={formData.feedbackStyle} onValueChange={(value) => handleInputChange("feedbackStyle", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How do you like to receive feedback?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="detailed">📋 Detailed analysis & data</SelectItem>
                    <SelectItem value="simple">✅ Simple progress updates</SelectItem>
                    <SelectItem value="visual">📊 Visual charts & graphs</SelectItem>
                    <SelectItem value="motivational">🎉 Motivational messages</SelectItem>
                    <SelectItem value="constructive">🔧 Constructive criticism</SelectItem>
                    <SelectItem value="celebration">🎊 Celebration of wins</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>🧬 Personality Type (if you know it)</Label>
                <Select value={formData.personalityType} onValueChange={(value) => handleInputChange("personalityType", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="MBTI, Enneagram, or general type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unknown">🤷 Don't know</SelectItem>
                    <SelectItem value="introverted">🤫 Introverted</SelectItem>
                    <SelectItem value="extroverted">📢 Extroverted</SelectItem>
                    <SelectItem value="analytical">🤓 Analytical/Logical</SelectItem>
                    <SelectItem value="creative">🎨 Creative/Artistic</SelectItem>
                    <SelectItem value="perfectionist">✨ Perfectionist</SelectItem>
                    <SelectItem value="spontaneous">🎲 Spontaneous/Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="biggestChallenge">🚧 What's your biggest fitness challenge?</Label>
                <Textarea
                  id="biggestChallenge"
                  placeholder="Lack of time, motivation, consistency, knowledge, injuries, etc."
                  value={formData.biggestChallenge}
                  onChange={(e) => handleInputChange("biggestChallenge", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="successMeasure">📏 How do you measure success?</Label>
                <Textarea
                  id="successMeasure"
                  placeholder="Weight loss, strength gains, skill mastery, feeling better, etc."
                  value={formData.successMeasure}
                  onChange={(e) => handleInputChange("successMeasure", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">📱 Notifications & Reminders</h2>
              <p className="text-muted-foreground">Set up your perfect reminder system to stay on track</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <p className="text-sm text-muted-foreground">Stay Motivated: "Building Sustainable Fitness Habits"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>🔔 Notification Frequency</Label>
                <Select value={formData.notificationPreference} onValueChange={(value) => handleInputChange("notificationPreference", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How often should we remind you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">🔕 Minimal (weekly check-ins only)</SelectItem>
                    <SelectItem value="workout-days">📅 Only on planned workout days</SelectItem>
                    <SelectItem value="daily">📲 Daily motivation & reminders</SelectItem>
                    <SelectItem value="frequent">📳 Frequent (multiple daily)</SelectItem>
                    <SelectItem value="custom">⚙️ Custom schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>⏰ Best Reminder Times</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Early Morning (6-8 AM)", "Mid Morning (8-10 AM)", "Lunch Time (12-2 PM)", 
                    "Afternoon (2-5 PM)", "Early Evening (5-7 PM)", "Evening (7-9 PM)", 
                    "Night (9-11 PM)", "Custom times"
                  ].map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox
                        id={time}
                        checked={formData.reminderTimes.includes(time)}
                        onCheckedChange={(checked) => handleArrayChange("reminderTimes", time, !!checked)}
                      />
                      <Label htmlFor={time} className="text-sm">{time}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>📅 Available Training Days</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Monday", "Tuesday", "Wednesday", "Thursday", 
                    "Friday", "Saturday", "Sunday"
                  ].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={day}
                        checked={formData.availableDays.includes(day)}
                        onCheckedChange={(checked) => handleArrayChange("availableDays", day, !!checked)}
                      />
                      <Label htmlFor={day} className="text-sm">{day}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>⏳ Work Schedule Type</Label>
                <Select value={formData.workSchedule} onValueChange={(value) => handleInputChange("workSchedule", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="What's your work schedule like?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9-5">🕘 Traditional 9-5</SelectItem>
                    <SelectItem value="shift-work">🔄 Shift work (rotating)</SelectItem>
                    <SelectItem value="night-shift">🌙 Night shift</SelectItem>
                    <SelectItem value="flexible">⚡ Flexible hours</SelectItem>
                    <SelectItem value="part-time">📅 Part-time</SelectItem>
                    <SelectItem value="freelance">💼 Freelance/Self-employed</SelectItem>
                    <SelectItem value="student">📚 Student</SelectItem>
                    <SelectItem value="retired">🏖️ Retired</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="busyPeriods">📅 Busy periods or seasons to be aware of?</Label>
                <Textarea
                  id="busyPeriods"
                  placeholder="Tax season, holidays, school exams, work projects, etc."
                  value={formData.busyPeriods}
                  onChange={(e) => handleInputChange("busyPeriods", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label>✈️ Travel Frequency</Label>
                <Select value={formData.travelFrequency} onValueChange={(value) => handleInputChange("travelFrequency", value)}>
                  <SelectTrigger className="glass-card border-border/20">
                    <SelectValue placeholder="How often do you travel?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">🏠 Rarely/Never</SelectItem>
                    <SelectItem value="occasional">✈️ Occasionally (few times/year)</SelectItem>
                    <SelectItem value="monthly">📅 Monthly trips</SelectItem>
                    <SelectItem value="weekly">🧳 Weekly travel</SelectItem>
                    <SelectItem value="constant">🌍 Constant travel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="familyTime">👨‍👩‍👧‍👦 Family/personal commitments?</Label>
                <Textarea
                  id="familyTime"
                  placeholder="Kids activities, caregiving, family time, etc."
                  value={formData.familyTime}
                  onChange={(e) => handleInputChange("familyTime", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeConstraints">⏰ Main time constraints?</Label>
                <Textarea
                  id="timeConstraints"
                  placeholder="What limits your workout time the most?"
                  value={formData.timeConstraints}
                  onChange={(e) => handleInputChange("timeConstraints", e.target.value)}
                  className="glass-card border-border/20"
                  rows={2}
                />
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">💰 Budget & Investment</h2>
              <p className="text-muted-foreground">Let's discuss your fitness investment and any concerns</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💎</div>
                    <p className="text-sm text-muted-foreground">Value of Health: "Investing in Your Best Self"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budgetConcerns">💭 Any budget considerations or concerns?</Label>
                <Textarea
                  id="budgetConcerns"
                  placeholder="Tell us about your budget situation, concerns, or expectations..."
                  value={formData.budgetConcerns}
                  onChange={(e) => handleInputChange("budgetConcerns", e.target.value)}
                  className="glass-card border-border/20"
                  rows={3}
                />
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-primary">🎯 What You're Getting</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="text-lg">🏋️‍♂️</div>
                    <div>
                      <h4 className="font-medium text-sm">Personalized Calisthenics Program</h4>
                      <p className="text-xs text-muted-foreground">Custom-built based on your goals, level, and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-lg">📱</div>
                    <div>
                      <h4 className="font-medium text-sm">Progressive Tracking System</h4>
                      <p className="text-xs text-muted-foreground">Track workouts, progress, and skill development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-lg">🎯</div>
                    <div>
                      <h4 className="font-medium text-sm">Skill Progression Roadmaps</h4>
                      <p className="text-xs text-muted-foreground">Step-by-step guides for handstands, muscle-ups, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-lg">🍎</div>
                    <div>
                      <h4 className="font-medium text-sm">Nutrition Guidance</h4>
                      <p className="text-xs text-muted-foreground">Meal planning and nutrition advice for your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-lg">🧘</div>
                    <div>
                      <h4 className="font-medium text-sm">Recovery & Wellness Plans</h4>
                      <p className="text-xs text-muted-foreground">Sleep optimization, stress management, and recovery protocols</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-green-600">💚 Our Promise</h3>
                <p className="text-sm text-muted-foreground">
                  We're committed to your success. This isn't just another fitness app - it's your complete transformation system. 
                  Your investment in your health will pay dividends for life. 🌟
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-blue-600">🚀 Ready to Transform?</h3>
                <p className="text-sm text-muted-foreground">
                  You've taken the first step by completing this comprehensive assessment. 
                  Now let's turn your goals into reality with a plan designed specifically for YOU!
                </p>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">📋 Review Your Complete Profile</h2>
              <p className="text-muted-foreground">Almost done! Let's review your information before creating your account</p>
              
              {/* Video Placeholder */}
              <div className="mt-4 bg-secondary/20 rounded-lg p-4 border border-border/20">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎊</div>
                    <p className="text-sm text-muted-foreground">Success Story: "Your Transformation Journey Starts Now!"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="glass-card">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">👤</span>
                    Personal Info
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formData.name}, {formData.age} years old • {formData.height}cm, {formData.weight}kg
                    {formData.bodyFat && ` • ${formData.bodyFat}% body fat`}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formData.occupation} • {formData.timezone}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">🎯</span>
                    Goals & Motivation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Primary: {formData.primaryGoal} • Motivation: {formData.motivation}/10
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Timeline: {formData.timeframe}
                    {formData.skillGoals.length > 0 && ` • Skills: ${formData.skillGoals.slice(0, 3).join(', ')}`}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">💪</span>
                    Training Plan
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formData.experience} level • {formData.daysPerWeek} days/week • {formData.sessionLength} min sessions
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formData.preferredTime} • {formData.location} training
                    {formData.equipment.length > 0 && ` • Equipment: ${formData.equipment.slice(0, 2).join(', ')}`}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">🍎</span>
                    Nutrition & Lifestyle
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formData.dietStyle} diet • {formData.sleepHours}h sleep • {formData.hydrationLiters}L water
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Stress: {formData.stressLevel} • Activity: {formData.activityLevel}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <span className="mr-2">🎭</span>
                    Coaching Preferences
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Style: {formData.coachingStyle} • Music: {formData.musicPreference}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Notifications: {formData.notificationPreference} • Environment: {formData.workoutEnvironment}
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">🚀 You're All Set!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We've gathered all the information needed to create your personalized ExilsFit program. 
                  Your journey to mastering calisthenics and achieving your fitness goals starts now!
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <Badge variant="outline" className="glass-card">
                    ✅ {formData.primaryGoal || 'Goal Set'}
                  </Badge>
                  <Badge variant="outline" className="glass-card">
                    ⚡ {formData.daysPerWeek || '3'} days/week
                  </Badge>
                  <Badge variant="outline" className="glass-card">
                    🎯 {formData.experience || 'Ready'} level
                  </Badge>
                </div>
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
            <h1 className="text-2xl font-bold">🏃‍♂️ Profile Setup</h1>
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
          
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Just started 🌱</span>
            <span>Getting there 🚀</span>
            <span>Almost done! 🎉</span>
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
                  ← Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep} className="hover-glow">
                    Next Step →
                  </Button>
                ) : (
                  <Button onClick={handleComplete} className="hover-glow">
                    🎉 Complete Profile & Continue
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