import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, PHONE } from '@/data/constants'
import EmergencyButton from './EmergencyButton'
import WhatsAppButton from './WhatsAppButton'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-primary font-semibold' : 'text-ink hover:text-primary'
    }`

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-mistline bg-white/95 backdrop-blur-sm">
        <div className="section-narrow flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="font-display text-lg font-bold leading-tight text-primary-darker">
              CMOK Kolwezi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} to={link.href} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 xl:flex">
            <EmergencyButton />
            <WhatsAppButton />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="relative z-50 flex size-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-cloud xl:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
            {/* Animated hamburger / X */}
            <span className="absolute h-0.5 w-5 bg-current transition-all duration-300" style={{ transform: isOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-4px)' }} />
            <span className="h-0.5 w-5 bg-current transition-all duration-300" style={{ opacity: isOpen ? 0 : 1 }} />
            <span className="absolute h-0.5 w-5 bg-current transition-all duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(4px)' }} />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-white xl:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={close}
                className="font-display text-xl font-medium text-ink transition-colors hover:text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <span onClick={close}><EmergencyButton /></span>
              <span onClick={close}><WhatsAppButton /></span>
            </div>
          </nav>
        </div>
      )}

      {/* ── Mobile bottom bar ──────────────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-mistline bg-white/95 backdrop-blur-sm xl:hidden">
        <div className="flex h-16">
          <a
            href={PHONE.emergencyLink}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-emergency"
            aria-label="Appeler le service d'urgence"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span className="text-xs font-semibold">URGENCE</span>
          </a>
          <div className="w-px bg-mistline" />
          <a
            href={PHONE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center justify-center gap-1 text-green-600"
            aria-label="Contacter via WhatsApp"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-xs font-semibold">RENDEZ-VOUS</span>
          </a>
        </div>
      </div>
    </>
  )
}
