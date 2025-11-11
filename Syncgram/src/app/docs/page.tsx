"use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Syncgram documentation — Getting Started, Payments, Integrations, API, Payouts, Security.",
};

const sections = [
  { id: "getting-started", title: "Getting Started", items: ["Overview", "Create your store", "Connect a payment method"] },
  { id: "payments", title: "Payments", items: ["Pricing model", "Supported methods", "Disputes & refunds"] },
  { id: "integrations", title: "Integrations", items: ["Telegram bot setup", "WhatsApp API", "Discord roles"] },
  { id: "api", title: "API & Webhooks", items: ["Authentication", "Webhooks", "Examples"] },
  { id: "payouts", title: "Payouts", items: ["Schedule", "Currencies", "Reconciliation"] },
  { id: "security", title: "Security", items: ["Data handling", "KYC", "Compliance notes"] },
] as const;

export default function DocsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((s) => ({
        ...s,
        items: s.items.filter((i) => i.toLowerCase().includes(q) || s.title.toLowerCase().includes(q)),
      }))
      .filter((s) => s.items.length > 0);
  }, [query]);

  return (
    <section className="container-max py-[var(--space-6)]">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-display-lg text-text">Documentation</h1>
        <p className="mt-3 text-body text-muted">Search the docs hub and jump into guides.</p>
        <div className="mt-[var(--space-3)]">
          <input
            type="search"
            placeholder="Search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-base border border-black/10 px-4 py-3 text-body"
            aria-label="Search documentation"
          />
        </div>
      </header>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-2">
        {filtered.map((section) => (
          <div key={section.id} className="rounded-base bg-white p-[var(--space-3)] shadow-soft">
            <h2 id={section.id} className="text-h1 text-text">
              {section.title}
            </h2>
            <ul className="mt-3 list-disc pl-6 text-body text-muted">
              {section.items.map((item) => (
                <li key={item}>
                  <a href={`#${section.id}`} className="hover:text-text focus-visible:text-text">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length} section{filtered.length !== 1 ? "s" : ""} match your search
      </div>
      <section className="mt-[var(--space-5)] rounded-base bg-surface p-[var(--space-3)]">
        <h2 className="text-h2 text-text">Quickstart: Connect Telegram bot</h2>
        <ol className="mt-3 list-decimal pl-6 text-body text-muted">
          <li>Talk to BotFather and create a new bot, copy the token.</li>
          <li>In Syncgram dashboard, add the bot token and select your group.</li>
          <li>Create an access rule and map it to your paid product.</li>
        </ol>
      </section>
    </section>
  );
}

