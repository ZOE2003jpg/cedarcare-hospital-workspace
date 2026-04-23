import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/Cedarcare-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(195, 35%, 22%) 0%, hsl(200, 40%, 28%) 50%, hsl(195, 30%, 25%) 100%)"
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, hsl(40, 70%, 50%) 0%, transparent 70%)" }}
            />
            
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(0, 0%, 100%) 1px, transparent 1px),
                                  linear-gradient(90deg, hsl(0, 0%, 100%) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center px-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2
              }}
              className="mb-8"
            >
              <div className="relative inline-flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute w-48 h-48 rounded-full border-2 border-white/10"
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute w-40 h-40 rounded-full"
                  style={{ 
                    background: "radial-gradient(circle, hsla(217, 91%, 60%, 0.3) 0%, transparent 70%)",
                    filter: "blur(8px)"
                  }}
                />
                
                <motion.img
                  src={logo}
                  alt="Cedarcare Hospital"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative w-64 h-auto max-w-[280px] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                />
              </div>
            </motion.div>

            {/* Hospital name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                The <span className="text-[hsl(217,91%,70%)]">Cedarcare</span> Group
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-[hsl(40,70%,50%)] to-transparent mx-auto max-w-xs"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 2.3, duration: 0.6 }}
              className="mt-6 text-white/70 text-lg tracking-widest uppercase"
              style={{ letterSpacing: '0.25em' }}
            >
              Trusted with Compassionate Care Since 2019
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[hsl(217,91%,70%)]"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
