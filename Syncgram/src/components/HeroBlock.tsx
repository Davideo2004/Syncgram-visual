import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type Cta = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type TrustBadge = {
  label: string;
  icon?: ReactNode;
};

type HeroBlockProps = {
  kicker?: string;
  headline: string;
  subheadline: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  visual?: ReactNode;
  trustBadges?: TrustBadge[];
};

function CtaButton({ cta, variant = "primary" }: { cta: Cta; variant?: "primary" | "ghost" }) {
  const className = cn(
    "u-alerts-typography inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm transition-transform focus-visible:scale-[0.99] hover:scale-[0.99]",
    variant === "primary"
      ? "bg-syncgreen text-white shadow-soft"
      : "bg-[var(--color-cta-ghost)] text-text"
  );

  const handleClick = () => {
    if (variant === "primary") trackEvent({ action: "start_earning_click", label: "hero" });
    else trackEvent({ action: "book_demo_click", label: "hero" });
    cta.onClick?.();
  };

  if (cta.href) {
    return (
      <Link href={cta.href} onClick={handleClick} className={className}>
        {cta.label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {cta.label}
    </button>
  );
}

export function HeroBlock({
  kicker,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  visual,
  trustBadges,
}: HeroBlockProps) {
  return (
    <section className="container-max grid gap-[var(--space-4)] py-[var(--space-6)] md:grid-cols-2 md:items-center">
      <div className="flex flex-col gap-[var(--space-2)]">
        {kicker && (
          <span className="u-alerts-typography text-sm uppercase text-tealsync">
            {kicker}
          </span>
        )}
        <h1 className="text-display-lg text-text sm:text-[32px]">
          {headline}
        </h1>
        <p className="text-body text-muted max-w-xl">{subheadline}</p>
        <div className="mt-[var(--space-2)] flex flex-col gap-3 sm:flex-row">
          <CtaButton cta={primaryCta} variant="primary" />
          {secondaryCta && <CtaButton cta={secondaryCta} variant="ghost" />}
        </div>
        {trustBadges && trustBadges.length > 0 && (
          <div className="mt-[var(--space-3)] flex flex-wrap items-center gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-base bg-surface px-3 py-2 text-small text-muted"
              >
                {badge.icon && <span aria-hidden>{badge.icon}</span>}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="relative flex justify-center">
        {visual || (
          <div className="h-[320px] w-full max-w-md rounded-[var(--radius-base)] bg-gradient-to-br from-syncgreen/10 via-white to-tealsync/10 shadow-soft" />
        )}
      </div>
    </section>
  );
}
