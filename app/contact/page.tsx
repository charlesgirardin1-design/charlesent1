import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discutons de votre projet. Décrivez-nous votre besoin, nous revenons vers vous sous 48h.",
};

export default function ContactPage() {
  return <Contact />;
}
