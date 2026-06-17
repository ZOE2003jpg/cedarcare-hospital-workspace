import { motion } from "framer-motion";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { Users, Award, Heart, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CedarcareReception from "@/assets/cedarcare-reception.jpg";

const whyWorkWithUs = [
  {
    icon: Heart,
    title: "Purpose-Driven Work",
    description: "Make a real difference in people's lives every day through compassionate healthcare delivery.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Join a supportive environment where teamwork and mutual respect are core values.",
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Access continuous learning opportunities, training programs, and career advancement.",
  },
  {
    icon: BookOpen,
    title: "Modern Facilities",
    description: "Work with state-of-the-art medical equipment and technology in well-maintained facilities.",
  },
];

const Careers = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
       <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
           <img src={CedarcareReception} alt="Careers at Cedarcare" className="w-full h-full object-cover" />
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
               <span className="text-sm text-white/90 font-medium">Join Our Team</span>
             </div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
               <span className="text-[hsl(217,91%,60%)]">Careers</span>
             </h1>
             <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
               Join Our Team. Cedarcare Hospital is always seeking dedicated professionals passionate about patient care. Build a rewarding career with us and make a difference in healthcare.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Cedarcare, we invest in our people because we know that exceptional care starts with exceptional staff.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Future Opportunities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are always interested in hearing from talented and passionate healthcare professionals. If you would like to be considered for opportunities, please apply directly through our HR portal.
            </p>
            <a
              href="https://apply.bizedgeapp.com/cedarcare-hospital/175469876032/315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                Apply via HR Portal
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Careers;
