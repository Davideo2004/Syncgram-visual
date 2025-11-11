import type { Metadata } from "next";
import { HeroBlock, FeatureGrid, PricingCard } from "@/components";

export const metadata: Metadata = {
  title: "Platform Builders",
  description:
    "Build on Syncgram to power access control and payments for your platform.",
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col">
      <HeroBlock
        headline="Build on Syncgram — access control and payments APIs"
        subheadline="Embed subscriptions, role automation, and payouts into your platform."
        primaryCta={{ label: "View Docs", href: "/docs" }}
        secondaryCta={{ label: "Contact Sales", href: "/demo" }}
      />
      <FeatureGrid
        heading="For platform builders"
        features={[
          { title: "Stable webhooks", benefit: "Idempotent events for access state changes." },
          { title: "Granular scopes", benefit: "Fine-grained permissions for bots and roles." },
          { title: "Hosted checkout", benefit: "Drop-in flows with currency & crypto toggle." },
          { title: "SDKs", benefit: "Typed client helpers and examples." },
        ]}
      />
      <PricingCard
        plan="Enterprise"
        pricingText="Custom pricing"
        cta="Talk to sales"
        href="/demo"
      />
    </div>
  );
}

