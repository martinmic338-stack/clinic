/**
 * Informations officielles de la clinique.
 * Source unique de vérité pour les coordonnées et l'identité.
 */
export const CLINIC = {
  name: 'CMOK Kolwezi',
  slogan: 'Votre sourire et votre vision sont notre mission.',
  address: '62, Av Banza Mano, Q/Mutoshi, C/Manika',

  phone: {
    emergency: '+243 84 552 00 21',
    emergencyLink: 'tel:+243845520021',
    whatsapp: '+243 99 205 72 04',
    whatsappLink: 'https://wa.me/243992057204',
  },

  emails: ['info@cemok.com'],

  /** Lien Google Maps : recherche de l'adresse (aucune coordonnée inventée) */
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '62, Av Banza Mano, Q/Mutoshi, C/Manika',
  )}`,
} as const

export type Clinic = typeof CLINIC