"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

type DashboardPreviewProps = {
  screenshots: Screenshot[];
};

export function DashboardPreview({ screenshots }: DashboardPreviewProps) {
  const [index, setIndex] = useState(0);
  const current = screenshots[index];

  const goTo = (next: number) => {
    const normalized = (next + screenshots.length) % screenshots.length;
    setIndex(normalized);
  };

  return (
    <section className="container-max py-[var(--space-6)]">
      <div className="relative overflow-hidden rounded-[var(--radius-base)] bg-surface p-[var(--space-3)] shadow-soft">
        <div className="relative h-[360px] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="rounded-[var(--radius-base)] object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        {current.caption && (
          <p className="mt-3 text-body text-muted">{current.caption}</p>
        )}
        <div className="mt-[var(--space-3)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {screenshots.map((shot, shotIndex) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => goTo(shotIndex)}
                aria-label={`Show slide ${shotIndex + 1}`}
                className={cn(
                  "h-2 w-8 rounded-pill transition",
                  index === shotIndex ? "bg-syncgreen" : "bg-black/10"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="rounded-full bg-white px-3 py-2 shadow-soft"
              aria-label="Previous screenshot"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="rounded-full bg-white px-3 py-2 shadow-soft"
              aria-label="Next screenshot"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

