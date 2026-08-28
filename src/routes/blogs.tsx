import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BLOG_POSTS, BLOG_TAGS } from "@/data/site";
import { Reveal } from "@/components/starfix/Reveal";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Insights, Ideas & Digital Growth | Starfix" },
      {
        name: "description",
        content:
          "Practical articles on digital marketing, social media, Meta Ads, websites, apps, content and business growth from Starfix Media Solutions.",
      },
      { property: "og:title", content: "Insights, Ideas & Digital Growth — Starfix Blogs" },
      {
        property: "og:description",
        content:
          "Articles on digital marketing, social media, Meta Ads, websites, apps and brand growth.",
      },
    ],
  }),
  component: Blogs,
});

function Blogs() {
  const [tag, setTag] = useState<string>("All");
  const posts = tag === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.tag === tag);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <Reveal>
        <h1 className="max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
          Insights, Ideas & <span className="text-brand">Digital Growth</span>
        </h1>
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-3">
        {BLOG_TAGS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTag(item)}
            className={`border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
              tag === item ? "bg-ink text-paper" : "bg-paper text-ink hover:bg-brand/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 60}>
            <article className="flex h-full flex-col border-2 border-ink bg-paper transition-all hover:-translate-y-1 hover:shadow-brutal">
              <div className="grid aspect-[16/10] place-items-center border-b-2 border-ink bg-surface">
                <span className="font-display text-5xl font-black uppercase text-brand/30">
                  {post.tag.slice(0, 2)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-brand">{post.tag}</span>
                  <span className="text-ink-muted">{post.date}</span>
                </div>
                <h2 className="font-display text-xl font-bold uppercase leading-tight">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-ink-muted">{post.excerpt}</p>
                <button
                  type="button"
                  className="mt-auto self-start pt-6 text-xs font-bold uppercase tracking-widest hover:text-brand"
                >
                  Read More →
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="mt-14 text-ink-muted">No articles under this tag yet.</p>
      ) : null}
    </div>
  );
}
