import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Terms, Privacy, and Cookies for Syncgram. Learn about how we handle data.",
};

export default function LegalPage() {
  return (
    <section className="container-max py-[var(--space-6)]">
      <h1 className="text-display-lg text-text">Legal</h1>
      <nav className="mt-[var(--space-3)] flex flex-wrap gap-3 text-small text-muted">
        <a href="#terms" className="rounded-pill bg-surface px-3 py-1">Terms</a>
        <a href="#privacy" className="rounded-pill bg-surface px-3 py-1">Privacy</a>
        <a href="#cookies" className="rounded-pill bg-surface px-3 py-1">Cookies</a>
      </nav>
      <article className="prose prose-neutral mt-[var(--space-4)] max-w-none text-body text-text">
        <h2 id="terms">Terms of Service</h2>
        <p>These terms govern your use of Syncgram services. By using Syncgram, you agree to these terms.</p>
        <h2 id="privacy">Privacy Policy</h2>
        <p>We respect your privacy. Learn how we collect, use, and protect your data.</p>
        <h2 id="cookies">Cookie Policy</h2>
        <p>We use cookies to improve your experience. You can control cookies in your browser settings.</p>
      </article>
    </section>
  );
}

