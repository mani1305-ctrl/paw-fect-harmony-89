import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Search, Heart, Shield, FileText, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <User className="w-12 h-12 text-primary" />,
      title: "Create Your Dog's Profile",
      description: "Register your dog with detailed information including photos, health records, breed history, and temperament. Our verification process ensures all profiles are authentic and complete.",
      details: [
        "Upload high-quality photos",
        "Provide health and vaccination records",
        "Include breeding history and goals",
        "Verify registration documents"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Search & Match",
      description: "Use our advanced matching system to find compatible breeding partners based on breed, location, health records, and your specific breeding goals.",
      details: [
        "Smart breed compatibility matching",
        "Location-based filtering",
        "Health record verification",
        "Temperament compatibility analysis"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "Connect & Communicate",
      description: "Reach out to potential breeding partners through our secure messaging system. Discuss breeding terms, arrange meetings, and share additional information.",
      details: [
        "Secure in-app messaging",
        "Share additional photos and videos",
        "Discuss breeding agreements",
        "Schedule meet-and-greets"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Safe Breeding Process",
      description: "Follow our best practices for safe, ethical breeding. We provide guidance on health testing, contracts, and responsible breeding practices.",
      details: [
        "Health testing recommendations",
        "Breeding contract templates",
        "Veterinary guidance",
        "Post-breeding support"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Documentation & Records",
      description: "Keep detailed records of the breeding process, health checks, and offspring information. All documentation is securely stored in your account.",
      details: [
        "Digital health records",
        "Breeding documentation",
        "Offspring tracking",
        "Certificate generation"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Ongoing Support",
      description: "Get continued support throughout the breeding process and beyond. Our community and expert advisors are here to help you succeed.",
      details: [
        "Expert breeding advice",
        "Community forums",
        "24/7 customer support",
        "Educational resources"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How PawMatch Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform makes finding the perfect breeding partner safe, easy, and professional. Here's how we guide you through every step of the process.
            </p>
          </div>

          {/* Main Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-warm rounded-full relative">
                        {step.icon}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety & Trust Section */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Safety & Trust First
              </h2>
              <p className="text-muted-foreground text-lg">
                We prioritize the safety and well-being of all dogs on our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Verified Profiles</h3>
                <p className="text-sm text-muted-foreground">All dog profiles and owners are verified through our comprehensive screening process.</p>
              </div>
              <div className="text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Health Records</h3>
                <p className="text-sm text-muted-foreground">Complete health documentation is required and verified by veterinary professionals.</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Ethical Breeding</h3>
                <p className="text-sm text-muted-foreground">We promote responsible breeding practices and animal welfare above all else.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of responsible dog owners who trust PawMatch for their breeding needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-hero text-primary-foreground px-8 py-4 text-lg hover:shadow-warm transition-all duration-300"
                onClick={() => navigate("/register")}
              >
                Register Your Dog
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