import { CLINIC } from './clinic'

/** Coordonnées officielles (ré-export depuis clinic.ts) */
export const PHONE = CLINIC.phone
export const EMAILS = CLINIC.emails
export const ADDRESS = CLINIC.address

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Produits', href: '/produits' },
  { label: 'Contact', href: '/contact' },
]