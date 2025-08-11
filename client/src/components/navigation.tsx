import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <i className="fas fa-tooth text-[var(--dental-teal)] text-2xl mr-3"></i>
            <span className="font-bold text-xl text-gray-800">Radhika Dental</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[var(--dental-teal)] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-700 hover:text-[var(--dental-teal)] transition-colors">
              Appointment
            </button>
            <button onClick={() => scrollToSection('treatments')} className="text-gray-700 hover:text-[var(--dental-teal)] transition-colors">
              Treatments
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-[var(--dental-teal)] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[var(--dental-teal)] transition-colors">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-[var(--dental-teal)]">
                Home
              </button>
              <button onClick={() => scrollToSection('appointment')} className="block px-3 py-2 text-gray-700 hover:text-[var(--dental-teal)]">
                Appointment
              </button>
              <button onClick={() => scrollToSection('treatments')} className="block px-3 py-2 text-gray-700 hover:text-[var(--dental-teal)]">
                Treatments
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-gray-700 hover:text-[var(--dental-teal)]">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-[var(--dental-teal)]">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
