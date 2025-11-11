import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type PricingCardProps = {
  plan: string;
  pricingText: string;
  cta: string;
  href: string;
  highlight?: boolean;
  description?: string;
};

export function PricingCard({
  plan,
  pricingText,
  cta,
  href,
  highlight,
  description,
}: PricingCardProps) {
  return (
    <section className="container-max py-[var(--space-5)]">
      <div
        className={cn(
          "mx-auto max-w-xl rounded-[var(--radius-base)] border bg-white p-[var(--space-4)] shadow-soft",
          highlight ? "border-syncgreen" : "border-black/5"
        )}
      >
        <span className="u-alerts-typography text-sm text-syncgreen">{plan}</span>
        <h3 className="mt-2 text-display-lg text-text">{pricingText}</h3>
        {description && <p className="mt-2 text-body text-muted">{description}</p>}
        <Link
          href={href}
          onClick={() => trackEvent({ action: "start_earning_click", label: "pricing" })}
          className="mt-[var(--space-3)] inline-flex w-full items-center justify-center rounded-pill bg-syncgreen px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[0.99] focus-visible:scale-[0.99]"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
