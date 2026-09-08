import { Link } from 'react-router-dom'
import { CLINIC } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { DOCTORS } from '@/data/doctors'
import ServiceCard from '@/components/services/ServiceCard'
import DoctorCard from '@/components/DoctorCard'
import {
  UsersIcon,
  StethoscopeIcon,
  ScanIcon,
  HeartIcon,
  CheckIcon,
  MapPinIcon,
  CalendarIcon,
  MailIcon,
} from '@/components/icons'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 text-center">
      <p className="section-eyebrow justify-center">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 1 — Hero                                                   */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden">
      <img
        src="/images/hero/clinic-team.jpg"
        alt="Équipe de la clinique EYES AND DENTAL CLINIC"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-darker/85" />
      <div className="section-narrow relative text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          À propos de nous
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-white">
          Une médecine moderne, proche de vous
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          {CLINIC.name} – {CLINIC.organization} accompagne ses patients avec une approche
          médicale spécialisée, humaine et professionnelle.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Prendre rendez-vous
          </Link>
          <Link to="/services" className="btn btn-outline-light btn-lg">
            Découvrir nos services
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 2 — Présentation                                           */
/* ------------------------------------------------------------------ */

function PresentationSection() {
  return (
    <section className="section">
      <div className="section-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Présentation</p>
            <h2 className="section-title">{CLINIC.name}</h2>
            <p className="mt-5">
              Implantée à Kolwezi, au cœur de la province du Lualaba, la {CLINIC.name} réunit
              sous un même toit une prise en charge spécialisée de l'œil, de la dent et de la
              santé en général : ophtalmologie, dentisterie, imagerie médicale, explorations
              fonctionnelles et laboratoire &amp; pathologie.
            </p>
            <p className="mt-4">
              Notre engagement : vous accompagner avec des soins de qualité, dans un cadre
              médical moderne, attentif et rassurant.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary pl-4 font-display text-lg font-medium text-primary-darker">
              « {CLINIC.slogan} »
            </blockquote>
            <p className="mt-6 flex items-start gap-2 text-sm text-slate">
              <MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>{CLINIC.address}</span>
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/hero/hero-clinic.jpg"
              alt="Accueil de la clinique EYES AND DENTAL CLINIC"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 3 — Notre mission                                          */
/* ------------------------------------------------------------------ */

const MISSION_POINTS = [
  'Une prise en charge médicale de qualité',
  'Des soins spécialisés dans chaque domaine',
  'Une approche humaine et attentive',
  'Une attention particulière à la vision et à la santé bucco-dentaire',
  'Une prise en charge multidisciplinaire',
]

function MissionSection() {
  return (
    <section className="section section-cloud">
      <div className="section-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Notre engagement</p>
            <h2 className="section-title">Notre mission</h2>
            <p className="mt-5">
              La {CLINIC.name} – {CLINIC.organization} a pour mission d'offrir une prise en
              charge médicale de qualité, spécialisée et humaine, où chaque patient est
              accompagné avec attention et respect.
            </p>
            <p className="mt-4">
              Nous portons une attention particulière à la santé de vos yeux et de votre
              sourire, tout en assurant une prise en charge globale et coordonnée grâce à la
              complémentarité de nos services.
            </p>
          </div>
          <ul className="space-y-4">
            {MISSION_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 rounded-xl border border-mistline bg-white p-4"
              >
                <CheckIcon className="size-5 shrink-0 text-primary" />
                <span className="font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 4 — Nos domaines d'expertise                               */
/* ------------------------------------------------------------------ */

function ExpertiseSection() {
  return (
    <section className="section">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Nos spécialités"
          title="Nos domaines d'expertise"
          subtitle="Des prises en charge spécialisées, coordonnées au sein d'un même établissement."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} ctaLabel="Découvrir" />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 5 — Notre approche                                         */
/* ------------------------------------------------------------------ */

const APPROACH = [
  {
    Icon: StethoscopeIcon,
    title: 'Expertise',
    text: 'Des professionnels spécialisés dans leurs domaines.',
  },
  {
    Icon: ScanIcon,
    title: 'Technologie',
    text: 'Un environnement médical adapté aux besoins de prise en charge.',
  },
  {
    Icon: HeartIcon,
    title: 'Écoute',
    text: 'Une relation basée sur l’écoute et l’accompagnement.',
  },
  {
    Icon: CheckIcon,
    title: 'Sécurité',
    text: 'Une attention particulière à la qualité et à la sécurité des soins.',
  },
]

function ApproachSection() {
  return (
    <section className="section">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Notre approche"
          title="Une approche centrée sur le patient"
          subtitle="Le patient est au centre de nos attentions, à chaque étape de sa prise en charge."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map(({ Icon, title, text }) => (
            <div key={title} className="card p-6 text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-primary-darker">
                {title}
              </h3>
              <p className="mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 6 — L'équipe                                               */
/* ------------------------------------------------------------------ */

function TeamSection() {
  return (
    <section className="section section-cloud">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="L’équipe"
          title="Une équipe au service des patients"
          subtitle="Des professionnels compétents, engagés pour une prise en charge attentive et sûre."
        />
        {DOCTORS.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="card mx-auto max-w-2xl p-8 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <UsersIcon className="size-7" />
            </span>
            <p className="mt-5">
              Les profils de nos spécialistes seront présentés ici dès leur arrivée au sein de
              l’équipe.
            </p>
          </div>
        )}
        <div className="mt-10 text-center">
          <Link to="/equipe" className="btn btn-primary btn-md">
            <UsersIcon className="size-5" />
            Découvrir notre équipe
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 7 — Appel à l'action                                       */
/* ------------------------------------------------------------------ */

function ConsultationCta() {
  return (
    <section className="section section-aqua">
      <div className="section-narrow">
        <div className="card mx-auto max-w-4xl p-8 text-center md:p-12">
          <h2 className="section-title">Besoin d’une consultation ?</h2>
          <p className="section-subtitle">
            Notre équipe est à votre écoute pour vous orienter vers le service adapté à vos
            besoins.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn btn-primary btn-md">
              <CalendarIcon className="size-5" />
              Prendre rendez-vous
            </Link>
            <Link to="/contact" className="btn btn-outline btn-md">
              <MailIcon className="size-5" />
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <PresentationSection />
      <MissionSection />
      <ExpertiseSection />
      <ApproachSection />
      <TeamSection />
      <ConsultationCta />
    </>
  )
}