import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../nav.js'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="nav">
      <nav className="nav__inner">
        {NAV_ITEMS.map(({ label, path, color }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            style={{ '--link-color': color }}
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
