import contact from '../../assets/icons/contact.svg'
import out from '../../assets/icons/out.svg'
import sales from '../../assets/icons/sales.svg'
import settings from '../../assets/icons/settings.svg'
import summary from '../../assets/icons/summary.svg'
import webhooks from '../../assets/icons/webhooks.svg'

export interface SidenavItem {
  icon: string
  label: string
  link: string
}

export const sidenavItems: SidenavItem[] = [
  { icon: summary, label: 'Summary', link: '#' },
  { icon: sales, label: 'Sales', link: '#' },
  { icon: webhooks, label: 'Webhooks', link: '#' },
  { icon: settings, label: 'Settings', link: '#' },
  { icon: contact, label: 'Contact', link: '#' },
  { icon: out, label: 'Logout', link: '#' },
]
