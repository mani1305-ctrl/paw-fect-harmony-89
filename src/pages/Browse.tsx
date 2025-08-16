import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Shield, Search } from "lucide-react";
import { mockDogs } from "@/data/mockDogs";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Browse() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [breedFilter, setBreedFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");

  const filteredDogs = mockDogs.filter(dog => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dog.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dog.owner.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = breedFilter === "all" || dog.breed.toLowerCase().replace(" ", "-") === breedFilter;
    const matchesAge = ageFilter === "all" || 
                      (ageFilter === "young" && dog.age <= 2) ||
                      (ageFilter === "adult" && dog.age > 2 && dog.age <= 6) ||
                      (ageFilter === "senior" && dog.age > 6);
    
    return matchesSearch && matchesBreed && matchesAge;
  });

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Browse Dogs
            </h1>
            <p className="text-xl text-muted-foreground">
              Find the perfect breeding partner for your dog
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search dogs, breeds, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={breedFilter} onValueChange={setBreedFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Breeds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Breeds</SelectItem>
                  <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                  <SelectItem value="labrador">Labrador</SelectItem>
                  <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                  <SelectItem value="border-collie">Border Collie</SelectItem>
                  <SelectItem value="poodle">Poodle</SelectItem>
                  <SelectItem value="bulldog">Bulldog</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Ages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="young">Young (0-2 years)</SelectItem>
                  <SelectItem value="adult">Adult (3-6 years)</SelectItem>
                  <SelectItem value="senior">Senior (7+ years)</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-gradient-hero text-primary-foreground">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredDogs.length} of {mockDogs.length} dogs
            </p>
          </div>

          {/* Dogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDogs.map((dog) => (
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

          {filteredDogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No dogs found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}