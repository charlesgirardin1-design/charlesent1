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

      <div className="space-y-10 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Éditeur du site</h2>
          <p>
            {siteConfig.name} — {siteConfig.role}
            <br />
            Statut : entrepreneur individuel (micro-entreprise)
            <br />
            Email : {siteConfig.email}
            <br />
            <span className="text-white/40">
              N° SIRET et adresse professionnelle : en cours de complément.
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Directeur de la publication</h2>
          <p>{siteConfig.name}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Hébergement</h2>
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
          <h2 className="text-lg font-semibold text-white mb-3">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, visuels, code) est la
            propriété de {siteConfig.name}, sauf mention contraire. Toute reproduction sans
            autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Données personnelles</h2>
          <p>
            Les informations transmises via le formulaire de contact (nom, email, message) sont
            utilisées uniquement pour répondre à votre demande et ne sont ni revendues ni
            partagées avec des tiers. Conformément au RGPD, vous pouvez demander l&apos;accès,
            la rectification ou la suppression de vos données en écrivant à{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Cookies et mesure d&apos;audience</h2>
          <p>
            Ce site utilise Vercel Analytics pour mesurer la fréquentation (pages vues,
            provenance des visites). Cet outil ne dépose aucun cookie et ne collecte aucune
            donnée personnelle identifiable : les statistiques sont anonymes et agrégées.
            Aucun cookie de suivi publicitaire n&apos;est utilisé sur ce site.
          </p>
        </section>
      </div>
    </div>
  );
}
