import { useMemo, useState } from 'react'
import type { ArticleCategory } from '@/types/Article'
import { ACHIEVEMENT_ARTICLES, ACHIEVEMENT_CATEGORIES, ARTICLE_CATEGORY_LABELS } from '@/data/articles'
import PageHero from '@/components/PageHero'
import ArticleCard from '@/components/ArticleCard'
import { CalendarIcon } from '@/components/icons'

export default function Achievements() {
  const [category, setCategory] = useState<ArticleCategory | 'all'>('all')

  const visible = useMemo(() => {
    const filtered =
      category === 'all'
        ? ACHIEVEMENT_ARTICLES
        : ACHIEVEMENT_ARTICLES.filter((a) => a.category === category)
    return [...filtered].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
  }, [category])

  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Notre expertise en action"
        intro="Bilan des actions et travaux menés par la clinique."
      />

      <section className="section pt-0">
        <div className="section-narrow">
          {/* Filtre par catégorie */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`btn btn-sm ${category === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              Toutes
            </button>
            {ACHIEVEMENT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`btn btn-sm ${category === c ? 'btn-primary' : 'btn-outline'}`}
              >
                {ARTICLE_CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>

          {/* Cartes */}
          {visible.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((article) => (
                <ArticleCard key={article.id} article={article} to={`/actualites/${article.slug}`} />
              ))}
            </div>
          ) : (
            <div className="card card-hover mx-auto flex max-w-xl flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                <CalendarIcon className="size-7" />
              </span>
              <h2 className="section-title">Nos réalisations à venir</h2>
              <p className="text-sm text-mist">
                Les projets, recherches, publications et conférences menés par la clinique
                seront présentés ici, dès validation des informations.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}