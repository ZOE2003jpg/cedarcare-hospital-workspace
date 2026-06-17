import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, Calendar, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Adebayo Johnson",
    specialty: "General Physician & Family Medicine",
    qualifications: "MBBS, FMCP",
    experience: "15+ Years Experience",
    availability: "Available 24/7",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Chioma Okonkwo",
    specialty: "Obstetrics & Gynecology",
    qualifications: "MBBS, FWACS (O&G)",
    experience: "12+ Years Experience",
    availability: "Mon - Sat: 8AM - 4PM",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Emmanuel Nwachukwu",
    specialty: "Pediatrics",
    qualifications: "MBBS, FMCPaed",
    experience: "10+ Years Experience",
    availability: "Available 24/7",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Fatima Abubakar",
    specialty: "Internal Medicine",
    qualifications: "MBBS, FMCP",
    experience: "18+ Years Experience",
    availability: "Tue - Sat: 9AM - 5PM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Olumide Adeyemi",
    specialty: "Emergency Medicine",
    qualifications: "MBBS, FCEM",
    experience: "8+ Years Experience",
    availability: "24/7 On-Call",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Grace Eze",
    specialty: "Diagnostics & Laboratory",
    qualifications: "MBBS, FMCPath",
    experience: "14+ Years Experience",
    availability: "Available 24/7",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(217,91%,60%)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(217,91%,60%)] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm text-white/90 font-medium">Meet Our Team</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[hsl(217,91%,60%)]">Doctors</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Meet Our Medical Experts. Our team of qualified doctors, specialists, nurses, and allied health professionals are committed to providing exceptional care across all departments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                    <p className="text-[hsl(217,91%,70%)] font-medium">{doctor.specialty}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm">{doctor.qualifications}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-3 text-primary" />
                      <span className="text-sm">{doctor.availability}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Can't Find Your Specialist?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us and we'll help you find the right doctor for your needs. Our patient care team is available to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
