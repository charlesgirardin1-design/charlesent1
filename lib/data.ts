export const siteConfig = {
  name: "Charles Girardin",
  shortName: "Charles",
  initials: "CG",
  role: "Développeur web freelance",
  email: "charles.girardin1@gmail.com",
  tagline: "Je conçois des sites web qui vous ressemblent.",
  description:
    "Développeur web freelance basé en France, je conçois des sites vitrines, e-commerce et applications sur mesure : rapides, soignés et pensés pour convertir vos visiteurs en clients.",
  url: "https://charlesent1.vercel.app",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#portfolio" },
  { label: "Processus", href: "/#processus" },
  { label: "À propos", href: "/#apropos" },
  { label: "Estimation de devis", href: "/devis" },
  { label: "Contact", href: "/#contact" },
];

export const services = [
  {
    number: "01",
    slug: "sites-vitrines",
    title: "Sites vitrines",
    description:
      "Un site rapide, clair et responsive qui présente votre activité et inspire confiance dès les premières secondes. Structure pensée pour guider le visiteur vers l'action, optimisée pour le référencement local.",
    longDescription:
      "Un site vitrine, c'est souvent le premier contact entre votre activité et un client potentiel. Il doit charger vite, s'afficher parfaitement sur mobile et donner confiance en quelques secondes. Je conçois chaque site vitrine autour d'un objectif clair : transformer la visite en appel, en message ou en prise de rendez-vous. Structure épurée, contenus hiérarchisés, référencement local travaillé dès le départ.",
    includes: [
      "Design sur mesure, pas de thème générique",
      "Jusqu'à 6 pages (accueil, services, à propos, contact...)",
      "Formulaire de contact fonctionnel",
      "Optimisation SEO de base et vitesse de chargement",
      "Compatible mobile, tablette et desktop",
      "Formation à la prise en main incluse",
    ],
    price: "À partir de 800€",
  },
  {
    number: "02",
    slug: "e-commerce",
    title: "E-commerce",
    description:
      "Boutique en ligne complète : catalogue produits, paiement sécurisé et tunnel d'achat fluide, du panier jusqu'à la confirmation de commande. Une base solide pour vendre dès le premier jour.",
    longDescription:
      "Vendre en ligne demande plus qu'un catalogue : un tunnel d'achat fluide, un paiement sécurisé et une gestion des stocks qui ne vous complique pas la vie. Je construis des boutiques en ligne pensées pour réduire les abandons de panier, avec une expérience d'achat simple sur mobile comme sur desktop, et une interface d'administration que vous maîtrisez rapidement.",
    includes: [
      "Catalogue produits avec variantes (taille, couleur...)",
      "Paiement sécurisé (carte bancaire, autres moyens sur demande)",
      "Tunnel d'achat optimisé pour limiter les abandons",
      "Gestion des commandes et des stocks",
      "Emails transactionnels (confirmation, expédition)",
      "Formation à la gestion quotidienne de la boutique",
    ],
    price: "À partir de 1 800€",
  },
  {
    number: "03",
    slug: "identite-photographie",
    title: "Identité & Photographie",
    description:
      "Shooting produit, portrait ou événementiel, retouche incluse. De quoi habiller votre site et vos réseaux avec des visuels cohérents plutôt que des photos de banque d'images.",
    longDescription:
      "Un site bien construit avec des visuels génériques perd en crédibilité. Je propose des shootings photo (produit, portrait professionnel ou événementiel) pensés pour habiller votre site et vos réseaux avec une identité visuelle cohérente, loin des photos de banque d'images que tout le monde utilise. Retouche incluse, livraison dans des formats prêts à l'emploi pour le web.",
    includes: [
      "Shooting produit, portrait ou événementiel",
      "Retouche photo incluse",
      "Livraison en formats optimisés pour le web",
      "Conseils de mise en scène et de direction artistique",
      "Utilisation libre sur site et réseaux sociaux",
    ],
    price: "À partir de 150€",
  },
  {
    number: "04",
    slug: "suivi-maintenance",
    title: "Suivi & mises à jour",
    description:
      "Après la mise en ligne, je reste disponible pour faire évoluer votre site : contenus, corrections, nouvelles fonctionnalités. Formule ponctuelle ou récurrente, ajustée à la fréquence réelle de vos demandes.",
    longDescription:
      "Un site n'est jamais vraiment terminé : nouveaux contenus, corrections, ajout de fonctionnalités. Je reste disponible après la mise en ligne pour faire évoluer votre site, avec une formule ajustée à la fréquence réelle de vos demandes plutôt qu'un forfait figé qui ne correspond pas à votre usage. Ponctuel ou récurrent, vous ne payez que ce dont vous avez besoin.",
    includes: [
      "Corrections et ajustements post-lancement",
      "Ajout de contenus ou de nouvelles pages",
      "Petites évolutions fonctionnelles",
      "Surveillance technique (sécurité, mises à jour)",
      "Facturation à l'usage, sans engagement figé",
    ],
    price: "Tarif variable selon vos besoins",
  },
];

