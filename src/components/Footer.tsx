import { Link } from 'react-router-dom'
import { NAV_LINKS, PHONE, EMAILS, ADDRESS } from '@/data/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-darker text-white">
      <div className="section-narrow py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Branding */}
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              EYES AND DENTAL CLINIC
            </h3>
            <p className="mt-1 text-sm font-medium text-white/60">FONDATION MISÉRICORDE</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Votre sourire et votre vision sont notre mission.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              <p className="mb-2">{ADDRESS}</p>
              <p className="mb-1">
                <a href={PHONE.emergencyLink} className="text-white/80 underline-offset-2 hover:text-white hover:underline">
                  {PHONE.emergency}
                </a>
              </p>
              <p className="mb-2">
                <a href={PHONE.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 underline-offset-2 hover:text-white hover:underline">
                  {PHONE.whatsapp}
                </a>
              </p>
              {EMAILS.map((email) => (
                <p key={email} className="mb-1">
                  <a href={`mailto:${email}`} className="text-white/80 underline-offset-2 hover:text-white hover:underline">
                    {email}
                  </a>
                </p>
              ))}
            </address>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-narrow flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Eyes and Dental Clinic – Fondation Miséricorde</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-white/80">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-white/80">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
