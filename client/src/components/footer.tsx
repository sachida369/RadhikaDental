export default function Footer() {
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-tooth text-[var(--dental-teal)] text-2xl mr-3"></i>
              <span className="font-bold text-xl">Radhika Dental</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for comprehensive dental care in Lucknow. 
              Experience precision, care, and confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--dental-teal)] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--dental-teal)] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--dental-teal)] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('appointment')} className="text-gray-400 hover:text-white transition-colors">
                  Book Appointment
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('treatments')} className="text-gray-400 hover:text-white transition-colors">
                  Treatments
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Dental Implants</span></li>
              <li><span className="text-gray-400">Root Canal</span></li>
              <li><span className="text-gray-400">Teeth Whitening</span></li>
              <li><span className="text-gray-400">Orthodontics</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>+91 99368 68428
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>Hansh Nagar, Lucknow
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-2"></i>Mon-Sat: 9AM-2PM, 5PM-8PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Radhika Dental Clinic & Implant Centre. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => scrollToSection('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Appointments
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
