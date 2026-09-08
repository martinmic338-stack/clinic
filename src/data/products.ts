import type { Product, ProductAvailability, ProductCategory, ProductFilter } from '@/types/Product'

/** Libellés français des catégories optiques */
export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  'lunettes-de-vue': 'Lunettes de vue',
  'lunettes-de-soleil': 'Lunettes de soleil',
  verres: 'Verres optiques',
  lentilles: 'Lentilles',
  accessoires: 'Accessoires',
}

/** Libellés de disponibilité */
export const PRODUCT_AVAILABILITY_LABELS: Record<ProductAvailability, string> = {
  'in-stock': 'Disponible',
  'low-stock': 'Stock limité',
  'out-of-stock': 'Épuisé',
}

/** Filtres de la galerie produits */
export const PRODUCT_FILTERS: ProductFilter[] = [
  'Hommes',
  'Femmes',
  'Enfants',
  'Unisexes',
  'Classiques',
  'Modernes',
]

/**
 * Catalogue optique (lunettes de vue, lunettes de soleil, verres, lentilles, accessoires).
 * Les produits réels seront renseignés ultérieurement.
 * Ne jamais inventer de produits : placeholder tant que les vraies références
 * ne sont pas fournies.
 * Champs disponibles : id/slug, name, reference, category, gender?, style?,
 * image?, description?, price?, currency?, availability.
 */
export const PRODUCTS: Product[] = []

/**
 * Exemple de structure (à compléter avec les informations vérifiées) :
 * {
 *   id: 'lunettes-001',
 *   slug: 'lunettes-001',
 *   name: 'Nom du modèle',
 *   reference: 'EDC-LV-0001',
 *   category: 'lunettes-de-vue',
 *   gender: 'Hommes',
 *   style: 'Classiques',
 *   image: '/images/products/...jpg',
 *   description: 'Description courte du produit.',
 *   price: 25,
 *   currency: 'USD',
 *   availability: 'in-stock',
 * }
 */