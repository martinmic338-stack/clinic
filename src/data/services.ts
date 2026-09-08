import type { Service } from '@/types/Service'

/**
 * Services de la clinique.
 * Les descriptions et prestations reprennent uniquement les informations fournies.
 * Les slugs correspondent aux routes : /services/:slug
 */
export const SERVICES: Service[] = [
  {
    id: 'ophtalmologie',
    name: 'Ophtalmologie',
    slug: 'ophtalmologie',
    tagline: 'Prenez soin de vos yeux, gardez la lumière.',
    shortDescription:
      'Consultation et examen ophtalmologique dans un cabinet équipé de matériel de pointe.',
    description:
      'La clinique dispose d’un cabinet de consultation ophtalmologique et d’un équipement d’ophtalmologie de pointe pour le diagnostic et le suivi des pathologies de la vue.',
    prestations: [
      'Bilan visuel',
      'Cataracte',
      'Glaucome',
      'Rétinopathie diabétique',
      'DMLA',
      'Troubles de réfraction',
      'Extraction de corps étrangers',
      'Urgences ophtalmologiques',
    ],
    image: '/images/services/service-ophtalmologie.jpg',
  },
  {
    id: 'dentisterie',
    name: 'Dentisterie',
    slug: 'dentisterie',
    shortDescription:
      'Soins dentaires et prise en charge bucco-dentaire.',
    description:
      'Le service de dentisterie assure la prise en charge des patients pour les soins et traitements dentaires.',
    prestations: [
      'Soins conservateurs',
      'Implantologie',
      'Chirurgie orale',
      'Prothèses',
      'Esthétique dentaire',
    ],
    image: '/images/services/service-dentisterie.jpg',
  },
  {
    id: 'imagerie',
    name: 'Imagerie médicale',
    slug: 'imagerie',
    shortDescription:
      'Examens d’imagerie, dont l’IRM, pour un diagnostic précis.',
    description:
      'Le plateau d’imagerie médicale permet la réalisation d’examens d’imagerie, notamment par IRM, au service du diagnostic.',
    prestations: [
      'IRM',
      'Scanner',
      'Radiographie',
      'Mammographie numérique',
    ],
    image: '/images/services/service-imagerie.jpg',
  },
  {
    id: 'explorations',
    name: 'Échographie & explorations fonctionnelles',
    slug: 'explorations',
    shortDescription:
      'Échographie et explorations fonctionnelles (dont l’ECG).',
    description:
      'Le service d’échographie et des explorations fonctionnelles réalise les examens d’échographie ainsi que les explorations fonctionnelles telles que l’électrocardiogramme (ECG).',
    prestations: [
      'Échographie cardiaque',
      'Échographie générale',
      'ECG',
    ],
    image: '/images/services/service-echographie.jpg',
  },
  {
    id: 'laboratoire',
    name: 'Laboratoire & pathologie',
    slug: 'laboratoire',
    shortDescription:
      'Analyses de laboratoire et examen anatomopathologique.',
    description:
      'Le laboratoire d’analyses & pathologie assure les examens biologiques et anatomopathologiques pour l’aide au diagnostic des patients.',
    prestations: [
      'Analyses biologiques',
      'Anatomopathologie',
    ],
    image: '/images/services/service-laboratoire.jpg',
  },
]