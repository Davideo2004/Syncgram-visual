import Link from "next/link";
import type { ReactNode } from "react";

export type UseCaseTile = {
  icon?: ReactNode;
  title: string;
  short: string;
  href: string;
};

type UseCaseTilesProps = {
  items: UseCaseTile[];
};

export function UseCaseTiles({ items }: UseCaseTilesProps) {
  return (
    <section className="container-max py-[var(--space-5)]">
      <div className="grid gap-[var(--space-3)] sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col gap-3 rounded-[var(--radius-base)] border border-transparent bg-white p-[var(--space-3)] shadow-soft transition duration-200 hover:-translate-y-1 hover:border-syncgreen focus-visible:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              {item.icon && (
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-syncgreen/10 text-syncgreen" aria-hidden>
                  {item.icon}
                </span>
              )}
              <h3 className="text-h2 text-text">{item.title}</h3>
            </div>
            <p className="text-body text-muted">{item.short}</p>
            <span className="u-alerts-typography mt-auto text-sm text-syncgreen">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

