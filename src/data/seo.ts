/**
 * Données SEO du site : titres, descriptions et identité.
 * ⚠️ « url » est un domaine PLACEHOLDER — remplacez-le par le domaine réel
 * avant la mise en ligne (utilisé pour le sitemap et les balises canoniques).
 */
export const SITE = {
  name: 'EYES AND DENTAL CLINIC',
  organization: 'FONDATION MISÉRICORDE',
  /** Domaine réel à renseigner avant publication */
  url: 'https://eyedental-kolwezi.org',
  defaultTitle:
    'EYES AND DENTAL CLINIC — Clinique à Kolwezi | Ophtalmologie, dentisterie, imagerie et laboratoire',
  defaultDescription:
    'Clinique médicale à Kolwezi (Lualaba) : ophtalmologie, dentisterie, imagerie médicale, explorations et laboratoire. Prise en charge moderne et humaine au cœur de Kolwezi.',
} as const

/** Titres et descriptions par route (les pages dynamiques les surchargent) */
export const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  '/a-propos': {
    title: 'À propos — EYES AND DENTAL CLINIC | Clinique à Kolwezi',
    description:
      'À propos d’EYES AND DENTAL CLINIC, clinique à Kolwezi (Lualaba) : notre mission, notre approche centrée sur le patient et nos domaines d’expertise.',
  },
  '/services': {
    title: 'Nos services médicaux à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Ophtalmologie, dentisterie, imagerie médicale, explorations et laboratoire médical : découvrez les services de la clinique à Kolwezi.',
  },
  '/services/ophtalmologie': {
    title: 'Ophtalmologie à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Consultations ophtalmologiques à Kolwezi : bilan visuel, cataracte, glaucome, rétinopathie diabétique, DMLA et urgences oculaires.',
  },
  '/services/dentisterie': {
    title: 'Dentisterie à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Soins dentaires à Kolwezi : soins conservateurs, implantologie, chirurgie orale, prothèses et esthétique dentaire.',
  },
  '/services/imagerie': {
    title: 'Imagerie médicale à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Imagerie médicale à Kolwezi : IRM, scanner, radiographie et mammographie numérique.',
  },
  '/services/explorations': {
    title: 'Explorations médicales à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Explorations fonctionnelles à Kolwezi : échographie cardiaque, échographie générale et électrocardiogramme.',
  },
  '/services/laboratoire': {
    title: 'Laboratoire médical à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Laboratoire d’analyses à Kolwezi : analyses biologiques et anatomopathologie.',
  },
  '/equipe': {
    title: 'Notre équipe médicale — EYES AND DENTAL CLINIC | Kolwezi',
    description:
      'Découvrez l’équipe soignante d’EYES AND DENTAL CLINIC, clinique médicale à Kolwezi.',
  },
  '/realisations': {
    title: 'Réalisations — EYES AND DENTAL CLINIC | Kolwezi',
    description:
      'Réalisations curatives, recherches, publications et conférences menées par la clinique à Kolwezi.',
  },
  '/actualites': {
    title: 'Actualités — EYES AND DENTAL CLINIC | Kolwezi',
    description:
      'Actualités, conseils de santé et nouvelles de la clinique médicale à Kolwezi.',
  },
  '/produits': {
    title: 'Produits optiques à Kolwezi — EYES AND DENTAL CLINIC',
    description:
      'Découvrez notre sélection de lunettes disponible à la clinique à Kolwezi : demandez le prix sur WhatsApp.',
  },
  '/contact': {
    title: 'Contact & rendez-vous — EYES AND DENTAL CLINIC | Kolwezi',
    description:
      'Contactez EYES AND DENTAL CLINIC à Kolwezi : téléphone +243 90 300 14 46, WhatsApp, email et itinéraire Google Maps.',
  },
  '/urgences': {
    title: 'Urgences — Appeler +243 90 300 14 46 | EYES AND DENTAL CLINIC',
    description:
      'En cas d’urgence médicale à Kolwezi, appelez immédiatement la clinique au +243 90 300 14 46.',
  },
  '/mentions-legales': {
    title: 'Mentions légales — EYES AND DENTAL CLINIC',
    description:
      'Mentions légales du site d’EYES AND DENTAL CLINIC, Fondation Miséricorde.',
  },
  '/confidentialite': {
    title: 'Politique de confidentialité — EYES AND DENTAL CLINIC',
    description:
      'Politique de confidentialité du site d’EYES AND DENTAL CLINIC : aucune donnée médicale n’est collectée.',
  },
}