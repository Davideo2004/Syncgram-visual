import type { ReactNode } from "react";

export type FeatureItem = {
  icon?: ReactNode;
  title: string;
  benefit: string;
};

type FeatureGridProps = {
  features: FeatureItem[];
  heading?: string;
  description?: string;
};

export function FeatureGrid({ features, heading, description }: FeatureGridProps) {
  return (
    <section className="container-max py-[var(--space-6)]">
      <div className="mx-auto max-w-3xl text-center">
        {heading && <h2 className="text-display-lg text-text">{heading}</h2>}
        {description && <p className="mt-3 text-body text-muted">{description}</p>}
      </div>
      <div className="mt-[var(--space-4)] grid gap-[var(--space-3)] md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 rounded-[var(--radius-base)] border border-black/5 bg-white p-[var(--space-3)] shadow-soft transition duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start gap-3">
              {feature.icon && (
                <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-syncgreen/10 text-syncgreen" aria-hidden>
                  {feature.icon}
                </span>
              )}
              <h3 className="text-h2 text-text">{feature.title}</h3>
            </div>
            <p className="text-body text-muted">{feature.benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

