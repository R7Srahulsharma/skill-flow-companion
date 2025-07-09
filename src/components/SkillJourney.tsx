
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, Star, Play, Camera, Palette, Users } from "lucide-react";

interface SkillJourneyProps {
  onBack: () => void;
}

export const SkillJourney = ({ onBack }: SkillJourneyProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const skills = [
    {
      id: "photography",
      name: "Portrait Photography",
      icon: Camera,
      level: "Beginner",
      duration: "4-6 weeks",
      description: "Master the art of capturing compelling portraits",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "illustration",
      name: "Digital Illustration",
      icon: Palette,
      level: "Intermediate",
      duration: "6-8 weeks",
      description: "Create stunning digital artwork and illustrations",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const photographyJourney = [
    {
      title: "Understanding Light & Composition",
      description: "Learn the fundamentals of lighting and rule of thirds",
      duration: "Week 1-2",
      status: "completed",
      aiInsight: "Your uploaded photos show strong composition instincts. Focus on golden hour lighting next."
    },
    {
      title: "Camera Settings & Technical Skills",
      description: "Master aperture, shutter speed, and ISO",
      duration: "Week 2-3",
      status: "current",
      aiInsight: "Based on your EXIF data, you're ready to experiment with wider apertures for better bokeh."
    },
    {
      title: "Posing & Direction Techniques",
      description: "Learn to guide subjects for natural, engaging poses",
      duration: "Week 3-4",
      status: "upcoming",
      aiInsight: "Your portfolio analysis suggests working on subject interaction will elevate your work significantly."
    },
    {
      title: "Post-Processing & Style Development",
      description: "Develop your unique editing style and workflow",
      duration: "Week 4-6",
      status: "upcoming",
      aiInsight: "AI recommends exploring warmer color grading based on your aesthetic preferences."
    }
  ];

  if (!selectedSkill) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center mb-8">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Skill Journey</h1>
              <p className="text-gray-600">AI-personalized learning paths based on your goals and progress</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {skills.map((skill) => (
              <Card key={skill.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white/60 backdrop-blur-sm" onClick={() => setSelectedSkill(skill.id)}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {skill.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {skill.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      4.8 rating
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Start Journey
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={() => setSelectedSkill(null)} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Skills
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portrait Photography Journey</h1>
            <p className="text-gray-600">Personalized by AI • Week 2 of 6</p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-0 shadow-lg bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Your Progress</CardTitle>
                <CardDescription>25% complete • On track to finish by March 15</CardDescription>
              </div>
              <Badge className="bg-green-100 text-green-700">On Track</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={25} className="h-3 mb-4" />
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="font-semibold text-2xl text-purple-600">12</div>
                <div className="text-gray-600">Photos Submitted</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-pink-600">8.4</div>
                <div className="text-gray-600">Avg AI Score</div>
              </div>
              <div>
                <div className="font-semibold text-2xl text-blue-600">3</div>
                <div className="text-gray-600">Peer Connections</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journey Steps */}
        <div className="space-y-6">
          {photographyJourney.map((step, index) => (
            <Card key={index} className={`border-0 shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm ${step.status === 'current' ? 'ring-2 ring-purple-500' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-green-100' : 
                      step.status === 'current' ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : step.status === 'current' ? (
                        <Play className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="mb-2">{step.description}</CardDescription>
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">AI Insight</p>
                      <p className="text-sm text-blue-700">{step.aiInsight}</p>
                    </div>
                  </div>
                </div>
                {step.status === 'current' && (
                  <div className="mt-4 flex space-x-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Continue Learning
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Find Study Buddy
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
