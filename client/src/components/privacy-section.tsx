import { Card, CardContent } from "@/components/ui/card";

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
        </div>
        
        <Card className="rounded-2xl">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Radhika Dental Clinic & Implant Centre, we are committed to protecting your privacy and personal information. 
                This privacy policy explains how we collect, use, and safeguard your data.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li>Personal information (name, phone, email) for appointment booking</li>
                <li>Medical history and dental records for treatment purposes</li>
                <li>Payment information for billing and insurance claims</li>
                <li>Communication preferences and feedback</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                <li>To provide quality dental care and treatment</li>
                <li>To schedule and confirm appointments</li>
                <li>To process payments and insurance claims</li>
                <li>To send appointment reminders and follow-up care instructions</li>
                <li>To improve our services and patient experience</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h3>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. All patient records are stored securely and access is limited to 
                authorized personnel only.
              </p>
              
              <p className="text-sm text-gray-600">
                For questions about our privacy policy, please contact us at +91 99368 68428 or visit our clinic.
                Last updated: December 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