export type ProjectCategory = "vitrine" | "app";

export const projects: {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  url: string;
  gradient: string;
  image?: string;
  logo?: string;
}[] = [
  {
    title: "Daniel Bain",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    url: "https://www.danielbain.fr/",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    image: "/projects/danielbain-cover.jpg",
    logo: "/projects/danielbain-logo.png",
  },
  {
    title: "Adebat",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    url: "https://www.adebat.fr/",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    image: "/projects/adebat-cover.jpg",
    logo: "/projects/adebat-logo.png",
  },
  {
    title: "Frigomind",
    category: "app",
    categoryLabel: "Application web",
    url: "https://frigomind.vercel.app",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    logo: "/projects/frigomind-logo.png",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Échange",
    description:
      "On discute de votre projet lors d'un appel de 30 minutes, sans engagement : votre activité, vos objectifs, votre budget et vos contraintes de délai.",
  },
  {
    number: "02",
    title: "Devis",
    description:
      "Je vous envoie une proposition détaillée sous 48h : périmètre exact, technologies, délais et tarif clairement posé, sans surprise.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Maquette avant tout développement pour valider la direction, puis intégration par étapes avec des points réguliers pour suivre l'avancement.",
  },
  {
    number: "04",
    title: "Livraison & suivi",
    description:
      "Mise en ligne, vérifications techniques et courte formation à la prise en main. Je reste disponible pour les ajustements post-lancement.",
  },
];

export const stats = [
  { value: 48, suffix: "h", label: "Délai de réponse devis" },
  { value: 100, suffix: "%", label: "Sites responsives & accessibles" },
];

export const testimonials = [
  {
    quote:
      "Un site rapide se sent avant même de se voir — c'est ce qui guide chaque décision technique sur un projet.",
    author: "Philosophie de travail",
  },
  {
    quote:
      "Un bon site n'est pas celui qui a le plus d'effets, mais celui qui répond le plus vite à la question du visiteur.",
    author: "Sur la conception",
  },
  {
    quote:
      "Le design le plus réussi est souvent celui qu'on ne remarque pas, parce qu'il ne gêne jamais.",
    author: "Sur le design",
  },
];

export const faqs = [
  {
    question: "Combien de temps faut-il pour livrer un site ?",
    answer:
      "Comptez généralement 2 à 3 semaines pour un site vitrine et 4 à 5 semaines pour un e-commerce, selon la complexité et la rapidité des retours sur les maquettes. Le délai précis est toujours indiqué dans le devis.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "Je reste disponible pour les ajustements et questions qui suivent le lancement. Des formules de maintenance (mises à jour, sauvegardes, petites modifications) peuvent aussi être mises en place si besoin.",
  },
  {
    question: "Le référencement (SEO) est-il inclus ?",
    answer:
      "Une optimisation SEO de base (structure, balises, vitesse de chargement, compatibilité mobile) est incluse dans chaque projet. Un accompagnement SEO plus poussé peut être ajouté en option.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "En général, un acompte au démarrage puis le solde à la livraison. Les modalités précises (échéancier, moyens de paiement) sont détaillées dans le devis avant de commencer.",
  },
];
