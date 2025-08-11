import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from "lucide-react";

export default function PricingTable() {
  const services = [
    { service: "Consultation & Checkup", duration: "30 mins", price: "₹500" },
    { service: "Cleaning & Scaling", duration: "60 mins", price: "₹1,500" },
    { service: "Dental Filling", duration: "45 mins", price: "₹2,500" },
    { service: "Root Canal Treatment", duration: "75 mins", price: "₹5,500" },
    { service: "Teeth Whitening", duration: "45 mins", price: "₹8,000" },
    { service: "Crown (Ceramic)", duration: "2-3 visits", price: "₹12,000" },
    { service: "Dental Implant", duration: "90 mins", price: "₹25,000" },
    { service: "Orthodontics (Braces)", duration: "12-24 months", price: "₹45,000" },
    { service: "Tooth Extraction", duration: "30 mins", price: "₹1,200" },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Quality dental care at competitive prices</p>
        </div>
        
        <Card className="shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gradient-to-r from-[var(--dental-teal)] to-[var(--dental-blue)]">
                <TableRow>
                  <TableHead className="text-white font-semibold">Service</TableHead>
                  <TableHead className="text-white font-semibold text-center">Duration</TableHead>
                  <TableHead className="text-white font-semibold text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service, index) => (
                  <TableRow key={index} className="hover:bg-[var(--dental-gray)] transition-colors">
                    <TableCell className="font-medium text-gray-800">{service.service}</TableCell>
                    <TableCell className="text-center text-gray-600">{service.duration}</TableCell>
                    <TableCell className="text-right font-bold text-[var(--dental-teal)]">{service.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <CardContent className="bg-[var(--dental-gray)] px-6 py-4">
            <p className="text-sm text-gray-600 text-center flex items-center justify-center">
              <Info className="w-4 h-4 mr-1" />
              Prices may vary based on individual case complexity. Consultation required for accurate quote.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
