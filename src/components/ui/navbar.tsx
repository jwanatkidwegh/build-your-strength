import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gradient">FitForge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-smooth">
              Pricing
            </Link>
            <Link to="/login" className="text-foreground hover:text-primary transition-smooth">
              Login
            </Link>
            <Button variant="hero" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20 py-4 animate-slide-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/pricing" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/login" 
                className="text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Button variant="hero" asChild className="w-full">
                <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};