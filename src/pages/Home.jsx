import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ContactBand from '../components/ContactBand'
import { LOCATIONS } from '../data/site'
import Bg from '../assets/bg.jpg'
import HorseTeaching from '../assets/horse-teaching.jpg'
import TeachingRider from '../assets/teaching-rider.jpg'
import HorsesRainbow from '../assets/horses-rainbow.jpg'
import TarloHillSign from '../assets/tarlo-hill-sign.jpg'
import BBQ from '../assets/bbq.jpg'

const [muddyFlatts, tarloHill] = LOCATIONS

function Home() {
  return (
    <>
      <Hero image={Bg} title="Muddy Flatts Polo" secondTitle="Tarlo Hill Equestrian" />

      <section className="container">
        <Fade triggerOnce duration={1200}>
          <h2 className="ptxxl tac pbl">The Home of Friendly Chukkas</h2>
        </Fade>

        {/* Intro — image left, copy and the two property CTAs right */}
        <div className="fullwidth split">
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={HorseTeaching} alt="A rider being shown how to saddle a horse" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <p className="ptm pbxs mwm">
                Welcome to Muddy Flatts Polo Club, where world-class polo meets genuine country
                hospitality across two exceptional locations.
              </p>
              <p className="pbxs mwm">
                Whether you&apos;re seeking weekly sessions close to Sydney or a weekend escape in
                the breathtaking NSW countryside, we offer inclusive experiences for riders and
                players of all levels.
              </p>
              <p className="pbm mwm">
                From complete beginners taking their first swing to seasoned players refining their
                game, our passionate coaches and vibrant community are here to guide your polo
                journey.
              </p>
            </Fade>
            <div className="row col-gap50">
              <Fade triggerOnce cascade damping={0.3} duration={1000}>
                <Button to="/muddy-flatts" variant="red">
                  Discover Muddy Flatts
                </Button>
                <Button to="/tarlo-hill" variant="green">
                  Explore Tarlo Hill
                </Button>
              </Fade>
            </div>
          </div>
        </div>

        {/* Muddy Flatts — Figma folds the former standalone Lessons and Academy
            sections into this block as two condensed paragraphs behind a single
            Learn More, which points at the full Muddy Flatts page. */}
        <div id="MuddyFlatts" className="fullwidth split ptxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbxs">{muddyFlatts.name}</h2>
              <p className="address">{muddyFlatts.address}</p>
              <p className="pbs italic">{muddyFlatts.distance}</p>
              <p className="pbxs mwm">
                Muddy Flatts is your country club in the city. Just an hour from Sydney CBD, our
                world-class field and rustic, welcoming clubhouse create an inclusive, vibrant
                atmosphere where beginners can build confidence and experienced players can sharpen
                their game.
              </p>
              <p className="pbxs mwm">
                Whether you&rsquo;re brand new to horses or looking to take your polo further, our
                coaching is designed to meet you where you&rsquo;re at. We focus on strong riding
                foundations, horsemanship, and the skills that translate directly to the
                field&mdash;helping you become a true partner with your horse while progressing at a
                pace that feels supportive and achievable.
              </p>
              <p className="pbm mwm">
                For those ready to step into gameplay, our academy sessions offer a friendly,
                semi-competitive environment led by coaches who guide the action, keep play flowing,
                and teach in the moment. It&rsquo;s an experiential approach that lets newer players
                learn comfortably in a game setting while giving more seasoned players space to
                develop their competitive edge.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button to="/muddy-flatts" variant="red">
                Learn More
              </Button>
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

        {/* Tarlo Hill — staggered collage: landscape and BBQ stacked on the
            left, copy then the property sign on the right */}
        <div id="TarloHill" className="fullwidth split t-split-rev ptxxl">
          <div>
            <Fade triggerOnce duration={1200}>
              <div>
                <img src={HorsesRainbow} alt="Horses grazing beneath a rainbow at Tarlo Hill" />
              </div>
            </Fade>
            <Fade triggerOnce duration={1200}>
              <div className="ptxxl">
                <img
                  src={BBQ}
                  alt="Guests sharing a barbecue on the deck after a day of riding"
                  className="bleed"
                />
              </div>
            </Fade>
          </div>

          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbxs">{tarloHill.name}</h2>
              <p className="address">{tarloHill.address}</p>
              <p className="pbs italic">{tarloHill.distance}</p>
              <p className="pbxs mwm">
                Escape the mundane of the city and explore the countryside of NSW at its very best.
                Located only two and a half hours from Sydney lies a truly breathtaking place, filled
                with horses, a polo field and broad acres to explore.
              </p>
              <p className="pbxs mwm">
                We offer riding and polo experience weekends which marry adventure with class. Come
                out, spend the day in the saddle exploring stunning landscapes, then unwind by the
                fire for great conversation with your fellow travellers.
              </p>
              <p className="pbm mwm">
                Leave the city behind for a weekend where time slows down, horizons stretch wide, and
                the only agenda is the one you set. It&apos;s the kind of reset that stays with you
                long after you return home.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button to="/tarlo-hill" variant="green">
                Learn More
              </Button>
            </Fade>
            <Fade triggerOnce duration={1200}>
              <div className="ptxxl">
                <img
                  src={TarloHillSign}
                  alt="The Gordonvale Tarlo Hill property sign standing in open grassland"
                  className="image-520 ml-auto"
                />
              </div>
            </Fade>
          </div>
        </div>

        <ContactBand />
      </section>
    </>
  )
}

export default Home
