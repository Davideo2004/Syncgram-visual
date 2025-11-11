"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type NavLink = {
  label: string;
  href: string;
};

type NavBarProps = {
  logo: ReactNode;
  links: NavLink[];
  ctaLabel: string;
  ctaAction?: () => void;
  ctaHref?: string;
  isSticky?: boolean;
};

export function NavBar({
  logo,
  links,
  ctaLabel,
  ctaAction,
  ctaHref,
  isSticky = true,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isSticky) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSticky]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function onNavClick(label: string) {
    trackEvent({ action: "nav_link_click", label });
  }

  function renderCta(className?: string) {
    const onClick = () => {
      trackEvent({ action: "start_earning_click", label: "navbar" });
      ctaAction?.();
    };

    if (ctaHref) {
      return (
        <Link
          href={ctaHref}
          onClick={onClick}
          className={cn(
            "u-alerts-typography inline-flex items-center justify-center rounded-pill bg-syncgreen px-5 py-3 text-sm text-white shadow-soft transition-transform hover:scale-[0.99] focus-visible:scale-[0.99]",
            className
          )}
          data-analytics="start-earning"
        >
          {ctaLabel}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "u-alerts-typography inline-flex items-center justify-center rounded-pill bg-syncgreen px-5 py-3 text-sm text-white shadow-soft transition-transform hover:scale-[0.99] focus-visible:scale-[0.99]",
          className
        )}
        data-analytics="start-earning"
      >
        {ctaLabel}
      </button>
    );
  }

  return (
    <header
      className={cn(
        "z-40 transition-all duration-200",
        isSticky ? "sticky top-0" : "relative",
        scrolled ? "bg-white/95 shadow-soft" : "bg-white/70 backdrop-blur-lg"
      )}
    >
      <div className="container-max flex items-center justify-between py-[var(--space-2)]">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Syncgram home" className="flex items-center gap-2">
            {logo}
          </Link>
        </div>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-muted transition-colors hover:text-text focus-visible:text-text"
              onClick={() => onNavClick(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/signin" className="text-body text-muted hover:text-text focus-visible:text-text" onClick={() => onNavClick("Sign in")}>
            Sign in
          </Link>
          {renderCta()}
        </div>
        <button
          type="button"
          className="rounded-base border border-black/10 p-3 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-text" />
          <span className="mt-1 block h-0.5 w-6 bg-text" />
          <span className="mt-1 block h-0.5 w-6 bg-text" />
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-200 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-[320px] max-w-[85vw] flex-col bg-white p-6 shadow-soft transition-transform duration-200",
            open ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Syncgram home" className="flex items-center gap-2">
              {logo}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="rounded-full bg-surface p-2"
            >
              <span aria-hidden>✕</span>
            </button>
          </div>
          <nav className="mt-6 flex flex-col gap-4" aria-label="Mobile Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  onNavClick(link.label);
                  setOpen(false);
                }}
                className="text-lg font-medium text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4 pt-10">
            <Link
              href="/signin"
              className="text-body text-muted hover:text-text"
              onClick={() => {
                onNavClick("Sign in");
                setOpen(false);
              }}
            >
              Sign in
            </Link>
            {renderCta()}
            <Link
              href="/demo"
              className="u-alerts-typography inline-flex items-center justify-center rounded-pill bg-surface px-5 py-3 text-sm text-text shadow-soft"
              onClick={() => {
                trackEvent({ action: "book_demo_click", label: "navbar-mobile" });
                setOpen(false);
              }}
            >
              Book a Demo
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
