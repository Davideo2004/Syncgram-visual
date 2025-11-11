import Link from "next/link";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/demo" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Paid Groups", href: "/use-cases/paid-group" },
      { label: "Creators", href: "/use-cases/creators" },
      { label: "Agencies", href: "/use-cases/agency" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "API & Webhooks", href: "/docs#api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/legal#terms" },
      { label: "Privacy", href: "/legal#privacy" },
      { label: "Cookies", href: "/legal#cookies" },
    ],
  },
];

type FooterProps = {
  logo?: React.ReactNode;
};

export function Footer({ logo }: FooterProps) {
  return (
    <footer className="bg-surface py-[var(--space-5)]">
      <div className="container-max grid gap-[var(--space-4)] lg:grid-cols-[1.5fr_3fr]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-h2 text-text">
            {logo}
            <span>Syncgram</span>
          </div>
          <p className="max-w-sm text-body text-muted">
            Monetize and automate communities on Telegram, WhatsApp & Discord with cross-border payments.
          </p>
          <div className="flex items-center gap-3 text-small text-muted">
            <Link href="https://x.com" target="_blank" rel="noreferrer" aria-label="Syncgram on X">
              X
            </Link>
            <Link href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Syncgram on Discord">
              Discord
            </Link>
            <Link href="https://telegram.org" target="_blank" rel="noreferrer" aria-label="Syncgram on Telegram">
              Telegram
            </Link>
          </div>
        </div>
        <div className="grid gap-[var(--space-3)] sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="u-alerts-typography text-small text-muted uppercase">
                {column.title}
              </h4>
              <ul className="mt-3 space-y-2 text-body text-muted">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-text focus-visible:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-max mt-[var(--space-4)] flex flex-col gap-2 border-t border-black/5 pt-[var(--space-2)] text-small text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Syncgram LLC. All rights reserved.</span>
        <div className="flex gap-3">
          <Link href="/legal#terms" className="hover:text-text focus-visible:text-text">
            Terms
          </Link>
          <Link href="/legal#privacy" className="hover:text-text focus-visible:text-text">
            Privacy
          </Link>
          <Link href="/legal#cookies" className="hover:text-text focus-visible:text-text">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

