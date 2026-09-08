import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}

/** En-tête de page générique (sur-titre, titre, introduction) */
export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="section">
      <div className="section-narrow">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="section-eyebrow justify-center">{eyebrow}</p>}
          <h1 className="text-primary-darker">{title}</h1>
          {intro && <p className="section-subtitle">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}