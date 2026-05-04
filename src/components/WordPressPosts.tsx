import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WPPost {
  id: number;
  link: string;
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
const CATEGORY_SLUG = "health-resources";

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const WordPressPosts = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<WPPost | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const catRes = await fetch(
          `${WP_BASE}/categories?slug=${CATEGORY_SLUG}`
        );
        if (!catRes.ok) throw new Error("Failed to resolve category");
        const cats = await catRes.json();
        if (!Array.isArray(cats) || cats.length === 0) {
          throw new Error("Category not found");
        }
        const categoryId = cats[0].id;

        const postsRes = await fetch(
          `${WP_BASE}/posts?categories=${categoryId}&_embed`
        );
        if (!postsRes.ok) throw new Error("Failed to load posts");
        const data: WPPost[] = await postsRes.json();

        if (!cancelled) setPosts(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Health Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fresh articles from our medical team, updated regularly.
          </p>
        </motion.div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <Skeleton className="w-full h-48" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-10 w-32 mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-muted-foreground">
            Unable to load posts right now. Please check back soon.
          </p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No posts available yet.
          </p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const media = post._embedded?.["wp:featuredmedia"]?.[0];
              const image = media?.source_url;
              const alt = media?.alt_text || stripHtml(post.title.rendered);
              const excerpt = stripHtml(post.excerpt.rendered);

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  {image && (
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={image}
                        alt={alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                      {excerpt}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full group/btn mt-auto self-start"
                      onClick={() => setActivePost(post)}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={!!activePost}
        onOpenChange={(open) => !open && setActivePost(null)}
      >
        <DialogContent className="w-[95vw] sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
          {activePost && (
            <div className="p-6 md:p-8">
              <DialogHeader>
                <DialogTitle
                  className="text-2xl md:text-3xl font-bold text-foreground pr-8 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: activePost.title.rendered,
                  }}
                />
              </DialogHeader>
              {(() => {
                const media =
                  activePost._embedded?.["wp:featuredmedia"]?.[0];
                const image = media?.source_url;
                const alt =
                  media?.alt_text || stripHtml(activePost.title.rendered);
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
                  __html: activePost.content.rendered,
                }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WordPressPosts;
