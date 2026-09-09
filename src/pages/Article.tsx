import { Link, useParams } from 'react-router-dom'
import { ALL_ARTICLES, ARTICLE_CATEGORY_LABELS } from '@/data/articles'
import { CLINIC } from '@/data/clinic'
import { formatDate } from '@/utils/format'
import Seo from '@/components/Seo'
import { CalendarIcon, FileTextIcon, TagIcon, UserIcon, WhatsAppIcon, PhoneIcon } from '@/components/icons'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const article = ALL_ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="section">
        <div className="section-narrow">
          <div className="card card-hover mx-auto flex max-w-xl flex-col items-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <FileTextIcon className="size-7" />
            </span>
            <h1 className="section-title">Article à venir</h1>
            <p className="text-sm text-mist">
              Cet article sera publié dès validation de son contenu.
            </p>
            <Link to="/actualites" className="btn btn-primary btn-md mt-4">
              Voir les actualités
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const paragraphs = article.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <>
      <Seo
        title={`${article.title} — CMOK Kolwezi`}
        description={`${article.summary} Actualités de la clinique à Kolwezi.`}
      />
      <section className="section">
      <div className="section-narrow max-w-3xl">
        {/* Fil d'ariane */}
        <nav aria-label="Fil d'ariane" className="mb-8 flex items-center gap-2 text-sm text-mist">
          <Link to="/actualites" className="font-medium text-primary hover:text-primary-dark">
            Actualités
          </Link>
          <span aria-hidden>›</span>
          <span className="font-medium text-ink">{ARTICLE_CATEGORY_LABELS[article.category]}</span>
        </nav>

        {/* Titre + méta */}
        <p className="section-eyebrow">{ARTICLE_CATEGORY_LABELS[article.category]}</p>
        <h1 className="mt-2 text-primary-darker">{article.title}</h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="size-4" />
            {formatDate(article.publishedAt)}
          </span>
          {article.author && (
            <span className="flex items-center gap-1.5">
              <UserIcon className="size-4" />
              {article.author}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <TagIcon className="size-4" />
            {ARTICLE_CATEGORY_LABELS[article.category]}
          </span>
        </div>

        {/* Image de couverture */}
        <div className="mt-8 overflow-hidden rounded-card bg-primary-lighter">
          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              loading="lazy"
              decoding="async"
              className="aspect-[21/9] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[21/9] w-full items-center justify-center">
              <FileTextIcon className="size-20 text-primary/25" />
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className="mt-10 space-y-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bloc de contact */}
        <div className="mt-12">
          <div className="card flex flex-col items-center gap-4 p-8 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-green-600 text-white">
              <WhatsAppIcon className="size-7" />
            </span>
            <h2 className="font-display text-xl font-semibold text-primary-darker">
              Une question ? Contactez-nous sur WhatsApp.
            </h2>
            <p className="max-w-md text-sm text-mist">
              Notre équipe vous répond promptement pour toute question ou demande
              de rendez-vous.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
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