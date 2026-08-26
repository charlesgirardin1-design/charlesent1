export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prix-site-vitrine-independant-tpe",
    title: "Combien coûte un site vitrine pour un indépendant ou une TPE ?",
    excerpt:
      "Les fourchettes de prix réelles selon la taille du projet, ce qui fait varier la facture, et les questions à poser avant de signer un devis.",
    category: "Tarifs",
    date: "2026-02-03",
    readingTime: "6 min",
    content: [
      {
        type: "p",
        text: "C'est la première question que pose quasiment tout le monde, et c'est normal : sans repère, un devis de 800 € ou de 4 000 € semble aussi arbitraire l'un que l'autre. Voici comment se construit réellement le prix d'un site vitrine, pour que vous puissiez évaluer un devis (le mien ou celui de quelqu'un d'autre) en connaissance de cause.",
      },
      { type: "h2", text: "Ce qui fait varier le prix" },
      {
        type: "p",
        text: "Le prix d'un site vitrine dépend de trois choses principalement : le nombre de pages, le niveau de sur-mesure attendu (design unique vs structure simple), et les options techniques (prise de rendez-vous en ligne, multilingue, espace membre...). Un site de présentation à 3 pages n'a pas le même coût de conception qu'un site de 8 pages avec une identité visuelle travaillée dès le départ.",
      },
      {
        type: "ul",
        items: [
          "Un site simple (Accueil, Prestations, Contact) : présence rapide et propre, pour démarrer ou tester une activité.",
          "Un site plus complet (4 à 8 pages) : structure pensée pour convertir, contenu par page dédiée, souvent avec un design entièrement sur mesure.",
          "Une boutique en ligne : catalogue produits, paiement sécurisé, gestion des commandes — un projet nettement plus lourd techniquement.",
        ],
      },
      {
        type: "p",
        text: "Sur mon site, ces trois niveaux correspondent grosso modo aux formules détaillées sur la page Services, avec un ordre de grandeur clair pour chacune plutôt qu'un prix unique qui ne veut rien dire.",
      },
      { type: "h2", text: "Les options qui font grimper la facture" },
      {
        type: "p",
        text: "Au-delà de la base, certains besoins s'ajoutent en options : la création d'une identité visuelle (logo, charte graphique) si vous n'en avez pas encore, la rédaction des textes si vous préférez déléguer plutôt que fournir vos propres contenus, ou l'intégration d'une fonctionnalité spécifique comme un système de réservation en ligne. Rien de tout cela n'est obligatoire — ce sont des briques que vous ajoutez selon vos besoins réels, pas un forfait figé.",
      },
      { type: "h2", text: "Le piège du prix « trop beau »" },
      {
        type: "p",
        text: "Un site à 200 € existe, généralement construit sur un thème générique préconfiguré, sans réflexion sur votre activité ni sur le référencement. Ce n'est pas nécessairement un mauvais choix pour tester une idée sans budget, mais ce n'est pas comparable à un site conçu pour convertir des visiteurs en clients. Le bon réflexe : demandez toujours ce qui est concrètement inclus (design sur mesure ou thème, formation à la prise en main, optimisation SEO de base) avant de comparer deux devis sur le seul critère du prix.",
      },
      { type: "h2", text: "Comment obtenir un chiffrage fiable" },
      {
        type: "p",
        text: "La façon la plus rapide d'avoir une idée réaliste pour votre projet précis : répondre à quelques questions plutôt que de deviner à partir d'une grille tarifaire générique. C'est exactement ce que fait mon simulateur de devis — quatre étapes, une estimation indicative en quelques clics, sans engagement.",
      },
    ],
  },
  {
    slug: "site-vitrine-ou-reseaux-sociaux",
    title: "Site vitrine ou réseaux sociaux : que choisir pour développer son activité ?",
    excerpt:
      "Un compte Instagram bien tenu peut suffire à démarrer. Mais à partir de quel moment un vrai site devient-il indispensable ?",
    category: "Stratégie",
    date: "2026-02-17",
    readingTime: "5 min",
    content: [
      {
        type: "p",
        text: "Beaucoup d'indépendants et de petites entreprises démarrent avec une simple page Instagram ou Facebook, et c'est souvent le bon réflexe au lancement : rapide, gratuit, déjà là où sont vos premiers clients. La question se pose différemment une fois l'activité lancée : faut-il investir dans un site, ou les réseaux sociaux suffisent-ils ?",
      },
      { type: "h2", text: "Ce que les réseaux sociaux font bien" },
      {
        type: "p",
        text: "Les réseaux sociaux excellent pour la proximité et la fréquence : montrer votre travail au quotidien, interagir directement avec votre audience, tester rapidement ce qui plaît. Pour une activité très locale ou très visuelle, c'est un canal difficile à égaler en termes d'engagement immédiat.",
      },
      { type: "h2", text: "Ce qu'ils ne font pas" },
      {
        type: "ul",
        items: [
          "Vous ne possédez rien : un changement d'algorithme, une suspension de compte, et votre visibilité disparaît du jour au lendemain.",
          "Vous êtes quasiment invisible sur Google : un profil Instagram se référence très mal comparé à un site avec du contenu structuré.",
          "L'image reste dépendante de codes qui ne sont pas les vôtres : mise en page imposée, publicité des concurrents entre deux posts, absence de formulaire de contact professionnel.",
          "Difficile de présenter une offre complète : tarifs, réalisations, avis clients, tout est dispersé entre plusieurs posts au lieu d'être structuré.",
        ],
      },
      { type: "h2", text: "Le vrai critère : qui vous cherche, et comment" },
      {
        type: "p",
        text: "Si vos clients vous découvrent principalement en scrollant (mode, déco, food...), les réseaux sociaux resteront centraux, et un site vient en complément pour asseoir votre crédibilité. Si vos clients vous cherchent activement (« plombier près de moi », « photographe mariage [ville] »), un site optimisé pour le référencement local devient rapidement plus rentable qu'un post qui disparaît du fil en 48h.",
      },
      { type: "h2", text: "Le bon combo, dans la pratique" },
      {
        type: "p",
        text: "Dans l'immense majorité des cas, ce n'est pas un choix binaire : le site devient la base stable (informations, preuve de sérieux, formulaire de contact, référencement) et les réseaux sociaux servent à y amener du trafic régulièrement. C'est exactement la logique derrière les sites que je conçois : rapides, clairs, pensés pour transformer une visite — qu'elle vienne de Google ou d'Instagram — en prise de contact.",
      },
    ],
  },
  {
    slug: "seo-local-artisan-independant",
    title: "SEO local : comment être visible sur Google quand on est artisan ou indépendant",
    excerpt:
      "Les leviers concrets pour apparaître dans les recherches de vos futurs clients, sans budget publicitaire, quand on exerce sur une zone géographique précise.",
    category: "SEO",
    date: "2026-03-05",
    readingTime: "7 min",
    content: [
      {
        type: "p",
        text: "Pour un artisan, un professionnel de santé ou tout indépendant qui travaille sur une zone géographique définie, le SEO local est souvent le levier le plus rentable : pas de budget publicitaire récurrent, et un client qui cherche activement ce que vous proposez, au bon moment.",
      },
      { type: "h2", text: "La fiche Google Business Profile, la base incontournable" },
      {
        type: "p",
        text: "Avant même de parler de site, la fiche Google Business Profile (anciennement Google My Business) est le premier réflexe : elle apparaît directement dans les résultats de recherche et sur Google Maps. Nom, horaires, zone d'intervention, photos, et surtout des avis clients récents et réguliers — c'est souvent ce qui fait la différence entre deux professionnels équivalents dans les résultats locaux.",
      },
      { type: "h2", text: "Un site qui parle le langage de vos clients" },
      {
        type: "p",
        text: "Un site vitrine bien construit renforce ce que la fiche Google ne peut pas montrer : le détail de vos prestations, des exemples de réalisations, et surtout du contenu qui reprend les mots exacts que tapent vos clients (« plombier [ville] », « couvreur urgence toiture », plutôt que des formulations trop génériques). C'est un travail de structure autant que de rédaction.",
      },
      {
        type: "ul",
        items: [
          "Mentionnez votre zone d'intervention explicitement, page par page, pas seulement sur la page Contact.",
          "Donnez à chaque prestation sa propre page plutôt que de tout regrouper sur une seule page « Services » trop dense.",
          "Ajoutez de vraies photos de vos réalisations plutôt que des visuels de banque d'images — Google et les visiteurs valorisent tous les deux le contenu original.",
        ],
      },
      { type: "h2", text: "La vitesse de chargement, un critère sous-estimé" },
      {
        type: "p",
        text: "Un site lent perd des visiteurs avant même qu'ils aient lu la première ligne, et Google le sait : la vitesse de chargement fait partie des critères de classement, particulièrement sur mobile. C'est un point sur lequel beaucoup de sites construits sur des thèmes génériques surchargés d'extensions perdent du terrain face à un site pensé sur mesure et allégé dès la conception.",
      },
      { type: "h2", text: "La régularité plutôt que la perfection" },
      {
        type: "p",
        text: "Le SEO local récompense la constance : une fiche Google mise à jour, des avis qui continuent d'arriver, un site qui évolue de temps en temps (nouvelles réalisations, nouveaux articles) plutôt qu'un site figé depuis sa mise en ligne. C'est d'ailleurs pour ça que je propose un accompagnement après la mise en ligne plutôt que de livrer un site et de disparaître.",
      },
    ],
  },
  {
    slug: "signes-refaire-site-internet",
    title: "5 signes qu'il est temps de refaire votre site internet",
    excerpt:
      "Un site qui a quelques années n'est pas forcément à jeter, mais certains signaux ne trompent pas. Comment savoir si une refonte s'impose vraiment.",
    category: "Conseils",
    date: "2026-03-19",
    readingTime: "5 min",
    content: [
      {
        type: "p",
        text: "Refaire un site est un investissement, et la question revient souvent : est-ce vraiment nécessaire, ou une simple mise à jour suffirait-elle ? Voici les signaux qui, dans mon expérience, justifient réellement une refonte plutôt qu'un ravalement de façade.",
      },
      { type: "h2", text: "1. Il ne s'affiche pas correctement sur mobile" },
      {
        type: "p",
        text: "Plus de la moitié du trafic web passe désormais par mobile. Un site qui oblige à zoomer, dont les boutons sont trop petits pour un doigt, ou dont les menus ne fonctionnent pas au tactile perd des visiteurs en quelques secondes — et Google le pénalise directement dans son classement mobile-first.",
      },
      { type: "h2", text: "2. Il met plus de 3 secondes à charger" },
      {
        type: "p",
        text: "Au-delà de 3 secondes de chargement, une part significative des visiteurs quitte la page avant même qu'elle soit affichée. Les sites vieillissants accumulent souvent des extensions, des images non compressées et du code superflu qui alourdissent chaque visite — un problème rarement résolu par de simples réglages.",
      },
      { type: "h2", text: "3. Vous ne savez plus comment le modifier vous-même" },
      {
        type: "p",
        text: "Si chaque petite modification de texte nécessite de recontacter un prestataire injoignable, ou de rouvrir un outil que vous ne maîtrisez plus, le site freine votre activité au lieu de la servir. Un bon site doit rester simple à faire évoluer, au moins pour les contenus courants.",
      },
      { type: "h2", text: "4. Il ne reflète plus votre activité actuelle" },
      {
        type: "p",
        text: "Une offre qui a évolué, des tarifs qui ont changé, des réalisations récentes qui manquent à l'appel : un site figé dans le temps envoie un signal de désintérêt, même involontaire, à un visiteur qui compare plusieurs prestataires.",
      },
      { type: "h2", text: "5. Vous ne recevez presque aucune demande de contact via le site" },
      {
        type: "p",
        text: "C'est le signal le plus concret : un site est un outil de conversion, pas une simple carte de visite numérique. S'il génère très peu d'appels, de messages ou de devis, le problème est souvent structurel (parcours peu clair, absence d'appel à l'action, contenu qui ne rassure pas) plutôt qu'un détail à corriger.",
      },
      {
        type: "p",
        text: "Si vous reconnaissez deux ou trois de ces signes, ça vaut le coup d'en discuter. Une estimation de devis prend quelques minutes et vous donne un premier ordre d'idée, sans engagement.",
      },
    ],
  },
];
