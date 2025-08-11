import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AppointmentScheduler from "@/components/appointment-scheduler";
import TreatmentsSection from "@/components/treatments-section";
import GallerySection from "@/components/gallery-section";
import PricingTable from "@/components/pricing-table";
import ContactSection from "@/components/contact-section";
import PrivacySection from "@/components/privacy-section";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AppointmentScheduler />
      <TreatmentsSection />
      <GallerySection />
      <PricingTable />
      <ContactSection />
      <PrivacySection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
