import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment vos données personnelles sont collectées, utilisées et protégées.",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 md:py-40">
      <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
        Informations légales
      </p>
      <h1 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold tracking-tight mb-12">
        Politique de confidentialité
      </h1>

      <div className="space-y-10 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Responsable du traitement</h2>
          <p>
            {siteConfig.name} est responsable du traitement des données collectées sur ce site.
            Pour toute question, écrivez à{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Données collectées</h2>
          <p>
            Ce site collecte des données personnelles uniquement lorsque vous remplissez
            volontairement l&apos;un des formulaires suivants :
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Formulaire de contact : nom, email, message</li>
            <li>
              Formulaire d&apos;estimation de devis : nom, email, précisions optionnelles, ainsi
              que vos réponses (type de projet, options souhaitées, délai)
            </li>
          </ul>
          <p className="mt-3">
            Aucune autre donnée personnelle n&apos;est collectée : pas de compte utilisateur, pas
            de cookie de suivi publicitaire.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Finalité et base légale</h2>
          <p>
            Ces données sont utilisées exclusivement pour répondre à votre demande (devis,
            question, prise de contact). La base légale du traitement est l&apos;intérêt
            légitime à échanger avec les visiteurs qui en font la demande.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Destinataires des données</h2>
          <p>
            Les messages envoyés via les formulaires sont transmis par email à {siteConfig.name}{" "}
            via Resend, un service tiers d&apos;envoi d&apos;email qui agit en tant que
            sous-traitant technique. Vos données ne sont ni vendues, ni cédées, ni utilisées à
            des fins commerciales ou publicitaires par un tiers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Durée de conservation</h2>
          <p>
            Les données transmises via les formulaires sont conservées le temps nécessaire au
            traitement de votre demande, puis supprimées ou archivées de manière limitée dans le
            cadre du suivi commercial habituel.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Mesure d&apos;audience</h2>
          <p>
            Ce site utilise Vercel Analytics pour mesurer la fréquentation de manière anonyme et
            agrégée (pages vues, provenance des visites), sans cookie ni identifiant permettant
            de vous reconnaître individuellement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            d&apos;un droit d&apos;accès, de rectification et de suppression de vos données
            personnelles. Vous pouvez exercer ces droits à tout moment en écrivant à{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
            États-Unis.
          </p>
        </section>
      </div>
    </div>
  );
}
