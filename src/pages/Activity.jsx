import { useParams, Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import BookingPanel from '../components/BookingPanel'
import RelatedActivities from '../components/RelatedActivities'
import ContactBand from '../components/ContactBand'
import NotFound from './NotFound'
import { findActivity } from '../data/activities'
import { NAV_ITEMS } from '../data/site'

// One template for every bookable experience across both properties, in a
// fixed order — hero, story, booking, more at this property, contact — so
// visitors comparing activities always find the same thing in the same place.
//
// The split uses `bodyImage`, a different photograph to the hero, so the page
// doesn't show the same shot twice within a screen of itself.
function Activity({ property }) {
  const { slug } = useParams()
  const activity = findActivity(property, slug)

  // Unknown slug under a valid property falls through to the 404
  if (!activity) return <NotFound />

  const {
    title,
    shortTitle,
    image,
    bodyImage,
    bodyImageAlt,
    extraImage,
    extraImageAlt,
    paragraphs,
    pullquote,
    bookable,
    acuityUrl,
  } = activity
  const [lead, ...rest] = paragraphs
  const parent = NAV_ITEMS.find((item) => item.to === `/${property}`)

  return (
    <>
      {/* Hero art is a CSS background — decorative, with the h1 carrying the
          meaning — so it takes no alt text */}
      <Hero image={image} title={shortTitle || title} variant="page" />

      <section className="container">
        <Fade triggerOnce duration={800}>
          <p className="breadcrumb ptm pbl">
            <Link to={`/${property}`}>&larr; Back to {parent?.label}</Link>
          </p>
        </Fade>

        <div className="fullwidth split pbxxl">
          <div>
            <Fade triggerOnce duration={1200}>
              <div>
                <img src={bodyImage} alt={bodyImageAlt} className="image-cap" />
              </div>
            </Fade>
            {/* Optional second shot, set only where the copy runs long enough
                to leave this column empty beneath the first image */}
            {extraImage && (
              <Fade triggerOnce duration={1200}>
                <div className="ptl">
                  <img src={extraImage} alt={extraImageAlt} className="image-cap image-cap--sm" />
                </div>
              </Fade>
            )}
          </div>

          <div>
            <Fade triggerOnce cascade damping={0.15} duration={1000}>
              {/* Only shown when the hero used a shortened title, so the full
                  headline still appears once without repeating itself */}
              {shortTitle && <h2 className="pbs">{title}</h2>}
              <p className="article-lead pbm">{lead}</p>
              {rest.map((paragraph) => (
                <p className="pbs" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
            </Fade>

            {pullquote && (
              <Fade triggerOnce duration={1000}>
                <blockquote className="pullquote ptxs">
                  <p>{pullquote}</p>
                </blockquote>
              </Fade>
            )}
          </div>
        </div>

        {bookable && <BookingPanel title={shortTitle || title} acuityUrl={acuityUrl} />}
      </section>

      <RelatedActivities property={property} currentSlug={slug} />

      <section className="container">
        <ContactBand formLead={`Want to know more about ${shortTitle || title}?`} />
      </section>
    </>
  )
}

export default Activity
