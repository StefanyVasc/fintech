import FintechSVG from '../../assets/FintechSVG'
import { SidenavItem, sidenavItems } from './sidenavItems'
import sidenavStyle from './styles'

export function Sidenav() {
  return (
    <nav className="sidenav box bg-cream">
      <FintechSVG title="Fintech Logo" />
      <ul>
        {sidenavItems.map((item: SidenavItem, index: number) => (
          <li key={index} style={sidenavStyle.sidenavLi}>
            <span style={sidenavStyle.sidenavSpan}>
              <img src={item.icon} alt={item.label} />
            </span>
            <a style={sidenavStyle.sidenavLink} href={item.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
