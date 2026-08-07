import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ActivityCard from '../components/ActivityCard'
import ContactBand from '../components/ContactBand'
import { LOCATIONS } from '../data/site'
import { activitiesFor } from '../data/activities'
import Field from '../assets/field.jpg'
import Horse from '../assets/horse.jpg'
import TarloHillSign from '../assets/tarlo-hill-sign.jpg'

const tarloHill = LOCATIONS[1]

// Property hub. Keeps the property-wide story — what Tarlo Hill is, and the
// horses behind every activity — then hands off to a card per experience.
// Body copy is placed verbatim from Toby's Notes (ACTIVITIES).
function TarloHill() {
  return (
    <>
      <Hero image={Field} title="Tarlo Hill" variant="page" />

      <section className="container">
        {/* Property intro, paired with the Gordonvale sign so the opening block
            isn't text-only and its image sits opposite the one below it */}
        <div className="fullwidth split ptxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbxs">{tarloHill.name}</h2>
              <p className="address">{tarloHill.address}</p>
              <p className="pbm italic">{tarloHill.distance}</p>
              <p className="mwm">
                At Tarlo Hill Equestrian Club, riding is about more than time in the saddle. It&apos;s
                about the landscape, the heritage and the quiet rhythm of rural Australia. Set among
                rolling hills and open country, the farm offers a range of equine leisure activities
                for riders of every ability, from complete beginners through to seasoned
                enthusiasts.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img
                src={TarloHillSign}
                alt="The Gordonvale Tarlo Hill property sign standing in open grassland"
                className="image-cap"
              />
            </div>
          </Fade>
        </div>

        {/* Image leads here so the section alternates against the intro above it */}
        <div className="fullwidth split ptxxl">
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={Horse} alt="A horse grazing in long grass at Tarlo Hill" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Horses for Every Rider</h2>
              <p className="pbxs mwm">
                All of our horses have been bred, raised and trained by us at Tarlo Hill. That means
                we can match every guest with a horse suited to their ability, their goals and their
                confidence.
              </p>
              <p className="pbxs mwm">
                Whether you&apos;re after a peaceful ride through the countryside, your first jumping
                lesson or an introduction to polo, you&apos;ll be on a horse that is safe, reliable
                and well suited to the experience.
              </p>
              <p className="mwm">
                At Tarlo Hill the focus isn&apos;t simply on riding horses. It&apos;s on creating
                memorable experiences, building confidence, and sharing the connection between horse,
                rider and the Australian landscape.
              </p>
            </Fade>
          </div>
        </div>

        <div id="Activities" className="ptxxl pbxxl">
          <Fade triggerOnce duration={1000}>
            <h2 className="tac pbl">Activities</h2>
          </Fade>
          <div className="card-grid">
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              {activitiesFor('tarlo-hill').map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </Fade>
          </div>
        </div>
      </section>

      {/* Full-bleed conversion band — sits outside .container so the rose-ebony
          runs edge to edge, as in Figma's "WEEKEND PANEL (conversion)" */}
      <div className="band ptxl pbxl">
        <div className="container">
          <Fade triggerOnce cascade damping={0.2} duration={1000}>
            <h2 className="pbm">A Day, or a Weekend, in the Saddle</h2>
            <p className="pbs">
              Many guests combine several activities during their stay: a peaceful morning trail
              ride, an afternoon jumping lesson, then a relaxed introduction to polo the following
              day. Everything takes place on the one property, surrounded by open countryside and far
              removed from the pace of the city.
            </p>
            <p className="pbl">
              Whether you&apos;re seeking adventure, learning a new skill, or simply looking for a
              real connection with horses and nature, Tarlo Hill offers an authentic Australian
              riding experience that is hard to find anywhere else.
            </p>
          </Fade>
          <Fade triggerOnce duration={1000}>
            <Button href="#Contact" variant="outline">
              Book a Weekend Package
            </Button>
          </Fade>
        </div>
      </div>

      <section className="container">
        <ContactBand formLead="Want to know more about Tarlo Hill EC?" />
      </section>
    </>
  )
}

export default TarloHill
