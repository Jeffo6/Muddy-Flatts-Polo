import { Link } from 'react-router-dom'
import { CONTACT, LOCATIONS } from '../data/site'
import Logo from '../assets/Logo.webp'

// Four columns, with the last split into a top-level list and a per-property
// sub-list — matching the footer used across every Figma page frame.
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={Logo} alt="Muddy Flatts Polo Club logo" className="footer-logo" />
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
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-split">
              <nav className="footer-nav" aria-label="Footer">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/our-heritage">Our Heritage</Link>
              </nav>

              <div>
                <p className="footer-subheading">Muddy Flatts</p>
                <nav className="footer-nav" aria-label="Muddy Flatts">
                  <Link to="/muddy-flatts#Lessons">Lessons</Link>
                  <Link to="/muddy-flatts#Academy">Academy</Link>
                </nav>

                <p className="footer-subheading pts">Tarlo Hill</p>
                <nav className="footer-nav" aria-label="Tarlo Hill">
                  <Link to="/tarlo-hill#Activities">Activities</Link>
                  <Link to="/tarlo-hill#Breeding">Training and Breeding</Link>
                </nav>
              </div>
            </div>
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
