import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sync-gram.com"),
  title: {
    default: "Syncgram",
    template: "%s | Syncgram",
  },
  description:
    "Syncgram — get paid and automate access on Telegram, WhatsApp & Discord. Cross-border payments for African creators.",
};

const links = [
  { label: "Product", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use Cases", href: "/use-cases/paid-group" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Syncgram",
    url: "https://sync-gram.com",
    sameAs: [
      "https://x.com",
      "https://discord.com",
      "https://telegram.org",
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Syncgram",
    description:
      "Get paid and automate access on Telegram, WhatsApp & Discord.",
    brand: "Syncgram",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="product-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(productJsonLd)}
        </Script>
        <div className="min-h-screen flex flex-col">
          <NavBar
            logo={<span className="u-alerts-typography text-text">Syncgram</span>}
            links={links}
            ctaLabel="Start Earning"
            ctaHref="/signup"
            isSticky
          />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer logo={<span className="u-alerts-typography text-text">S</span>} />
        </div>
      </body>
    </html>
  );
}
