import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Button from './Button'
import { NAV_ITEMS } from '../data/site'
import Logo from '../assets/Logo.webp'

// Sits transparent over the hero and picks up the page background once
// scrolled — this is the state the isolated Header frame in Figma shows.
function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Collapse the mobile menu on navigation. Done here rather than in an effect
  // keyed on the route so it also fires for same-page hash links.
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <NavLink to="/" aria-label="Muddy Flatts Polo Club — home">
        <img src={Logo} alt="Muddy Flatts and Tarlo Hill logo" />
      </NavLink>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Visibility is driven by `is-open` + a media query rather than the
          `hidden` attribute: `hidden` would stay set at desktop widths, where
          the nav is actually visible, and mislead assistive tech. */}
      <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        {NAV_ITEMS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {label}
          </NavLink>
        ))}
        {/* Duplicated inside the menu so the primary CTA survives on mobile,
            where the header-level button is hidden for space. */}
        <Button href="#Contact" variant="red" onClick={closeMenu}>
          Get In Touch
        </Button>
      </nav>

      <Button href="#Contact" variant="red">
        Get In Touch
      </Button>
    </header>
  )
}

export default Header
