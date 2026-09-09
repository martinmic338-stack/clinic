import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import { HomeIcon } from '@/components/icons'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable — CMOK Kolwezi"
        description="La page demandée est introuvable. Retournez à l’accueil de CMOK Kolwezi."
      />
      <section className="section">
        <div className="section-narrow">
          <div className="card card-hover mx-auto flex max-w-xl flex-col items-center gap-4 p-10 text-center">
            <span className="rounded-full bg-primary-soft px-4 py-1 font-display text-2xl font-semibold text-primary">
              404
            </span>
            <h1 className="text-primary-darker">Page introuvable</h1>
            <p className="max-w-md text-sm text-mist">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Link to="/" className="btn btn-primary btn-md mt-2">
              <HomeIcon className="size-5" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}