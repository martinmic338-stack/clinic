/**
 * Informations officielles de la clinique.
 * Source unique de vérité pour les coordonnées et l'identité.
 */
export const CLINIC = {
  name: 'EYES AND DENTAL CLINIC',
  organization: 'FONDATION MISÉRICORDE',
  slogan: 'Votre sourire et votre vision sont notre mission.',
  address: 'Av. Lumumba, N° 356, Commune de Manika – Kolwezi, Lualaba',

  phone: {
    emergency: '+243 90 300 14 46',
    emergencyLink: 'tel:+243903001446',
    whatsapp: '+243 84 712 95 62',
    whatsappLink: 'https://wa.me/243847129562',
  },

  emails: ['eyedental7@gmail.com', 'eydentalclinic@gmail.com'],

  /** Lien Google Maps : recherche de l'adresse (aucune coordonnée inventée) */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Av. Lumumba, N° 356, Commune de Manika – Kolwezi, Lualaba',
  )}`,
} as const

export type Clinic = typeof CLINIC