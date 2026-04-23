import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import CedarcareReception from "@/assets/cedarcare-reception.jpg";
import CedarcareLabTechnician from "@/assets/cedarcare-lab-technician.jpg";
import CedarcareMicroscopy from "@/assets/cedarcare-microscopy.jpg";
import CedarcareWard from "@/assets/cedarcare-ward.jpg";
import CedarcarePharmacy from "@/assets/cedarcare-pharmacy.jpg";

const slides = [
  {
    image: CedarcareReception,
    headline: "Welcome to Cedarcare Hospital",
    subtitle: "Where professional care meets warm hospitality"
  },
  {
    image: CedarcareLabTechnician,
    headline: "Advanced Laboratory Services",
    subtitle: "Precision testing with cutting-edge technology"
  },
  {
    image: CedarcareMicroscopy,
    headline: "Expert Medical Analysis",
    subtitle: "Detailed diagnostics for accurate treatment plans"
  },
  {
    image: CedarcareWard,
    headline: "Compassionate Patient Care",
    subtitle: "Round-the-clock nursing and medical attention"
  },
  {
    image: CedarcarePharmacy,
    headline: "Quality Pharmacy Services",
    subtitle: "Safe medication dispensing with professional guidance"
  }
];

// Preload all carousel images on module load
slides.forEach((slide) => {
  const img = new Image();
  img.src = slide.image;
});

const stats = [
  { value: "24/7", label: "Emergency Care" },
  { value: "2", label: "Locations" },
  { value: "HMOs", label: "Accepted" },
  { value: "Modern", label: "Diagnostics" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const safeCurrentSlide = currentSlide >= slides.length ? 0 : currentSlide;

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 25000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden pt-16 md:pt-0">
      {/* Mobile: Full Image at Top */}
      <div className="relative w-full h-[45vh] md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeCurrentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[safeCurrentSlide].image}
              alt={slides[safeCurrentSlide].headline}
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,50%,10%)] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
        
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === safeCurrentSlide 
                  ? "w-6 bg-[hsl(40,70%,50%)]" 
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Content Below Image */}
      <div className="flex-1 bg-[hsl(210,50%,10%)] px-4 py-8 md:hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={safeCurrentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-2 leading-tight"
          >
            {slides[safeCurrentSlide].headline}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${safeCurrentSlide}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base text-[hsl(40,70%,55%)] font-medium mb-4"
          >
            {slides[safeCurrentSlide].subtitle}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col gap-3">
          <Link to="/services">
            <Button
              size="lg"
              className="w-full bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white px-6 py-4 rounded-full text-sm font-semibold group"
            >
              Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              className="w-full bg-transparent border-2 border-white/50 text-white hover:bg-white/20 hover:border-white px-6 py-4 rounded-full text-sm font-semibold"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Original Full-Screen Layout */}
      <div className="hidden md:block absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeCurrentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[safeCurrentSlide].image}
              alt={slides[safeCurrentSlide].headline}
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,50%,10%)]/95 via-[hsl(210,50%,10%)]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,50%,10%)]/80 via-transparent to-[hsl(210,50%,10%)]/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Desktop Carousel Navigation */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-8 bottom-48 z-20 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-primary/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-8 bottom-48 z-20 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-primary/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Desktop Slide Indicators */}
      <div className="hidden md:flex absolute bottom-40 left-1/2 -translate-x-1/2 z-20 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === safeCurrentSlide 
                ? "w-8 bg-[hsl(40,70%,50%)]" 
                : "w-2 bg-white/40 hover:bg-[hsl(40,70%,50%)]/60"
            }`}
          />
        ))}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block container mx-auto px-8 relative z-10 pt-20 pb-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[hsl(40,70%,50%)] animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Trusted with Compassionate Care Since 2019</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.h1
              key={safeCurrentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {slides[safeCurrentSlide].headline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${safeCurrentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl lg:text-2xl text-[hsl(40,70%,55%)] font-medium mb-4"
            >
              {slides[safeCurrentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Cedarcare Hospital is a modern healthcare facility committed to providing safe, reliable, 
            and compassionate medical services. We combine clinical excellence with advanced technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-row gap-4"
          >
            <Link to="/services">
              <Button
                size="lg"
                className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white px-8 py-6 rounded-full text-base font-semibold group"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/20 hover:border-white px-8 py-6 rounded-full text-base font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Desktop Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10"
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="py-8 text-center"
              >
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
