import contact from '../../assets/icons/contact.svg'
import out from '../../assets/icons/out.svg'
import sales from '../../assets/icons/sales.svg'
import settings from '../../assets/icons/settings.svg'
import summary from '../../assets/icons/summary.svg'
import webhooks from '../../assets/icons/webhooks.svg'

export interface SidenavItem {
  icon: string
  label: string
  to: string
}

export const sidenavItems: SidenavItem[] = [
  { icon: summary, label: 'Summary', to: '/' },
  { icon: sales, label: 'Sales', to: '/sales' },
  { icon: webhooks, label: 'Webhooks', to: '#' },
  { icon: settings, label: 'Settings', to: '#' },
  { icon: contact, label: 'Contact', to: '#' },
  { icon: out, label: 'Logout', to: '#' },
]
