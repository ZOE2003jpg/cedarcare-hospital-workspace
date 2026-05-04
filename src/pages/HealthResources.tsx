import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WordPressPosts from "@/components/WordPressPosts";
import { Heart, Activity, Baby, Shield, Stethoscope } from "lucide-react";
import CedarcareWard from "@/assets/cedarcare-ward.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const healthArticles = [
  {
    icon: Activity,
    title: "Understanding Hypertension",
    category: "Heart Health",
    excerpt: "Learn about the causes, symptoms, and management of high blood pressure. Discover lifestyle changes and treatments that can help.",
    readTime: "5 min read",
  },
  {
    icon: Heart,
    title: "Managing Diabetes",
    category: "Chronic Care",
    excerpt: "Comprehensive guide to understanding diabetes, monitoring blood sugar, and maintaining a healthy lifestyle with the condition.",
    readTime: "7 min read",
  },
  {
    icon: Baby,
    title: "Maternal Health Guide",
    category: "Women's Health",
    excerpt: "Essential information for expectant mothers covering prenatal care, nutrition, exercise, and preparing for delivery.",
    readTime: "10 min read",
  },
  {
    icon: Shield,
    title: "Child Health & Immunization",
    category: "Pediatrics",
    excerpt: "Complete immunization schedules, growth milestones, and tips for keeping your children healthy and protected.",
    readTime: "6 min read",
  },
  {
    icon: Stethoscope,
    title: "Preventive Care Essentials",
    category: "General Health",
    excerpt: "Why regular check-ups matter, recommended screenings by age, and how preventive care saves lives.",
    readTime: "4 min read",
  },
];


const wellnessTips = [
  "Stay hydrated - drink at least 8 glasses of water daily",
  "Get 7-8 hours of quality sleep each night",
  "Exercise for at least 30 minutes, 5 days a week",
  "Eat a balanced diet rich in fruits and vegetables",
  "Practice stress management through meditation or hobbies",
  "Schedule regular health check-ups",
];

const HealthResources = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
       <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
           <img src={CedarcareWard} alt="Health Resources" className="w-full h-full object-cover" />
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
               <span className="text-sm text-white/90 font-medium">Stay Informed</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               Health <span className="text-[hsl(217,91%,60%)]">Resources</span>
             </h1>
             <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
               Educational materials and resources to help you maintain optimal health. Access expert-written articles and wellness tips from our medical team.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Health Articles */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Health Articles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert-written articles on common health topics to help you understand and manage your wellbeing.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <article.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[hsl(217,91%,60%)]">{article.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      <WordPressPosts />

      {/* Wellness Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Daily Wellness Tips
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Simple, actionable tips to help you maintain a healthy lifestyle. Small changes can make a big difference in your overall wellbeing.
              </p>
              <ul className="space-y-4">
                {wellnessTips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-[hsl(217,91%,60%)] flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-[hsl(195,35%,25%)] rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Have Health Questions?
              </h3>
              <p className="text-white/80 mb-6">
                Our medical team is here to help. Schedule a consultation or reach out with your health concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/contact">
                   <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6">
                     Book Consultation
                   </Button>
                 </Link>
                 <Link to="/contact">
                   <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-6">
                     Contact Us
                   </Button>
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default HealthResources;
