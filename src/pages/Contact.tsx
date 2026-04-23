import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import hospitalBuilding from "@/assets/hospital-building.jpg";

const locations = [
  {
    name: "Agungi Branch - Lekki",
    address: "123 Agungi Road, Lekki, Lagos, Nigeria",
    phone: "+234 706 264 1810",
    email: "agungi@cedarcaregroup.com",
    hours: "Open 24 Hours",
    emergency: "24/7 Emergency Services",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7294!2d3.5245!3d6.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTIuMyJOIDPCsDMxJzI4LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890",
  },
  {
    name: "Ogombo Branch",
    address: "45 Ogombo Road, Ajah, Lagos, Nigeria",
    phone: "+234 909 000 3798",
    email: "ogombo@cedarcaregroup.com",
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
      {/* Get In Touch */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a question, need to book an appointment, or want to provide feedback? Reach out to us using any of the channels below and our patient care team will respond promptly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+2347062641810"
              className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground text-sm">+234 706 264 1810</p>
              </div>
            </a>

            <a
              href="https://wa.me/2347062641810"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                <p className="text-muted-foreground text-sm">Chat with us anytime</p>
              </div>
            </a>

            <a
              href="mailto:info@cedarcaregroup.com"
              className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">info@cedarcaregroup.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Contact;
