import type { Article, ArticleCategory } from '@/types/Article'

/** Libellés français des catégories d'articles */
export const ARTICLE_CATEGORY_LABELS: Record<ArticleCategory, string> = {
  actualite: 'Actualités',
  curatif: 'Réalisations curatives',
  recherche: 'Recherche',
  publication: 'Publications',
  conference: 'Conférences',
  conseil: 'Conseils de santé',
}

/** Catégories de la page Réalisations (éditorial) */
export const ACHIEVEMENT_CATEGORIES: ArticleCategory[] = [
  'curatif',
  'recherche',
  'publication',
  'conference',
]

/**
 * Actualités de la clinique.
 * Ne jamais inventer de contenu : placeholder tant que les vraies données
 * ne sont pas fournies. Pour les cas médicaux, ne jamais publier
 * d'information permettant d'identifier un patient.
 */
export const NEWS_ARTICLES: Article[] = [
  {
    id: 'art-inauguration-cmok-2026',
    title:
      "La clinique moderne CMOK inaugurée à Kolwezi, Dr Bernard Samona concrétise un ambitieux projet sanitaire",
    slug: 'inauguration-clinique-cmok-kolwezi',
    category: 'actualite',
    summary:
      "La Clinique Médicale et Ophtalmologique de Kolwezi (CMOK) a été officiellement inaugurée ce samedi 16 mai à Kolwezi, en présence de la ministre provinciale de la Santé, Pitchou Kayinda Kasela. Le docteur Bernard Samona, promoteur de l'établissement, concrétise ainsi son ambitieux projet sanitaire au bénéfice de la population du Lualaba.",
    coverImage: '/images/blog/inauguration-cmok.jpg',
    publishedAt: '2026-05-16',
    content: `La province du Lualaba vient de franchir un cap important dans le secteur sanitaire avec l’inauguration officielle de la Clinique Médicale et Ophtalmologique de Kolwezi (CMOK), une infrastructure moderne présentée comme l’une des plus ambitieuses réalisées ces dernières années dans la province.

La cérémonie inaugurale s’est déroulée ce samedi 16 mai à Kolwezi sous la présidence de la ministre provinciale de la Santé, Pitchou Kayinda Kasela, représentant la gouverneure de province, Fifi Masuka Saini, appelée à d’autres charges de l’État.

Plusieurs personnalités politico-administratives et religieuses ont pris part à cette manifestation de grande portée, notamment le président de l’Assemblée provinciale, des députés nationaux et provinciaux, le maire de Kolwezi, les bourgmestres des communes de Dilala et Manika ainsi que l’archevêque du diocèse de Kolwezi, Monseigneur Richard Kazadi Kamba.

Véritable mastodonte architectural au cœur de Kolwezi, la CMOK se distingue par ses équipements médicaux de dernière génération et ses installations modernes destinées à améliorer significativement la prise en charge des patients.

L’établissement dispose notamment d’une passerelle moderne facilitant le transfert des malades d’un bâtiment à un autre, symbole d’une conception pensée selon des standards hospitaliers modernes.

Derrière cette réalisation se trouve le docteur Bernard Samona, promoteur de la CMOK, dont l’engagement et la détermination ont été salués au cours de la cérémonie. De la conception du projet jusqu’à son équipement complet, le médecin entrepreneur affirme avoir affronté d’innombrables défis pour matérialiser cette vision sanitaire au bénéfice de la population lualabaise.

À travers cette œuvre de grande envergure, Bernard Somwe dit vouloir accompagner la vision du président de la République, Félix Tshisekedi, axée sur l’accès aux soins de santé de qualité pour tous, une vision relayée au niveau provincial par la gouverneure Fifi Masuka.

![facade-cmok.jpg|La façade de la clinique CMOK à Kolwezi]

« Une fierté pour toute la province »

Dans son allocution, le docteur Bernard Samona n’a pas caché son émotion face à l’aboutissement de ce projet qu’il qualifie de combat de longue haleine. Entre sacrifices financiers, contraintes techniques et volonté de servir la communauté, le promoteur de la CMOK a souligné avoir dû “souffler le chaud et le froid” pour ériger cette structure devenue aujourd’hui une référence médicale dans le Lualaba.

Pour la ministre provinciale de la Santé, Pitchou Kayinda Kasela, cette clinique représente bien plus qu’un simple établissement hospitalier. Elle constitue, selon elle, un motif de fierté provinciale et la preuve qu’un fils du terroir peut contribuer concrètement au développement sanitaire de sa province.

Elle a également salué la vision du docteur Bernard Samona, estimant que ce dernier “inscrit son nom en lettres d’or dans les annales du Lualaba” grâce à cette infrastructure sanitaire moderne.

Avec cette inauguration à Kolwezi, la CMOK consolide désormais son implantation dans la province du Lualaba. Le réseau compte actuellement trois grandes structures sanitaires, notamment à Dilolo, Fungurume et désormais à Kolwezi.

La cérémonie s’est clôturée dans une atmosphère de recueillement et d’action de grâce à travers une messe célébrée par Monseigneur Richard Kazadi Kamba, marquant ainsi l’ouverture officielle d’un établissement appelé à jouer un rôle majeur dans l’amélioration de l’offre des soins au Lualaba.`,
  },
]

/**
 * Réalisations de la clinique (bilan, projets, campagnes).
 */
export const ACHIEVEMENT_ARTICLES: Article[] = []

/**
 * Travaux de recherche menés par la clinique.
 */
export const RESEARCH_ARTICLES: Article[] = []

/**
 * Conseils de santé destinés aux patients.
 */
export const HEALTH_ADVICE_ARTICLES: Article[] = []

/**
 * Toutes les publications (pour la page article et les recherches).
 */
export const ALL_ARTICLES: Article[] = [
  ...NEWS_ARTICLES,
  ...ACHIEVEMENT_ARTICLES,
  ...RESEARCH_ARTICLES,
  ...HEALTH_ADVICE_ARTICLES,
]

/**
 * Exemple de structure (à compléter avec les informations vérifiées) :
 * {
 *   id: 'art-...',
 *   title: 'Titre de l\'article',
 *   slug: 'titre-de-l-article',
 *   category: 'actualite',
 *   summary: 'Résumé court affiché sur les cartes.',
 *   content: 'Premier paragraphe\n\nSecond paragraphe.',
 *   coverImage: '/images/blog/...jpg',
 *   publishedAt: '2026-04-12',
 *   author: 'Dr Nom Complet',
 * }
 */