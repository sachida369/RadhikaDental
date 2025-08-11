import { Card, CardContent } from "@/components/ui/card";
import { Clock, IndianRupee } from "lucide-react";

export default function TreatmentsSection() {
  const treatments = [
    {
      id: 1,
      title: "Cleaning & Checkup",
      description: "Regular dental cleaning and comprehensive oral examination to maintain optimal dental health.",
      duration: "60 minutes",
      price: "₹1,500",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Dental cleaning and checkup"
    },
    {
      id: 2,
      title: "Dental Implants",
      description: "Permanent tooth replacement solution using titanium implants for natural-looking results.",
      duration: "90 minutes",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Dental implant treatment"
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description: "Professional whitening treatment to brighten your smile and boost your confidence.",
      duration: "45 minutes",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Teeth whitening treatment"
    },
    {
      id: 4,
      title: "Root Canal",
      description: "Pain-free root canal treatment to save infected teeth and relieve discomfort.",
      duration: "75 minutes",
      price: "₹5,500",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Root canal treatment"
    },
    {
      id: 5,
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces and aligners for a perfect smile.",
      duration: "12-24 months",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Orthodontic treatment"
    },
    {
      id: 6,
      title: "Crown & Bridge",
      description: "Restore damaged teeth with custom crowns and bridges for improved function and appearance.",
      duration: "2-3 visits",
      price: "₹12,000",
      image: "https://images.unsplash.com/photo-1626736985591-79a417ac0e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Crown and bridge treatment"
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Treatments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care using the latest technology and techniques for optimal results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="treatment-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={treatment.image} 
                alt={treatment.alt} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {treatment.duration}
                  </div>
                  <div className="text-[var(--dental-teal)] font-bold flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    {treatment.price.slice(1)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
