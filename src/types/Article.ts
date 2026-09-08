/** Catégorie d'article / réalisation */
export type ArticleCategory =
  | 'actualite'
  | 'curatif'
  | 'recherche'
  | 'publication'
  | 'conference'
  | 'conseil'

export interface Article {
  /** Identifiant unique */
  id: string
  /** Titre */
  title: string
  /** URL amicale (/actualites/:slug) */
  slug: string
  /** Catégorie */
  category: ArticleCategory
  /** Résumé court (cartes) */
  summary: string
  /** Contenu complet (paragraphes séparés par une ligne vide) */
  content: string
  /** Image de couverture (public/images/blog/*) */
  coverImage?: string
  /** Date de publication (ISO 8601) */
  publishedAt: string
  /** Auteur (à renseigner uniquement si vérifié) */
  author?: string
}