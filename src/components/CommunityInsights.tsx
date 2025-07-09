
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

export const CommunityInsights = () => {
  const communityStats = [
    {
      icon: Users,
      label: "Active Learners",
      value: "2.3M+",
      trend: "+12% this month",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      label: "AI Feedback Given",
      value: "15.6M+",
      trend: "+28% this week",
      color: "text-purple-600"
    },
    {
      icon: Award,
      label: "Skills Mastered",
      value: "890K+",
      trend: "+5% this month",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      label: "Avg Skill Growth",
      value: "34%",
      trend: "vs traditional learning",
      color: "text-pink-600"
    }
  ];

  const featuredCreatives = [
    {
      name: "Sarah Chen",
      skill: "Digital Illustration",
      achievement: "Completed 12-week journey",
      avatar: "SC",
      improvement: "+67% AI score improvement"
    },
    {
      name: "Marcus Rivera",
      skill: "Photography",
      achievement: "100+ community helpful votes",
      avatar: "MR",
      improvement: "Top 1% community contributor"
    },
    {
      name: "Elena Kowalski",
      skill: "UI/UX Design",
      achievement: "Built 3 portfolio projects",
      avatar: "EK",
      improvement: "Featured in community showcase"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Community Stats */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Growing Creative Community</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join millions of creatives accelerating their growth with AI-powered learning and peer collaboration
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <Badge variant="secondary" className={`text-xs ${stat.color.replace('text-', 'text-').replace('-600', '-700')}`}>
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCreatives.map((creative, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                  {creative.avatar}
                </div>
                <CardTitle className="text-lg">{creative.name}</CardTitle>
                <CardDescription>{creative.skill}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-3 bg-green-100 text-green-700">{creative.achievement}</Badge>
                <p className="text-sm text-gray-600">{creative.improvement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
