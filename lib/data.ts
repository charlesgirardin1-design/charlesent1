export const siteConfig = {
  name: "[Ton Nom]",
  role: "Développeur web freelance",
  email: "ton-email@exemple.fr",
  tagline: "Je conçois des sites web qui convertissent.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "Processus", href: "#processus" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    number: "01",
    title: "Sites vitrines",
    description:
      "Un site rapide, clair et responsive qui présente votre activité et inspire confiance dès les premières secondes. Structure pensée pour guider le visiteur vers l'action, optimisée pour le référencement local.",
    price: "À partir de 800€",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Boutique en ligne complète : catalogue produits, paiement sécurisé et tunnel d'achat fluide, du panier jusqu'à la confirmation de commande. Une base solide pour vendre dès le premier jour.",
    price: "À partir de 1 800€",
  },
  {
    number: "03",
    title: "Identité & Photographie",
    description:
      "Shooting produit, portrait ou événementiel, retouche incluse. De quoi habiller votre site et vos réseaux avec des visuels cohérents plutôt que des photos de banque d'images.",
    price: "À partir de 150€",
  },
];

export type ProjectCategory = "vitrine" | "app";

export const projects: {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  url: string;
  gradient: string;
}[] = [
  {
    title: "Daniel Bain",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    url: "http://danielbain.fr/",
    gradient: "from-blue-500 via-indigo-500 to-violet-600",
  },
  {
    title: "Adebat",
    category: "vitrine",
    categoryLabel: "Site vitrine",
    url: "http://adebat.fr/",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
  },
  {
    title: "Frigomind",
    category: "app",
    categoryLabel: "Application web",
    url: "https://frigomind.vercel.app",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
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
  { value: 2, suffix: "", label: "Casquettes : dev & photo" },
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
      "Comptez généralement 2 à 4 semaines pour un site vitrine et 4 à 8 semaines pour un e-commerce, selon la complexité et la rapidité des retours sur les maquettes. Le délai précis est toujours indiqué dans le devis.",
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
    question: "Puis-je modifier le site moi-même ensuite ?",
    answer:
      "Oui. Une courte formation à la prise en main est incluse à la livraison, et le site est construit avec des outils simples à mettre à jour au quotidien.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "En général, un acompte au démarrage puis le solde à la livraison. Les modalités précises (échéancier, moyens de paiement) sont détaillées dans le devis avant de commencer.",
  },
];
