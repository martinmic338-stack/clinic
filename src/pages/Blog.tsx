import { useMemo, useState } from 'react'
import type { ArticleCategory } from '@/types/Article'
import { ALL_ARTICLES, ARTICLE_CATEGORY_LABELS } from '@/data/articles'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import ArticleCard from '@/components/ArticleCard'
import { CalendarIcon, SearchIcon } from '@/components/icons'

export default function Blog() {
  const [category, setCategory] = useState<ArticleCategory | 'all'>('all')
  const [query, setQuery] = useState('')

  const categories = useMemo(
    () => Array.from(new Set(ALL_ARTICLES.map((a) => a.category))).sort(),
    [],
  )

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...ALL_ARTICLES]
      .filter((a) => category === 'all' || a.category === category)
      .filter(
        (a) =>
          q === '' ||
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q),
      )
      .sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      )
  }, [category, query])

  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="Les actualités de la clinique"
        intro="Nouvelles, conseils de santé et épisodes de vie de la clinique."
      />

      <section className="section pt-0">
        <div className="section-narrow">
          {/* Recherche + filtre */}
          {ALL_ARTICLES.length > 0 && (
            <div className="mb-12 flex flex-col items-center gap-5">
              <div className="relative w-full max-w-md">
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-mist" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher un article…"
                  aria-label="Rechercher un article"
                  className="input w-full pl-12"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCategory('all')}
                  className={`btn btn-sm ${category === 'all' ? 'btn-primary' : 'btn-outline'}`}
                >
                  Tous
                </button>
                {categories.map((c) => (
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
            </div>
          )}

          {/* Cartes */}
          {ALL_ARTICLES.length > 0 ? (
            visible.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((article) => (
                  <ArticleCard key={article.id} article={article} to={`/actualites/${article.slug}`} />
                ))}
              </div>
            ) : (
              <div className="card card-hover mx-auto flex max-w-xl flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                  <SearchIcon className="size-7" />
                </span>
                <h2 className="section-title">Aucun résultat</h2>
                <p className="text-sm text-mist">
                  Aucun article ne correspond à votre recherche dans cette catégorie.
                </p>
              </div>
            )
          ) : (
            <div className="card card-hover mx-auto flex max-w-xl flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                <CalendarIcon className="size-7" />
              </span>
              <h2 className="section-title">Pas encore de nouvelles publications</h2>
              <p className="text-sm text-mist">
                Les actualités de la clinique seront publiées ici, dès validation
                des informations.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  )
}