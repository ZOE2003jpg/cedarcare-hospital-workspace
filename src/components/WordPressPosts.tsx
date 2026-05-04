import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
const PER_PAGE = 9;

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const WordPressPosts = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<WPPost | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  // Fetch posts when page or category changes
  useEffect(() => {
    if (categoryId == null) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const postsRes = await fetch(
          `${WP_BASE}/posts?categories=${categoryId}&per_page=${PER_PAGE}&page=${page}&_embed`
        );
        if (!postsRes.ok) throw new Error("Failed to load posts");
        const total = parseInt(postsRes.headers.get("X-WP-TotalPages") || "1", 10);
        const data: WPPost[] = await postsRes.json();
        if (!cancelled) {
          setPosts(data);
          setTotalPages(Number.isFinite(total) && total > 0 ? total : 1);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [categoryId, page]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    if (typeof window !== "undefined") {
      document
        .getElementById("latest-health-resources")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Build compact pagination range with ellipses
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    const window = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - window && i <= page + window)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <section
      id="latest-health-resources"
      className="py-20 md:py-28 bg-secondary/30 scroll-mt-24"
    >
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
          <>
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

            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => goToPage(page - 1)}
                  disabled={page <= 1}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Prev
                </Button>

                {getPageNumbers().map((p, i) =>
                  p === "..." ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="px-2 text-muted-foreground"
                    >
                      …
                    </span>
                  ) : (
                    <Button
                      key={p}
                      type="button"
                      variant={p === page ? "default" : "outline"}
                      size="sm"
                      className="rounded-full min-w-10"
                      onClick={() => goToPage(p)}
                      aria-current={p === page ? "page" : undefined}
                    >
                      {p}
                    </Button>
                  )
                )}

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= totalPages}
                  aria-label="Next page"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </>
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
