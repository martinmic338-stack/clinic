import type { ComponentType } from 'react'
import type { Service } from '@/types/Service'
import { EyeIcon, ToothIcon, ScanIcon, PulseIcon, FlaskIcon } from '@/components/icons'

/** Icône associée à chaque id de service */
export const SERVICE_ICONS: Record<Service['id'], ComponentType<{ className?: string }>> = {
  ophtalmologie: EyeIcon,
  dentisterie: ToothIcon,
  imagerie: ScanIcon,
  explorations: PulseIcon,
  laboratoire: FlaskIcon,
}