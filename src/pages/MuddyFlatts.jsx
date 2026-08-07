import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ContactBand from '../components/ContactBand'
import { LOCATIONS } from '../data/site'
import PoloPlayers from '../assets/polo-players.jpg'
import TeachingRider from '../assets/teaching-rider.jpg'
import HorseWithFoal from '../assets/horse-with-foal.jpg'
import HorseSaddled from '../assets/horse-saddled.jpg'

const [muddyFlatts] = LOCATIONS

// The full Academy and Lessons content lives here — Home now links across to
// this page rather than carrying the long-form copy itself.
function MuddyFlatts() {
  return (
    <>
      <Hero image={PoloPlayers} title="Muddy Flatts" variant="page" />

      <section className="container">
        <div className="fullwidth split ptxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbxs">{muddyFlatts.name}</h2>
              <p className="address">{muddyFlatts.address}</p>
              <p className="pbs italic">{muddyFlatts.distance}</p>
              <p className="mwm">
                Your country club in the city. Situated only an hour from Sydney CBD, our world-class
                field allows beginners to grow confidence in riding as well as elite players to
                demonstrate their prowess. Alongside our rustic and charming clubhouse, the
                atmosphere is inclusive, vibrant and fun.
              </p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce duration={1200}>
              <div>
                <img src={TeachingRider} alt="Two riders crossing the field at Muddy Flatts" />
              </div>
            </Fade>
          </div>
        </div>

        <div id="Academy" className="fullwidth split-2-3 t-split-rev ptxxl">
          <div className="row justify-center">
            <Fade triggerOnce duration={1200}>
              <div>
                <img
                  src={HorseWithFoal}
                  alt="A mare and her foal in the paddock"
                  className="image-520"
                />
              </div>
            </Fade>
          </div>
          <div className="ptxxl">
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Academy</h2>
              <p className="pbxs mwl">
                Learn how to play amongst a welcoming and supportive community of like-minded
                players. This semi-competitive match allows beginners to be fostered into the sport.
                The session is led by two coaches on opposing teams who facilitate an open and
                flowing game whilst maintaining the rules of play.
              </p>
              <p className="pbm mwl">
                They will coach as you play, which offers an experiential learning approach. The more
                experienced players are able to develop their competitive skills, while the newer
                players are allowed to have free hits at the ball and enjoy becoming more comfortable
                in a game environment.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button href="#Contact" variant="red">
                Get In Touch
              </Button>
            </Fade>
          </div>
        </div>

        <div id="Lessons" className="fullwidth split ptxxl">
          <div className="ptl">
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Lessons</h2>
              <p className="pbxs mwm">
                Ever wanted to try polo but thought that it was out of reach? Think again. Start your
                new journey with a patient, experienced and committed coach who will assist you in
                building a solid foundation for playing.
              </p>
              <p className="pbm mwm">
                Those who have never ridden a horse before are always welcome to join and learn.
                Riding is the cornerstone of playing polo. Thereby, a lot of emphasis is placed on
                becoming a partner with your horse. Through personalized instruction, you&apos;ll
                develop the skills and confidence to thrive both in the saddle and on the field.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              {/* Figma labels this "Book Now". Pointed at the contact band until
                  Acuity Scheduling is integrated — there is no booking flow yet. */}
              <Button href="#Contact" variant="red">
                Book Now
              </Button>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce duration={1200}>
              <div>
                <img src={HorseSaddled} alt="A horse being saddled before a lesson" />
              </div>
            </Fade>
          </div>
        </div>

        <ContactBand formLead="Want to know more about Muddy Flatts Richmond?" />
      </section>
    </>
  )
}

export default MuddyFlatts
