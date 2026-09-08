import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CLINIC } from '@/data/clinic'
import PageHero from '@/components/PageHero'
import AppointmentForm from '@/components/AppointmentForm'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  SirenIcon,
} from '@/components/icons'

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-ink">{label}</p>
        <div className="mt-0.5 text-sm text-slate">{children}</div>
      </div>
    </li>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Nous sommes à votre écoute"
        intro="Une question, une demande de rendez-vous ? Contactez-nous simplement."
      />

      <section className="section pt-0">
        <div className="section-narrow">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Coordonnées */}
            <div className="card p-8">
              <ul className="space-y-6">
                <ContactItem icon={<MapPinIcon className="size-5" />} label="Adresse">
                  {CLINIC.address}
                </ContactItem>

                <ContactItem icon={<PhoneIcon className="size-5" />} label="Téléphone">
                  <a href={CLINIC.phone.emergencyLink} className="font-medium">
                    {CLINIC.phone.emergency}
                  </a>
                </ContactItem>

                <ContactItem icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
                  <a
                    href={CLINIC.phone.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                  >
                    {CLINIC.phone.whatsapp}
                  </a>
                </ContactItem>

                <ContactItem icon={<MailIcon className="size-5" />} label="Emails">
                  <div className="flex flex-col gap-1">
                    {CLINIC.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="font-medium">
                        {email}
                      </a>
                    ))}
                  </div>
                </ContactItem>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-md"
                >
                  <MapPinIcon className="size-5" />
                  Voir sur Google Maps
                </a>
              </div>

              <div className="mt-8 rounded-card border-2 border-emergency/20 bg-emergency-soft p-6">
                <p className="flex items-center gap-2 font-display text-base font-semibold text-emergency-dark">
                  <SirenIcon className="size-5" />
                  Besoin d'une prise en charge immédiate ?
                </p>
                <p className="mt-2 text-sm text-slate">
                  Consultez notre page Urgences pour appeler la clinique en priorité.
                </p>
                <Link to="/urgences" className="btn btn-emergency btn-sm mt-4">
                  <SirenIcon className="size-4" />
                  Page urgences
                </Link>
              </div>
            </div>

            {/* Formulaire de rendez-vous */}
            <div>
              <h2 className="font-display text-xl font-semibold text-primary-darker">
                Demander un rendez-vous
              </h2>
              <p className="mb-6 mt-2 text-sm text-slate">
                Remplissez ce bref formulaire : votre demande de rendez-vous sera
                préparée, puis envoyée via WhatsApp.
              </p>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}