export const siteConfig = {
  name: "Kodarium",
  shortName: "Kodarium",
  initials: "K",
  role: "Développeur web freelance",
  email: "contact@kodarium.fr",
  tagline: "Je conçois des sites web qui convertissent.",
  description:
    "Développeur web freelance basé en France, je conçois des sites vitrines, e-commerce et applications sur mesure : rapides, soignés et pensés pour convertir vos visiteurs en clients.",
  url: "https://kodarium.fr",
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Processus", href: "/processus" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Devis", href: "/devis" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    slug: "sites-vitrines",
    title: "Sites vitrines",
    description:
      "Un site rapide, clair et responsive qui présente votre activité et inspire confiance dès les premières secondes. Structure pensée pour guider le visiteur vers l'action, optimisée pour le référencement local.",
    longDescription:
      "Un site vitrine, c'est souvent le premier contact entre votre activité et un client potentiel. Il doit charger vite, s'afficher parfaitement sur mobile et donner confiance en quelques secondes. Je conçois chaque site vitrine autour d'un objectif clair : transformer la visite en appel, en message ou en prise de rendez-vous. Structure épurée, contenus hiérarchisés, référencement local travaillé dès le départ. Deux formules selon vos besoins : « Essentiel » (1 à 3 pages, autour de 1 100 €) pour une présence propre et rapide, ou « Sur-mesure » (4 à 8 pages, autour de 2 000 €) pour un vrai outil de conversion avec un design unique.",
    includes: [
      "Design sur mesure, pas de thème générique",
      "De 1 à 8 pages selon la formule choisie",
      "Formulaire de contact fonctionnel",
      "Optimisation SEO de base et vitesse de chargement",
      "Compatible mobile, tablette et desktop",
      "Formation à la prise en main incluse",
    ],
    price: "À partir de 1 100 €",
  },
  {
    number: "02",
    slug: "e-commerce",
    title: "E-commerce",
    description:
      "Boutique en ligne complète : catalogue produits, paiement sécurisé et tunnel d'achat fluide, du panier jusqu'à la confirmation de commande. Une base solide pour vendre dès le premier jour.",
    longDescription:
      "Vendre en ligne demande plus qu'un catalogue : un tunnel d'achat fluide, un paiement sécurisé et une gestion des stocks qui ne vous complique pas la vie. Je construis des boutiques en ligne pensées pour réduire les abandons de panier, avec une expérience d'achat simple sur mobile comme sur desktop, et une interface d'administration que vous maîtrisez rapidement. Le tarif dépend du catalogue et des fonctionnalités (espace client, réservations avancées...) : comptez à partir de 3 500 €.",
    includes: [
      "Catalogue produits avec variantes (taille, couleur...)",
      "Paiement sécurisé (carte bancaire, autres moyens sur demande)",
      "Tunnel d'achat optimisé pour limiter les abandons",
      "Gestion des commandes et des stocks",
      "Emails transactionnels (confirmation, expédition)",
      "Formation à la gestion quotidienne de la boutique",
    ],
    price: "À partir de 3 500 €",
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
    price: "À partir de 150 €",
  },
  {
    number: "04",
    slug: "suivi-maintenance",
    title: "Suivi & mises à jour",
    description:
      "Après la mise en ligne, je reste disponible pour faire évoluer votre site : contenus, corrections, nouvelles fonctionnalités. Formule ponctuelle, ou Pack Sérénité en abonnement mensuel pour sécuriser votre site au quotidien.",
    longDescription:
      "Un site n'est jamais vraiment terminé : nouveaux contenus, corrections, ajout de fonctionnalités. Je reste disponible après la mise en ligne pour faire évoluer votre site, au coup par coup, ou via le Pack Sérénité : une formule mensuelle qui sécurise votre site (hébergement, sauvegardes, mises à jour) et inclut 1 à 2 petites modifications de contenu par mois, plutôt qu'un forfait figé qui ne correspond pas à votre usage.",
    includes: [
      "Hébergement sécurisé et sauvegardes régulières",
      "Mises à jour techniques",
      "1 à 2 petites modifications de textes par mois",
      "Corrections et ajustements ponctuels hors abonnement",
      "Surveillance technique (sécurité, disponibilité)",
    ],
    price: "49 € à 99 € / mois",
  },
];

export type ProjectCategory = "vitrine" | "app";

