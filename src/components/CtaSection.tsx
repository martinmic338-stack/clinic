import { Link } from 'react-router-dom'
import { CLINIC } from '@/data/clinic'
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons'

type CtaSectionProps = {
  /** Titre de l'appel à l'action (défaut fourni) */
  title?: string
  /** Texte d'introduction optionnel */
  intro?: string
}

/** Bloc d'appel à l'action : rendez-vous, WhatsApp et téléphone */
export default function CtaSection({
  title = 'Prêt à prendre soin de votre santé ?',
  intro,
}: CtaSectionProps) {
  return (
    <section className="section section-aqua">
      <div className="section-narrow">
        <div className="card mx-auto max-w-4xl p-8 text-center md:p-12">
          <h2 className="section-title">{title}</h2>
          {intro && <p className="section-subtitle">{intro}</p>}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn btn-primary btn-md">
              <CalendarIcon className="size-5" />
              Prendre rendez-vous
            </Link>
            <a
              href={CLINIC.phone.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md bg-green-600 text-white hover:bg-green-700"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
            <a
              href={CLINIC.phone.emergencyLink}
              className="btn btn-outline btn-md"
            >
              <PhoneIcon className="size-5" />
              {CLINIC.phone.emergency}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}