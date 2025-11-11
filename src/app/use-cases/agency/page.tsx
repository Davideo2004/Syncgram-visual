import type { Metadata } from "next";
import { HeroBlock, FeatureGrid, PricingCard } from "@/components";

export const metadata: Metadata = {
  title: "Agency",
  description:
    "Automate client community monetization and reporting for small agencies.",
};

export default function AgencyPage() {
  return (
    <div className="flex flex-col">
      <HeroBlock
        headline="Agencies: automate client monetization and reporting"
        subheadline="Offer paid communities as a service with minimal ops overhead."
        primaryCta={{ label: "Start Earning", href: "/signup" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
      <FeatureGrid
        heading="Built for agencies"
        features={[
          { title: "Multi-client dashboards", benefit: "Switch between client workspaces and reports." },
          { title: "Templates", benefit: "Standardize flows for faster client onboarding." },
          { title: "Invoicing & payouts", benefit: "Route funds with clear statements and timing." },
          { title: "White-label options", benefit: "Co-brand client-facing experiences." },
        ]}
      />
      <PricingCard
        plan="Free to start"
        pricingText="2.7% + $0.30"
        cta="Offer to clients"
        href="/signup"
        highlight
      />
    </div>
  );
}

