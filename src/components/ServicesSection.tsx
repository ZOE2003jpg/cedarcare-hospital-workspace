import { motion } from "framer-motion";
import { Building2, Package, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hospitalBuilding from "@/assets/hospital-building.jpg";
import healthSupplies from "@/assets/health-supplies.jpg";
import recruitment from "@/assets/recruitment.jpg";

const services = [
  {
    icon: Building2,
    title: "Cedarcare Hospital",
    description: "State-of-the-art medical facilities offering comprehensive healthcare services with internationally trained professionals and cutting-edge technology.",
    features: ["24/7 Emergency Care", "Advanced Diagnostics", "Specialist Consultations", "Inpatient Services"],
    image: hospitalBuilding,
    color: "hsl(217, 91%, 60%)",
    link: "#hospital"
  },
  {
    icon: Package,
    title: "Cedarcare Health Supplies",
    description: "Quality pharmaceutical products and medical equipment sourced from trusted global manufacturers, ensuring the highest standards of care.",
    features: ["Pharmaceuticals", "Medical Equipment", "Laboratory Supplies", "Healthcare Products"],
    image: healthSupplies,
    color: "hsl(210, 50%, 45%)",
    link: "#health-supplies"
  },
  {
    icon: Users,
    title: "Cedarcare Recruitment",
    description: "Connecting healthcare facilities with qualified medical professionals. We source, vet, and place top talent in hospitals across Nigeria and internationally.",
    features: ["Doctor Placement", "Nursing Staff", "Allied Health", "Healthcare Management"],
    image: recruitment,
    color: "hsl(40, 70%, 50%)",
    link: "#recruitment"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-1/2 h-1/2 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <span className="text-sm text-primary font-medium">Our Divisions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Pillars of{" "}
            <span className="text-[hsl(217,91%,60%)]">Healthcare Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cedarcare Group operates across three integrated divisions, each committed to 
            transforming healthcare delivery and improving patient outcomes.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <service.icon 
                            className="w-6 h-6" 
                            style={{ color: service.color }}
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{service.title}</div>
                          <div className="text-sm text-muted-foreground">Learn more →</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative accent */}
                <div 
                  className="absolute -z-10 top-4 -right-4 w-full h-full rounded-3xl"
                  style={{ backgroundColor: `${service.color}15` }}
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-4 h-4" style={{ color: service.color }} />
                    <span className="text-sm font-medium" style={{ color: service.color }}>
                      Division {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="rounded-full px-6 group"
                    style={{ 
                      backgroundColor: service.color,
                      color: "white"
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
