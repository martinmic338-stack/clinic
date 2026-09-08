import type { Doctor } from '@/types/Doctor'

/**
 * Équipe médicale de la clinique.
 * Les informations réelles seront renseignées ultérieurement.
 * Ne jamais inventer de noms ni de diplômes.
 * Champs disponibles : id/slug, name, role, specialty, photo?, bio?,
 * parcours?, expertise?, achievements?, publications?, schedule?, email?, phone?
 */
export const DOCTORS: Doctor[] = []

/**
 * Exemple de structure (à compléter avec les informations vérifiées) :
 * {
 *   id: 'dr-...',
 *   slug: 'dr-...',
 *   name: 'Dr Nom Complet',
 *   role: 'Médecin ophtalmologue',
 *   specialty: 'Ophtalmologie',
 *   photo: '/images/doctors/...jpg',
 *   bio: 'Courte présentation du praticien.',
 *   parcours: ['Étape du parcours 1', 'Étape du parcours 2'],
 *   expertise: ['Bilan visuel', 'Cataracte'],
 *   achievements: ['Réalisation 1', 'Réalisation 2'],
 *   publications: ['Publication 1', 'Publication 2'],
 *   schedule: ['Lundi – Vendredi : 08h00 – 17h00'],
 *   email: 'email@clinic.org',
 *   phone: '+243 ...',
 * }
 */