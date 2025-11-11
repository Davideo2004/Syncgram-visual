import type { Metadata } from "next";
import { HeroBlock, FeatureGrid, PricingCard } from "@/components";

export const metadata: Metadata = {
  title: "Creators",
  description:
    "Built for African creators — accept global payments, automate access, and grow.",
};

export default function CreatorsPage() {
  return (
    <div className="flex flex-col">
      <HeroBlock
        headline="Built for creators — memberships, courses, and communities"
        subheadline="Accept payments globally, automate access, and see your growth metrics."
        primaryCta={{ label: "Start Earning", href: "/signup" }}
        secondaryCta={{ label: "Book a Demo", href: "/demo" }}
      />
      <FeatureGrid
        heading="Why creators choose Syncgram"
        features={[
          { title: "Memberships", benefit: "Recurring subscriptions with automated renewals and reminders." },
          { title: "Courses & content", benefit: "Gate access links and manage cohorts easily." },
          { title: "Tips & one-time", benefit: "Accept one-off payments across currencies." },
          { title: "Creator analytics", benefit: "See revenue, active members, and churn in one place." },
        ]}
      />
      <PricingCard
        plan="Free to start"
        pricingText="2.7% + $0.30"
        cta="Launch your membership"
        href="/signup"
        highlight
      />
    </div>
  );
}

