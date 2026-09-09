/**
 * Informations officielles de la clinique.
 * Source unique de vérité pour les coordonnées et l'identité.
 */
export const CLINIC = {
  name: 'CMOK Kolwezi',
  organization: 'FONDATION MISÉRICORDE',
  slogan: 'Votre sourire et votre vision sont notre mission.',
  address: 'Av. Lumumba, N° 356, Commune de Manika – Kolwezi, Lualaba',

  phone: {
    emergency: '+243 84 552 00 21',
    emergencyLink: 'tel:+243845520021',
    whatsapp: '+243 99 205 72 04',
    whatsappLink: 'https://wa.me/243992057204',
  },

  emails: ['eyedental7@gmail.com', 'eydentalclinic@gmail.com'],

  /** Lien Google Maps : recherche de l'adresse (aucune coordonnée inventée) */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Av. Lumumba, N° 356, Commune de Manika – Kolwezi, Lualaba',
  )}`,
} as const

export type Clinic = typeof CLINIC