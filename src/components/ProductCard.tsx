import { Link } from 'react-router-dom'
import type { Product } from '@/types/Product'
import { PRODUCT_CATEGORY_LABELS, PRODUCT_AVAILABILITY_LABELS } from '@/data/products'
import { GlassesIcon, ArrowRightIcon } from '@/components/icons'

type ProductCardProps = {
  product: Product
}

const AVAILABILITY_CLASSES: Record<Product['availability'], string> = {
  'in-stock': 'bg-green-100 text-green-700',
  'low-stock': 'bg-amber-100 text-amber-700',
  'out-of-stock': 'bg-neutral-100 text-neutral-500',
}

/** Carte produit : photo, nom, référence, catégorie, description, disponibilité */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/produits/${product.slug}`}
      className="card card-hover flex flex-col overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-primary-lighter">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-3">
            <GlassesIcon className="size-16 text-primary/25" />
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-mist">
              Photo à venir
            </span>
          </div>
        )}
        <span
          className={`badge absolute left-4 top-4 ${AVAILABILITY_CLASSES[product.availability]}`}
        >
          {PRODUCT_AVAILABILITY_LABELS[product.availability]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-mist">
          {product.reference}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-primary-darker">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-primary">
          {PRODUCT_CATEGORY_LABELS[product.category]}
        </p>
        {product.description && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate">
            {product.description}
          </p>
        )}
        <span className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full border-2 border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary-soft">
          Voir le produit
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  )
}