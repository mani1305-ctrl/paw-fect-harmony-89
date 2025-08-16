import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MapPin, Calendar, Shield, MessageSquare, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MatchDog {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: "Male" | "Female";
  photo: string;
  owner: {
    name: string;
    location: string;
  };
  compatibility: number;
  matchReasons: string[];
  status: 'pending' | 'accepted' | 'declined' | 'matched';
  healthScore: number;
  breedingExperience: string;
  lastActive: string;
}

export default function Matches() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("new-matches");

  const newMatches: MatchDog[] = [
    {
      id: "1",
      name: "Luna",
      breed: "Golden Retriever", 
      age: 3,
      gender: "Female",
      photo: "/api/placeholder/300/300",
      owner: {
        name: "Sarah Johnson",
        location: "Austin, TX"
      },
      compatibility: 95,
      matchReasons: ["Excellent bloodlines", "Compatible temperament", "Health records verified", "Nearby location"],
      status: 'pending',
      healthScore: 98,
      breedingExperience: "Experienced",
      lastActive: "2 hours ago"
    },
    {
      id: "2", 
      name: "Max",
      breed: "Golden Retriever",
      age: 4,
      gender: "Male", 
      photo: "/api/placeholder/300/300",
      owner: {
        name: "Mike Chen",
        location: "Dallas, TX"
      },
      compatibility: 89,
      matchReasons: ["Champion bloodlines", "Similar size", "Health tested", "Professional breeder"],
      status: 'pending',
      healthScore: 95,
      breedingExperience: "Professional",
      lastActive: "1 day ago"
    },
    {
      id: "3",
      name: "Bella",
      breed: "Golden Retriever",
      age: 2,
      gender: "Female",
      photo: "/api/placeholder/300/300", 
      owner: {
        name: "Emma Rodriguez",
        location: "Houston, TX"
      },
      compatibility: 87,
      matchReasons: ["Young and healthy", "Excellent pedigree", "Gentle temperament", "First-time breeding"],
      status: 'pending',
      healthScore: 92,
      breedingExperience: "First-time",
      lastActive: "3 hours ago"
    }
  ];

  const acceptedMatches: MatchDog[] = [
    {
      id: "4",
      name: "Charlie",
      breed: "Golden Retriever",
      age: 3,
      gender: "Male",
      photo: "/api/placeholder/300/300",
      owner: {
        name: "David Wilson", 
        location: "San Antonio, TX"
      },
      compatibility: 92,
      matchReasons: ["Mutual interest", "Health verified", "Meeting scheduled"],
      status: 'accepted',
      healthScore: 96,
      breedingExperience: "Experienced", 
      lastActive: "Online now"
    }
  ];

  const handleAcceptMatch = (dogId: string) => {
    console.log(`Accepted match for dog ${dogId}`);
    // Move to accepted matches logic
  };

  const handleDeclineMatch = (dogId: string) => {
    console.log(`Declined match for dog ${dogId}`);
    // Remove from matches logic
  };

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getCompatibilityBg = (score: number) => {
    if (score >= 90) return "bg-green-100 border-green-300";
    if (score >= 80) return "bg-yellow-100 border-yellow-300";
    return "bg-red-100 border-red-300";
  };

  const MatchCard = ({ dog, showActions = true }: { dog: MatchDog; showActions?: boolean }) => (
    <Card className="group hover:shadow-float transition-all duration-300 animate-scale-in">
      <div className="relative">
        <div className="h-48 bg-gradient-warm rounded-t-lg flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground text-4xl font-bold">
            {dog.name.charAt(0)}
          </div>
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border-2 ${getCompatibilityBg(dog.compatibility)}`}>
          <span className={`font-bold text-sm ${getCompatibilityColor(dog.compatibility)}`}>
            {dog.compatibility}% Match
          </span>
        </div>
        {dog.status === 'accepted' && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-green-500 text-white">
              <Check className="w-3 h-3 mr-1" />
              Matched
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-1">{dog.name}</h3>
          <p className="text-muted-foreground">{dog.breed}</p>
          <div className="flex items-center text-sm text-muted-foreground mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            {dog.owner.location} • {dog.age} years • {dog.gender}
          </div>
        </div>

        <div className="space-y-4">
          {/* Compatibility Score */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Compatibility</span>
              <span className={`text-sm font-bold ${getCompatibilityColor(dog.compatibility)}`}>
                {dog.compatibility}%
              </span>
            </div>
            <Progress value={dog.compatibility} className="w-full" />
          </div>

          {/* Health Score */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Health Score</span>
              <span className="text-sm font-bold text-green-600">{dog.healthScore}%</span>
            </div>
            <Progress value={dog.healthScore} className="w-full [&>div]:bg-green-500" />
          </div>

          {/* Owner Info */}
          <div className="text-sm">
            <p className="font-medium text-foreground mb-1">Owner: {dog.owner.name}</p>
            <p className="text-muted-foreground">Experience: {dog.breedingExperience}</p>
            <p className="text-muted-foreground">Last active: {dog.lastActive}</p>
          </div>

          {/* Match Reasons */}
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Why we matched you:</p>
            <div className="flex flex-wrap gap-1">
              {dog.matchReasons.slice(0, 3).map((reason, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {reason}
                </Badge>
              ))}
              {dog.matchReasons.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{dog.matchReasons.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          {showActions && dog.status === 'pending' && (
            <div className="flex space-x-2 pt-2">
              <Button
                onClick={() => handleDeclineMatch(dog.id)}
                variant="outline"
                size="sm"
                className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Pass
              </Button>
              <Button
                onClick={() => handleAcceptMatch(dog.id)}  
                size="sm"
                className="flex-1 bg-gradient-hero text-primary-foreground hover:shadow-warm transition-all duration-300"
              >
                <Heart className="w-4 h-4 mr-1" />
                Like
              </Button>
            </div>
          )}

          {dog.status === 'accepted' && (
            <div className="flex space-x-2 pt-2">
              <Button
                onClick={() => navigate(`/dog/${dog.id}`)}
                variant="outline" 
                size="sm"
                className="flex-1"
              >
                View Profile
              </Button>
              <Button
                onClick={() => navigate('/messages')}
                size="sm"
                className="flex-1 bg-gradient-hero text-primary-foreground hover:shadow-warm transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                Message  
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              My Matches
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Discover compatible breeding partners for your dog
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-card animate-scale-in">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{newMatches.length}</div>
                <div className="text-sm text-muted-foreground">New Matches</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-75">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{acceptedMatches.length}</div>
                <div className="text-sm text-muted-foreground">Accepted</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-150">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">2</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </CardContent>
            </Card>
            <Card className="shadow-card animate-scale-in delay-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">5</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="new-matches">New Matches</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="new-matches" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newMatches.map((dog) => (
                  <MatchCard key={dog.id} dog={dog} />
                ))}
              </div>
              {newMatches.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No New Matches</h3>
                  <p className="text-muted-foreground mb-4">
                    We're working to find the perfect matches for your dog.
                  </p>
                  <Button onClick={() => navigate('/browse')} className="bg-gradient-hero text-primary-foreground">
                    Browse Dogs
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="accepted" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acceptedMatches.map((dog) => (
                  <MatchCard key={dog.id} dog={dog} showActions={false} />
                ))}
              </div>
              {acceptedMatches.length === 0 && (
                <div className="text-center py-12">
                  <Check className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No Accepted Matches Yet</h3>
                  <p className="text-muted-foreground">
                    Accept some matches to see them here.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Match History</h3>
                <p className="text-muted-foreground mb-4">
                  Your completed breeding matches will appear here.
                </p>
                <Button variant="outline" onClick={() => navigate('/browse')}>
                  Start Matching
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}