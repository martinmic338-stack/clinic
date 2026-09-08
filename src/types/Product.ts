/** Disponibilité d'un produit en boutique */
export type ProductAvailability = 'in-stock' | 'low-stock' | 'out-of-stock'

/** Catégorie de produit optique */
export type ProductCategory =
  | 'lunettes-de-vue'
  | 'lunettes-de-soleil'
  | 'verres'
  | 'lentilles'
  | 'accessoires'

/** Public cible d'un modèle de lunettes */
export type ProductGender = 'Hommes' | 'Femmes' | 'Enfants' | 'Unisexes'

/** Style d'un modèle de lunettes */
export type ProductStyle = 'Classiques' | 'Modernes'

/** Filtre de la galerie produits */
export type ProductFilter = ProductGender | ProductStyle

export interface Product {
  /** Identifiant unique */
  id: string
  /** Alias utilisé dans l'URL /produits/:slug */
  slug: string
  /** Nom commercial du produit */
  name: string
  /** Référence interne du produit */
  reference: string
  /** Catégorie optique */
  category: ProductCategory
  /** Public cible (filtre) */
  gender?: ProductGender
  /** Style (filtre) */
  style?: ProductStyle
  /** Image du produit (public/images/products/*) — placeholder si absente */
  image?: string
  /** Description courte */
  description?: string
  /** Prix unitaire (absent = « Prix sur demande ») */
  price?: number
  /** Devise du prix */
  currency?: 'USD' | 'CDF'
  /** Disponibilité */
  availability: ProductAvailability
}