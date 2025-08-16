import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Shield, Phone, Mail, ArrowLeft, Heart } from "lucide-react";
import { mockDogs } from "@/data/mockDogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DogProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dog = mockDogs.find(d => d.id === id);

  if (!dog) {
    return (
      <div className="min-h-screen bg-gradient-warm">
        <Navbar />
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Dog Not Found</h1>
            <p className="text-muted-foreground mb-8">The dog profile you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/browse")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Browse
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate("/browse")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Button>

          {/* Main Profile Card */}
          <Card className="overflow-hidden shadow-warm mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={dog.photo} 
                  alt={dog.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground text-lg px-3 py-1">
                    {dog.price}
                  </Badge>
                </div>
              </div>

              {/* Info Section */}
              <CardContent className="p-8">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    {dog.name}
                  </h1>
                  <p className="text-2xl text-primary font-semibold mb-2">
                    {dog.breed}
                  </p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {dog.owner.location}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <div className="font-semibold text-foreground">Age</div>
                    <div className="text-muted-foreground">{dog.age} years</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 text-center">
                    <div className="font-semibold text-foreground">Gender</div>
                    <div className="text-muted-foreground">{dog.gender}</div>
                  </div>
                </div>

                {/* Health & Certifications */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Health & Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {dog.healthRecords && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <Shield className="w-3 h-3 mr-1" />
                        Health Records
                      </Badge>
                    )}
                    {dog.vaccinated && (
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        Vaccinated
                      </Badge>
                    )}
                    {dog.registered && (
                      <Badge variant="outline" className="text-purple-600 border-purple-600">
                        Registered
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Personality Traits */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Personality</h3>
                  <div className="flex flex-wrap gap-2">
                    {dog.personality.map((trait) => (
                      <Badge key={trait} variant="secondary">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-hero text-primary-foreground hover:shadow-warm transition-all duration-300"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Express Interest
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Description */}
          <Card className="shadow-warm mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About {dog.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {dog.description}
              </p>
            </CardContent>
          </Card>

          {/* Owner Information */}
          <Card className="shadow-warm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Owner Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <div className="font-semibold text-foreground text-lg mb-1">
                      {dog.owner.name}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {dog.owner.location}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{dog.owner.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{dog.owner.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Contact Owner</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interested in {dog.name}? Reach out to discuss breeding opportunities and arrange a meeting.
                  </p>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-gradient-hero text-primary-foreground">
                      Send Message
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Request Contact Info
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}