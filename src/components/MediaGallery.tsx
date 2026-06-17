import { motion } from "framer-motion";

import photo1 from "@/assets/media/event-photo-1.jpg.asset.json";
import photo2 from "@/assets/media/event-photo-2.jpg.asset.json";
import photo3 from "@/assets/media/event-photo-3.jpg.asset.json";
import photo4 from "@/assets/media/event-photo-4.jpg.asset.json";
import photo5 from "@/assets/media/event-photo-5.jpg.asset.json";
import photo6 from "@/assets/media/event-photo-6.jpg.asset.json";
import photo7 from "@/assets/media/event-photo-7.jpg.asset.json";
import photo8 from "@/assets/media/event-photo-8.jpg.asset.json";
import photo9 from "@/assets/media/event-photo-9.jpg.asset.json";
import photo10 from "@/assets/media/event-photo-10.jpg.asset.json";

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
];

interface MediaGalleryProps {
  heading?: string;
  subheading?: string;
}

const MediaGallery = ({ heading, subheading }: MediaGalleryProps) => {
  return (
    <section id="media" className="py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {heading ?? "Media Gallery"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subheading ??
              "Moments captured from our health camps, outreaches, and community programs."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {images.map((img, index) => (
            <motion.a
              key={img.url}
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              className="group block aspect-square overflow-hidden rounded-xl shadow-md bg-secondary"
            >
              <img
                src={img.url}
                alt={`Cedarcare event photo ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
