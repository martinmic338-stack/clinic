import { Link } from 'react-router-dom'
import { CLINIC } from '@/data/clinic'
import { PhoneIcon, WhatsAppIcon, SirenIcon, HeartIcon } from '@/components/icons'

export default function Emergency() {
  return (
    <>
      {/* Bandeau principal — rouge réservé aux urgences */}
      <section className="bg-emergency text-white">
        <div className="section-narrow py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge bg-white/15 text-white ring-1 ring-white/30">
              <SirenIcon className="size-4" />
              Numéro d'urgence
            </span>
            <h1 className="mt-5 text-white">Urgences</h1>
            <p className="mt-4 text-lg text-white/90">
              En cas d'urgence, appelez immédiatement la clinique.
            </p>

            <p className="mt-8 font-display text-4xl font-bold tracking-tight leading-none text-white sm:text-5xl md:text-6xl">
              <a href={CLINIC.phone.emergencyLink} className="text-white underline-offset-4 hover:text-white/90 hover:underline">
                {CLINIC.phone.emergency}
              </a>
            </p>

            <a href={CLINIC.phone.emergencyLink} className="btn btn-lg mt-8 bg-white text-emergency hover:bg-white/90">
              <PhoneIcon className="size-5" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Bloc WhatsApp */}
      <section className="section">
        <div className="section-narrow">
          <div className="mx-auto max-w-3xl">
            <div className="card flex flex-col items-center gap-5 p-8 text-center md:p-10">
              <span className="flex size-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                <WhatsAppIcon className="size-7" />
              </span>
              <h2 className="font-display text-xl font-semibold text-primary-darker sm:text-2xl">
                Écrire sur WhatsApp
              </h2>
              <p className="max-w-md text-sm text-slate">
                Vous pouvez aussi nous écrire sur WhatsApp pour toute demande
                urgente d'information.
              </p>
              <div className="flex flex-col items-center gap-2 text-lg font-semibold text-ink">
                {CLINIC.phone.whatsapp}
              </div>
              <a
                href={CLINIC.phone.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-green-600 text-white hover:bg-green-700"
              >
                <WhatsAppIcon className="size-5" />
                Ouvrir WhatsApp
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-mist">
                Besoin d'un rendez-vous non urgent ? Utilisez le formulaire de contact.
              </p>
              <Link to="/contact" className="btn btn-outline btn-md mt-4">
                <HeartIcon className="size-5" />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}