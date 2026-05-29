import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
const PER_PAGE = 6;

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const WordPressEvents = () => {
  const [events, setEvents] = useState<WPEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<WPEvent | null>(null);
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
          `${WP_BASE}/posts?categories=${categoryId}&per_page=${PER_PAGE}&_embed`
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
  }, [categoryId]);

  // Hide the whole section when there are no events and nothing loading/errored
  if (!loading && !error && events.length === 0) return null;

  return (
    <section
      id="upcoming-events"
      className="py-20 md:py-28 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events, camps, and community programs.
          </p>
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <Skeleton className="w-full h-64" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const media = event._embedded?.["wp:featuredmedia"]?.[0];
              const image = media?.source_url;
              const alt = media?.alt_text || stripHtml(event.title.rendered);

              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveEvent(event)}
                  className="group relative rounded-2xl shadow-lg overflow-hidden cursor-pointer h-80 flex items-end"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white">
                    <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: event.title.rendered }}
                    />
                    <span className="inline-flex items-center text-sm font-medium group-hover:underline">
                      View details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={!!activeEvent}
        onOpenChange={(open) => !open && setActiveEvent(null)}
      >
        <DialogContent className="w-[95vw] sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
          {activeEvent && (
            <div className="p-6 md:p-8">
              <DialogHeader>
                <DialogTitle
                  className="text-2xl md:text-3xl font-bold text-foreground pr-8 mb-2"
                  dangerouslySetInnerHTML={{
                    __html: activeEvent.title.rendered,
                  }}
                />
              </DialogHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(activeEvent.date)}</span>
              </div>
              {(() => {
                const media = activeEvent._embedded?.["wp:featuredmedia"]?.[0];
                const image = media?.source_url;
                const alt =
                  media?.alt_text || stripHtml(activeEvent.title.rendered);
                return image ? (
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
                  />
                ) : null;
              })()}
              <div
                className="wp-modal-content"
                dangerouslySetInnerHTML={{
                  __html: activeEvent.content.rendered,
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WordPressEvents;
