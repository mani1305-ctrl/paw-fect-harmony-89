import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-warm">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Happy family with dogs" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-warm"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Find the Perfect
          <span className="block text-primary animate-pulse-glow">Match for Your Dog</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Connect with responsible breeders and find the ideal breeding partner for your beloved companion. Safe, verified, and professional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg"
            className="bg-gradient-hero text-primary-foreground px-8 py-4 text-lg hover:shadow-float transition-bounce group"
            onClick={() => navigate("/register")}
          >
            <span className="group-hover:scale-105 transition-transform">Register Your Dog</span>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-bounce hover:shadow-card"
            onClick={() => navigate("/browse")}
          >
            Browse Dogs
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-float transition-bounce animate-fade-in delay-300">
            <div className="text-3xl font-bold text-primary mb-2 animate-float">1000+</div>
            <div className="text-muted-foreground">Registered Dogs</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-float transition-bounce animate-fade-in delay-500">
            <div className="text-3xl font-bold text-primary mb-2 animate-float">500+</div>
            <div className="text-muted-foreground">Successful Matches</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-float transition-bounce animate-fade-in delay-700">
            <div className="text-3xl font-bold text-primary mb-2 animate-float">50+</div>
            <div className="text-muted-foreground">Dog Breeds</div>
          </div>
        </div>
      </div>
    </section>
  );
}