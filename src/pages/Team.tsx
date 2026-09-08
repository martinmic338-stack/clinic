import { useMemo, useState } from 'react'
import { DOCTORS } from '@/data/doctors'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import DoctorCard from '@/components/DoctorCard'
import { UsersIcon } from '@/components/icons'

export default function Team() {
  const [specialty, setSpecialty] = useState<string>('all')

  const specialties = useMemo(
    () => Array.from(new Set(DOCTORS.map((d) => d.specialty))).sort(),
    [],
  )

  const visibleDoctors = useMemo(
    () =>
      specialty === 'all'
        ? DOCTORS
        : DOCTORS.filter((d) => d.specialty === specialty),
    [specialty],
  )

  return (
    <>
      <PageHero
        eyebrow="Équipe médicale"
        title="Notre équipe médicale"
        intro="Une équipe soignante compétente et à l'écoute, au service de votre santé."
      />

      <section className="section pt-0">
        <div className="section-narrow">
          {/* Filtre par spécialité */}
          {specialties.length > 0 && (
            <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setSpecialty('all')}
                className={`btn btn-sm ${
                  specialty === 'all' ? 'btn-primary' : 'btn-outline'
                }`}
              >
                Tous
              </button>
              {specialties.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpecialty(s)}
                  className={`btn btn-sm ${
                    specialty === s ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Grille des médecins */}
          {visibleDoctors.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="card card-hover mx-auto flex max-w-xl flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                <UsersIcon className="size-7" />
              </span>
              <h2 className="section-title">Notre équipe se présente bientôt</h2>
              <p className="text-sm text-mist">
                Les portraits et profils de nos spécialistes seront publiés ici,
                dès validation des informations.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}