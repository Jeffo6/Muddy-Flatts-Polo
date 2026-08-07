import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { activitiesFor } from '../data/activities'
import { NAV_ITEMS } from '../data/site'

// Cross-sell band shown after booking on an activity page. Same reasoning as
// the footer: once someone has seen the booking option, the next most useful
// thing to offer is another experience at the same property — not a way back
// to pages they've already scrolled past.
function RelatedActivities({ property, currentSlug }) {
  const others = activitiesFor(property).filter((a) => a.slug !== currentSlug)
  if (others.length === 0) return null

  const parent = NAV_ITEMS.find((item) => item.to === `/${property}`)

  return (
    <div className="band ptxl pbxl">
      <div className="container">
        <Fade triggerOnce duration={1000}>
          <h2 className="pbm">More at {parent?.label}</h2>
        </Fade>
        <div className="related-grid">
          <Fade triggerOnce cascade damping={0.15} duration={900}>
            {others.map(({ slug, title, shortTitle, teaser }) => (
              <Link key={slug} to={`/${property}/${slug}`} className="related-item">
                <h3 className="related-item-title">{shortTitle || title}</h3>
                <p className="related-item-teaser">{teaser}</p>
                <span className="activity-card-more">
                  Learn more
                  <span className="activity-card-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default RelatedActivities
