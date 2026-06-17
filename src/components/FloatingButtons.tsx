import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, X } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      icon: Phone,
      label: "Call Now",
      href: "tel:+2347062641810",
      color: "bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)]",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/2347062641810?text=Hello%20Cedarcare%20Hospital",
      color: "bg-green-500 hover:bg-green-600",
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {buttons.map((button, index) => (
              <motion.a
                key={button.label}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: (buttons.length - 1 - index) * 0.05 }}
                className={`flex items-center gap-3 ${button.color} text-white px-5 py-3 rounded-full shadow-lg transition-all group`}
              >
                <button.icon className="w-5 h-5" />
                <span className="text-sm font-medium whitespace-nowrap">{button.label}</span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all ${
          isExpanded 
            ? "bg-foreground text-background" 
            : "bg-primary text-primary-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isExpanded ? 180 : 0 }}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse animation on main button when collapsed */}
      {!isExpanded && (
        <motion.div
          className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-primary pointer-events-none"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default FloatingButtons;
