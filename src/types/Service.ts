export interface Service {
  /** Identifiant unique (slug) */
  id: string
  /** Nom du service */
  name: string
  /** URL amicale (/services/:slug) */
  slug: string
  /** Présentation courte (cartes, listes) */
  shortDescription: string
  /** Description détaillée (page du service) */
  description: string
  /** Phrase d'accroche spécifique au service (si fournie) */
  tagline?: string
  /** Prestations proposées (seulement celles du document) */
  prestations?: string[]
  /** Icône optionnelle (nom d'une icône) */
  icon?: string
  /** Image optionnelle (public/images/services/*) */
  image?: string
}