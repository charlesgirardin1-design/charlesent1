import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente applicables aux prestations proposées.",
  robots: { index: false, follow: true },
};

export default function CGV() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
        Informations légales
      </p>
      <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-12">
        Conditions générales de vente
      </h1>

      <div className="space-y-10 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Article 1 — Objet</h2>
          <p>
            Les présentes conditions générales de vente régissent les prestations de
            développement web, de conception de sites internet et de photographie proposées
            par {siteConfig.name} ({siteConfig.role}, statut entrepreneur individuel /
            micro-entreprise), à destination de clients professionnels ou particuliers. Toute
            commande implique l&apos;acceptation sans réserve des présentes conditions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Article 2 — Devis et commande</h2>
          <p>
            Chaque prestation fait l&apos;objet d&apos;un devis détaillé (périmètre, délais,
            tarif) établi après échange avec le client. La commande est considérée comme ferme
            à réception du devis signé et, le cas échéant, du versement de l&apos;acompte
            demandé.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 3 — Prix et modalités de paiement
          </h2>
          <p>
            Les tarifs sont exprimés en euros. Sauf mention contraire dans le devis, le
            paiement s&apos;effectue en deux temps : un acompte au démarrage de la prestation,
            puis le solde à la livraison. Les modalités précises (échéancier, moyens de
            paiement acceptés) sont détaillées dans chaque devis avant le début des travaux.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 4 — Délais de réalisation
          </h2>
          <p>
            Les délais indiqués dans le devis sont donnés à titre indicatif et courent à
            compter de la réception de l&apos;ensemble des éléments nécessaires au projet
            (contenus, accès, validations). Un retard dans la fourniture de ces éléments par
            le client peut entraîner un décalage proportionnel du délai de livraison.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 5 — Obligations du prestataire
          </h2>
          <p>
            {siteConfig.name}
            {" "}
            s&apos;engage à réaliser les prestations commandées avec soin et
            diligence, conformément aux règles de l&apos;art, et à tenir le client informé de
            l&apos;avancement du projet aux étapes clés définies au devis.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 6 — Obligations du client
          </h2>
          <p>
            Le client s&apos;engage à fournir dans les délais convenus l&apos;ensemble des
            éléments nécessaires à la réalisation du projet (textes, visuels, accès
            techniques) et à valider les étapes soumises à son approbation dans un délai
            raisonnable, afin de ne pas retarder le projet.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 7 — Propriété intellectuelle
          </h2>
          <p>
            Les droits d&apos;usage sur les livrables (code, visuels créés spécifiquement pour
            le projet) sont transférés au client à réception du paiement intégral de la
            prestation. {siteConfig.name} conserve le droit de mentionner et de présenter le
            projet réalisé dans son portfolio, sauf demande contraire explicite du client.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Article 8 — Responsabilité</h2>
          <p>
            {siteConfig.name}
            {" "}
            met en œuvre tous les moyens raisonnables pour assurer la
            qualité et la disponibilité des sites livrés, sans garantir une absence totale
            d&apos;incident lié à des services tiers (hébergement, noms de domaine, API
            externes) hors de son contrôle direct.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Article 9 — Droit applicable et litiges
          </h2>
          <p>
            Les présentes conditions sont soumises au droit français. En cas de litige, une
            solution amiable sera recherchée en priorité avant toute action judiciaire, qui
            relèvera des tribunaux compétents.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>
            Pour toute question relative à ces conditions, écrivez à{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
