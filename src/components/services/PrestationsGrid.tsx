import { CheckIcon } from '@/components/icons'

type PrestationsGridProps = {
  items: string[]
}

/** Grille des prestations proposées par un service */
export default function PrestationsGrid({ items }: PrestationsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="card card-hover flex items-center gap-3 p-5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
            <CheckIcon className="size-4" />
          </span>
          <p className="font-medium text-ink">{item}</p>
        </div>
      ))}
    </div>
  )
}