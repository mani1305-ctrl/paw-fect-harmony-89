import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Clock className="w-24 h-24 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Coming Soon!
            </h2>
            <p className="text-muted-foreground mb-6">
              We're working hard to bring you this feature. In the meantime, explore our other services or register your dog to get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/")}
                className="bg-gradient-hero text-primary-foreground hover:shadow-warm transition-all duration-300"
              >
                Go Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate("/register")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Register Your Dog
              </Button>
            </div>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Specific page components using the template
export function BreedingRequests() {
  return (
    <ComingSoon 
      title="Breeding Requests"
      description="Manage and track breeding requests from other dog owners. Connect with potential breeding partners and handle inquiries professionally."
    />
  );
}

export function HealthRecords() {
  return (
    <ComingSoon 
      title="Health Records"
      description="Store and manage your dog's complete health records, vaccination history, and medical documentation in one secure place."
    />
  );
}

export function Matches() {
  return (
    <ComingSoon 
      title="My Matches"
      description="View your breeding matches and compatibility scores. Track conversations and breeding arrangements with other dog owners."
    />
  );
}

export function Messages() {
  return (
    <ComingSoon 
      title="Messages"
      description="Secure messaging system to communicate with other dog owners, share additional photos, and discuss breeding arrangements."
    />
  );
}

export function Support() {
  return (
    <ComingSoon 
      title="Support Center"
      description="Get help with any questions about breeding, using our platform, or connecting with other dog owners. Our team is here to help."
    />
  );
}

export function Privacy() {
  return (
    <ComingSoon 
      title="Privacy Policy"
      description="Learn how we protect your personal information and your dog's data. We take privacy and security seriously."
    />
  );
}

export function Terms() {
  return (
    <ComingSoon 
      title="Terms of Service"
      description="Review our terms of service and community guidelines for using PawMatch responsibly and ethically."
    />
  );
}