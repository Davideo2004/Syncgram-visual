import type { ReactNode } from "react";
import Link from "next/link";

type BeforeAfterProps = {
  beforeContent: ReactNode;
  afterContent: ReactNode;
  cta?: {
    label: string;
    href: string;
  };
  heading?: string;
  subheading?: string;
};

export function BeforeAfter({ beforeContent, afterContent, cta, heading, subheading }: BeforeAfterProps) {
  return (
    <section className="container-max py-[var(--space-6)]">
      <div className="mx-auto max-w-3xl text-center">
        {heading && <h2 className="text-display-lg text-text">{heading}</h2>}
        {subheading && <p className="mt-3 text-body text-muted">{subheading}</p>}
      </div>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-2">
        <div className="rounded-[var(--radius-base)] border border-danger/20 bg-white p-[var(--space-3)] shadow-soft">
          <span className="u-alerts-typography text-danger">Before</span>
          <div className="mt-2 text-body text-muted">{beforeContent}</div>
        </div>
        <div className="rounded-[var(--radius-base)] border border-syncgreen/30 bg-white p-[var(--space-3)] shadow-soft">
          <span className="u-alerts-typography text-syncgreen">After</span>
          <div className="mt-2 text-body text-muted">{afterContent}</div>
        </div>
      </div>
      {cta && (
        <div className="mt-[var(--space-4)] flex justify-center">
          <Link
            href={cta.href}
            className="u-alerts-typography inline-flex items-center justify-center rounded-pill bg-syncgreen px-6 py-3 text-sm text-white shadow-soft"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </section>
  );
}

