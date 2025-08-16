import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    color: "",
    description: "",
    personality: "",
    healthRecords: false,
    vaccinated: false,
    registered: false,
    breedingExperience: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.dogName || !formData.breed || !formData.ownerName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Your dog's profile has been created successfully.",
    });

    // Navigate to success page or dashboard
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Register Your Dog
            </h1>
            <p className="text-xl text-muted-foreground">
              Create a profile for your dog to find the perfect breeding partner
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Dog Information */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Dog Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="dogName">Dog Name *</Label>
                    <Input
                      id="dogName"
                      value={formData.dogName}
                      onChange={(e) => handleInputChange("dogName", e.target.value)}
                      placeholder="Enter your dog's name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="breed">Breed *</Label>
                    <Select onValueChange={(value) => handleInputChange("breed", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select breed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                        <SelectItem value="labrador">Labrador</SelectItem>
                        <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                        <SelectItem value="border-collie">Border Collie</SelectItem>
                        <SelectItem value="poodle">Poodle</SelectItem>
                        <SelectItem value="bulldog">Bulldog</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="age">Age (years)</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      placeholder="Age in years"
                      min="1"
                      max="15"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={formData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      placeholder="Weight in pounds"
                    />
                  </div>
                  <div>
                    <Label htmlFor="color">Color/Markings</Label>
                    <Input
                      id="color"
                      value={formData.color}
                      onChange={(e) => handleInputChange("color", e.target.value)}
                      placeholder="Describe color and markings"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your dog's characteristics, temperament, and breeding goals"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="personality">Personality Traits</Label>
                  <Input
                    id="personality"
                    value={formData.personality}
                    onChange={(e) => handleInputChange("personality", e.target.value)}
                    placeholder="e.g., Gentle, Intelligent, Energetic (comma separated)"
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Health & Registration</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="healthRecords"
                      checked={formData.healthRecords}
                      onCheckedChange={(checked) => handleInputChange("healthRecords", checked)}
                    />
                    <Label htmlFor="healthRecords">Complete health records available</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="vaccinated"
                      checked={formData.vaccinated}
                      onCheckedChange={(checked) => handleInputChange("vaccinated", checked)}
                    />
                    <Label htmlFor="vaccinated">Up-to-date vaccinations</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="registered"
                      checked={formData.registered}
                      onCheckedChange={(checked) => handleInputChange("registered", checked)}
                    />
                    <Label htmlFor="registered">AKC or other official registration</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Owner Information */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Owner Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ownerName">Full Name *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange("ownerName", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="breedingExperience">Breeding Experience</Label>
                    <Select onValueChange={(value) => handleInputChange("breedingExperience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First time breeder</SelectItem>
                        <SelectItem value="experienced">Experienced (1-5 litters)</SelectItem>
                        <SelectItem value="professional">Professional breeder (5+ litters)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Photos & Documents</CardTitle>
                <p className="text-muted-foreground">
                  Upload photos of your dog and any relevant documents (health records, registration papers)
                </p>
              </CardHeader>
              <CardContent>
                <FileUpload onChange={handleFileUpload} />
                {files.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      {files.length} file(s) uploaded successfully
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-hero text-primary-foreground px-12 py-4 text-lg hover:shadow-warm transition-all duration-300"
              >
                Register My Dog
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}