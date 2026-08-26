import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discutons de votre projet. Décrivez-moi votre besoin, je reviens vers vous sous 48h.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
