import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Shield } from "lucide-react";
import { featuredDogs } from "@/data/mockDogs";
import { useNavigate } from "react-router-dom";

export default function FeaturedDogsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Dogs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of our amazing dogs looking for breeding partners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDogs.map((dog) => (
            <Card key={dog.id} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={dog.photo} 
                  alt={dog.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {dog.price}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {dog.name}
                    </h3>
                    <p className="text-muted-foreground">{dog.breed}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {dog.age} years • {dog.gender}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {dog.owner.location}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dog.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.personality.slice(0, 3).map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {dog.healthRecords && <Shield className="w-4 h-4 text-green-500" />}
                    {dog.vaccinated && <Calendar className="w-4 h-4 text-blue-500" />}
                  </div>
                  
                  <Button 
                    size="sm"
                    className="bg-gradient-hero text-primary-foreground hover:shadow-warm transition-all duration-300"
                    onClick={() => navigate(`/dog/${dog.id}`)}
                  >
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
            onClick={() => navigate("/browse")}
          >
            View All Dogs
          </Button>
        </div>
      </div>
    </section>
  );
}