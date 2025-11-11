import type { Metadata } from "next";
import { DemoBooking } from "@/components/DemoBooking";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a 20-minute demo — see how Syncgram automates payments and access.",
};

export default function DemoPage() {
  return (
    <DemoBooking mode="inline" />
  );
}

