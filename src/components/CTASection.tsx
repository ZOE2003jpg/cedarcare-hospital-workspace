import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(195, 35%, 22%) 0%, hsl(200, 40%, 28%) 50%, hsl(195, 30%, 25%) 100%)"
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ 
            background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ 
            background: "radial-gradient(circle, hsl(40, 70%, 50%) 0%, transparent 70%)"
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                              linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8"
          >
            <span className="text-sm text-white/80 font-medium">Ready to Get Started?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Your Health Is Our{" "}
            <span className="text-[hsl(217,91%,70%)]">Priority</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Experience world-class healthcare services. Book an appointment today or visit any of our facilities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Link to="/contact">
               <Button 
                 size="lg"
                 className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
               >
                 <Calendar className="w-5 h-5 mr-2" />
                 Book Appointment
               </Button>
             </Link>
             <a href="tel:+2347062641810">
               <Button
                 size="lg"
                 variant="outline"
                 className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
               >
                 <Phone className="w-5 h-5 mr-2" />
                 Call Us Now
               </Button>
             </a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[hsl(217,91%,60%)]/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[hsl(217,91%,70%)]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Line</h3>
              <p className="text-white/60 mb-3">Available 24/7</p>
              <a href="tel:+2347062641810" className="text-[hsl(217,91%,70%)] font-medium hover:underline">
                +234 706 264 1810
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[hsl(40,70%,50%)]/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-[hsl(40,70%,50%)]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Working Hours</h3>
              <p className="text-white/60">Open 24 Hours</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white/80" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-white/60">Lagos, Nigeria</p>
               <a href="https://www.google.com/maps/search/cedarcare+hospital+lagos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[hsl(217,91%,70%)] font-medium hover:underline mt-2">
                 Get Directions
                 <ArrowRight className="w-4 h-4 ml-1" />
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
