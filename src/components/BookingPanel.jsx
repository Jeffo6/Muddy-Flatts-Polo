import Button from './Button'
import { CONTACT } from '../data/site'

// Booking slot on an activity page. Sits on the page background rather than an
// accent band, so the coloured cross-sell band directly beneath it stays the
// section that punctuates the page.
//
// Renders the Acuity scheduler when a URL is configured for that activity;
// until then it falls back to Toby's phone and email rather than showing an
// empty or broken widget.
function BookingPanel({ title, acuityUrl }) {
  return (
    <div id="Book" className="booking-panel ptxl pbxl">
      <h2 className="pbm">Book {title}</h2>

      {acuityUrl ? (
        <div className="booking-embed">
          <iframe
            src={acuityUrl}
            title={`Booking calendar for ${title}`}
            width="100%"
            height="800"
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <>
          <p className="pbm">
            Online booking is coming soon. In the meantime, call or email Toby and he&apos;ll get you
            booked in.
          </p>
          <div className="row col-gap50 justify-center">
            <Button href={CONTACT.phoneHref} variant="red">
              Call {CONTACT.phone}
            </Button>
            <Button href={`mailto:${CONTACT.email}`} variant="green">
              Email Toby
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default BookingPanel
