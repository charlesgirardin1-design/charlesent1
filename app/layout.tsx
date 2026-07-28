import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role} | Sites premium & sur mesure`,
  description:
    "Développeur web freelance, je conçois des sites premium, rapides et pensés pour convertir. Devis gratuit sous 48h.",
  metadataBase: new URL("https://exemple.fr"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.tagline,
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteConfig.name} — ${siteConfig.role}`,
  description:
    "Développeur web freelance, conception de sites vitrines et applications sur mesure, rapides et pensés pour convertir.",
  url: "https://exemple.fr/",
  email: siteConfig.email,
  areaServed: "FR",
  priceRange: "150€ – 3500€",
  founder: { "@type": "Person", name: siteConfig.name, jobTitle: siteConfig.role },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased selection:bg-accent-blue selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
