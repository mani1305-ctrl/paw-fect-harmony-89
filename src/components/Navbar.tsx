import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";
import pawIcon from "@/assets/paw-icon.png";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  // Safe navigation hook usage
  let navigate: (path: string) => void;
  try {
    navigate = useNavigate();
  } catch (error) {
    // Fallback for when not in router context
    navigate = (path: string) => {
      window.location.href = path;
    };
  }

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50 px-4", className)}>
      <Menu setActive={setActive}>
        {/* Left side - Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={pawIcon} alt="PawMatch" className="w-8 h-8" />
          <span className="font-bold text-xl text-primary">PawMatch</span>
        </Link>
        
        {/* Center - Navigation Items */}
        <div className="flex items-center space-x-8">
          <MenuItem setActive={setActive} active={active} item="Browse">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/browse">All Dogs</HoveredLink>
              <HoveredLink href="/browse?filter=breed">By Breed</HoveredLink>
              <HoveredLink href="/browse?filter=location">By Location</HoveredLink>
              <HoveredLink href="/browse?filter=age">By Age</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/breeding-requests">Breeding Requests</HoveredLink>
              <HoveredLink href="/health-records">Health Records</HoveredLink>
              <HoveredLink href="/matches">My Matches</HoveredLink>
              <HoveredLink href="/messages">Messages</HoveredLink>
            </div>
          </MenuItem>
          
          <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>
        
        {/* Right side - CTA Button */}
        <button 
          onClick={() => navigate("/register")}
          className="bg-gradient-hero text-primary-foreground px-6 py-2 rounded-full hover:shadow-warm transition-all duration-300"
        >
          Register Dog
        </button>
      </Menu>
    </div>
  );
}