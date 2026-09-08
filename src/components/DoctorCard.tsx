import { Link } from 'react-router-dom'
import type { Doctor } from '@/types/Doctor'
import { UsersIcon, ArrowRightIcon } from '@/components/icons'

type DoctorCardProps = {
  doctor: Doctor
}

/** Carte de présentation d'un médecin (photo, nom, titre, spécialité, présentation, bouton profil) */
export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-primary-lighter">
        {doctor.photo ? (
          <img
            src={doctor.photo}
            alt={doctor.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <UsersIcon className="size-16 text-primary/25" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 text-center">
        <h3 className="font-display text-lg font-semibold text-primary-darker">
          {doctor.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">{doctor.role}</p>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-mist">
          {doctor.specialty}
        </p>
        {doctor.bio && <p className="mt-3 line-clamp-3 flex-1 text-sm text-slate">{doctor.bio}</p>}
        <Link
          to={`/equipe/${doctor.slug}`}
          className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Voir le profil
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  )
}