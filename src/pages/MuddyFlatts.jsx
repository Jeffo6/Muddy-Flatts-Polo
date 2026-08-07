import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import ActivityCard from '../components/ActivityCard'
import ContactBand from '../components/ContactBand'
import { LOCATIONS } from '../data/site'
import { activitiesFor } from '../data/activities'
import PoloPlayers from '../assets/polo-players.jpg'
import TeachingRider from '../assets/teaching-rider.jpg'

const [muddyFlatts] = LOCATIONS

// Property hub: what the place is, then a card per experience. The long-form
// Lessons and Academy copy lives on their own pages so this stays scannable.
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
              <p className="pbm italic">{muddyFlatts.distance}</p>
              <p className="mwm">
                Your country club in the city. Situated only an hour from Sydney CBD, our world-class
                field allows beginners to grow confidence in riding as well as elite players to
                demonstrate their prowess. Alongside our rustic and charming clubhouse, the
                atmosphere is inclusive, vibrant and fun.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={TeachingRider} alt="Two riders crossing the field at Muddy Flatts" />
            </div>
          </Fade>
        </div>

        <div className="ptxxl pbxxl">
          <Fade triggerOnce duration={1000}>
            <h2 className="tac pbl">Lessons &amp; Academy</h2>
          </Fade>
          <div className="card-grid">
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              {activitiesFor('muddy-flatts').map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </Fade>
          </div>
        </div>

        <ContactBand formLead="Want to know more about Muddy Flatts Richmond?" />
      </section>
    </>
  )
}

export default MuddyFlatts
