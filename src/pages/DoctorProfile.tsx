import { Link, useParams } from 'react-router-dom'
import { DOCTORS } from '@/data/doctors'
import { CLINIC } from '@/data/clinic'
import Seo from '@/components/Seo'
import {
  UsersIcon,
  CheckIcon,
  ClockIcon,
  CalendarIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/icons'

/* ── Bloc de profil réutilisable ─────────────────────────────── */
function ProfileBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-primary-darker">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
              <CheckIcon className="size-3" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function DoctorProfile() {
  const { slug } = useParams<{ slug: string }>()
  const doctor = DOCTORS.find((d) => d.slug === slug)

  if (!doctor) {
    return (
      <section className="section">
        <div className="section-narrow">
          <div className="card card-hover mx-auto flex max-w-xl flex-col items-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <UsersIcon className="size-7" />
            </span>
            <h1 className="section-title">Profil à venir</h1>
            <p className="text-sm text-mist">
              Les informations de ce spécialiste seront publiées dès leur validation.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link to="/equipe" className="btn btn-primary btn-md">
                Voir toute l'équipe
              </Link>
              <Link to="/contact" className="btn btn-outline btn-md">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${doctor.name} — ${doctor.specialty} | EYES AND DENTAL CLINIC Kolwezi`}
        description={`${doctor.role} en ${doctor.specialty} à Kolwezi. Prenez rendez-vous avec ${doctor.name} à la clinique.`}
      />
      <section className="section section-aqua">
        <div className="section-narrow py-16 md:py-20">
          <nav aria-label="Fil d’ariane" className="mb-8 flex items-center gap-2 text-sm text-mist">
            <Link to="/equipe" className="font-medium text-primary hover:text-primary-dark">
              Équipe
            </Link>
            <span aria-hidden>›</span>
            <span className="font-medium text-ink">{doctor.name}</span>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
            {/* Photo */}
            <div className="mx-auto w-full max-w-xs lg:mx-0">
              <div className="overflow-hidden rounded-card bg-primary-lighter shadow-soft">
                {doctor.photo ? (
                  <img src={doctor.photo} alt={doctor.name} loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center">
                    <UsersIcon className="size-24 text-primary/25" />
                  </div>
                )}
              </div>
              {doctor.schedule && doctor.schedule.length > 0 && (
                <div className="card mt-6 p-5">
                  <p className="flex items-center gap-2 font-display text-sm font-semibold text-primary-darker">
                    <ClockIcon className="size-4" /> Horaires
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {doctor.schedule.map((slot) => (
                      <li key={slot} className="text-sm text-slate">{slot}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Informations */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {doctor.specialty}
              </p>
              <h1 className="mt-2 text-primary-darker">{doctor.name}</h1>
              <p className="mt-1 font-display text-lg font-medium text-slate">{doctor.role}</p>

              {doctor.bio && <p className="mt-6 text-lg text-slate">{doctor.bio}</p>}

              {/* Coordonnées */}
              {(doctor.email || doctor.phone) && (
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {doctor.email && (
                    <a href={`mailto:${doctor.email}`} className="font-medium text-primary hover:text-primary-dark">
                      {doctor.email}
                    </a>
                  )}
                  {doctor.phone && (
                    <a href={`tel:${doctor.phone.replace(/\s/g, '')}`} className="font-medium text-primary hover:text-primary-dark">
                      {doctor.phone}
                    </a>
                  )}
                </div>
              )}

              {/* Blocs de profil */}
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {doctor.parcours && doctor.parcours.length > 0 && (
                  <ProfileBlock title="Parcours" items={doctor.parcours} />
                )}
                {doctor.expertise && doctor.expertise.length > 0 && (
                  <ProfileBlock title="Expertise" items={doctor.expertise} />
                )}
                {doctor.achievements && doctor.achievements.length > 0 && (
                  <ProfileBlock title="Réalisations" items={doctor.achievements} />
                )}
                {doctor.publications && doctor.publications.length > 0 && (
                  <ProfileBlock title="Publications" items={doctor.publications} />
                )}
              </div>

              {/* Appel à l'action */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
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
                <a href={CLINIC.phone.emergencyLink} className="btn btn-outline btn-md">
                  <PhoneIcon className="size-5" />
                  {CLINIC.phone.emergency}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}