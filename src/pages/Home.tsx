import { Link } from 'react-router-dom'
import { CLINIC } from '@/data/clinic'
import { SERVICES } from '@/data/services'
import { DOCTORS } from '@/data/doctors'
import { PRODUCTS } from '@/data/products'
import { NEWS_ARTICLES, ACHIEVEMENT_ARTICLES, ARTICLE_CATEGORY_LABELS } from '@/data/articles'
import EmergencyButton from '@/components/EmergencyButton'
import ServiceCard from '@/components/services/ServiceCard'
import DoctorCard from '@/components/DoctorCard'
import ProductCard from '@/components/ProductCard'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  StethoscopeIcon,
  UsersIcon,
  HeartIcon,
  GlassesIcon,
  CalendarIcon,
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
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <img
        src="/images/hero/hero-clinic.jpg"
        alt="Salle de réception de la clinique"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-darker/85" />
      <div className="section-narrow relative text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          {CLINIC.organization}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-white">
          {CLINIC.slogan}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Une prise en charge médicale moderne, humaine et spécialisée au cœur de Kolwezi.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Prendre rendez-vous
          </Link>
          <Link to="/services" className="btn btn-outline-light btn-lg">
            Découvrir nos services
          </Link>
          <EmergencyButton />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 2 — Services                                               */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  return (
    <section className="section">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Nos services"
          title="Des soins complets, sous un même toit"
          subtitle="Ophtalmologie, dentisterie, imagerie, explorations fonctionnelles et laboratoire : une prise en charge globale et coordonnée."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* Carte de renvoi vers la prise de rendez-vous */}
          <article className="card card-hover flex flex-col items-center justify-center gap-3 bg-primary-darker p-8 text-center text-white">
            <HeartIcon className="size-10 text-white" />
            <h3 className="font-display text-lg font-semibold text-white">
              Nous prendre en charge
            </h3>
            <p className="text-sm text-white/80">
              Un besoin ? Écrivez-nous ou appelez-nous pour planifier votre consultation.
            </p>
            <Link to="/contact" className="btn btn-outline-light btn-sm mt-2">
              Nous contacter
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 3 — Chiffres                                               */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: StethoscopeIcon, value: '10', label: 'Spécialités médicales' },
  { icon: UsersIcon, value: '15', label: 'Praticiens dévoués' },
  { icon: HeartIcon, value: '+5 000', label: 'Patients accompagnés' },
  { icon: ClockIcon, value: '24h/24', label: 'Urgences disponibles' },
]

