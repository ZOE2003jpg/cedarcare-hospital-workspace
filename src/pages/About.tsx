import { motion } from "framer-motion";
import { Heart, Award, Shield, Users, Sparkles, CheckCircle2, Eye, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

import doctorPatientNew from "@/assets/doctor-patient-new.jpg";
import hospitalBuilding from "@/assets/hospital-building.jpg";

const coreValues = [
  { icon: Shield, title: "TRUST", description: "We are professional and responsible for our actions. We can be trusted to give the best care using the latest technologies." },
  { icon: Users, title: "TEAM WORK", description: "We work together as a team to make a difference in the lives of our patients and local communities. We find creative ways to run efficient and high quality service to our patients." },
  { icon: Heart, title: "COMPASSION", description: "We put our patients at the heart of everything we do. We are positive, kind, patient, tolerant and polite. We understand diversity and we are respectful. We have empathy for all our patients." },
  { icon: Sparkles, title: "EMPOWERMENT", description: "We feel empowered and we empower our patients to demand the best care from us. We think creatively and we aspire to be the best healthcare provider." },
  { icon: CheckCircle2, title: "ACCOUNTABLE", description: "We listen, we act and we communicate clearly. We do what we say we will do. We take account of the opinions of others. We are ethical and interact transparently with our patient." },
  { icon: Award, title: "EXCELLENCE", description: "We strive to deliver the best care attainable. We have a culture of excellence in our teams. We challenge complacency, we listen and learn to continually improve our knowledge and skills to deliver an excellent service." },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={hospitalBuilding}
              alt="Cedarcare Hospital"
              className="w-full h-full object-cover"
            />
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
                <span className="text-sm text-white/90 font-medium">About Cedarcare Hospital</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Who We <span className="text-[hsl(217,91%,60%)]">Are</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Committed to delivering accessible, ethical, and high-quality medical services with compassion and integrity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                  <img
                    src={doctorPatientNew}
                    alt="Doctor consulting with patient"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Gold accent badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[hsl(40,70%,50%)] flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg md:text-xl">CC</span>
                </motion.div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  About Cedarcare Hospital
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Cedarcare Hospital is a patient-focused healthcare provider committed to delivering accessible, 
                  ethical, and high-quality medical services. We believe healthcare should be compassionate, 
                  professional, and rooted in integrity.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our approach blends medical excellence with personalized attention, ensuring every patient 
                  is treated with dignity, respect, and care.
                </p>

                {/* Vision */}
                <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our vision is to deliver high quality services by working in partnership with our local community.
                  </p>
                </div>

                {/* Mission Section */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[hsl(217,91%,60%)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To provide premium healthcare that is affordable, trusted and compassionate to all our patients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <span className="text-sm text-primary font-medium">What Guides Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Cedarcare Hospital
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
