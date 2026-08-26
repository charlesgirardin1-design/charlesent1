import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations sur l'éditeur du site.",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
        Informations légales
      </p>
      <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-12">
        Mentions légales
      </h1>

      <div className="space-y-10 text-foreground/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Éditeur du site</h2>
          <p>
            {siteConfig.name} — {siteConfig.role}
            <br />
            Statut : entrepreneur individuel (micro-entreprise)
            <br />
            <span className="text-foreground/40">Nom et prénom du dirigeant : [Prénom Nom] — à compléter</span>
            <br />
            Email : {siteConfig.email}
            <br />
            <span className="text-foreground/40">
              N° SIRET et adresse professionnelle : en cours de complément.
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Directeur de la publication</h2>
          <p>{siteConfig.name}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Médiation de la consommation</h2>
          <p>
            Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, en cas de
            litige non résolu directement avec {siteConfig.name}, tout client consommateur peut
            recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur
            compétent seront communiquées sur demande et précisées ici dès l&apos;adhésion à un
            dispositif de médiation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Hébergement</h2>
          <p>
            Vercel Inc.
            <br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              vercel.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, visuels, code) est la
            propriété de {siteConfig.name}, sauf mention contraire. Toute reproduction sans
            autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Données personnelles</h2>
          <p>
            Les informations transmises via les formulaires du site (contact, estimation de
            devis) sont utilisées uniquement pour répondre à votre demande et ne sont ni
            revendues ni partagées à des fins commerciales. Le détail des données collectées et
            de vos droits est disponible dans la{" "}
            <a href="/politique-de-confidentialite" className="text-accent-blue hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Cookies et mesure d&apos;audience</h2>
          <p>
            Ce site utilise un cookie de mesure d&apos;audience (Google Analytics) uniquement
            après recueil de votre consentement via le bandeau prévu à cet effet. Vercel
            Analytics, également utilisé, est anonyme et ne dépose aucun traceur. Détail complet
            et gestion de votre consentement dans la{" "}
            <a href="/politique-de-cookies" className="text-accent-blue hover:underline">
              politique de cookies
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