function StatsSection() {
  return (
    <section className="section section-aqua">
      <div className="section-narrow">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-primary">
                <stat.icon className="size-6" />
              </span>
              <p className="mt-4 font-display text-4xl font-bold text-primary-darker sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 4 — À propos                                               */
/* ------------------------------------------------------------------ */

function AboutSection() {
  return (
    <section className="section">
      <div className="section-narrow grid items-center gap-12 lg:grid-cols-2">
        <div className="text-left">
          <p className="section-eyebrow">La clinique</p>
          <h2 className="section-title">Une médecine moderne, proche de vous</h2>
          <p className="mt-5 text-lg text-slate">
            EYES AND DENTAL CLINIC est une initiative de la Fondation Miséricorde,
            dédiée à une prise en charge médicale de qualité au cœur de Kolwezi.
          </p>
          <p className="mt-3">
            Des spécialités complémentaires — de l’ophtalmologie à la dentisterie,
            en passant par l’imagerie et le laboratoire — réunies au sein d’une même
            structure, pour un parcours de soins simple et rassurant.
          </p>
          <Link to="/a-propos" className="btn btn-primary btn-md mt-8">
            Découvrir la clinique
          </Link>
        </div>
        <div className="relative">
          <img
            src="/images/hero/clinic-team.jpg"
            alt="Équipe de la clinique"
            loading="lazy"
            decoding="async"
            className="rounded-card shadow-soft"
          />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 5 — Spécialistes                                           */
/* ------------------------------------------------------------------ */

function SpecialistsSection() {
  return (
    <section className="section section-cloud">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="L'équipe"
          title="Nos spécialistes"
          subtitle="Une équipe soignante compétente, à l'écoute de chaque patient."
        />

        {DOCTORS.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['Ophtalmologistes', 'Dentistes', 'Laboratoire & imagerie'].map((group) => (
              <div
                key={group}
                className="card card-hover flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                  <UsersIcon className="size-7" />
                </span>
                <h3 className="font-display text-base font-semibold text-primary-darker">
                  {group}
                </h3>
                <p className="text-sm text-mist">
                  Les portraits des futurs spécialistes seront publiés ici.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 6 — Réalisations                                           */
/* ------------------------------------------------------------------ */

function AchievementsSection() {
  return (
    <section className="section">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Réalisations"
          title="Notre expertise en action"
          subtitle="Quelques réalisations et temps forts de la clinique."
        />

        {ACHIEVEMENT_ARTICLES.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENT_ARTICLES.map((achievement) => (
              <article key={achievement.id} className="card overflow-hidden">
                {achievement.coverImage && (
                  <img
                    src={achievement.coverImage}
                    alt={achievement.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-primary-darker">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm">{achievement.summary}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="card card-hover flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <CalendarIcon className="size-7" />
            </span>
            <h3 className="font-display text-base font-semibold text-primary-darker">
              Nos réalisations à venir
            </h3>
            <p className="text-sm text-mist">
              Les projets et campagnes menés par la clinique seront présentés ici.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 7 — Produits                                               */
/* ------------------------------------------------------------------ */

function ProductsSection() {
  return (
    <section className="section section-cloud">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Boutique optique"
          title="Nos produits optiques"
          subtitle="Des lunettes et accessoires optiques adaptés à vos besoins."
        />

        {PRODUCTS.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="card card-hover flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <GlassesIcon className="size-7" />
            </span>
            <h3 className="font-display text-base font-semibold text-primary-darker">
              Notre collection optique arrive bientôt
            </h3>
            <p className="max-w-md text-sm text-mist">
              Les modèles de lunettes et accessoires optiques seront bientôt disponibles
              dans notre boutique.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link to="/produits" className="btn btn-primary btn-md">
            Découvrir nos lunettes
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 8 — Actualités                                             */
/* ------------------------------------------------------------------ */

function NewsSection() {
  const articles = NEWS_ARTICLES.slice(0, 3)
  return (
    <section className="section">
      <div className="section-narrow">
        <SectionHeading
          eyebrow="Actualités"
          title="Les dernières nouvelles"
        />

        {articles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.id} className="card overflow-hidden">
                {article.coverImage && (
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold">
                    {ARTICLE_CATEGORY_LABELS[article.category]}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-primary-darker">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm">{article.summary}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="card card-hover flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <CalendarIcon className="size-7" />
            </span>
            <h3 className="font-display text-base font-semibold text-primary-darker">
              Pas encore de nouvelles publications
            </h3>
            <p className="text-sm text-mist">
              Les actualités de la clinique seront publiées ici.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section 9 — Contact                                                */
/* ------------------------------------------------------------------ */

function ContactSection() {
  return (
    <section className="section section-cloud">
      <div className="section-narrow">
        <div className="card overflow-hidden">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-2">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title">Nous sommes à votre écoute</h2>
              <p className="mt-4">
                Retrouvez-nous à Kolwezi pour une consultation ou contactez-nous
                directement.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <MapPinIcon className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Adresse</p>
                    <p className="text-sm">{CLINIC.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <PhoneIcon className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Urgences</p>
                    <a href={CLINIC.phone.emergencyLink} className="text-sm">
                      {CLINIC.phone.emergency}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <MailIcon className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    {CLINIC.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block text-sm">
                        {email}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-card bg-primary-lighter p-8 lg:p-10">
              <p className="font-display text-lg font-semibold text-primary-darker">
                Un besoin immédiat ?
              </p>
              <a
                href={CLINIC.phone.emergencyLink}
                className="btn btn-primary btn-md"
              >
                <PhoneIcon className="size-5" /> Appeler
              </a>
              <a
                href={CLINIC.phone.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-green-600 text-white hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <SpecialistsSection />
      <AchievementsSection />
      <ProductsSection />
      <NewsSection />
      <ContactSection />
    </>
  )
}