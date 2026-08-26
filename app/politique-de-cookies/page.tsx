import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Détail des cookies et technologies de stockage utilisés sur ce site.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politique-de-cookies" },
};

export default function PolitiqueCookies() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
        Informations légales
      </p>
      <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-12">
        Politique de cookies
      </h1>

      <div className="space-y-10 text-foreground/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">En résumé</h2>
          <p>
            Ce site dépose un cookie de mesure d&apos;audience (Google Analytics) uniquement
            après avoir obtenu votre consentement via le bandeau affiché lors de votre première
            visite. Vous pouvez accepter ou refuser ce cookie, et changer d&apos;avis à tout
            moment via le lien{" "}
            <strong className="text-foreground">« Gérer les cookies »</strong> en bas de page. Sans
            votre accord, aucun cookie de ce type n&apos;est déposé.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Cookies de mesure d&apos;audience</h2>
          <p>
            Avec votre consentement, ce site utilise Google Analytics pour mesurer la
            fréquentation (pages vues, provenance des visites, appareil utilisé). Ce service
            dépose des cookies (notamment <code className="text-foreground/90">_ga</code> et{" "}
            <code className="text-foreground/90">_ga_*</code>) d&apos;une durée de conservation
            maximale de 13 mois, conformément aux recommandations de la CNIL. Les données
            collectées sont traitées par Google Ireland Limited et peuvent être transférées hors
            de l&apos;Union européenne dans le cadre des garanties prévues par Google.
          </p>
          <p className="mt-3">
            Ce site utilise également Vercel Analytics, qui fonctionne sans cookie et sans
            identifiant permettant de vous reconnaître individuellement d&apos;une visite à
            l&apos;autre : les statistiques produites sont anonymes et agrégées. Étant exempté de
            consentement selon les critères de la CNIL, il ne nécessite pas de bandeau cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Gérer votre consentement</h2>
          <p>
            Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser
            le dépôt du cookie Google Analytics. Votre choix est mémorisé dans votre navigateur.
            Vous pouvez le modifier à tout moment en cliquant sur{" "}
            <strong className="text-foreground">« Gérer les cookies »</strong> dans le pied de page de
            n&apos;importe quelle page du site, ce qui réaffiche le bandeau de consentement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Stockage technique local</h2>
          <p>
            Le site utilise le stockage local de votre navigateur (<code className="text-foreground/90">sessionStorage</code>)
            pour une seule chose : mémoriser que l&apos;écran de chargement animé a déjà été vu au
            cours de votre visite, afin de ne pas le rejouer à chaque page. Cette information reste
            uniquement sur votre appareil, est effacée à la fermeture de l&apos;onglet et
            n&apos;est jamais transmise à un serveur. Il ne s&apos;agit pas d&apos;un cookie et
            elle n&apos;a aucune finalité de suivi ou de mesure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Aucun cookie publicitaire</h2>
          <p>
            Aucun cookie de reciblage publicitaire ou de réseau social n&apos;est déposé sur ce
            site. Les formulaires (contact, estimation de devis) envoient vos données directement
            par email via Resend, sans dépôt de cookie côté navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Questions</h2>
          <p>
            Pour toute question sur cette politique, écrivez à{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">
              {siteConfig.email}
            </a>
            . Voir aussi la{" "}
            <a href="/politique-de-confidentialite" className="text-accent-blue hover:underline">
              politique de confidentialité
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
