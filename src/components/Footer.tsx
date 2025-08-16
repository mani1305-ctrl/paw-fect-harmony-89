import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import pawIcon from "@/assets/paw-icon.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={pawIcon} alt="PawMatch" className="w-8 h-8 brightness-0 invert" />
              <span className="font-bold text-xl text-primary">PawMatch</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Connecting responsible dog owners and breeders for safe, professional breeding experiences.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/browse" className="text-background/80 hover:text-primary transition-colors">Browse Dogs</Link></li>
              <li><Link to="/how-it-works" className="text-background/80 hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/register" className="text-background/80 hover:text-primary transition-colors">Register Dog</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/breeding-requests" className="text-background/80 hover:text-primary transition-colors">Breeding Requests</Link></li>
              <li><Link to="/health-records" className="text-background/80 hover:text-primary transition-colors">Health Records</Link></li>
              <li><Link to="/matches" className="text-background/80 hover:text-primary transition-colors">Find Matches</Link></li>
              <li><Link to="/support" className="text-background/80 hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">support@pawmatch.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">(555) 123-PAWS</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">Austin, TX</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 PawMatch. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}