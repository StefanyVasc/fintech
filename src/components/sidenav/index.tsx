import { NavLink } from 'react-router-dom'

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
            <NavLink style={sidenavStyle.sidenavLink} to={item.to}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
