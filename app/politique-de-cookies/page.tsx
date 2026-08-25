import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Détail des cookies et technologies de stockage utilisés sur ce site.",
  robots: { index: false, follow: true },
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

      <div className="space-y-10 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">En résumé</h2>
          <p>
            Ce site n&apos;utilise <strong className="text-white">aucun cookie</strong>, ni de
            suivi publicitaire, ni de traceur nécessitant votre consentement au sens de la
            réglementation applicable (RGPD, directive ePrivacy). Aucun bandeau de consentement
            n&apos;est donc affiché : il n&apos;y a rien à consentir.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Mesure d&apos;audience</h2>
          <p>
            Ce site utilise Vercel Analytics pour mesurer la fréquentation (pages vues, provenance
            des visites, appareil utilisé). Cet outil fonctionne sans cookie et sans identifiant
            permettant de vous reconnaître individuellement d&apos;une visite à l&apos;autre : les
            statistiques produites sont anonymes et agrégées. Étant exempté de consentement selon
            les critères de la CNIL, il ne nécessite pas de bandeau cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Stockage technique local</h2>
          <p>
            Le site utilise le stockage local de votre navigateur (<code className="text-white/90">sessionStorage</code>)
            pour une seule chose : mémoriser que l&apos;écran de chargement animé a déjà été vu au
            cours de votre visite, afin de ne pas le rejouer à chaque page. Cette information reste
            uniquement sur votre appareil, est effacée à la fermeture de l&apos;onglet et
            n&apos;est jamais transmise à un serveur. Il ne s&apos;agit pas d&apos;un cookie et
            elle n&apos;a aucune finalité de suivi ou de mesure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Aucun cookie tiers</h2>
          <p>
            Aucun cookie publicitaire, de réseau social ou de reciblage n&apos;est déposé sur ce
            site. Les formulaires (contact, estimation de devis) envoient vos données directement
            par email via Resend, sans dépôt de cookie côté navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Évolution de cette politique</h2>
          <p>
            Si ce site venait à utiliser un jour des cookies nécessitant votre consentement (outil
            de suivi publicitaire, par exemple), un bandeau de consentement conforme serait mis en
            place avant tout dépôt, et cette page serait mise à jour en conséquence.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Questions</h2>
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
