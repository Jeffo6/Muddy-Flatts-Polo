import { Link } from 'react-router-dom'
import { CONTACT, LOCATIONS } from '../data/site'
import { activitiesFor } from '../data/activities'
import Logo from '../assets/Logo.webp'

// Sitemap columns: every link sits at one level and each property gets its own
// column listing its real activities.
//
// Home / About / Our Heritage are deliberately absent. Footer space is finite,
// so it's spent on the things a visitor can act on — the two properties and
// their bookable experiences. The logo carries the route home instead.
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" aria-label="Muddy Flatts Polo Club — home">
              <img src={Logo} alt="Muddy Flatts Polo Club logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">The Home of Friendly Chukkas</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Locations</h4>
            {LOCATIONS.map(({ id, name, address }) => (
              <div key={id} className="footer-location">
                <p className="footer-location-name">{name}</p>
                <p>{address}</p>
              </div>
            ))}
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact-name">{CONTACT.name}</p>
            <p className="footer-contact-item">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
            <p className="footer-contact-item">
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Muddy Flatts</h4>
            <nav className="footer-nav" aria-label="Muddy Flatts">
              <Link to="/muddy-flatts">Overview</Link>
              {activitiesFor('muddy-flatts').map(({ slug, title, shortTitle }) => (
                <Link key={slug} to={`/muddy-flatts/${slug}`}>
                  {shortTitle || title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Tarlo Hill</h4>
            <nav className="footer-nav" aria-label="Tarlo Hill">
              <Link to="/tarlo-hill">Overview</Link>
              {activitiesFor('tarlo-hill').map(({ slug, title, shortTitle }) => (
                <Link key={slug} to={`/tarlo-hill/${slug}`}>
                  {shortTitle || title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{new Date().getFullYear()} Muddy Flatts Polo</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
