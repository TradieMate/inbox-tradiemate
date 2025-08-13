import type { Metadata } from "next";
import { TermsContent } from "@/app/(landing)/terms/content";

export const metadata: Metadata = {
  title: "Terms of Service - Tradiemate AI",
  description: "Terms of Service - Tradiemate AI",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsContent />;
}
