import { Link } from 'react-router-dom'
import { SERVICES } from '@/data/services'
import type { Service } from '@/types/Service'
import PrestationsGrid from './PrestationsGrid'
import ServiceCard from './ServiceCard'
import CtaSection from '@/components/CtaSection'

type ServiceDetailPageProps = {
  /** Identifiant du service à afficher */
  serviceId: Service['id']
}

/**
 * Mise en page commune à toutes les pages de service :
 * titre, phrase d'accroche, introduction, image, prestations, autres services, appel à l'action.
 */
export default function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.id === serviceId)
  const others = SERVICES.filter((s) => s.id !== serviceId)

  if (!service) {
    return (
      <section className="section">
        <div className="section-narrow text-center">
          <h1 className="text-primary-darker">Service introuvable</h1>
          <p className="mt-4">Ce service n’existe pas ou n’est pas encore disponible.</p>
          <Link to="/services" className="btn btn-primary btn-md mt-8">
            Voir tous nos services
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* En-tête */}
      <section className="section-aqua">
        <div className="section-narrow py-16 md:py-20">
          <nav aria-label="Fil d’ariane" className="mb-6 flex items-center gap-2 text-sm text-mist">
            <Link to="/services" className="font-medium text-primary hover:text-primary-dark">
              Services
            </Link>
            <span aria-hidden>›</span>
            <span className="font-medium text-ink">{service.name}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="section-eyebrow">Nos services</p>
            <h1 className="text-primary-darker">{service.name}</h1>
            {service.tagline && (
              <p className="mt-4 font-display text-xl font-medium text-primary md:text-2xl">
                {service.tagline}
              </p>
            )}
            <p className="mt-5 text-lg text-slate">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Image principale */}
      {service.image && (
        <section className="section">
          <div className="section-narrow">
<img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] w-full object-cover"
          />
          </div>
        </section>
      )}

      {/* Prestations */}
      {service.prestations && service.prestations.length > 0 && (
        <section className="section pt-0">
          <div className="section-narrow">
            <div className="mb-10 max-w-2xl">
              <p className="section-eyebrow">Prestations</p>
              <h2 className="section-title">Ce que nous proposons</h2>
            </div>
            <PrestationsGrid items={service.prestations} />
          </div>
        </section>
      )}

      {/* Autres services */}
      <section className="section section-cloud">
        <div className="section-narrow">
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow">Découvrir aussi</p>
            <h2 className="section-title">Nos autres services</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <ServiceCard key={other.id} service={other} />
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <CtaSection />
    </>
  )
}