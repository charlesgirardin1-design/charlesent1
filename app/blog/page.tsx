import type { Metadata } from "next";
import { Blog } from "@/components/sections/blog";
import { DevisCTA } from "@/components/sections/devis-cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tarifs, référencement local, choix stratégiques : conseils pour indépendants et TPE qui veulent un site web qui convertit.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Blog />
      <DevisCTA />
    </>
  );
}
