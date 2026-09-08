import { useState } from 'react'
import { SERVICES } from '@/data/services'
import { CLINIC } from '@/data/clinic'
import { formatDate } from '@/utils/format'
import { CheckIcon, WhatsAppIcon } from '@/components/icons'

type FormValues = {
  name: string
  phone: string
  service: string
  date: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMPTY: FormValues = { name: '', phone: '', service: '', date: '', message: '' }
const MAX_MESSAGE = 500

const todayISO = new Date().toISOString().split('T')[0]

/** Nettoie une valeur : retire les caractères de contrôle et normalise les espaces */
function sanitize(value: string): string {
  const printable = value
    .split('')
    .filter((ch) => {
      const code = ch.charCodeAt(0)
      return code >= 32 && code !== 127
    })
    .join('')
  return printable.replace(/\s+/g, ' ').trim()
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  const name = sanitize(values.name)
  if (name === '') errors.name = 'Veuillez indiquer votre nom.'
  else if (name.length > 100) errors.name = 'Le nom est trop long.'
  else if (!/^[\p{L}\p{M}'’ -]{2,100}$/u.test(name))
    errors.name = 'Veuillez indiquer un nom valide.'

  const digits = sanitize(values.phone).replace(/\D/g, '')
  if (digits === '') errors.phone = 'Veuillez indiquer votre téléphone.'
  else if (digits.length < 8 || digits.length > 15)
    errors.phone = 'Numéro de téléphone invalide.'

  if (!SERVICES.some((s) => s.id === values.service))
    errors.service = 'Veuillez choisir un service.'

  const date = values.date
  if (date === '') errors.date = 'Veuillez choisir une date souhaitée.'
  else {
    const d = new Date(`${date}T00:00:00`)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (Number.isNaN(d.getTime()) || d < today)
      errors.date = 'La date doit être aujourd’hui ou plus tard.'
  }

  if (sanitize(values.message).length > MAX_MESSAGE)
    errors.message = `Le message est trop long (${MAX_MESSAGE} caractères max).`

  return errors
}

export default function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [waLink, setWaLink] = useState<string>('')
  const [ready, setReady] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  function update(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    /* Anti-spam : le champ caché ne doit jamais être rempli par un humain */
    if (honeypot !== '') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    const name = sanitize(values.name)
    const phone = sanitize(values.phone)
    const message = sanitize(values.message)
    const serviceName =
      SERVICES.find((s) => s.id === values.service)?.name ?? values.service

    const lines = [
      'Bonjour, je souhaite prendre rendez-vous à la clinique.',
      '',
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Service : ${serviceName}`,
      `Date souhaitée : ${formatDate(values.date)}`,
    ]
    if (message !== '') lines.push(`Message : ${message}`)

    const text = lines.join('\n')
    setWaLink(`${CLINIC.phone.whatsappLink}?text=${encodeURIComponent(text)}`)
    setReady(true)
  }

  function reset() {
    setReady(false)
    setWaLink('')
  }

  return (
    <div>
      {ready && waLink !== '' ? (
        <div className="card flex flex-col items-center gap-4 p-8 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-green-100 text-green-700">
            <CheckIcon className="size-7" />
          </span>
          <h3 className="font-display text-xl font-semibold text-primary-darker">
            Votre demande est prête
          </h3>
          <p className="max-w-md text-sm text-slate">
            Un message pré-rempli avec votre demande de rendez-vous va s'ouvrir
            dans WhatsApp. Vous pourrez le vérifier avant de l'envoyer.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md bg-green-600 text-white hover:bg-green-700"
          >
            <WhatsAppIcon className="size-5" />
            Envoyer sur WhatsApp
          </a>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Modifier ma demande
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Nom</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                value={values.name}
                onChange={(e) => update('name', e.target.value)}
                className="input"
                placeholder="Votre nom"
              />
              {errors.name && <p className="mt-1 text-sm text-emergency">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="label">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={20}
                value={values.phone}
                onChange={(e) => update('phone', e.target.value)}
                className="input"
                placeholder="+243 …"
              />
              {errors.phone && <p className="mt-1 text-sm text-emergency">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="label">Service</label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={(e) => update('service', e.target.value)}
                className="input"
              >
                <option value="">Choisir un service…</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-sm text-emergency">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="date" className="label">Date souhaitée</label>
              <input
                id="date"
                name="date"
                type="date"
                min={todayISO}
                value={values.date}
                onChange={(e) => update('date', e.target.value)}
                className="input"
              />
              {errors.date && <p className="mt-1 text-sm text-emergency">{errors.date}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="label">
              Message (facultatif)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={MAX_MESSAGE}
              value={values.message}
              onChange={(e) => update('message', e.target.value)}
              className="input resize-none"
              placeholder="Précisez, si vous le souhaitez, votre demande…"
            />
            {errors.message && <p className="mt-1 text-sm text-emergency">{errors.message}</p>}
          </div>

          {/* Champ anti-spam (caché, jamais rempli par un humain) */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Ne pas remplir ce champ</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-md w-full">
            Préparer ma demande de rendez-vous
          </button>

          <p className="text-xs leading-relaxed text-mist">
            Seules vos coordonnées de contact sont demandées : aucune donnée
            médicale n'est collectée. Ce formulaire ne stocke rien — il prépare
            simplement un message WhatsApp que vous envoyez vous-même.
          </p>
        </form>
      )}
    </div>
  )
}