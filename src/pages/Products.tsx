import { useMemo, useState } from 'react'
import type { ProductFilter } from '@/types/Product'
import { PRODUCTS, PRODUCT_FILTERS } from '@/data/products'
import PageHero from '@/components/PageHero'
import ProductCard from '@/components/ProductCard'
import { GlassesIcon } from '@/components/icons'

/** Disponibilité par défaut utilisée pour trier les cartes */
const AVAILABILITY_ORDER: Record<string, number> = {
  'in-stock': 0,
  'low-stock': 1,
  'out-of-stock': 2,
}

export default function Products() {
  const [filter, setFilter] = useState<ProductFilter | 'all'>('all')

  const visible = useMemo(() => {
    const filtered =
      filter === 'all'
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.gender === filter || p.style === filter)
    return [...filtered].sort(
      (a, b) => AVAILABILITY_ORDER[a.availability] - AVAILABILITY_ORDER[b.availability],
    )
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="Boutique optique"
        title="Nos produits optiques"
        intro="Découvrez notre sélection de lunettes disponibles à la clinique."
      />

      <section className="section pt-0">
        <div className="section-narrow">
          {/* Filtres */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
            >
              Tous
            </button>
            {PRODUCT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Galerie */}
          {visible.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="card card-hover mx-auto flex max-w-xl flex-col items-center justify-center gap-3 border-dashed p-10 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
                <GlassesIcon className="size-7" />
              </span>
              <h2 className="section-title">Notre collection optique arrive bientôt</h2>
              <p className="text-sm text-mist">
                Les modèles de lunettes et accessoires optiques seront bientôt disponibles
                dans notre boutique.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}