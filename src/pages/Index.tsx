
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Domestika AI</h1>
                <p className="text-sm text-gray-600">Creative Assistant</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              Beta Prototype
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Creative Learning</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Learn, Practice & Share
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Faster</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your AI creative companion that guides you through personalized skill journeys, 
            provides intelligent feedback, and connects you with the right peers and masters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveFlow('journey')}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-200 hover:border-purple-300 text-purple-700 px-8 py-3 text-lg rounded-xl"
              onClick={() => setActiveFlow('feedback')}
            >
              <Camera className="w-5 h-5 mr-2" />
              Get AI Feedback
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 leading-relaxed">
                AI analyzes your style, pace, and goals to create custom learning paths that adapt as you grow.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Intelligent Feedback</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 leading-relaxed">
                Get instant, detailed critiques on your work with actionable suggestions for improvement.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Smart Community</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 leading-relaxed">
                Connect with the right peers and mentors at the perfect moment in your creative journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Creative Skills</h2>
          <p className="text-gray-600 mb-8">Choose your creative domain and let AI guide your growth</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {skillCategories.map((skill) => (
              <Card key={skill.name} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${skill.color}`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
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
