"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on payments, growth, case studies, and integrations.",
};

const posts = [
  { title: "Accepting payments across Africa", slug: "accepting-payments-africa", excerpt: "How to support cards, mobile money and more.", tag: "Payments", author: "Team Syncgram", publishedDate: "2025-11-01" },
  { title: "Growing your paid Telegram community", slug: "grow-paid-telegram", excerpt: "Tactics to acquire and retain members.", tag: "Growth", author: "Ama", publishedDate: "2025-10-21" },
  { title: "Case study: 5k members in 3 months", slug: "case-study-5k", excerpt: "What worked for one African creator.", tag: "Case Studies", author: "Kwaku", publishedDate: "2025-09-10" },
  { title: "Integrate Discord roles in minutes", slug: "discord-roles", excerpt: "Automate role assignment with webhooks.", tag: "Integrations", author: "Team Syncgram", publishedDate: "2025-08-05" },
];

const tags = ["All", "Payments", "Growth", "Case Studies", "Integrations"] as const;

export default function BlogIndexPage() {
  const [active, setActive] = useState<(typeof tags)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.tag === active)),
    [active]
  );

  return (
    <section className="container-max py-[var(--space-6)]">
      <h1 className="text-display-lg text-text">Blog</h1>
      <div className="mt-[var(--space-3)] flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={
              active === tag
                ? "u-alerts-typography rounded-pill bg-syncgreen px-4 py-2 text-small text-white"
                : "rounded-pill bg-surface px-4 py-2 text-small text-text"
            }
            aria-pressed={active === tag}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-2">
        {filtered.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}

