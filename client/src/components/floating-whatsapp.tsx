import { Button } from "@/components/ui/button";

export default function FloatingWhatsApp() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all floating-animation w-16 h-16"
    >
      <a 
        href="https://wa.me/919936868428" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </Button>
  );
}
