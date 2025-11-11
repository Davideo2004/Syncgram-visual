import { HeroBlock, StatStrip, UseCaseTiles, FeatureGrid, PricingCard, BeforeAfter, DashboardPreview, DemoBooking, FAQAccordion, Testimonials } from "@/components";
import { Reveal } from "@/components/Reveal";
import AnimatedHeroText from "@/components/AnimatedHeroText";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Pre Hero */}
      <div className="bg-gray-100 text-center py-2 text-sm font-semibold">
        Powering the next generation of digital communities
      </div>

      {/* Hero Section */}
      <Reveal>
        <HeroBlock
          headline={
            <AnimatedHeroText
              lines={[
                "Empowering creators to do more than create — to earn, grow, and scale.",
                "Monetize your audience. Automate everything. Scale globally.",
                "Turn your community into a thriving business.",
                "Monetize Your Community Effortlessly",
                "Earn Globally. Operate Simply.",
                "Simplify Global Payments for Your Business",
              ]}
            />
          }
          subheadline="Creators create — Syncgram handles the rest. Payments, access, and automation, all in one place."
          primaryCta={{ label: "Start Earning", href: "/signup" }}
          secondaryCta={{ label: "Book a Demo", href: "/demo" }}
        />
      </Reveal>
      
      {/* VSL Placeholder */}
      <Reveal>
        <div className="container-max py-[var(--space-5)] text-center">
          <div className="bg-gray-200 aspect-video max-w-4xl mx-auto rounded-lg flex items-center justify-center">
            <p className="text-gray-500">VSL Placeholder</p>
          </div>
        </div>
      </Reveal>

      {/* Statistics */}
      <Reveal>
        <StatStrip
          stats={[
            { label: "Earned by creators through Syncgram", value: "₦900M+" },
            { label: "Members Managed across Telegram, WhatsApp and Discord", value: "2M+" },
            { label: "Recurring subscriptions automated", value: "30K+" },
            { label: "Countries supported worldwide", value: "150+" },
          ]}
        />
      </Reveal>

      {/* Problem → Solution (Before / After) */}
      <Reveal>
        <BeforeAfter
          heading="From manual chaos to automated growth"
          subheading="Less work, fewer mistakes."
          beforeContent={
            <ul className="list-disc pl-6 text-body text-muted">
              <li>Manual DMs</li>
              <li>Spreadsheet tracking</li>
              <li>Slow payouts</li>
              <li>Human errors</li>
            </ul>
          }
          afterContent={
            <ul className="list-disc pl-6 text-body text-muted">
              <li>Automated access granting</li>
              <li>Global payment methods</li>
              <li>Real-time analytics</li>
              <li>Dashboard screenshot</li>
            </ul>
          }
          cta={{ label: "See How", href: "#how-it-works" }}
        />
      </Reveal>

      {/* Use Cases (tile grid) */}
      <Reveal>
        <UseCaseTiles
          items={[
            { title: "Paid groups", short: "Sell access to private communities.", href: "/use-cases/paid-group" },
            { title: "Creators & Coaches", short: "Monetize your content and expertise.", href: "/use-cases/creators" },
            { title: "Courses", short: "Sell and manage access to educational content.", href: "/use-cases/courses" },
            { title: "Software Licenses", short: "Automate license distribution and renewals.", href: "/use-cases/software" },
            { title: "Agencies", short: "Manage multiple client communities seamlessly.", href: "/use-cases/agency" },
            { title: "Platforms", short: "Integrate Syncgram's infrastructure via API.", href: "/use-cases/platform" },
          ]}
        />
      </Reveal>

      {/* Core Features (icon grid) */}
      <Reveal>
        <FeatureGrid
          heading="Core features to grow your community"
          features={[
            { title: "Expanded Payments", benefit: "Accept fiat, crypto, and mobile money from a global audience." },
            { title: "Automated Access", benefit: "Instantly grant and revoke access to Telegram, WhatsApp, and Discord." },
            { title: "Community Insights", benefit: "Track subscriptions, revenue, and engagement with powerful analytics." },
            { title: "Integrations", benefit: "Connect seamlessly with our robust APIs and webhooks." },
            { title: "Hosted Checkout", benefit: "Utilize our optimized pay.sync-gram.com for easy payments." },
            { title: "Security & Payouts", benefit: "Enjoy encrypted data, secure payouts, and compliance-ready processes." },
          ]}
        />
      </Reveal>

      {/* How it works (3 step onboarding) */}
      <Reveal>
        <section id="how-it-works" className="container-max py-[var(--space-5)]">
          <h2 className="text-display-lg text-text text-center">How it works</h2>
          <div className="mt-[var(--space-3)] grid gap-[var(--space-3)] md:grid-cols-3">
            <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft text-center">
              <h3 className="u-alerts-typography text-text">1. Create store & product</h3>
              <p className="mt-2 text-body text-muted">Set up your memberships, courses, or group access in minutes.</p>
            </div>
            <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft text-center">
              <h3 className="u-alerts-typography text-text">2. Connect platforms & payments</h3>
              <p className="mt-2 text-body text-muted">Link your Telegram, WhatsApp, or Discord and choose your payment methods.</p>
            </div>
            <div className="rounded-base bg-white p-[var(--space-3)] shadow-soft text-center">
              <h3 className="u-alerts-typography text-text">3. Accept payments & auto-grant access</h3>
              <p className="mt-2 text-body text-muted">Watch your community grow as access is granted automatically.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Dashboard preview (carousel or stacked cards) */}
      <Reveal>
        <DashboardPreview
          screenshots={[
            { src: "/window.svg", alt: "Subscriptions" },
            { src: "/globe.svg", alt: "Members List" },
            { src: "/file.svg", alt: "Payout Ledger" },
          ]}
        />
      </Reveal>

      {/* Testimonials / Case studies */}
      <Reveal>
        <Testimonials />
      </Reveal>

      {/* Demo booking CTA (large) */}
      <Reveal>
        <DemoBooking mode="inline" />
      </Reveal>

      {/* FAQ (accordion) */}
      <Reveal>
        <FAQAccordion
          items={[
            { question: "What payment methods are supported?", answer: "We support a wide range of payment methods including credit/debit cards, bank transfers, mobile money, and cryptocurrencies." },
            { question: "Which platforms can I automate?", answer: "You can automate access and roles for Telegram, WhatsApp, and Discord communities." },
            { question: "What are the transaction fees?", answer: "Our pricing is competitive and transparent. Please visit our pricing page for detailed information." },
            { question: "How are payouts handled?", answer: "Payouts are processed securely to your linked bank account or crypto wallet, with support for multiple currencies." },
            { question: "Is Syncgram secure?", answer: "Yes, we prioritize security with end-to-end encryption, secure data storage, and robust compliance measures." },
            { question: "Can I migrate an existing community?", answer: "Absolutely. Our tools and support team make it easy to migrate your existing members to Syncgram." },
          ]}
        />
      </Reveal>
    </div>
  );
}

