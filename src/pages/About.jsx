import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ContactBand from '../components/ContactBand'
import { CONTACT } from '../data/site'
import Horse from '../assets/horse.jpg'
import HorseTeaching from '../assets/horse-teaching.jpg'
import PoloPlayers from '../assets/polo-players.jpg'

// Figma's team grid carries placeholder data — a "John Smith", and
// 0444 444 444 / example@muddyflatts.com.au against every member. Only the two
// people the docs actually name are listed here, with real contact details
// where we have them. Awaiting real team data from the client.
const TEAM = [
  { name: 'Wallace Ashton', role: 'Founder' },
  { name: CONTACT.name, role: 'Trainer / Manager', email: CONTACT.email, phone: CONTACT.phone },
]

const initials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')

function About() {
  return (
    <>
      <Hero image={Horse} title="About" variant="page" />

      <section className="container">
        {/* Image leads so this alternates against the Wallace Ashton block
            below, which runs copy-left */}
        <div className="fullwidth split ptxxl pbxxl">
          <Fade triggerOnce duration={1200}>
            <div>
              <img
                src={PoloPlayers}
                alt="Players contesting the ball during a chukka at Muddy Flatts"
                className="image-cap image-cap--sm"
              />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbm">
                Muddy Flatts is the country club in the city and is home to James Ashton&rsquo;s
                friendly Chukkas.
              </h2>
              <p className="mwm">
                Muddy Flatts is the polo ground controlled by THEC. We do old fashioned polo as it
                was played in the bush 50 years ago: an excellent field, and everything else simply
                functional. We play fun, fast polo and don&rsquo;t run events. The glamour, glitz and
                gimmicks are provided by all the other clubs. Our aim is to have the best field, the
                best ponies and decent players, so the game appeals to athletic young riders.
              </p>
            </Fade>
          </div>
        </div>

        <div className="fullwidth split">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbxs">A word from Wallace Ashton</h2>
              <h3 className="pbs">Why Tarlo Hill Equestrian Club was formed</h3>
              <p className="pbxs mwm">
                I have noticed my entire life that many people love the grazing properties of the
                southern tablelands and central west of NSW. They love the stock, the topography; and
                of course the horses. They feel they have gone back 100 years when Australia rode on
                the sheep&apos;s back. Every passing year this experience becomes a little more
                unique.
              </p>
              <p className="pbm mwm">
                I am interested in the connection between all equestrian sports. Just as in the
                &ldquo;old days&rdquo; when the stock horse was also used to play polo, today, our
                ponies can do cross country, basic dressage presentation as well as polo. All these
                additional experiences make our horses more enjoyable and adaptable animals.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button to="/our-heritage" variant="red">
                Our History
              </Button>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={HorseTeaching} alt="A rider being shown how to saddle a horse" />
            </div>
          </Fade>
        </div>

        <div className="ptxxl">
          <Fade triggerOnce duration={1200}>
            <h2 className="tac pbl">Our Team</h2>
          </Fade>
          <div className="team-grid">
            {TEAM.map(({ name, role, email, phone }, index) => (
              <Fade triggerOnce duration={1000} key={name}>
                <div className="team-member">
                  {/* Coloured disc with initials stands in until real portraits
                      exist — reads as deliberate rather than as a broken image */}
                  <span
                    className={`team-avatar ${index % 2 ? 'team-avatar--green' : ''}`}
                    aria-hidden="true"
                  >
                    {initials(name)}
                  </span>
                  <h3 className="pbxxs">{name}</h3>
                  <p className="pbxs italic">{role}</p>
                  {email && (
                    <p className="pbxxs">
                      <a href={`mailto:${email}`} className="contact-link">
                        {email}
                      </a>
                    </p>
                  )}
                  {phone && (
                    <p>
                      <a href={CONTACT.phoneHref} className="contact-link">
                        {phone}
                      </a>
                    </p>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <ContactBand formLead="Want to know more about the club?" />
      </section>
    </>
  )
}

export default About
