import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Images } from "lucide-react";

interface WPEvent {
  id: number;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
    }>;
  };
}

const WP_BASE = "https://www.cedarcaregroup.com/hospital/wp-json/wp/v2";
const CATEGORY_SLUG = "upcoming-event";

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const firstContentImage = (html: string): string | undefined => {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
};

const allContentImages = (html: string): string[] => {
  const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
  return matches.map((m) => m[1]);
};

interface WordPressEventsProps {
  /** Max number of posts to fetch. */
  limit?: number;
  /** "events" shows flyers with info, "media" shows a photo gallery. */
  variant?: "events" | "media";
  /** Section heading text. */
  heading?: string;
  /** Section subheading text. */
  subheading?: string;
}

const WordPressEvents = ({
  limit = 100,
  variant = "events",
  heading,
  subheading,
}: WordPressEventsProps) => {
  const [events, setEvents] = useState<WPEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  // Resolve category once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const catRes = await fetch(`${WP_BASE}/categories?slug=${CATEGORY_SLUG}`);
        if (!catRes.ok) throw new Error("Failed to resolve category");
        const cats = await catRes.json();
        if (!Array.isArray(cats) || cats.length === 0) {
          throw new Error("Category not found");
        }
        if (!cancelled) setCategoryId(cats[0].id);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Error");
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fetch events when category resolves
  useEffect(() => {
    if (categoryId == null) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `${WP_BASE}/posts?categories=${categoryId}&per_page=${limit}&_embed`
        );
        if (!res.ok) throw new Error("Failed to load events");
        const data: WPEvent[] = await res.json();
        if (!cancelled) setEvents(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [categoryId, limit]);

  const defaultHeading = variant === "media" ? "Media Gallery" : "Events";
  const defaultSub =
    variant === "media"
      ? "Moments captured from our health camps, outreaches and community programs."
      : "Browse the flyers and details of our upcoming and recent events.";

  // Build gallery image list for media variant
  const galleryImages =
    variant === "media"
      ? Array.from(
          new Set(
            events.flatMap((e) => {
              const featured = e._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const imgs = allContentImages(e.content.rendered);
              return featured ? [featured, ...imgs] : imgs;
            })
          )
        )
      : [];

  if (!loading && !error && events.length === 0) return null;

  return (
    <section
      id={variant === "media" ? "media" : "events"}
      className="py-16 md:py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {heading ?? defaultHeading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subheading ?? defaultSub}
          </p>
        </motion.div>

        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <Skeleton className="w-full aspect-[3/4]" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-muted-foreground">
            Unable to load content right now. Please check back soon.
          </p>
        )}

        {/* MEDIA GALLERY */}
        {!loading && !error && variant === "media" && (
          galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
              {galleryImages.map((src, index) => (
                <motion.a
                  key={src + index}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                  className="group block aspect-square overflow-hidden rounded-xl shadow-md bg-secondary"
                >
                  <img
                    src={src}
                    alt={`Event photo ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.a>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground flex flex-col items-center gap-3">
              <Images className="w-10 h-10 text-muted-foreground/60" />
              No event photos available yet. Please check back soon.
            </p>
          )
        )}

        {/* EVENT FLYERS */}
        {!loading && !error && variant === "events" && events.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {events.map((event, index) => {
              const media = event._embedded?.["wp:featuredmedia"]?.[0];
              const image =
                media?.source_url || firstContentImage(event.content.rendered);
              const alt = media?.alt_text || stripHtml(event.title.rendered);
              const title = stripHtml(event.title.rendered);
              const excerpt = stripHtml(event.excerpt.rendered);

              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-auto object-contain bg-white"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-secondary flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-foreground text-sm md:text-base mb-2 line-clamp-2">
                      {title}
                    </h3>
                    {excerpt && (
                      <p className="text-muted-foreground text-xs md:text-sm line-clamp-3">
                        {excerpt}
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default WordPressEvents;
