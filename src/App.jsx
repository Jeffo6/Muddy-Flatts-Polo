import { useState, useEffect } from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Fade } from 'react-awesome-reveal'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import Logo from './assets/Logo.webp'
import HorseTeaching from './assets/horse-teaching.jpg'
import TeachingRider from './assets/teaching-rider.jpg'
import HorseWithFoal from './assets/horse-with-foal.jpg'
import HorseSaddled from './assets/horse-saddled.jpg'
import HorsesRainbow from './assets/horses-rainbow.jpg'
import TarloHill from './assets/tarlo-hill-sign.jpg'
import BBQ from './assets/bbq.jpg'
import './App.scss'

function App() {
  const [showHeaderTitle, setShowHeaderTitle] = useState(false)
  useSmoothScroll(100)

  useEffect(() => {
    const handleScroll = () => {
      const landingHeight = window.innerHeight
      const scrolled = window.scrollY > landingHeight * 0.8
      setShowHeaderTitle(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <main>

        <header className={showHeaderTitle ? 'scrolled' : ''}>
          <div>
            <img src={Logo} alt="Muddy Flatts and Tarlo Hill Logo" />
          </div>
          <h2 className={showHeaderTitle ? 'visible' : ''}>Muddy Flatts Polo Club</h2>
          <a href="#Contact" className='btn red'><span>Get In Touch</span></a>
        </header>

        <section id="landing">
          <h1>Muddy Flatts Polo Club</h1>
        </section>

        <section className='container'>

          <Fade triggerOnce duration={1200}>
            <h2 className='ptxxl tac pbl'>Where Country Meets Class</h2>
          </Fade>

          <div className="fullwidth split">
            <Fade triggerOnce duration={1200}>
              <div>
                <img src={HorseTeaching} alt="Horse Teaching" />
              </div>
            </Fade>
            <div>
              <Fade triggerOnce cascade damping={0.2} duration={1000}>
                <p className='ptm pbxs mwm'>Welcome to Muddy Flatts Polo Club, where world-class polo meets genuine country hospitality across two exceptional locations.</p>
                <p className='pbxs mwm'>Whether you're seeking weekly sessions close to Sydney or a weekend escape in the breathtaking NSW countryside, we offer inclusive experiences for riders and players of all levels.</p>
                <p className='pbm mwm'>From complete beginners taking their first swing to seasoned players refining their game, our passionate coaches and vibrant community are here to guide your polo journey.</p>
              </Fade>
              <div className="row col-gap50">
                <Fade triggerOnce cascade damping={0.3} duration={1000}>
                  <a href="#MuddyFlatts" className="btn red"><span>Discover Muddy Flatts</span></a>
                  <a href="#TarloHill" className="btn green"><span>Explore Tarlo Hill</span></a>
                </Fade>
              </div>
            </div>
          </div>

          <div id='MuddyFlatts' className='fullwidth split ptxxl'>
            <div>
              <Fade triggerOnce cascade damping={0.2} duration={1000}>
                <h2 className='pbxs'>Muddy Flatts Richmond</h2>
                <h4>3 Triangle Lane, Richmond NSW 2753</h4>
                <p className='pbs italic'>Just 1 hour from Sydney CBD</p>
                <p className='mwm'>Your country club in the city. Situated only an hour from Sydney CBD, our world-class field allows beginners to grow confidence in riding as well as elite players to demonstrate their prowess. Alongside our rustic and charming clubhouse, the atmosphere is inclusive, vibrant and fun.</p>
              </Fade>
            </div>
            <div>
              <Fade triggerOnce duration={1200}>
                <div>
                  <img src={TeachingRider} alt="Teaching Rider" />
                </div>
              </Fade>
            </div>
          </div>

          <div className='fullwidth split-2-3 t-split-rev ptxxl'>
            <div className='row justify-center'>
              <Fade triggerOnce duration={1200}>
                <div>
                  <img src={HorseWithFoal} alt="Horse With Foal" className='image-520'/>
                </div>
              </Fade>
            </div>
            <div className='ptxxl'>
              <Fade triggerOnce cascade damping={0.2} duration={1000}>
                <h2 className='pbs'>Academy</h2>
                <p className='pbxs mwl'>Learn how to play amongst a welcoming and supportive community of like-minded players. This semi-competitive match allows beginners to be fostered into the sport. The session is led by two coaches on opposing teams who facilitate an open and flowing game whilst maintaining the rules of play.</p>
                <p className='mwl'>They will coach as you play, which offers an experiential learning approach. The more experienced players are able to develop their competitive skills, while the newer players are allowed to have free hits at the ball and enjoy becoming more comfortable in a game environment.</p>
              </Fade>
            </div>
          </div>

          <div className='fullwidth split ptxxl'>
            <div className='ptl'>
              <Fade triggerOnce cascade damping={0.2} duration={1000}>
                <h2 className='pbs'>Lessons</h2>
                <p className='pbxs mwm'>Ever wanted to try polo but thought that it was out of reach? Think again. Start your new journey with a patient, experienced and committed coach who will assist you in building a solid foundation for playing.</p>
                <p className='mwm'>Those who have never ridden a horse before are always welcome to join and learn. Riding is the cornerstone of playing polo. Thereby, a lot of emphasis is placed on becoming a partner with your horse. Through personalized instruction, you'll develop the skills and confidence to thrive both in the saddle and on the field.</p>
              </Fade>
            </div>
            <div>
              <Fade triggerOnce duration={1200}>
                <div>
                  <img src={HorseSaddled} alt="Horse Being Saddled" />
                </div>
              </Fade>
            </div>
          </div>

          <div id='TarloHill' className='fullwidth split t-split-rev ptxxl'>
            <div className='relative'>
              <div>
                <Fade triggerOnce duration={1200}>
                  <div>
                    <img src={HorsesRainbow} alt="Horses with a rainbow in the backdrop" />
                  </div>
                </Fade>
              </div>
              <div>
                <Fade triggerOnce duration={1000}>
                  <p className='ptxl pbxl'>Leave the city behind for a weekend where time slows down, horizons stretch wide, and the only agenda is the one you set. It's the kind of reset that stays with you long after you return home.</p>
                </Fade>
              </div>
              <div>
                <Fade triggerOnce duration={1200}>
                  <div>
                    <img src={BBQ} alt="BBQ" className='bleed'/>
                  </div>
                </Fade>
              </div>
            </div>
            <div className='ptl'>
              <div>
                <Fade triggerOnce cascade damping={0.2} duration={1000}>
                  <h2 className='pbxs'>Tarlo Hill</h2>
                  <h4>2195 Taralga Road, Tarlo NSW 2580</h4>
                  <p className='pbs italic'>2.5 hours from Sydney</p>
                  <p className='pbxs'>Escape the mundane of the city and explore the countryside of NSW at its very best. Located only two and a half hours from Sydney lies a truly breathtaking place, filled with horses, a polo field and broad acres to explore.</p>
                  <p className='pbl'>We offer riding and polo experience weekends which marry adventure with class. Come out, spend the day in the saddle exploring stunning landscapes, then unwind by the fire for great conversation with your fellow travellers.</p>
                </Fade>
              </div>
              <div>
                <Fade triggerOnce duration={1200}>
                  <div>
                    <img src={TarloHill} alt="Tarlo Hill Gordonvale sign" className='image-520 ml-auto' />
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div id='Contact' className='fullwidth split ptxxl pbxxl'>
            <div>
              <Fade triggerOnce duration={1200}>
                <h2 className='pbl'>Get In Touch</h2>
              </Fade>
              <Fade triggerOnce duration={1000}>
                <p className='pbm mwm'>Whether you're curious about lessons, looking to join our vibrant polo community, or planning a weekend escape to the countryside, we'd love to hear from you. Reach out and let's start your polo journey together.</p>
              </Fade>
              <Fade triggerOnce cascade damping={0.2} duration={1000}>
                <h3 className='pbxs'>Toby Goodman</h3>
                <p className='pbxxs contact-item'>
                  <AiOutlineMail className='contact-icon' />
                  <a href="mailto:toby@muddyflattspolo.com" className='contact-link'>
                    toby@muddyflattspolo.com
                  </a>
                </p>
                <p className='contact-item'>
                  <AiOutlinePhone className='contact-icon' />
                  <a href="tel:+61410005954" className='contact-link'>
                    0410 005 954
                  </a>
                </p>
              </Fade>
            </div>

            <div>
              <div className='pbm'>
                <Fade triggerOnce cascade damping={0.2} duration={1000}>
                  <h3 className='pbxs'>Muddy Flatts Richmond</h3>
                  <p className='pbs'>3 Triangle Lane, Richmond NSW 2753</p>
                </Fade>
                <div>
                  <Fade triggerOnce duration={1200}>
                    <div className='map-container'>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8!2d150.7!3d-33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3%20Triangle%20Lane%2C%20Richmond%20NSW%202753!5e0!3m2!1sen!2sau!4v1234567890"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Muddy Flatts Richmond Location"
                      ></iframe>
                    </div>
                  </Fade>
                </div>
              </div>

              <div>
                <Fade triggerOnce cascade damping={0.2} duration={1000}>
                  <h3 className='pbxs'>Tarlo Hill</h3>
                  <p className='pbs'>2195 Taralga Road, Tarlo NSW 2580</p>
                </Fade>
                <div>
                  <Fade triggerOnce duration={1200}>
                    <div className='map-container'>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8!2d149.5!3d-34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2195%20Taralga%20Road%2C%20Tarlo%20NSW%202580!5e0!3m2!1sen!2sau!4v1234567890"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Tarlo Hill Location"
                      ></iframe>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>

        </section>

        <footer>
          <div className='container'>
            <div className='footer-content'>
              <div className='footer-section'>
                <img src={Logo} alt="Muddy Flatts Polo Club Logo" className='footer-logo' />
                <p className='footer-tagline'>Where Country Meets Class</p>
              </div>

              <div className='footer-section'>
                <h4 className='footer-heading'>Locations</h4>
                <div className='footer-location'>
                  <p className='footer-location-name'>Muddy Flatts Richmond</p>
                  <p>3 Triangle Lane, Richmond NSW 2753</p>
                </div>
                <div className='footer-location'>
                  <p className='footer-location-name'>Tarlo Hill</p>
                  <p>2195 Taralga Road, Tarlo NSW 2580</p>
                </div>
              </div>

              <div className='footer-section'>
                <h4 className='footer-heading'>Contact</h4>
                <p className='footer-contact-name'>Toby Goodman</p>
                <p className='footer-contact-item'>
                  <a href="mailto:toby@muddyflattspolo.com">toby@muddyflattspolo.com</a>
                </p>
                <p className='footer-contact-item'>
                  <a href="tel:+61410005954">0410 005 954</a>
                </p>
              </div>

              <div className='footer-section'>
                <h4 className='footer-heading'>Quick Links</h4>
                <nav className='footer-nav'>
                  <a href="#MuddyFlatts">Muddy Flatts Richmond</a>
                  <a href="#TarloHill">Tarlo Hill</a>
                  <a href="#Contact">Get In Touch</a>
                </nav>
              </div>
            </div>

            <div className='footer-bottom'>
              <p>{new Date().getFullYear()} Muddy Flatts Polo Club</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}

export default App
