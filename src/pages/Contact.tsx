import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import hospitalBuilding from "@/assets/hospital-building.jpg";

const locations = [
  {
    name: "Agungi Branch - Lekki",
    address: "123 Agungi Road, Lekki, Lagos, Nigeria",
    phone: "+234 706 264 1810",
    email: "agungi@Cedarcaregroup.com",
    hours: "Open 24 Hours",
    emergency: "24/7 Emergency Services",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7294!2d3.5245!3d6.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTIuMyJOIDPCsDMxJzI4LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890",
  },
  {
    name: "Ogombo Branch",
    address: "45 Ogombo Road, Ajah, Lagos, Nigeria",
    phone: "+234 909 000 3798",
    email: "ogombo@Cedarcaregroup.com",
    hours: "Open 24 Hours",
    emergency: "24/7 Emergency Services",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7294!2d3.5845!3d6.4512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDQuMyJOIDPCsDM1JzA0LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890",
  },
];

const Contact = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
       <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
           <img src={hospitalBuilding} alt="Contact Us" className="w-full h-full object-cover" />
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
               <span className="text-sm text-white/90 font-medium">Get In Touch</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               Contact <span className="text-[hsl(217,91%,60%)]">Us</span>
             </h1>
             <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
               We're here to help. Reach out to us for appointments, enquiries, complaints, or feedback. Our patient care team is ready to assist you.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our two convenient locations in Lagos.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Map */}
                <div className="h-64 bg-secondary">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name} Map`}
                  />
                </div>
                
                {/* Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">{location.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                      <span className="text-muted-foreground">{location.hours}</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 font-medium text-sm">
                        🚨 {location.emergency}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a question, need to book an appointment, or want to provide feedback? Fill out the form and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Call Us</h4>
                    <p className="text-muted-foreground text-sm">For urgent matters, call us directly</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">Chat with us on WhatsApp for quick responses</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm">info@Cedarcaregroup.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input id="contactPhone" placeholder="Enter phone number" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input id="contactEmail" type="email" placeholder="Enter email address" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appointment">Book Appointment</SelectItem>
                      <SelectItem value="enquiry">General Enquiry</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="hmo">HMO/Insurance Query</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="preferredLocation">Preferred Location</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agungi">Agungi Branch - Lekki</SelectItem>
                      <SelectItem value="ogombo">Ogombo Branch</SelectItem>
                      <SelectItem value="any">Any Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contactMessage">Message</Label>
                  <Textarea 
                    id="contactMessage" 
                    placeholder="How can we help you?" 
                    className="mt-1 min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Contact;
