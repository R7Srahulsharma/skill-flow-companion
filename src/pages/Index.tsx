
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Users, BookOpen, Camera, Palette, Code, Music } from "lucide-react";
import { SkillJourney } from "@/components/SkillJourney";
import { PracticeFeedback } from "@/components/PracticeFeedback";
import { CommunityInsights } from "@/components/CommunityInsights";

const Index = () => {
  const [activeFlow, setActiveFlow] = useState<'home' | 'journey' | 'feedback'>('home');

  const skillCategories = [
    { name: "Photography", icon: Camera, color: "bg-purple-100 text-purple-600" },
    { name: "Illustration", icon: Palette, color: "bg-pink-100 text-pink-600" },
    { name: "Web Design", icon: Code, color: "bg-blue-100 text-blue-600" },
    { name: "Music Production", icon: Music, color: "bg-green-100 text-green-600" },
  ];

  if (activeFlow === 'journey') {
    return <SkillJourney onBack={() => setActiveFlow('home')} />;
  }

  if (activeFlow === 'feedback') {
    return <PracticeFeedback onBack={() => setActiveFlow('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-luxury">
      {/* Premium Header */}
      <header className="glass-effect sticky top-0 z-50 luxury-shadow">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center glow-effect floating-animation">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-display gradient-text">Domestika AI</h1>
                <p className="text-sm text-muted-foreground font-medium">Premium Creative Assistant</p>
              </div>
            </div>
            <Badge className="gradient-secondary text-secondary-foreground font-semibold px-4 py-2 rounded-xl">
              Elite Edition
            </Badge>
          </div>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-40"></div>
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 glass-effect px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
            <Brain className="w-5 h-5 text-primary" />
            <span className="gradient-text">Next-Generation AI Creative Intelligence</span>
          </div>
          
          <h1 className="text-7xl font-bold font-display mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Master, Create &
            <span className="gradient-text block"> Transcend</span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            The world's most sophisticated AI creative companion. Tailored mastery paths, 
            revolutionary feedback systems, and exclusive access to elite creative networks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground px-10 py-4 text-xl rounded-xl luxury-shadow hover:shadow-glow transition-all duration-500 pulse-glow"
              onClick={() => setActiveFlow('journey')}
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Begin Elite Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect premium-border text-foreground px-10 py-4 text-xl rounded-xl hover:bg-accent transition-all duration-300"
              onClick={() => setActiveFlow('feedback')}
            >
              <Camera className="w-6 h-6 mr-3" />
              Premium Analysis
            </Button>
          </div>
        </div>

        {/* Premium Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="glass-effect premium-border luxury-shadow hover:shadow-glow transition-all duration-500 floating-animation">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
                <Brain className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-display text-foreground">Neural Mastery</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                Revolutionary AI that understands your unique creative DNA and crafts impossible-to-replicate learning journeys.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect premium-border luxury-shadow hover:shadow-glow transition-all duration-500 floating-animation" style={{animationDelay: '1s'}}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
                <Sparkles className="w-10 h-10 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl font-display text-foreground">Quantum Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                Instantaneous, molecular-level analysis of your work with surgical precision recommendations from master-level AI.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect premium-border luxury-shadow hover:shadow-glow transition-all duration-500 floating-animation" style={{animationDelay: '2s'}}>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 glow-effect">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-display text-foreground">Elite Network</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                Exclusive access to the world's top 1% of creatives, with AI-orchestrated introductions at perfect moments.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Premium Skills Portfolio */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-foreground mb-6">Master Elite Disciplines</h2>
          <p className="text-xl text-muted-foreground mb-12">Transcend conventional boundaries with AI-powered mastery acceleration</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((skill, index) => (
              <Card key={skill.name} className="glass-effect premium-border luxury-shadow hover:shadow-glow transition-all duration-500 cursor-pointer group pulse-glow" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 glow-effect group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold font-display text-foreground group-hover:gradient-text transition-all duration-300 text-lg">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Insights */}
        <CommunityInsights />
      </section>
    </div>
  );
};

export default Index;
