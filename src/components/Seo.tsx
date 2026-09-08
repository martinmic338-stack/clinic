import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, PAGE_META } from '@/data/seo'

/** Applique le <title> et la meta description de la page */
function applyMeta(title: string, description: string) {
  document.title = title
  let el = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', 'description')
    document.head.appendChild(el)
  }
  el.setAttribute('content', description)
}

type SeoProps = {
  title: string
  description: string
}

/** Définit le titre et la description de la page courante */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    applyMeta(title, description)
  }, [title, description])
  return null
}

/** Applique automatiquement le titre/description selon la route (page statique) */
export function SeoRouteEnforcer() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = PAGE_META[pathname]
    if (meta) applyMeta(meta.title, meta.description)
    else applyMeta(SITE.defaultTitle, SITE.defaultDescription)
  }, [pathname])

  return null
}