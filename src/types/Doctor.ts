export interface Doctor {
  /** Identifiant unique (slug), utilisé dans l'URL /equipe/:slug */
  id: string
  /** Alias identique à id, pour expliciter l'usage dans les routes */
  slug: string
  /** Nom complet (ne jamais inventer : placeholder si non fourni) */
  name: string
  /** Titre / rôle au sein de la clinique */
  role: string
  /** Spécialité médicale */
  specialty: string
  /** Chemin de la photo (public/images/doctors/*) — placeholder si absente */
  photo?: string
  /** Courte présentation (biographie) */
  bio?: string
  /** Parcours (étapes de carrière) */
  parcours?: string[]
  /** Domaines d'expertise */
  expertise?: string[]
  /** Réalisations */
  achievements?: string[]
  /** Publications */
  publications?: string[]
  /** Horaires de consultation */
  schedule?: string[]
  /** Coordonnées optionnelles */
  email?: string
  phone?: string
}