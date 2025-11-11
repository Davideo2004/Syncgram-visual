import type { Metadata } from "next";
import { HeroBlock, FeatureGrid, BeforeAfter, PricingCard } from "@/components";

export const metadata: Metadata = {
  title: "Paid Group",
  description:
    "Monetize your Telegram or WhatsApp group — instantly grant paid access.",
};

export default function PaidGroupPage() {
  return (
    <div className="flex flex-col">
      <HeroBlock
        headline="Monetize your Telegram or WhatsApp group — instantly grant paid access."
        subheadline="Automate role assignment, gate content, and see insights in one dashboard."
        primaryCta={{ label: "Start Earning", href: "/signup" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
      <BeforeAfter
        beforeContent={<p>Manual approvals, screenshot receipts, and messy invite links.</p>}
        afterContent={<p>Members pay, access is granted immediately, and roles stay in sync.</p>}
      />
      <FeatureGrid
        heading="Benefits for paid groups"
        features={[
          { title: "Automate roles", benefit: "Grant and revoke access automatically on payment status." },
          { title: "Gated content", benefit: "Share files and links with the right members instantly." },
          { title: "Insights", benefit: "Track MRR, churn, and member growth." },
          { title: "Multi-gateway", benefit: "Accept cards, mobile money, bank — even crypto if enabled." },
        ]}
      />
      <section className="container-max pb-[var(--space-6)]">
        <blockquote className="rounded-base bg-surface p-[var(--space-3)] text-body text-text shadow-soft">
          “We moved to Syncgram and cut our admin time by 80%.” — A community owner
        </blockquote>
      </section>
      <PricingCard
        plan="Free to start"
        pricingText="2.7% + $0.30"
        cta="Create your group"
        href="/signup"
        highlight
      />
    </div>
  );
}

