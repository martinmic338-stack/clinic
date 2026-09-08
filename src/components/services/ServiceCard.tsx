import { Link } from 'react-router-dom'
import type { Service } from '@/types/Service'
import { SERVICE_ICONS } from './ServiceIcon'
import { ArrowRightIcon } from '@/components/icons'

type ServiceCardProps = {
  service: Service
  /** Libellé du bouton / lien (défaut : « En savoir plus ») */
  ctaLabel?: string
}

/** Carte de présentation d'un service (image, icône, titre, description, lien) */
export default function ServiceCard({ service, ctaLabel = 'En savoir plus' }: ServiceCardProps) {
  const Icon = SERVICE_ICONS[service.id]

  return (
    <article className="card flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.image && (
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-primary-darker">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm">{service.shortDescription}</p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {ctaLabel}
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  )
}