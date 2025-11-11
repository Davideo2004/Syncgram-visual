import type { Metadata } from "next";
import { CheckoutPreview } from "@/components/CheckoutPreview";

export const metadata: Metadata = {
  title: "Hosted Checkout",
  description:
    "Hosted checkout template route — minimal fields, currency selector, and payment options.",
};

export default function HostedCheckoutTemplate() {
  return (
    <CheckoutPreview
      product="Creator Membership"
      amount={25}
      currencyOptions={[
        { code: "USD", label: "USD ($)" },
        { code: "NGN", label: "NGN (₦)", rate: 1600 },
        { code: "GHS", label: "GHS (₵)", rate: 15 },
      ]}
    />
  );
}

