import { Card, CardContent } from "@/components/ui/card";
import beforeImage1 from "@assets/2024-08-05 (1)_1754891013227.webp";
import afterImage1 from "@assets/2024-08-05 (2)_1754891013229.webp";
import teamImage1 from "@assets/2024-08-05 (3)_1754891013229.webp";
import teamImage2 from "@assets/2024-08-05_1754891013230.webp";

export default function GallerySection() {
  return (
    <section className="py-20 bg-[var(--dental-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transformation Gallery</h2>
          <p className="text-xl text-gray-600">See the amazing results we achieve for our patients</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Before Treatment</h3>
              <img 
                src={beforeImage1} 
                alt="Before dental treatment showing dental issues" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-gray-600 mt-4 text-center">Patient's condition before comprehensive dental treatment</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">After Treatment</h3>
              <img 
                src={afterImage1} 
                alt="After dental treatment showing improved smile" 
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-gray-600 mt-4 text-center">Beautiful, healthy smile after our expert treatment</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Expert Team in Action</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src={teamImage1} 
                alt="Dental team performing treatment procedure" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <img 
                src={teamImage2} 
                alt="Professional dental care team with patient" 
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
