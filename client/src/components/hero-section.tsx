import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg hero-pattern">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Radhika Dental Clinic
              <span className="block text-3xl lg:text-4xl font-medium mt-2">& Implant Centre</span>
            </h1>
            <div className="flex items-center space-x-4 mb-6 text-xl">
              <span className="font-semibold">Precision</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">Care</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">Confidence</span>
            </div>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Experience advanced dental care with cutting-edge technology and compassionate treatment. Your smile is our passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('appointment')} 
                className="bg-white text-[var(--dental-teal)] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                size="lg"
              >
                <i className="fas fa-calendar-plus mr-2"></i>Book Appointment
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[var(--dental-teal)] transition-colors"
                size="lg"
              >
                <i className="fas fa-phone mr-2"></i>Contact Us
              </Button>
            </div>
          </div>
          <div className="floating-animation">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern dental clinic interior" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
