import { Link } from 'react-router-dom'
import type { Article } from '@/types/Article'
import { ARTICLE_CATEGORY_LABELS } from '@/data/articles'
import { formatDate } from '@/utils/format'
import { CalendarIcon, FileTextIcon } from '@/components/icons'

type ArticleCardProps = {
  article: Article
  /** Lien optionnel (page détaillée) */
  to?: string
}

/** Carte éditoriale : image, catégorie, titre, date, résumé */
export default function ArticleCard({ article, to }: ArticleCardProps) {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-primary-lighter">
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <FileTextIcon className="size-14 text-primary/25" />
          </div>
        )}
        <span className="badge absolute left-4 top-4">
          {ARTICLE_CATEGORY_LABELS[article.category]}
        </span>
      </div>

      <div className="p-6">
        <p className="flex items-center gap-1.5 text-xs text-mist">
          <CalendarIcon className="size-3.5" />
          {formatDate(article.publishedAt)}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-primary-darker">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate">{article.summary}</p>
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="card card-hover flex flex-col overflow-hidden">
        {body}
      </Link>
    )
  }

  return <article className="card flex flex-col overflow-hidden">{body}</article>
}