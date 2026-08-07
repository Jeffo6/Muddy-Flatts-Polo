import { Fade } from 'react-awesome-reveal'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import EnquiryForm from './EnquiryForm'
import { CONTACT, LOCATIONS } from '../data/site'

// Contact details + enquiry form on the left, the two location maps on the
// right. Shared by every page — Figma repeats this band verbatim on Home,
// Tarlo Hill, Training & Breeding and Our Heritage.
//
// Two Figma copy errors are corrected here rather than reproduced: the section
// heading read "Tarlo Hill" (a leftover from the page this band was copied
// from), and the form's lead-in asked about "Tarlo Hill EC" even on Home. The
// lead-in is now a prop so each page can set its own.
function ContactBand({
  intro = "Whether you're curious about lessons, looking to join our vibrant polo community, or planning a weekend escape to the countryside, we'd love to hear from you. Reach out and let's start your polo journey together.",
  formLead = 'Want to know more about Muddy Flatts and Tarlo Hill?',
}) {
  return (
    <div id="Contact" className="fullwidth split ptxxl pbxxl">
      <div>
        <Fade triggerOnce duration={1200}>
          <h2 className="pbl">Get In Touch</h2>
        </Fade>

        <Fade triggerOnce duration={1000}>
          <p className="pbm mwm">{intro}</p>
        </Fade>

        <Fade triggerOnce cascade damping={0.2} duration={1000}>
          <h3 className="pbxs">{CONTACT.name}</h3>
          <p className="pbxxs contact-item">
            <AiOutlineMail className="contact-icon" aria-hidden="true" />
            <a href={`mailto:${CONTACT.email}`} className="contact-link">
              {CONTACT.email}
            </a>
          </p>
          <p className="contact-item">
            <AiOutlinePhone className="contact-icon" aria-hidden="true" />
            <a href={CONTACT.phoneHref} className="contact-link">
              {CONTACT.phone}
            </a>
          </p>
        </Fade>

        <Fade triggerOnce duration={1000}>
          <div className="ptl">
            <h3 className="pbxs">Send an Enquiry</h3>
            <p className="pbxxs">{formLead}</p>
            <p className="pbs">
              Call Toby on {CONTACT.phone} or fill out the form and we&apos;ll be in touch!
            </p>
            <EnquiryForm />
          </div>
        </Fade>
      </div>

      <div>
        {LOCATIONS.map(({ id, name, address, mapSrc }) => (
          <div className="pbm" key={id}>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h3 className="pbxs">{name}</h3>
              <p className="pbs">{address}</p>
            </Fade>
            <Fade triggerOnce duration={1200}>
              <div className="map-container">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${name} location map`}
                ></iframe>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactBand
