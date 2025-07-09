
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Camera, Zap, TrendingUp, Heart, MessageCircle, Star, Users } from "lucide-react";

interface PracticeFeedbackProps {
  onBack: () => void;
}

export const PracticeFeedback = ({ onBack }: PracticeFeedbackProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackGenerated, setFeedbackGenerated] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        // Simulate AI processing delay
        setTimeout(() => {
          setShowFeedback(true);
          setFeedbackGenerated(true);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const aiScore = 8.4;
  const improvements = [
    {
      area: "Composition",
      score: 9.2,
      feedback: "Excellent use of rule of thirds. The subject placement creates strong visual balance.",
      suggestion: "Try experimenting with leading lines to guide the viewer's eye more dynamically."
    },
    {
      area: "Lighting",
      score: 7.8,
      feedback: "Good natural lighting, but slight underexposure in shadow areas reduces detail.",
      suggestion: "Use fill flash or reflector to lift shadows while maintaining the natural mood."
    },
    {
      area: "Technical",
      score: 8.1,
      feedback: "Sharp focus on subject with nice background separation. Good depth of field control.",
      suggestion: "Consider shooting at f/2.8 instead of f/4 for even more dramatic bokeh."
    }
  ];

  const communityFeedback = [
    {
      user: "Maria Santos",
      level: "Professional",
      avatar: "MS",
      comment: "Love the natural expression you captured! The lighting complements the subject's mood perfectly.",
      likes: 12,
      helpful: true
    },
    {
      user: "Alex Chen", 
      level: "Advanced",
      avatar: "AC",
      comment: "Great shot! Have you tried shooting during blue hour? Your style would work beautifully with that lighting.",
      likes: 8,
      helpful: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Practice Feedback</h1>
            <p className="text-gray-600">Upload your work and get instant, detailed feedback</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-purple-600" />
                  Upload Your Work
                </CardTitle>
                <CardDescription>
                  Share your latest creative work and get AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!uploadedImage ? (
                  <div className="border-2 border-dashed border-purple-200 rounded-lg p-8 text-center hover:border-purple-300 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-700 mb-2">Upload an image</p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded work" 
                        className="w-full h-64 object-cover"
                      />
                      {!feedbackGenerated && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                            <p>AI analyzing your work...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setUploadedImage(null)}
                      className="w-full"
                    >
                      Upload Different Image
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Context Input */}
            {uploadedImage && (
              <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Add Context (Optional)</CardTitle>
                  <CardDescription>
                    Tell us about your goals or specific areas you'd like feedback on
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="e.g., I'm working on portrait photography and want to improve my lighting technique..."
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Feedback Section */}
          <div className="space-y-6">
            {showFeedback && (
              <>
                {/* AI Score */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Zap className="w-6 h-6 mr-2" />
                        <CardTitle className="text-xl">AI Overall Score</CardTitle>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        Updated
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{aiScore}/10</div>
                      <p className="text-purple-100 mb-4">Strong technical execution with room for creative growth</p>
                      <div className="flex items-center justify-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          +0.6 from last work
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Feedback */}
                <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Detailed Analysis</CardTitle>
                    <CardDescription>AI breakdown by key areas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {improvements.map((item, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{item.area}</h4>
                          <Badge variant={item.score >= 8.5 ? "default" : item.score >= 7.5 ? "secondary" : "outline"}>
                            {item.score}/10
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{item.feedback}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded p-3">
                          <p className="text-sm text-blue-800">
                            <strong>Suggestion:</strong> {item.suggestion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Community Feedback */}
                <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Community Feedback
                    </CardTitle>
                    <CardDescription>Insights from fellow creatives</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityFeedback.map((feedback, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {feedback.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-gray-900">{feedback.user}</span>
                              <Badge variant="outline" className="text-xs">{feedback.level}</Badge>
                            </div>
                            <p className="text-gray-700 text-sm mb-2">{feedback.comment}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                                <Heart className="w-3 h-3" />
                                <span>{feedback.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                                <MessageCircle className="w-3 h-3" />
                                <span>Reply</span>
                              </button>
                              {feedback.helpful && (
                                <Badge variant="secondary" className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Helpful
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Request More Feedback
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
