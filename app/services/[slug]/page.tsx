import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/lib/data";
import { ServiceHero } from "@/components/sections/service-hero";
import { AnimatedFeatureList } from "@/components/animated-feature-list";
import { Button } from "@/components/ui/button";

// Extrait le premier montant en euros d'un libellé de prix libre
// (ex: "49€ à 99€ / mois" -> 49) pour l'exposer dans les données
// structurées, sans réécrire le format d'affichage destiné aux humains.
function extractPrice(price: string): number | null {
  const match = price.replace(/\s/g, "").match(/(\d[\d.,]*)/);
  if (!match) return null;
  return Number(match[1].replace(/\./g, "").replace(",", "."));
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const price = extractPrice(service.price);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
    areaServed: "FR",
    url: `${siteConfig.url}/services/${service.slug}`,
    ...(price !== null
      ? { offers: { "@type": "Offer", price, priceCurrency: "EUR" } }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux services
      </Link>

      <ServiceHero service={service} />

      <div className="mt-12 space-y-5 text-foreground/70 text-lg leading-relaxed">
        <p>{service.longDescription}</p>
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Ce qui est inclus</h2>
        <AnimatedFeatureList items={service.includes} />
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-surface-border bg-surface p-8">
        <div className="flex-1">
          <p className="text-sm text-foreground/50 mb-1">Tarif</p>
          <p className="text-2xl font-semibold">{service.price}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/devis">
            <Button size="lg">
              Estimer mon projet
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Discuter du projet
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
