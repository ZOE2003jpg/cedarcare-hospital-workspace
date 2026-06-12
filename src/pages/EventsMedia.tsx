import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WordPressEvents from "@/components/WordPressEvents";
import CedarcareWard from "@/assets/cedarcare-ward.jpg";

const EventsMedia = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={CedarcareWard}
              alt="Cedarcare Events and Media"
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
                <span className="text-sm text-white/90 font-medium">Stay Connected</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cedarcare <span className="text-[hsl(217,91%,60%)]">Event / Media</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                Explore our events, health camps, and community programs. Browse
                the latest flyers and updates from Cedarcare Hospital.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Events / Flyers */}
        <WordPressEvents
          limit={100}
          heading="Events & Media"
          subheading="Catch up on all our upcoming and recent events, camps, and community programs."
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default EventsMedia;
