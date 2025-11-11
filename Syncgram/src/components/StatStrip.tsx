"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

type StatStripProps = {
  stats: Stat[];
  className?: string;
};

export function StatStrip({ stats, className }: StatStripProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1600;

    const animate = (time: number) => {
      const elapsed = Math.min(time - start, duration);
      setProgress(elapsed / duration);
      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section
      ref={ref}
      className={cn(
        "container-max grid gap-6 rounded-base bg-surface p-[var(--space-3)] shadow-soft md:grid-cols-3",
        className
      )}
    >
      {stats.map((stat) => {
        const animatedValue = Math.round(stat.value * Math.min(progress, 1));
        return (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-display-lg text-text">
              {stat.prefix}
              {Number.isFinite(stat.value) ? animatedValue.toLocaleString() : stat.value}
              {stat.suffix}
            </span>
            <span className="text-body text-muted">{stat.label}</span>
          </div>
        );
      })}
    </section>
  );
}

