import goldenRetriever from "@/assets/dogs/golden-retriever.jpg";
import labrador from "@/assets/dogs/labrador.jpg";
import germanShepherd from "@/assets/dogs/german-shepherd.jpg";
import borderCollie from "@/assets/dogs/border-collie.jpg";
import poodle from "@/assets/dogs/poodle.jpg";
import bulldog from "@/assets/dogs/bulldog.jpg";

export interface DogProfile {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: "Male" | "Female";
  photo: string;
  owner: {
    name: string;
    location: string;
    email: string;
    phone: string;
  };
  description: string;
  personality: string[];
  healthRecords: boolean;
  vaccinated: boolean;
  registered: boolean;
  price?: string;
}

export const mockDogs: DogProfile[] = [
  {
    id: "1",
    name: "Max",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    photo: goldenRetriever,
    owner: {
      name: "Sarah Johnson",
      location: "Austin, TX",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567"
    },
    description: "Max is a gentle and loving Golden Retriever with excellent bloodlines. He's great with children and has a calm temperament perfect for breeding.",
    personality: ["Gentle", "Loyal", "Patient", "Intelligent"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$1,500"
  },
  {
    id: "2",
    name: "Luna",
    breed: "Labrador",
    age: 2,
    gender: "Female",
    photo: labrador,
    owner: {
      name: "Mike Chen",
      location: "San Francisco, CA",
      email: "mike.chen@email.com",
      phone: "(555) 234-5678"
    },
    description: "Luna is an energetic and playful Labrador with champion bloodlines. She's highly intelligent and has excellent health records.",
    personality: ["Energetic", "Smart", "Friendly", "Obedient"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$1,200"
  },
  {
    id: "3",
    name: "Rex",
    breed: "German Shepherd",
    age: 4,
    gender: "Male",
    photo: germanShepherd,
    owner: {
      name: "David Wilson",
      location: "Denver, CO",
      email: "david.w@email.com",
      phone: "(555) 345-6789"
    },
    description: "Rex is a strong and protective German Shepherd with excellent working dog lineage. He's well-trained and has a stable temperament.",
    personality: ["Protective", "Confident", "Courageous", "Smart"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$2,000"
  },
  {
    id: "4",
    name: "Bella",
    breed: "Border Collie",
    age: 2,
    gender: "Female",
    photo: borderCollie,
    owner: {
      name: "Emma Thompson",
      location: "Portland, OR",
      email: "emma.t@email.com",
      phone: "(555) 456-7890"
    },
    description: "Bella is an incredibly intelligent and agile Border Collie. She excels in agility training and has strong herding instincts.",
    personality: ["Intelligent", "Energetic", "Alert", "Responsive"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$1,800"
  },
  {
    id: "5",
    name: "Charlie",
    breed: "Poodle",
    age: 3,
    gender: "Male",
    photo: poodle,
    owner: {
      name: "Lisa Garcia",
      location: "Miami, FL",
      email: "lisa.g@email.com",
      phone: "(555) 567-8901"
    },
    description: "Charlie is an elegant Standard Poodle with hypoallergenic coat. He's well-groomed and has excellent show potential.",
    personality: ["Elegant", "Intelligent", "Athletic", "Proud"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$1,600"
  },
  {
    id: "6",
    name: "Ruby",
    breed: "Bulldog",
    age: 2,
    gender: "Female",
    photo: bulldog,
    owner: {
      name: "Tom Rodriguez",
      location: "Chicago, IL",
      email: "tom.r@email.com",
      phone: "(555) 678-9012"
    },
    description: "Ruby is a sweet and gentle English Bulldog with a loving personality. She's great with families and has excellent health records.",
    personality: ["Gentle", "Friendly", "Calm", "Affectionate"],
    healthRecords: true,
    vaccinated: true,
    registered: true,
    price: "$2,500"
  }
];

export const featuredDogs = mockDogs.slice(0, 6);

export const testimonials = [
  {
    id: "1",
    name: "Jennifer Smith",
    location: "Seattle, WA",
    text: "PawMatch helped me find the perfect match for my Golden Retriever. The process was smooth and professional, and now we have beautiful puppies!",
    rating: 5,
    dogBreed: "Golden Retriever"
  },
  {
    id: "2",
    name: "Robert Johnson",
    location: "Boston, MA",
    text: "Amazing platform! I found a wonderful breeding partner for my German Shepherd. The health records verification gave me peace of mind.",
    rating: 5,
    dogBreed: "German Shepherd"
  },
  {
    id: "3",
    name: "Maria Garcia",
    location: "Los Angeles, CA",
    text: "The team at PawMatch is incredibly helpful. They guided me through the entire breeding process and matched me with perfect partners.",
    rating: 5,
    dogBreed: "Poodle"
  }
];