import type { Metadata } from "next";
import { PricingCard } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free to Start — No monthly fees. Transaction fees: 2.7% + $0.30 per transaction.",
};

export default function PricingPage() {
  return (
    <section className="container-max py-[var(--space-6)]">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-display-lg text-text">Simple, transparent pricing</h1>
        <p className="mt-3 text-body text-muted">
          Free to Start — No monthly fees. Transaction fees: 2.7% + $0.30 per transaction. Enterprise plans available.
        </p>
      </header>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-2">
        <PricingCard
          plan="Free to Start"
          pricingText="2.7% + $0.30 per transaction"
          description="No monthly fees. Access to core features, hosted checkout, Telegram/WhatsApp/Discord integrations."
          cta="Start for free"
          href="/signup"
          highlight
        />
        <PricingCard
          plan="Enterprise"
          pricingText="Custom pricing"
          description="Advanced compliance, volume discounts, dedicated support, and custom integrations."
          cta="Contact Sales"
          href="/demo"
        />
      </div>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-3">
        <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft">
          <h3 className="u-alerts-typography text-text">Country & currency</h3>
          <p className="mt-2 text-body text-muted">Support for multi-currency and regional payment methods across Africa.</p>
        </div>
        <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft">
          <h3 className="u-alerts-typography text-text">Payout timing</h3>
          <p className="mt-2 text-body text-muted">Settlements to your linked account per gateway schedule.</p>
        </div>
        <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft">
          <h3 className="u-alerts-typography text-text">Compliance</h3>
          <p className="mt-2 text-body text-muted">KYC-ready processes, secure data handling, dispute assistance.</p>
        </div>
      </div>
    </section>
  );
}

