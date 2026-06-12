import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

interface WordPressEventsProps {
  /** Max number of flyers to show. Omit for all. */
  limit?: number;
  /** Show a "See more" link to the dedicated events page. */
  showSeeMore?: boolean;
  /** Section heading text. */
  heading?: string;
  /** Section subheading text. */
  subheading?: string;
}

const WordPressEvents = ({
  limit = 6,
  showSeeMore = false,
  heading = "Upcoming Events",
  subheading = "Join us at our upcoming events, camps, and community programs.",
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

  // Hide the whole section when there are no events and nothing loading/errored
  if (!loading && !error && events.length === 0) return null;

  return (
    <section id="upcoming-events" className="py-20 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
        </motion.div>

        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <Skeleton className="w-full aspect-[3/4]" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-muted-foreground">
            Unable to load events right now. Please check back soon.
          </p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {events.map((event, index) => {
              const media = event._embedded?.["wp:featuredmedia"]?.[0];
              const image =
                media?.source_url || firstContentImage(event.content.rendered);
              const alt = media?.alt_text || stripHtml(event.title.rendered);

              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl shadow-lg overflow-hidden bg-white"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-secondary flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        )}

        {showSeeMore && !loading && !error && events.length > 0 && (
          <div className="text-center mt-12">
            <Link to="/events">
              <Button className="rounded-full px-8 group">
                See more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default WordPressEvents;
