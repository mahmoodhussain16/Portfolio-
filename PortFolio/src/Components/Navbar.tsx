import { Link, NavLink } from 'react-router-dom'

const navElement = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' },
]

const Navbar = () => {
  return (
    <nav style={{ background: '#000', color: '#fff', padding: 15 }}>
      <ul>
        {navElement.map((item) => (
          <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            {item.title}
          </NavLink>
        ))}
        {/* <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar