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
export const NEWS_ARTICLES: Article[] = []

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