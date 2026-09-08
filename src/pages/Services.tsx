import { SERVICES } from '@/data/services'
import PageHero from '@/components/PageHero'
import ServiceCard from '@/components/services/ServiceCard'
import CtaSection from '@/components/CtaSection'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title="Une prise en charge complète et spécialisée"
        intro="Ophtalmologie, dentisterie, imagerie médicale, explorations fonctionnelles et laboratoire : des soins coordonnés au cœur de Kolwezi."
      />

      <section className="section pt-0">
        <div className="section-narrow grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} ctaLabel="Découvrir le service" />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}