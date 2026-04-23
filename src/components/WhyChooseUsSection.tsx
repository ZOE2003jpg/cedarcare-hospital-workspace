import { motion } from "framer-motion";
import { Heart, Users, Monitor, Cross, ShieldCheck, Stethoscope, Baby, FlaskConical, Pill, Ambulance } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every decision we make is focused on improving patient outcomes and experience."
  },
  {
    icon: Users,
    title: "Experienced Medical Professionals",
    description: "Our team of skilled doctors and nurses bring years of expertise to your care."
  },
  {
    icon: Monitor,
    title: "Modern Diagnostic & Treatment Facilities",
    description: "State-of-the-art equipment for accurate diagnosis and effective treatment."
  },
  {
    icon: Cross,
    title: "Faith-Driven Compassion",
    description: "Healthcare rooted in integrity, compassion, and ethical practice."
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Families & HMOs",
    description: "Comprehensive health insurance partnerships for accessible care."
  },
];

const services = [
  { icon: Stethoscope, title: "General & Family Medicine", color: "hsl(217,91%,60%)" },
  { icon: Baby, title: "Paediatrics", color: "hsl(210,50%,45%)" },
  { icon: Heart, title: "Obstetrics & Gynaecology", color: "hsl(340,60%,50%)" },
  { icon: FlaskConical, title: "Diagnostics & Laboratory", color: "hsl(40,70%,50%)" },
  { icon: Pill, title: "Pharmacy Services", color: "hsl(217,91%,60%)" },
  { icon: Ambulance, title: "Emergency Care", color: "hsl(0,70%,50%)" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-sm text-primary font-medium">Why Choose Cedarcare</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Excellence in Every Aspect of{" "}
            <span className="text-[hsl(217,91%,60%)]">Healthcare</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Cedarcare Hospital, we deliver high-quality, patient-centered healthcare 
            with professionalism, compassion, and faith-driven values.
          </p>
        </motion.div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Key Services
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services to meet all your medical needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="group text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h4 className="text-sm font-medium text-foreground">{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
