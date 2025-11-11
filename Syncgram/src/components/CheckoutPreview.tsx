"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type CurrencyOption = {
  code: string;
  label: string;
  rate?: number;
};

type CheckoutPreviewProps = {
  product: string;
  amount: number;
  currencyOptions: CurrencyOption[];
};

export function CheckoutPreview({ product, amount, currencyOptions }: CheckoutPreviewProps) {
  const [currency, setCurrency] = useState(currencyOptions[0]?.code ?? "USD");
  const [crypto, setCrypto] = useState(false);

  const selected = currencyOptions.find((option) => option.code === currency);
  const displayAmount = selected?.rate ? amount * selected.rate : amount;

  return (
    <section className="container-max py-[var(--space-5)]">
      <div className="mx-auto max-w-lg rounded-[var(--radius-base)] border border-black/5 bg-white p-[var(--space-4)] shadow-soft">
        <header className="flex flex-col gap-2">
          <span className="u-alerts-typography text-sm text-muted">Hosted checkout</span>
          <h3 className="text-h1 text-text">{product}</h3>
        </header>
        <div className="mt-[var(--space-3)] flex flex-col gap-3">
          <label className="text-sm font-medium text-text">
            Currency
            <select
              className="mt-1 w-full rounded-base border border-black/10 px-3 py-2"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencyOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-3 text-sm font-medium text-text">
            <input
              type="checkbox"
              checked={crypto}
              onChange={() => setCrypto((prev) => !prev)}
            />
            Enable crypto checkout
          </label>
        </div>
        <dl className="mt-[var(--space-3)] space-y-2">
          <div className="flex justify-between text-body text-muted">
            <dt>Subtotal</dt>
            <dd>{crypto ? `≈ ${amount} USDT` : formatCurrency(displayAmount, selected?.code ?? "USD")}</dd>
          </div>
          <div className="flex justify-between text-body text-muted">
            <dt>Fees</dt>
            <dd>Included</dd>
          </div>
          <div className="flex justify-between border-t border-black/5 pt-3 text-h2 text-text">
            <dt>Total due</dt>
            <dd>{crypto ? `≈ ${amount} USDT` : formatCurrency(displayAmount, selected?.code ?? "USD")}</dd>
          </div>
        </dl>
        <button
          className="mt-[var(--space-3)] w-full rounded-pill bg-syncgreen px-6 py-3 text-sm font-semibold text-white shadow-soft"
          onClick={() => trackEvent({ action: "checkout_pay_click", label: crypto ? "crypto" : "fiat" })}
        >
          Pay now
        </button>
        <div className="mt-[var(--space-3)] flex flex-wrap items-center gap-3 text-small text-muted">
          <span className="rounded-pill bg-surface px-3 py-1">Cards</span>
          <span className="rounded-pill bg-surface px-3 py-1">Mobile money</span>
          <span className="rounded-pill bg-surface px-3 py-1">USSD</span>
          <span className="rounded-pill bg-surface px-3 py-1">Crypto</span>
        </div>
        <p className="mt-[var(--space-3)] text-small text-muted">
          Payments processed via secure gateways. TLS, tokenization, and local compliance baked in.
        </p>
      </div>
    </section>
  );
}
