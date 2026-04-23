import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CedarcarePharmacy from "@/assets/Cedarcare-pharmacy.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Heart Health: Tips for a Stronger Heart",
    excerpt: "Learn about the key factors that contribute to heart health and simple lifestyle changes you can make today.",
    author: "Dr. Johnson",
    date: "January 25, 2026",
    category: "Cardiology",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Importance of Regular Health Check-ups",
    excerpt: "Discover why preventive care and regular medical examinations are essential for maintaining good health.",
    author: "Dr. Williams",
    date: "January 20, 2026",
    category: "General Health",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Nutrition Tips for Better Immunity",
    excerpt: "Explore the foods and nutrients that can help boost your immune system naturally.",
    author: "Dr. Sarah Chen",
    date: "January 15, 2026",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Managing Stress in Modern Life",
    excerpt: "Practical strategies for dealing with stress and maintaining mental wellness in today's fast-paced world.",
    author: "Dr. Michael Brown",
    date: "January 10, 2026",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
       <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
           <img src={CedarcarePharmacy} alt="Health Blog" className="w-full h-full object-cover" />
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
               <span className="text-sm text-white/90 font-medium">Latest Updates</span>
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
               Health & Wellness <span className="text-[hsl(217,91%,60%)]">Blog</span>
             </h1>
             <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
               Stay informed with the latest health tips, medical insights, and wellness advice from our expert team.
             </p>
           </motion.div>
         </div>
       </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Blog;
