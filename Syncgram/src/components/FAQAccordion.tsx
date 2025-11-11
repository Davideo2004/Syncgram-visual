"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-max py-[var(--space-6)]">
      <div className="mx-auto max-w-3xl divide-y divide-black/10 rounded-[var(--radius-base)] border border-black/10 bg-white">
        {items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={item.question}>
              <button
                id={buttonId}
                className="flex w-full items-center justify-between gap-4 p-[var(--space-3)] text-left text-h2 text-text"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.question}
                <span aria-hidden>{open ? "–" : "+"}</span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={open ? "max-h-screen p-[var(--space-3)] pt-0 text-body text-muted" : "max-h-0 overflow-hidden"}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

