import type { Metadata } from "next";
import { HeroBlock, FeatureGrid, PricingCard } from "@/components";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Sell licenses and automate access controls across platforms and web.",
};

export default function SoftwarePage() {
  return (
    <div className="flex flex-col">
      <HeroBlock
        headline="Sell software licenses and manage access automatically"
        subheadline="Issue keys, validate renewals, and connect role-based access gate."
        primaryCta={{ label: "Start Earning", href: "/signup" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
      <FeatureGrid
        heading="Software-first features"
        features={[
          { title: "License issuance", benefit: "Generate and validate license keys instantly." },
          { title: "Renewals", benefit: "Automate subscription renewals and failed payment recovery." },
          { title: "Access rules", benefit: "Role-based control across Telegram, Discord, and web." },
          { title: "Developer tools", benefit: "Webhooks and API for custom flows." },
        ]}
      />
      <PricingCard
        plan="Free to start"
        pricingText="2.7% + $0.30"
        cta="Create a license product"
        href="/signup"
        highlight
      />
    </div>
  );
}

