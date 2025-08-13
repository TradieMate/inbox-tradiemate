import type { Metadata } from "next";
import { PrivacyContent } from "@/app/(landing)/privacy/content";

export const metadata: Metadata = {
  title: "Privacy Policy - Tradiemate AI",
  description: "Privacy Policy - Tradiemate AI",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <PrivacyContent />;
}