export const projects: {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  sector: string;
  url: string;
  gradient: string;
  image?: string;
  logo?: string;
  description: string;
  features: string[];
}[] = [
  {
    slug: "daniel-bain",
    title: "Daniel Bain",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    sector: "Plomberie, couverture & étanchéité",
    url: "https://www.danielbain.fr/",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
    image: "/projects/danielbain-cover.jpg",
    logo: "/projects/danielbain-logo.png",
    description:
      "Daniel Bain est plombier-couvreur indépendant en Île-de-France, spécialisé en plomberie, couverture, étanchéité et travaux à la corde. J'ai conçu pour lui un site vitrine qui présente clairement son activité et ses domaines d'intervention, pour rassurer un client potentiel dès les premières secondes et faciliter la demande de devis.",
    features: [
      "Présentation claire des domaines d'intervention",
      "Mise en avant de photos de chantier réelles",
      "Formulaire de contact direct",
      "Design responsive, pensé pour une consultation mobile",
      "Structure optimisée pour le référencement local",
    ],
  },
  {
    slug: "adebat",
    title: "Adebat",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    sector: "Plomberie, étanchéité & chauffage",
    url: "https://www.adebat.fr/",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    image: "/projects/adebat-cover.jpg",
    logo: "/projects/adebat-logo.png",
    description:
      "ADEBAT est une entreprise spécialisée en plomberie, étanchéité et chauffage en Île-de-France. Le site que j'ai réalisé présente l'équipe et les prestations, avec une identité visuelle reconnaissable, pour installer la confiance dès l'arrivée sur le site et donner une image professionnelle à l'entreprise.",
    features: [
      "Présentation de l'équipe et des prestations",
      "Identité visuelle cohérente (logo, couleurs)",
      "Galerie de réalisations",
      "Formulaire de contact",
      "Design responsive",
    ],
  },
  {
    slug: "frigomind",
    title: "Frigomind",
    category: "app",
    categoryLabel: "Application web",
    sector: "Application anti-gaspillage alimentaire",
    url: "https://frigomind.vercel.app",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    logo: "/projects/frigomind-logo.png",
    description:
      "FrigoMind est une application qui permet de photographier le contenu de son frigo pour obtenir automatiquement la liste des ingrédients détectés et des idées de recettes personnalisées, dans une démarche anti-gaspillage : « moins de gaspillage, plus de plaisirs ».",
    features: [
      "Détection d'ingrédients à partir d'une photo",
      "Suggestions de recettes personnalisées",
      "Identité de marque forte et reconnaissable",
      "Interface pensée mobile-first",
    ],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Échange",
    description:
      "Je discute de votre projet lors d'un appel de 30 minutes, sans engagement : votre activité, vos objectifs, votre budget et vos contraintes de délai. Cet échange me permet de cerner précisément ce dont vous avez besoin avant de vous proposer quoi que ce soit.",
  },
  {
    number: "02",
    title: "Devis",
    description:
      "Je vous envoie une proposition détaillée sous 48h : périmètre exact des pages et fonctionnalités, technologies utilisées, délai de réalisation et tarif clairement posé. Rien n'est engageant, vous êtes libre d'accepter, de demander des ajustements ou de ne pas donner suite.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Je commence toujours par une maquette pour valider ensemble la direction visuelle avant d'écrire la moindre ligne de code. Le développement avance ensuite par étapes, avec des points réguliers pour que vous suiviez l'avancement et puissiez ajuster en cours de route.",
  },
  {
    number: "04",
    title: "Livraison & suivi",
    description:
      "Mise en ligne, vérifications techniques (vitesse, mobile, formulaires) et courte formation à la prise en main pour que vous soyez autonome sur les contenus courants. Je reste disponible ensuite pour les ajustements post-lancement et les questions qui suivent.",
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
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Je développe avec des technologies modernes (React, Next.js) plutôt qu'avec des constructeurs de sites génériques : le site est plus rapide, plus flexible et plus facile à faire évoluer dans le temps. Le choix technique précis dépend toujours des besoins réels du projet, pas d'une préférence personnelle.",
  },
  {
    question: "Le site et le nom de domaine m'appartiennent-ils ?",
    answer:
      "Oui. Une fois le projet livré et soldé, le code, le contenu et le nom de domaine vous appartiennent intégralement. Vous n'êtes lié à aucun abonnement obligatoire ni dépendant de moi pour héberger ou faire évoluer votre site ailleurs si vous le souhaitez.",
  },
  {
    question: "Travaillez-vous avec des clients partout en France ?",
    answer:
      "Oui, je travaille à distance avec des clients dans toute la France (appels visio, échanges par email et messagerie). Un rendez-vous en présentiel reste possible ponctuellement selon les projets et la localisation.",
  },
];
