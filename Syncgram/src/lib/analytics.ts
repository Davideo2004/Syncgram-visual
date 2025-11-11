declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag(...args);
}

export type AnalyticsEvent =
  | { action: "start_earning_click"; label?: string }
  | { action: "book_demo_click"; label?: string }
  | { action: "checkout_pay_click"; label?: string }
  | { action: "nav_link_click"; label?: string };

export function trackEvent(event: AnalyticsEvent) {
  try {
    gtag("event", event.action, { label: event.label });
  } catch {}
}

