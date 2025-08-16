import { Card, CardContent } from "@/components/ui/card";
import { User, Search, Heart } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <User className="w-12 h-12 text-primary" />,
      title: "Create Profile",
      description: "Register your dog with photos, health records, and detailed information about breed, temperament, and breeding history."
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Browse Matches",
      description: "Search through verified breeding partners using our smart matching system based on breed compatibility, location, and health records."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Connect & Breed",
      description: "Connect with other dog owners, arrange meetings, and ensure a safe, professional breeding experience for both dogs."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple 3-step process makes finding the perfect breeding partner safe and easy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-warm rounded-full">
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}