import { Link } from 'react-router-dom'

// Hub card for one bookable experience. The body block takes the property's
// colour — rose-ebony for Muddy Flatts, dark-green for Tarlo Hill — so the
// cards reuse the colour coding the buttons already establish.
const PROPERTY_VARIANT = {
  'muddy-flatts': 'activity-card--red',
  'tarlo-hill': 'activity-card--green',
}

function ActivityCard({ activity }) {
  const { slug, property, title, shortTitle, image, imageAlt, teaser } = activity

  return (
    <Link
      to={`/${property}/${slug}`}
      className={`activity-card ${PROPERTY_VARIANT[property] || ''}`}
    >
      <div className="activity-card-media">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="activity-card-body">
        <h3 className="activity-card-title">{shortTitle || title}</h3>
        <p className="activity-card-teaser">{teaser}</p>
        <span className="activity-card-more">
          Learn more
          <span className="activity-card-arrow" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  )
}

export default ActivityCard
