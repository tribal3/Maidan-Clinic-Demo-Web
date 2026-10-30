import {
  Baby,
  Bone,
  Gem,
  Microscope,
  Smile,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceId } from '../content/site'

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  implants: Bone,
  cosmetic: Gem,
  orthodontics: Smile,
  pediatric: Baby,
  endodontics: Microscope,
  hygiene: Sparkles,
}
