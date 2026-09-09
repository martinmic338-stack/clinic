/**
 * Données SEO du site : titres, descriptions et identité.
 * ⚠️ « url » est un domaine PLACEHOLDER — remplacez-le par le domaine réel
 * avant la mise en ligne (utilisé pour le sitemap et les balises canoniques).
 */
export const SITE = {
  name: 'CMOK Kolwezi',
  /** Domaine réel à renseigner avant publication */
  url: 'https://eyedental-kolwezi.org',
  defaultTitle:
    'CMOK Kolwezi — Clinique à Kolwezi | Ophtalmologie, dentisterie, imagerie et laboratoire',
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
    title: 'À propos — CMOK Kolwezi | Clinique à Kolwezi',
    description:
      'À propos de CMOK Kolwezi, clinique à Kolwezi (Lualaba) : notre mission, notre approche centrée sur le patient et nos domaines d’expertise.',
  },
  '/services': {
    title: 'Nos services médicaux à Kolwezi — CMOK Kolwezi',
    description:
      'Ophtalmologie, dentisterie, imagerie médicale, explorations et laboratoire médical : découvrez les services de la clinique à Kolwezi.',
  },
  '/services/ophtalmologie': {
    title: 'Ophtalmologie à Kolwezi — CMOK Kolwezi',
    description:
      'Consultations ophtalmologiques à Kolwezi : bilan visuel, cataracte, glaucome, rétinopathie diabétique, DMLA et urgences oculaires.',
  },
  '/services/dentisterie': {
    title: 'Dentisterie à Kolwezi — CMOK Kolwezi',
    description:
      'Soins dentaires à Kolwezi : soins conservateurs, implantologie, chirurgie orale, prothèses et esthétique dentaire.',
  },
  '/services/imagerie': {
    title: 'Imagerie médicale à Kolwezi — CMOK Kolwezi',
    description:
      'Imagerie médicale à Kolwezi : IRM, scanner, radiographie et mammographie numérique.',
  },
  '/services/explorations': {
    title: 'Explorations médicales à Kolwezi — CMOK Kolwezi',
    description:
      'Explorations fonctionnelles à Kolwezi : échographie cardiaque, échographie générale et électrocardiogramme.',
  },
  '/services/laboratoire': {
    title: 'Laboratoire médical à Kolwezi — CMOK Kolwezi',
    description:
      'Laboratoire d’analyses à Kolwezi : analyses biologiques et anatomopathologie.',
  },
  '/equipe': {
    title: 'Notre équipe médicale — CMOK Kolwezi | Kolwezi',
    description:
      'Découvrez l’équipe soignante d’CMOK Kolwezi, clinique médicale à Kolwezi.',
  },
  '/realisations': {
    title: 'Réalisations — CMOK Kolwezi | Kolwezi',
    description:
      'Réalisations curatives, recherches, publications et conférences menées par la clinique à Kolwezi.',
  },
  '/actualites': {
    title: 'Actualités — CMOK Kolwezi | Kolwezi',
    description:
      'Actualités, conseils de santé et nouvelles de la clinique médicale à Kolwezi.',
  },
  '/produits': {
    title: 'Produits optiques à Kolwezi — CMOK Kolwezi',
    description:
      'Découvrez notre sélection de lunettes disponible à la clinique à Kolwezi : demandez le prix sur WhatsApp.',
  },
  '/contact': {
    title: 'Contact & rendez-vous — CMOK Kolwezi | Kolwezi',
    description:
      'Contactez CMOK Kolwezi à Kolwezi : téléphone +243 84 552 00 21, WhatsApp, email et itinéraire Google Maps.',
  },
  '/urgences': {
    title: 'Urgences — Appeler +243 84 552 00 21 | CMOK Kolwezi',
    description:
      'En cas d’urgence médicale à Kolwezi, appelez immédiatement la clinique au +243 84 552 00 21.',
  },
  '/mentions-legales': {
    title: 'Mentions légales — CMOK Kolwezi',
    description:
      'Mentions légales du site de CMOK Kolwezi.',
  },
  '/confidentialite': {
    title: 'Politique de confidentialité — CMOK Kolwezi',
    description:
      'Politique de confidentialité du site d’CMOK Kolwezi : aucune donnée médicale n’est collectée.',
  },
}