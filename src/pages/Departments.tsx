import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Stethoscope, Heart, Pill, Building2, Shield, ArrowRight, Phone, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CedarcareLabTechnician from "@/assets/Cedarcare-lab-technician.jpg";

const departments = [
  {
    icon: Stethoscope,
    name: "Medical Services",
    role: "Core Clinical Care",
    description: "Our medical services department provides comprehensive clinical care including consultations, diagnostics, treatment plans, and ongoing patient management.",
    services: [
      "General Consultations",
      "Specialist Referrals", 
      "Chronic Disease Management",
      "Health Screenings",
      "Medical Certificates"
    ],
    color: "hsl(217, 91%, 60%)",
    hasVideo: true,
  },
  {
    icon: Heart,
    name: "Nursing Services",
    role: "Patient Care & Support",
    description: "Our nursing team provides round-the-clock care, medication administration, wound care, patient education, and compassionate support throughout your healthcare journey.",
    services: [
      "Inpatient Care",
      "Wound Management",
      "Medication Administration",
      "Patient Education",
      "Post-operative Care"
    ],
    color: "hsl(195, 35%, 30%)",
    hasVideo: false,
  },
  {
    icon: Pill,
    name: "Pharmacy",
    role: "Medication Services",
    description: "Our pharmacy ensures safe, accurate medication dispensing with professional counseling on drug usage, interactions, and adherence support.",
    services: [
      "Prescription Dispensing",
      "Drug Counseling",
      "Medication Reviews",
      "OTC Products",
      "Immunizations"
    ],
    color: "hsl(217, 91%, 60%)",
    hasVideo: true,
  },
  {
    icon: Building2,
    name: "Administration",
    role: "Hospital Operations",
    description: "Our administration team ensures smooth hospital operations, patient admissions, billing, records management, and overall quality assurance.",
    services: [
      "Patient Registration",
      "Billing & Payments",
      "Medical Records",
      "Quality Assurance",
      "Facility Management"
    ],
    color: "hsl(195, 35%, 30%)",
    hasVideo: false,
  },
  {
    icon: Shield,
    name: "Health Maintenance Organization (HMO) Unit",
    role: "Insurance & HMO Services",
    description: "Our HMO unit handles all insurance verifications, claims processing, and coordination with major health maintenance organizations to ensure seamless coverage.",
    services: [
      "Insurance Verification",
      "Claims Processing",
      "Pre-authorization",
      "HMO Enrollment",
      "Coverage Guidance"
    ],
    color: "hsl(217, 91%, 60%)",
    hasVideo: false,
  },
];

const Departments = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
       <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
           <img src={CedarcareLabTechnician} alt="Departments" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,50%,10%)]/95 via-[hsl(210,50%,10%)]/80 to-[hsl(210,50%,10%)]/60" />
         </div>
         <div className="container mx-auto px-4 md:px-8 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
           >
             <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
               <span className="text-sm text-white/90 font-medium">Our Specialties</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               <span className="text-[hsl(217,91%,60%)]">Departments</span>
             </h1>
             <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
               Departments Overview. Explore our specialized departments providing comprehensive care across all medical disciplines, each staffed with experienced professionals dedicated to your wellbeing.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Departments List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center bg-white rounded-3xl shadow-lg overflow-hidden p-8 lg:p-0`}
              >
                {/* Icon/Visual Section */}
                <div 
                  className={`lg:w-2/5 flex flex-col items-center justify-center p-12 text-white`}
                  style={{ backgroundColor: dept.color }}
                >
                  <dept.icon className="w-24 h-24 mb-6" />
                  <h3 className="text-2xl font-bold text-center mb-2">{dept.name}</h3>
                  <p className="text-white/80 text-center">{dept.role}</p>
                  {dept.hasVideo && (
                    <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Play className="w-5 h-5" />
                      <span>Watch Video</span>
                    </button>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="lg:w-3/5 p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {dept.description}
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-4">Key Services:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {dept.services.map((service) => (
                      <li key={service} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: dept.color }} />
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    View More <ArrowRight className="w-4 h-4" />
                  </Link>
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
              Need Help Finding the Right Department?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our patient care team can guide you to the appropriate department for your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+2347062641810">
                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg">
                   <Phone className="w-5 h-5 mr-2" />
                   Call Us
                 </Button>
               </a>
              <Link to="/contact">
                <Button variant="outline" className="px-8 py-6 rounded-full text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Departments;
