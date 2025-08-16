import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Animal Welfare First",
      description: "Every decision we make prioritizes the health, safety, and well-being of dogs and their offspring."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ethical Breeding",
      description: "We promote responsible breeding practices that improve breed health and preserve desirable traits."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Trust",
      description: "Building lasting relationships between dog owners based on transparency and mutual respect."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence Standards",
      description: "Maintaining the highest standards in health screening, documentation, and breeding practices."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Chief Veterinarian",
      bio: "With over 15 years in veterinary medicine and a passion for canine genetics, Dr. Mitchell founded PawMatch to revolutionize responsible dog breeding.",
      credentials: "DVM, Canine Genetics Specialist"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      bio: "Former tech lead at major pet care companies, Michael brings expertise in building platforms that connect pet owners worldwide.",
      credentials: "MS Computer Science, Pet Tech Veteran"
    },
    {
      name: "Emma Rodriguez",
      role: "Breeding Consultant",
      bio: "A certified canine reproduction specialist with 20+ years breeding experience across multiple breeds and AKC judge certification.",
      credentials: "Certified Canine Reproduction Specialist, AKC Judge"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About PawMatch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're dedicated to connecting responsible dog owners and breeders, promoting ethical breeding practices, and ensuring the health and happiness of dogs everywhere.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To create a trusted platform where responsible dog owners can connect, share knowledge, and collaborate in ethical breeding practices that prioritize animal welfare, breed improvement, and the joy that dogs bring to families worldwide.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PawMatch was born from a simple observation: finding the right breeding partner for your dog shouldn't be left to chance or unreliable sources. Too many wonderful dogs were being bred irresponsibly, while dedicated owners struggled to find suitable matches.
                </p>
                <p>
                  Founded in 2023 by a team of veterinarians, dog breeders, and technology experts, we set out to create the most comprehensive and trustworthy platform for responsible dog breeding. Our founders combined decades of experience in veterinary medicine, canine genetics, and breeding to build something truly special.
                </p>
                <p>
                  Today, PawMatch serves thousands of dog owners across the country, facilitating hundreds of successful breeding partnerships while maintaining our unwavering commitment to animal welfare and ethical practices.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Registered Dogs</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Successful Matches</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Dog Breeds</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Owner Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-warm rounded-lg flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Passionate experts dedicated to responsible breeding
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-warm rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {member.bio}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {member.credentials}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Be part of a community that puts dogs first. Connect with responsible breeders and help improve the future of dog breeding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-hero text-primary-foreground px-8 py-4 text-lg hover:shadow-warm transition-all duration-300"
                onClick={() => navigate("/register")}
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
                onClick={() => navigate("/browse")}
              >
                Browse Dogs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}