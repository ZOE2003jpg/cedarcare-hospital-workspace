import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/cedarcare-logo.png";

// Custom X (formerly Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  services: [
    { name: "Our Services", href: "/services" },
    { name: "Departments", href: "/departments" },
    { name: "Emergency Care", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Health Resources", href: "/health-resources" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  support: [
    { name: "HMO Information", href: "/health-resources" },
    { name: "Patient Rights", href: "/health-resources" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1AFFGhs4u8/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/cedarcarehospital?igsh=YXM2aWlvazZ2a3N4&utm_source=qr", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/_cedarcare?s=21&t=VM3cXDk5rK1XDhCT3X2F7Q", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/cedarcare-hospital/", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[hsl(200,25%,12%)] text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse, hsl(217, 91%, 60%) 0%, transparent 70%)"
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={logo} 
                alt="Cedarcare Hospital" 
                className="h-14 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
              />
            </motion.a>

            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              A reputable team of world class professionals passionate about improving healthcare systems both nationally and internationally.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:info@cedarcaregroup.com" className="flex items-center space-x-3 text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@cedarcaregroup.com</span>
              </a>
              <a href="tel:+2347062641810" className="flex items-center space-x-3 text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+234 706 264 1810</span>
              </a>
              <a href="tel:+2349090003798" className="flex items-center space-x-3 text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+234 909 000 3798</span>
              </a>
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Cedarcare Group. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[hsl(217,91%,60%)]/20 flex items-center justify-center text-white/60 hover:text-[hsl(217,91%,70%)] transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/60 hover:text-[hsl(217,91%,70%)] transition-colors"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
