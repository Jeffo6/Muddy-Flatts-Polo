import { Fade } from 'react-awesome-reveal'
import Hero from '../components/Hero'
import ContactBand from '../components/ContactBand'
import HorseTree from '../assets/horse-tree.jpg'
import HorsesRainbow from '../assets/horses-rainbow.jpg'
import HorseWithFoal from '../assets/horse-with-foal.jpg'
import BBQ from '../assets/bbq.jpg'

// Copy placed verbatim from Toby's Notes (Heritage). Figma calls for archival
// photography throughout — Markdale station, the Ashton brothers, the
// Hurlingham touring era — none of which exists in the asset library yet, so
// present-day photographs stand in and are described honestly in their alt text.
function OurHeritage() {
  return (
    <>
      <Hero image={HorseTree} title="Our Heritage" variant="page" />

      <section className="container">
        <div className="fullwidth split ptxxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">Four Generations of Australian Polo</h2>
              <p className="pbxs mwm">
                The story of Tarlo Hill Equestrian Club and Muddy Flatts began long before either
                property existed.
              </p>
              <p className="pbxs mwm">It began with a family.</p>
              <p className="pbxs mwm">
                For four generations, the Ashton family has lived alongside horses. They have bred
                them, trained them, worked with them and competed on them. Polo has never simply been
                a sport. It has been a way of life, passed from one generation to the next through
                long days in the saddle and a deep respect for horses.
              </p>
              <p className="mwm">
                Today, our family continues that tradition by sharing the game with a new generation
                of riders and players.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={HorseWithFoal} alt="A mare and her foal in the paddock at Tarlo Hill" />
            </div>
          </Fade>
        </div>

        <div className="ptxxl">
          <Fade triggerOnce cascade damping={0.2} duration={1000}>
            <h2 className="pbs">The Ashton Brothers</h2>
            <p className="pbxs mwl">
              Few families have left a greater mark on Australian polo than the Ashton brothers:
              James, Philip, Robert and Geoffrey.
            </p>
            <p className="pbxs mwl">
              Raised on the family&apos;s sheep station, Markdale, near Binda in New South Wales, the
              brothers learned the values of hard work, resilience and horsemanship from an early
              age. Their introduction to polo came through a retired British artillery officer in
              nearby Goulburn, and the sport quickly became an obsession.
            </p>
            <p className="pbxs mwl">
              Every Friday they would ride nearly 90 kilometres from the family property to Goulburn
              to play polo, spending the weekend competing before riding home again on Monday. It was
              a remarkable commitment that reflected the determination and love of horses that would
              become the hallmark of the Ashton family.
            </p>
            <p className="pbxs mwl">
              By the late 1920s, the brothers had become Australia&apos;s dominant polo team, winning
              the Countess of Dudley Cup five times between 1928 and 1939.
            </p>
          </Fade>
          <Fade triggerOnce duration={1200}>
            <div className="ptm pbm">
              <img src={HorsesRainbow} alt="Horses grazing beneath a rainbow at Tarlo Hill" />
            </div>
          </Fade>
        </div>

        <div className="fullwidth split t-split-rev ptxl">
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">England &amp; America</h2>
              <p className="pbxs mwm">
                In 1930, they took an extraordinary leap, travelling to England with twenty-five
                horses they had bred and produced themselves. Many believed a team from rural
                Australia would struggle against the established English clubs. Instead, the Ashton
                brothers stunned the polo world.
              </p>
              <p className="pbxs mwm">
                Playing an exciting, fast-paced style, they defeated some of the finest teams in
                Britain and reached the final of the prestigious Champion Cup at Hurlingham. Their
                performances won admiration across Europe, and King Alfonso XIII of Spain
                commissioned a trophy in recognition of their achievements.
              </p>
              <p className="mwm">
                The brothers later toured the United States, where newspapers described them as
                &ldquo;the greatest polo family in the world.&rdquo; Their success helped establish
                Australia as a respected polo nation and demonstrated that world-class horses and
                horsemen could come from the Australian bush.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={HorseTree} alt="A horse tethered beneath a tree at Tarlo Hill" />
            </div>
          </Fade>
        </div>

        {/* pbxxl matters here: without it this section runs straight into the
            rose-ebony band below and the colour change reads as a hard cut */}
        <div className="fullwidth split ptxxl pbxxl">
          <Fade triggerOnce duration={1200}>
            <div>
              <img src={BBQ} alt="Guests sharing a barbecue on the deck after a day of riding" />
            </div>
          </Fade>
          <div>
            <Fade triggerOnce cascade damping={0.2} duration={1000}>
              <h2 className="pbs">The Spirit We Carry Forward</h2>
              <p className="pbxs mwm">For us, this story is about far more than trophies.</p>
              <p className="pbxs mwm">It is a reminder of where polo comes from.</p>
              <p className="pbxs mwm">
                The Ashton brothers did not build their reputation through glamour or privilege. They
                built it through family, hard work, exceptional horsemanship and an unwavering belief
                in their horses. They bred their own polo ponies, trained them themselves and
                travelled across the world to compete with courage and humility.
              </p>
              <p className="pbxs mwm">Those values remain at the heart of everything we do.</p>
              <p className="mwm">
                Every horse at Tarlo Hill has been bred, raised and trained by our family. Every
                lesson is built around good horsemanship before competition. Every guest who visits
                our properties becomes part of a community that values generosity, friendship and a
                genuine love of horses.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {/* Closing manifesto on the rose-ebony band — the emotional peak of the
          page, matching Figma's "POLO BELONGS TO EVERYONE" full-bleed section */}
      <div className="band ptxl pbxl">
        <div className="container">
          <Fade triggerOnce cascade damping={0.2} duration={1000}>
            <h2 className="pbm">Polo Belongs to Everyone</h2>
            <p className="pbxs">Over time, polo has earned a reputation as an exclusive sport.</p>
            <p className="pbxs">We believe its true character is something quite different.</p>
            <p className="pbxs">
              In Australia, polo has always been woven into country life. It grew from working
              horses, farming families and weekends spent together on horseback. It is a sport built
              on trust between horse and rider, shared meals after the game, helping one another in
              the stables, and lifelong friendships formed through a common passion.
            </p>
            <p className="pbxs">That is the culture we are proud to continue.</p>
            <p className="pbxs">
              Whether you arrive for your very first riding lesson, your first beginner polo game or
              a weekend immersed in the Australian countryside, you are experiencing a tradition that
              has been shaped by generations of horsemen and horsewomen.
            </p>
            <p className="pbxs">
              Our ambition is simple: to ensure that the next generation discovers the same joy that
              inspired the generations before us.
            </p>
            <p className="pbxs">
              Because while the game continues to evolve, its heart has never changed.
            </p>
            <p>It is, and always will be, about horses, family and community.</p>
          </Fade>
        </div>
      </div>

      <section className="container">
        <ContactBand formLead="Want to know more about our story?" />
      </section>
    </>
  )
}

export default OurHeritage
