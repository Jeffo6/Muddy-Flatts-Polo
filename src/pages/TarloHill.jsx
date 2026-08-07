import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import Button from '../components/Button'
import ContactBand from '../components/ContactBand'
import { LOCATIONS } from '../data/site'
import Field from '../assets/field.jpg'
import Horse from '../assets/horse.jpg'
import HorsesRainbow from '../assets/horses-rainbow.jpg'
import HorseTree from '../assets/horse-tree.jpg'
import TeachingRider from '../assets/teaching-rider.jpg'

const tarloHill = LOCATIONS[1]

// Consolidates the Figma "Tarlo Hill" property frame with the newer
// "Activities" frame — the nav only has one Tarlo Hill entry, so the property
// details and the activity breakdown live on one page.
//
// Body copy is placed verbatim from Toby's Notes (ACTIVITIES) per the project
// rule that client copy is positioned structurally without rewording.
function TarloHill() {
  return (
    <>
      <Hero image={Field} title="Tarlo Hill" variant="page" />

      <section className="container">
        <Fade triggerOnce cascade damping={0.2} duration={1000}>
          <h2 className="ptxxl pbxs">{tarloHill.name}</h2>
          <p className="address">{tarloHill.address}</p>
          <p className="pbm italic">{tarloHill.distance}</p>
          <p className="pbl mwl">
            At Tarlo Hill Equestrian Club, horse riding is about more than just time in the
            saddle&mdash;it is about experiencing the landscape, the heritage and the quiet rhythm of
            rural Australia. Set among rolling hills and open country, the farm offers a range of
            equine leisure activities designed for riders of all abilities, from complete beginners
            through to experienced horse enthusiasts.
          </p>
        </Fade>

        <div className="fullwidth split ptxl">
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={Horse} alt="A horse grazing in long grass at Tarlo Hill" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Horses for Every Rider</h2>
              <p className="pbxs mwm">
                All of our horses have been bred, raised and trained by us at Tarlo Hill. This allows
                us to carefully match every guest with a horse that suits their ability, goals and
                confidence level.
              </p>
              <p className="pbxs mwm">
                Whether you&apos;re looking for a peaceful ride through the countryside, your first
                jumping lesson or an introduction to polo, you&apos;ll be riding a horse that is
                safe, reliable and well suited to the experience.
              </p>
              <p className="mwm">
                At Tarlo Hill, the focus is not simply on riding horses&mdash;it&apos;s on creating
                memorable experiences, building confidence and sharing the unique connection between
                horse, rider and the Australian landscape.
              </p>
            </Fade>
          </div>
        </div>

        <div id="Activities" className="fullwidth split t-split-rev ptxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Trail Riding Through the Australian Countryside</h2>
              <p className="pbxs mwm">
                Our trail rides are the heart of the Tarlo Hill experience. Guided by experienced
                horsemen and mounted on calm, reliable horses, you will explore the scenic and
                peaceful landscape of rural New South Wales at a relaxed pace.
              </p>
              <p className="pbxs mwm">
                These rides are not about rushing from one point to another. They are an opportunity
                to slow down, breathe in the fresh country air and reconnect with nature. As you ride
                through open paddocks, along gentle tracks and across working farmland, you will gain
                a sense of the vastness and beauty of the Australian bush.
              </p>
              <p className="pbs mwm">
                For many guests, the trail ride is also a journey into Australia&rsquo;s pastoral
                history. Before modern machinery, stockmen spent their lives on horseback managing
                sheep and cattle across enormous properties. Australians often speak of the era when
                the nation &ldquo;rode on the sheep&rsquo;s back,&rdquo; and riding through this
                landscape gives a glimpse of what that life may have felt like.
              </p>
              {/* Rule-above/rule-below callout — Figma's "Paragraph+Border" pattern */}
              <div className="pullquote mwm pbs">
                <p>
                  If you have watched Yellowstone and admired the cowboy lifestyle, you will
                  recognise a familiar spirit here. Australia has its own version of the
                  cowboy&mdash;the stockman. Tough, skilled and deeply connected to the land,
                  stockmen are an iconic part of Australian culture, and our trail rides offer a
                  small taste of that tradition.
                </p>
              </div>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button href="#Contact" variant="green">
                Book a Trail Ride
              </Button>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={HorsesRainbow} alt="Horses grazing beneath a rainbow at Tarlo Hill" />
            </div>
          </Fade>
        </div>

        <div className="fullwidth split ptxxl">
          <Fade triggerOnce duration={1200}>
            <div>
              {/* Placeholder photography: Figma calls for a jumping shot, which
                  the asset library does not yet contain. */}
              <img src={HorseTree} alt="A horse tethered beneath a tree at Tarlo Hill" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Jumping on Our Sanded Grass Arena</h2>
              <p className="pbxs mwm">
                For riders who enjoy a more technical challenge, Tarlo Hill offers jumping sessions
                on our beautifully maintained sanded grass field. The surface provides excellent
                footing and is designed to be both comfortable for the horses and enjoyable for
                riders.
              </p>
              <p className="pbxs mwm">
                We have a dedicated jumping coach available for private or small-group instruction.
                Whether you are learning your first cross-rail or refining your position and rhythm
                over a course of fences, lessons are tailored to your experience level and goals.
              </p>
              <p className="pbm mwm">
                The emphasis is always on confidence, correct technique and having fun in a relaxed
                country setting.
              </p>
            </Fade>
            <Fade triggerOnce duration={1000}>
              <Button href="#Contact" variant="green">
                Book a Jumping Lesson
              </Button>
            </Fade>
          </div>
        </div>

        <div className="fullwidth split t-split-rev ptxxl pbxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Polo Lessons &amp; Beginner Games</h2>
              <p className="pbxs mwm">
                Tarlo Hill is also the perfect place to discover the sport of kings in a welcoming
                and approachable environment. Our polo lessons introduce the fundamentals of riding
                for polo, stick-and-ball skills and the basic rules of the game.
              </p>
              <p className="pbxs mwm">
                For those ready to take the next step, we run beginner polo games where new players
                can experience the excitement of playing with teammates under the guidance of a
                coach. These games are designed specifically for learners, with an emphasis on
                safety, understanding the game and enjoying the experience rather than competition.
              </p>
              <p className="pbm mwm">
                Because all of our horses have been bred and trained by us, we are able to provide
                mounts that are quiet, responsive and well suited to riders who are new to polo.
              </p>
            </Fade>
            <div className="row col-gap50">
              <Fade triggerOnce cascade damping={0.3} duration={1000}>
                <Button href="#Contact" variant="green">
                  Book a Polo Lesson
                </Button>
                <Button href="#Contact" variant="green">
                  Join a Beginner Game
                </Button>
              </Fade>
            </div>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={TeachingRider} alt="Riders on the field during a coached session" />
            </div>
          </Fade>
        </div>
      </section>

      {/* Full-bleed conversion band — sits outside .container so the rose-ebony
          runs edge to edge, as in Figma's "WEEKEND PANEL (conversion)" */}
      <div className="band ptxl pbxl">
        <div className="container">
          <Fade triggerOnce cascade damping={0.2} duration={1000}>
            <h2 className="pbm">A Day, or a Weekend, in the Saddle</h2>
            <p className="pbs">
              Many guests choose to combine several activities during their stay&mdash;perhaps a
              peaceful morning trail ride, an afternoon jumping lesson, and a relaxed introduction to
              polo the following day. The beauty of Tarlo Hill is that everything takes place on the
              one property, surrounded by open countryside and far removed from the pace of the city.
            </p>
            <p className="pbl">
              Whether you are seeking adventure, learning a new skill, or simply looking for a
              meaningful connection with horses and nature, Tarlo Hill Equestrian Club offers an
              authentic Australian riding experience that is difficult to find anywhere else.
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
