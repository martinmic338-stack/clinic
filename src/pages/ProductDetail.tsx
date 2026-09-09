import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '@/data/products'
import { PRODUCT_CATEGORY_LABELS, PRODUCT_AVAILABILITY_LABELS } from '@/data/products'
import { CLINIC } from '@/data/clinic'
import Seo from '@/components/Seo'
import { GlassesIcon, WhatsAppIcon, PhoneIcon, ArrowRightIcon } from '@/components/icons'

const AVAILABILITY_CLASSES: Record<string, string> = {
  'in-stock': 'bg-green-100 text-green-700',
  'low-stock': 'bg-amber-100 text-amber-700',
  'out-of-stock': 'bg-neutral-100 text-neutral-500',
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return (
      <section className="section">
        <div className="section-narrow">
          <div className="card card-hover mx-auto flex max-w-xl flex-col items-center gap-3 border-dashed p-10 text-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-lighter text-primary">
              <GlassesIcon className="size-7" />
            </span>
            <h1 className="section-title">Produit à venir</h1>
            <p className="text-sm text-mist">
              Ce produit sera présenté dès validation de ses informations.
            </p>
            <Link to="/produits" className="btn btn-primary btn-md mt-4">
              Voir la collection
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const waMessage = `Bonjour, je suis intéressé(e) par le produit ${product.name} (réf. ${product.reference}).`
  const waLink = `${CLINIC.phone.whatsappLink}?text=${encodeURIComponent(waMessage)}`

  return (
    <>
      <Seo
        title={`${product.name} — Produits optiques | CMOK Kolwezi`}
        description={`${product.name} (réf. ${product.reference}) disponible à la clinique à Kolwezi. Demandez le prix sur WhatsApp.`}
      />
      <section className="section">
      <div className="section-narrow">
        {/* Fil d'ariane */}
        <nav aria-label="Fil d'ariane" className="mb-10 flex items-center gap-2 text-sm text-mist">
          <Link to="/produits" className="font-medium text-primary hover:text-primary-dark">
            Produits
          </Link>
          <span aria-hidden>›</span>
          <span className="font-medium text-ink">{product.name}</span>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Grande photo */}
          <div className="overflow-hidden rounded-card bg-primary-lighter">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            ) : (
              <div className="flex aspect-square w-full flex-col items-center justify-center gap-3">
                <GlassesIcon className="size-28 text-primary/20" />
                <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-mist">
                  Photo à venir
                </span>
              </div>
            )}
          </div>

          {/* Informations */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {PRODUCT_CATEGORY_LABELS[product.category]}
            </p>
            <h1 className="mt-2 text-primary-darker">{product.name}</h1>
            <p className="mt-1 font-medium text-mist">{product.reference}</p>

            {/* Disponibilité + prix */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`badge ${AVAILABILITY_CLASSES[product.availability]}`}
              >
                {PRODUCT_AVAILABILITY_LABELS[product.availability]}
              </span>
            </div>

            {product.price ? (
              <p className="mt-6 font-display text-3xl font-semibold text-primary-darker">
                {product.price} {product.currency}
              </p>
            ) : (
              <p className="mt-6 font-display text-2xl font-semibold text-primary-darker">
                Prix sur demande
              </p>
            )}

            {product.description && (
              <p className="mt-6 text-lg leading-relaxed text-slate">
                {product.description}
              </p>
            )}

            {/* Attributs (public cible / style) */}
            {(product.gender || product.style) && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.gender && (
                  <span className="badge bg-primary-soft text-primary ring-1 ring-primary/10">
                    {product.gender}
                  </span>
                )}
                {product.style && (
                  <span className="badge bg-primary-soft text-primary ring-1 ring-primary/10">
                    {product.style}
                  </span>
                )}
              </div>
            )}

            <p className="mt-8 max-w-md text-sm text-mist">
              Ce catalogue est informatif : pour commander ou vérifier la
              disponibilité, contactez directement la clinique.
            </p>

            {/* CTA WhatsApp */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md bg-green-600 text-white hover:bg-green-700"
              >
                <WhatsAppIcon className="size-5" />
                Demander sur WhatsApp
              </a>
              <a href={CLINIC.phone.emergencyLink} className="btn btn-outline btn-md">
                <PhoneIcon className="size-5" />
                {CLINIC.phone.emergency}
              </a>
            </div>

            <Link
              to="/produits"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Retour à la collection
              <ArrowRightIcon className="size-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}