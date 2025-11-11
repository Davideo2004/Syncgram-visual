"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const fields = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telegram", label: "Telegram handle", type: "text", required: true },
  { name: "teamSize", label: "Team size", type: "number", required: false },
  { name: "preferredTime", label: "Preferred time", type: "text", required: false },
] as const;

type DemoBookingProps = {
  mode?: "modal" | "inline";
  calendlyUrl?: string;
  onSubmit?: (values: Record<string, string>) => Promise<void> | void;
};

export function DemoBooking({ mode = "inline", calendlyUrl, onSubmit }: DemoBookingProps) {
  const [open, setOpen] = useState(mode === "inline");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formId = useId();

  async function handleSubmit(formData: FormData) {
    const values = Object.fromEntries(formData.entries()) as Record<string, string>;
    try {
      setLoading(true);
      await onSubmit?.(values);
      setSuccess(true);
      trackEvent({ action: "book_demo_click", label: "submitted" });
    } finally {
      setLoading(false);
    }
  }

  const formContent = (
    <div className="rounded-[var(--radius-base)] bg-white p-[var(--space-4)] shadow-soft">
      <h3 className="text-h1 text-text">Book a 20-minute demo</h3>
      <p className="mt-2 text-body text-muted">
        We’ll show you how Syncgram handles payments and automates access. No tech skills required.
      </p>
      {success ? (
        <div className="mt-[var(--space-3)] rounded-base border border-syncgreen/30 bg-syncgreen/10 p-4 text-text">
          <p className="font-semibold">Request submitted!</p>
          <p className="text-body text-muted">
            We’ll reach out shortly with calendar options and onboarding steps.
          </p>
        </div>
      ) : (
        <form
          id={formId}
          className="mt-[var(--space-3)] grid gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            await handleSubmit(data);
          }}
        >
          {fields.map((field) => (
            <label key={field.name} className="flex flex-col gap-2 text-sm font-medium text-text">
              {field.label}
              <input
                name={field.name}
                type={field.type}
                required={field.required}
                className="rounded-base border border-black/10 px-3 py-2 text-body text-text focus-visible:border-syncgreen"
              />
            </label>
          ))}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "u-alerts-typography inline-flex items-center justify-center rounded-pill bg-syncgreen px-6 py-3 text-sm text-white shadow-soft",
              loading && "opacity-70"
            )}
          >
            {loading ? "Submitting…" : "Book a Demo"}
          </button>
        </form>
      )}
      {calendlyUrl && (
        <div className="mt-[var(--space-4)]">
          <iframe
            src={calendlyUrl}
            title="Schedule demo"
            className="h-[540px] w-full rounded-base border-0"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );

  if (mode === "inline") {
    return <section className="container-max py-[var(--space-6)]">{formContent}</section>;
  }

  return (
    <section className="container-max py-[var(--space-6)]">
      <button
        type="button"
        onClick={() => {
          trackEvent({ action: "book_demo_click", label: "open_modal" });
          setOpen(true);
        }}
        className="u-alerts-typography inline-flex items-center justify-center rounded-pill bg-syncgreen px-6 py-3 text-sm text-white shadow-soft"
      >
        Book a Demo
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="relative w-full max-w-2xl">
            <button
              type="button"
              aria-label="Close demo booking"
              className="absolute right-3 top-3 rounded-full bg-surface p-2"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {formContent}
          </div>
        </div>
      )}
    </section>
  );
}
